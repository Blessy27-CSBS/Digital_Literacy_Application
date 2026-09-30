// GramaGuide — IndexedDB Progress Manager & Digital Confidence Calculator
// Manages local persistence for offline-first learning, badges, and demo mode

const DB_NAME = "GramaGuideDB";
const DB_VERSION = 1;

let dbInstance = null;

// Initialize IndexedDB
function initDB() {
  return new Promise((resolve, reject) => {
    if (dbInstance) return resolve(dbInstance);

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("lessons")) {
        db.createObjectStore("lessons", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("progress")) {
        db.createObjectStore("progress", { keyPath: "lessonId" });
      }
      if (!db.objectStoreNames.contains("quizResults")) {
        db.createObjectStore("quizResults", { keyPath: "quizId" });
      }
      if (!db.objectStoreNames.contains("syncQueue")) {
        db.createObjectStore("syncQueue", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("settings")) {
        db.createObjectStore("settings", { keyPath: "key" });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;
      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.error("IndexedDB error:", event.target.error);
      resolve(null); // Fallback gracefully if IndexedDB is blocked in private browsing
    };
  });
}

// Mark lesson as completed
async function markLessonCompleted(lessonId, score = 100) {
  const db = await initDB();
  const record = {
    lessonId,
    completed: true,
    score,
    completedAt: new Date().toISOString()
  };

  // LocalStorage fallback for high speed
  const progressList = getLocalProgressList();
  if (!progressList.includes(lessonId)) {
    progressList.push(lessonId);
    localStorage.setItem("grama_completed_lessons", JSON.stringify(progressList));
  }

  // Save in IndexedDB
  if (db) {
    try {
      const tx = db.transaction(["progress"], "readwrite");
      const store = tx.objectStore("progress");
      store.put(record);
    } catch (e) {
      console.warn("Could not write to IndexedDB progress store", e);
    }
  }

  // Queue for future sync
  if (window.GramaSync) {
    window.GramaSync.queueAction("LESSON_COMPLETED", { lessonId, score });
  }

  // Recalculate Confidence & Check Badges
  calculateDigitalConfidence();
  checkBadgeUnlocks();
}

// Check if lesson is completed
function isLessonCompleted(lessonId) {
  const list = getLocalProgressList();
  return list.includes(lessonId);
}

// Get completed list
function getLocalProgressList() {
  try {
    const raw = localStorage.getItem("grama_completed_lessons");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// Save Quiz Score
async function saveQuizResult(quizId, isCorrect) {
  const db = await initDB();
  const raw = localStorage.getItem("grama_quiz_scores") || "{}";
  const scores = JSON.parse(raw);
  scores[quizId] = isCorrect ? 1 : 0;
  localStorage.setItem("grama_quiz_scores", JSON.stringify(scores));

  if (db) {
    try {
      const tx = db.transaction(["quizResults"], "readwrite");
      tx.objectStore("quizResults").put({
        quizId,
        correct: isCorrect,
        timestamp: new Date().toISOString()
      });
    } catch (e) {
      console.warn("Quiz DB write error", e);
    }
  }

  calculateDigitalConfidence();
  checkBadgeUnlocks();
}

// Calculate Digital Confidence Score (0 to 100)
function calculateDigitalConfidence() {
  const completed = getLocalProgressList();
  const lessons = window.LESSONS_DATA || [];
  
  // Weightings per completed category:
  // Smartphone (up to 15), Internet (up to 15), Payments (up to 20), Safety (up to 20), 
  // Govt/Farmer/Biz/Comm/Maps/AI (up to 20), Quizzes (up to 10)
  let score = 0;

  // Count lessons completed per category
  const catCount = {};
  completed.forEach(id => {
    const l = lessons.find(x => x.id === id);
    if (l) {
      catCount[l.category] = (catCount[l.category] || 0) + 1;
    }
  });

  if (catCount["smartphone"]) score += Math.min(15, catCount["smartphone"] * 3);
  if (catCount["internet"]) score += Math.min(15, catCount["internet"] * 3);
  if (catCount["payments"]) score += Math.min(20, catCount["payments"] * 4);
  if (catCount["safety"]) score += Math.min(20, catCount["safety"] * 3);
  if (catCount["government"]) score += Math.min(8, catCount["government"] * 2);
  if (catCount["farmer"]) score += Math.min(8, catCount["farmer"] * 2);
  if (catCount["business"]) score += Math.min(8, catCount["business"] * 2);
  if (catCount["communication"]) score += Math.min(6, catCount["communication"] * 2);
  if (catCount["maps"]) score += Math.min(5, catCount["maps"] * 2);
  if (catCount["ai"]) score += Math.min(5, catCount["ai"] * 1);

  // Quiz points
  const rawQuiz = localStorage.getItem("grama_quiz_scores") || "{}";
  const quizzes = JSON.parse(rawQuiz);
  const correctQuizCount = Object.values(quizzes).filter(x => x === 1).length;
  score += Math.min(10, correctQuizCount * 1);

  // Cap at 100
  const finalScore = Math.min(100, Math.round(score));
  localStorage.setItem("grama_confidence_score", finalScore.toString());

  // Determine Level
  let levelKey = "levelBeginner";
  if (finalScore >= 80) levelKey = "levelChampion";
  else if (finalScore >= 50) levelKey = "levelConfident";
  else if (finalScore >= 20) levelKey = "levelExplorer";

  localStorage.setItem("grama_user_level", levelKey);

  // Update DOM if on screen
  updateConfidenceUI(finalScore, levelKey, completed.length, correctQuizCount);
  return { score: finalScore, levelKey };
}

function updateConfidenceUI(score, levelKey, completedCount, quizCount) {
  const bar = document.getElementById("confidence-progress-bar");
  const num = document.getElementById("confidence-number");
  const badge = document.getElementById("confidence-level-badge");
  const compEl = document.getElementById("stats-completed-count");
  const quizEl = document.getElementById("stats-quiz-count");

  if (bar) bar.style.width = `${score}%`;
  if (num) num.textContent = `${score} / 100`;
  if (badge) badge.textContent = window.t(levelKey);
  if (compEl) compEl.textContent = completedCount.toString();
  if (quizEl) quizEl.textContent = quizCount.toString();
}

// Badges system
const BADGES = [
  {
    id: "badge_first",
    name: { en: "First Lesson", ta: "முதல் பாடம்", hi: "पहला पाठ" },
    icon: "🏅",
    desc: { en: "Completed your very first lesson", ta: "உங்கள் முதல் பாடத்தை முடித்தீர்கள்", hi: "अपना पहला पाठ पूरा किया" }
  },
  {
    id: "badge_phone",
    name: { en: "Phone Starter", ta: "போன் தொடக்கநிலை", hi: "फोन आरंभकर्ता" },
    icon: "📱",
    desc: { en: "Mastered making calls & messages", ta: "அழைப்பு மற்றும் செய்தி அனுப்ப கற்றீர்கள்", hi: "कॉल और मैसेज करना सीख लिया" }
  },
  {
    id: "badge_pay",
    name: { en: "Payment Learner", ta: "கட்டண பயிலுநர்", hi: "पेमेंट सीखने वाला" },
    icon: "💳",
    desc: { en: "Practiced UPI payments safely", ta: "பாதுகாப்பாக UPI பணம் செலுத்த கற்றீர்கள்", hi: "सुरक्षित यूपीआई पेमेंट सीखा" }
  },
  {
    id: "badge_safety",
    name: { en: "Safety Champion", ta: "பாதுகாப்பு சாம்பியன்", hi: "सुरक्षा रक्षक" },
    icon: "🛡️",
    desc: { en: "Learned never to share OTP & spot scams", ta: "OTP பகிராமல் இருக்க மற்றும் மோசடிகளைத் தடுக்க கற்றீர்கள்", hi: "ओटीपी न बताना और फ्रॉड पहचानना सीखा" }
  },
  {
    id: "badge_kisan",
    name: { en: "Smart Kisan", ta: "ஸ்மார்ட் உழவர்", hi: "स्मार्ट किसान" },
    icon: "🌾",
    desc: { en: "Explored farming digital tools", ta: "விவசாய டிஜிட்டல் கருவிகளை கற்றீர்கள்", hi: "कृषि के डिजिटल साधन सीखे" }
  },
  {
    id: "badge_vyapar",
    name: { en: "Smart Vyapar", ta: "ஸ்மார்ட் வணிகர்", hi: "स्मार्ट व्यापारी" },
    icon: "🏪",
    desc: { en: "Learned digital khata & shop QR", ta: "டிஜிட்டல் கணக்கு மற்றும் கடை QR அமைத்தீர்கள்", hi: "दुकान का डिजिटल खाता और क्यूआर सीखा" }
  },
  {
    id: "badge_champ",
    name: { en: "Digital Champion", ta: "டிஜிட்டல் சாம்பியன்", hi: "डिजिटल चैंपियन" },
    icon: "🏆",
    desc: { en: "Attained 80+ Digital Confidence", ta: "80+ டிஜிட்டல் நம்பிக்கையைப் பெற்றீர்கள்", hi: "80+ डिजिटल आत्मविश्वास हासिल किया" }
  }
];

function checkBadgeUnlocks() {
  const completed = getLocalProgressList();
  const rawScore = parseInt(localStorage.getItem("grama_confidence_score") || "0", 10);
  const unlocked = getUnlockedBadges();

  if (completed.length >= 1 && !unlocked.includes("badge_first")) unlocked.push("badge_first");
  if (completed.includes("l_phone_1") && !unlocked.includes("badge_phone")) unlocked.push("badge_phone");
  if (completed.includes("l_pay_3") && !unlocked.includes("badge_pay")) unlocked.push("badge_pay");
  if (completed.includes("l_safe_1") && !unlocked.includes("badge_safety")) unlocked.push("badge_safety");
  if (completed.includes("l_farm_1") && !unlocked.includes("badge_kisan")) unlocked.push("badge_kisan");
  if (completed.includes("l_biz_1") && !unlocked.includes("badge_vyapar")) unlocked.push("badge_vyapar");
  if (rawScore >= 80 && !unlocked.includes("badge_champ")) unlocked.push("badge_champ");

  localStorage.setItem("grama_badges", JSON.stringify(unlocked));
  const countEl = document.getElementById("stats-badge-count");
  if (countEl) countEl.textContent = unlocked.length.toString();
}

function getUnlockedBadges() {
  try {
    return JSON.parse(localStorage.getItem("grama_badges") || "[]");
  } catch (e) {
    return [];
  }
}

// "Try Demo" Mode: Prepopulates sample realistic progress for judges/users to explore immediately
function activateDemoMode() {
  const sampleLessons = ["l_phone_1", "l_phone_2", "l_pay_1", "l_pay_3", "l_safe_1", "l_safe_2", "l_farm_1", "l_biz_1"];
  localStorage.setItem("grama_completed_lessons", JSON.stringify(sampleLessons));
  
  const sampleQuizzes = { q1: 1, q2: 1, q3: 1, q4: 1, q5: 1 };
  localStorage.setItem("grama_quiz_scores", JSON.stringify(sampleQuizzes));

  calculateDigitalConfidence();
  checkBadgeUnlocks();

  alert("Demo Mode Activated! 🎉 Sample progress, scores, and badges are now loaded.");
  if (window.renderCurrentRoute) window.renderCurrentRoute();
}

// Reset Progress
function resetAllProgress() {
  if (confirm("Are you sure you want to reset all your progress and badges?")) {
    localStorage.removeItem("grama_completed_lessons");
    localStorage.removeItem("grama_quiz_scores");
    localStorage.removeItem("grama_confidence_score");
    localStorage.removeItem("grama_badges");
    localStorage.removeItem("grama_user_level");

    calculateDigitalConfidence();
    checkBadgeUnlocks();
    if (window.renderCurrentRoute) window.renderCurrentRoute();
  }
}

window.GramaProgress = {
  initDB,
  markLessonCompleted,
  isLessonCompleted,
  getLocalProgressList,
  saveQuizResult,
  calculateDigitalConfidence,
  checkBadgeUnlocks,
  getUnlockedBadges,
  BADGES,
  activateDemoMode,
  resetAllProgress
};
