# GramaGuide — Offline-First Digital Literacy Companion
## கிராம கைடு | ग्रामगाइड

**GramaGuide** is a production-ready, offline-first digital literacy companion built exclusively using native browser technologies: **HTML5, CSS3, Vanilla JavaScript, Service Worker, IndexedDB, and Web Speech API**.

Designed specifically for first-time smartphone users, rural communities, elderly individuals, farmers, homemakers, and small shop owners with limited English reading skills.

---

## 🌟 Core Philosophy: "SEE → HEAR → TRY → COMPLETE"

Rather than presenting dense text or passive videos, every digital skill follows an active tactile loop:
1. **SEE**: Large visual illustrations, icons, and numbered step cards.
2. **HEAR**: Integrated Web Speech synthesis reads instructions aloud in your local language (**English, தமிழ், हिन्दी**).
3. **TRY**: Interactive safe sandbox simulators (Phone dialer, Safe UPI checkout to Ravi Store, Camera focus, SMS composer).
4. **COMPLETE**: Instant celebration, badge unlocks, and Digital Confidence score gains.

---

## 🚀 Key Features

* **51 Practical Lessons** across 10 essential categories:
  * 📱 Smartphone Basics (5 lessons)
  * 🌐 Internet Basics (5 lessons)
  * 💳 Digital Payments & UPI (5 lessons)
  * 🛡️ Online Safety & Scams (8 lessons)
  * 🏛️ Government Services (DigiLocker, Ration, PM-Kisan, Ayushman) (5 lessons)
  * 🌾 Smart Farmer Tools (Weather, Mandi Rates, Crop Disease) (5 lessons)
  * 🏪 Smart Shop & Small Business (Khata, Soundbox, Reminders) (5 lessons)
  * 💬 Communication (WhatsApp Voice Notes, Video Calls, Stopping Rumors) (5 lessons)
  * 🗺️ Maps & Navigation (Spoken turn-by-turn directions) (3 lessons)
  * 🤖 AI Made Simple (Voice Assistants, Google Lens, Deepfake defense) (5 lessons)
* **🕵️ "Is This Safe?" Offline Scam Detector**:
  * Rule-based engine analyzing SMS and WhatsApp text for 10+ risk factors (urgency, lottery, OTP/PIN requests, APK downloads, fake bank threats) with 10 realistic preset templates.
* **📱 "Phone Doctor"**:
  * Interactive step-by-step troubleshooter decision trees for 7 common dilemmas (Battery drain, No Internet, No Sound, Phone slow, Storage full, Call failure, Forgotten lock PIN).
* **👨‍👩‍👧 "Teach My Family" Mode**:
  * Step-by-step teaching checklists for Grandparents, Parents, Children, Farmers, and Shopkeepers.
* **💪 Digital Confidence Score (0–100)**:
  * Real-time progress meter, 4 competency tiers (*Beginner → Explorer → Confident User → Digital Champion*), and 7 unlockable medals.
* **💡 50+ Daily Digital Safety Tips**:
  * Rotated daily or on-demand with one-click voice narration.
* **📝 30 Visual Interactive Quizzes**:
  * Instant feedback, color-coded explanations, and score tracking.
* **👀 "Show Me" Mode**:
  * Minimal-text pictogram mode for users who cannot read English or regional script.
* **⚙️ Accessibility Controls**:
  * Large Text Mode (+125%), High Contrast Mode (WCAG AAA yellow/black), Reduced Motion, and Automatic Voice Guidance.

---

## 🛠️ Project Structure

```
c:\Users\maria\Downloads\Digital_Litracy_Application/
├── index.html                 # Main single-page application shell
├── manifest.json              # PWA manifest for standalone mobile installation
├── service-worker.js          # Cache-first service worker for 100% offline access
│
├── css/
│   ├── style.css              # Rural terracotta palette, tactile cards, design system
│   ├── responsive.css         # Mobile bottom navigation (< 768px) & multi-device adaptation
│   └── accessibility.css     # Large text, High contrast, and Reduced motion modes
│
├── data/
│   ├── lessons.js             # 51 practical lessons with step visual flows & simulation configs
│   ├── quizzes.js             # 30 visual multiple-choice questions with bilingual feedback
│   └── tips.js                # 50 actionable daily cyber safety and digital literacy tips
│
├── js/
│   ├── app.js                 # App initializer, onboarding flow, PWA install handler
│   ├── router.js              # Hash router (#home, #learn, #lesson/:id, #practice, etc.)
│   ├── translations.js        # Centralized i18n dictionary (en, ta, hi)
│   ├── progress.js            # IndexedDB manager, Digital Confidence calculator, badges
│   ├── offline.js             # Network status listeners & real-time connectivity banner
│   ├── syncManager.js         # Offline sync queue with IndexedDB persistence
│   ├── voice.js               # Web Speech synthesis & voice query command assistant
│   ├── scamDetector.js        # Offline rule-based scam detection engine
│   └── phoneDoctor.js         # Visual decision tree troubleshooter
│
├── assets/
│   └── icons/
│       ├── icon-192.svg       # Standalone PWA app icon (192px)
│       └── icon-512.svg       # High-res PWA app icon (512px)
│
└── README.md                  # Comprehensive documentation & developer guide
```

---

## 💻 How to Run Locally

Because GramaGuide uses native browser standards and standard ES modules/Service Workers, serve the folder with any static local HTTP server.

### Option 1: Using Python (Built-in)
```bash
# In the project directory:
python -m http.server 8080
```
Open your browser at: `http://localhost:8080`

### Option 2: Using Node `npx serve` or `http-server`
```bash
npx serve .
```

### Option 3: VS Code / IDE "Live Server"
Right click on `index.html` and select **"Open with Live Server"**.

---

## 📶 How Offline Mode & Service Worker Work

1. **Pre-caching**: When you first load the application, `service-worker.js` immediately caches all HTML, CSS, JavaScript files, datasets, and SVG icons inside the browser's `Cache API` (`gramaguide-v1`).
2. **Cache-First Strategy**: All future requests for application files are served directly from the local device cache. Even if you turn off your Wi-Fi and Mobile Data, the entire learning platform boots up in under 0.5 seconds.
3. **Connectivity Detection**: `js/offline.js` monitors `window.addEventListener('online')` and `('offline')`, dynamically toggling the status badge between `🟢 Online` and `🟠 Offline Mode`.
4. **Offline Synchronization**: While offline, any lessons completed or quizzes answered are safely stored inside the IndexedDB `syncQueue`. When connection is restored, `js/syncManager.js` safely processes the queue.

---

## 🗄️ IndexedDB Schema (`GramaGuideDB`)

* **Database Name**: `GramaGuideDB` (Version 1)
* **Object Stores**:
  * `lessons`: Cached lesson definitions and state.
  * `progress`: Stores `{ lessonId, completed: true, score: 100, completedAt: ISOString }`.
  * `quizResults`: Stores `{ quizId, correct: boolean, timestamp: ISOString }`.
  * `syncQueue`: Auto-incrementing queue `{ id, actionType, payload, status, createdAt }`.
  * `settings`: Stores accessibility and language preferences.

---

## ➕ How to Add New Content

### 1. Adding a New Lesson (`data/lessons.js`)
Append an object to `window.LESSONS_DATA`:
```javascript
{
  id: "l_new_1",
  category: "smartphone", // smartphone, internet, payments, safety, government, farmer, business, communication, maps, ai
  icon: "📱",
  title: {
    en: "New Lesson Title",
    ta: "புதிய பாடம் தலைப்பு",
    hi: "नया पाठ शीर्षक"
  },
  description: {
    en: "Short one-line description",
    ta: "ஒரு வரி விளக்கம்",
    hi: "एक पंक्ति में विवरण"
  },
  difficulty: "easy", // 'easy' | 'medium'
  badgeReward: "Badge Name",
  voiceText: {
    en: "Spoken narration for speech synthesis in English.",
    ta: "தமிழில் வாசிக்கப்பட வேண்டிய குரல் உரை.",
    hi: "हिंदी में सुनाए जाने वाले निर्देश।"
  },
  steps: [
    {
      num: 1,
      title: { en: "Step 1", ta: "படி 1", hi: "कदम 1" },
      desc: { en: "Step description", ta: "விளக்கம்", hi: "विवरण" },
      visual: "phone_icon"
    }
  ],
  simulation: {
    type: "dialer" // 'dialer' | 'upi_pay' | 'camera' | 'sms' | 'generic'
  },
  safetyTip: {
    en: "Important golden safety rule.",
    ta: "முக்கிய பாதுகாப்பு விதி.",
    hi: "जरूरी सुरक्षा नियम।"
  }
}
```

### 2. Adding a New Language (e.g. Telugu `te` or Bengali `bn`)
1. Open `js/translations.js` and add a new dictionary under `window.TRANSLATIONS`:
   ```javascript
   window.TRANSLATIONS.te = {
     appName: "గ్రామగైడ్",
     tagline: "డిజిటల్ సహాయకుడు",
     // ... UI keys
   };
   ```
2. Add language code to `voice.js` for speech synthesis voice matching:
   ```javascript
   if (lang === "te") bcp47Lang = "te-IN";
   ```
3. Add the language button to `index.html` header and `js/router.js` settings screen.

### 3. Adding New Quiz Questions (`data/quizzes.js`)
Append to `window.QUIZZES_DATA`:
```javascript
{
  id: "q31",
  category: "safety",
  icon: "🛡️",
  question: { en: "...", ta: "...", hi: "..." },
  options: [
    { id: "a", text: { en: "...", ta: "...", hi: "..." } },
    { id: "b", text: { en: "...", ta: "...", hi: "..." } }
  ],
  answer: "b",
  explanation: { en: "...", ta: "...", hi: "..." }
}
```

---

## 🔌 Connecting to a Future Backend

The application is structured to easily integrate with a cloud backend (e.g. Node/Express, Django, or Firebase):
1. In `js/syncManager.js`, update `processQueue()`:
   ```javascript
   async function sendToServer(item) {
     return fetch("https://api.gramaguide.org/sync", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(item)
     });
   }
   ```
2. The local database and IndexedDB cache will continue acting as the single source of truth for the offline experience, syncing transparently in the background when connectivity permits.

---

## 🛡️ Cyber Safety Guarantee
* GramaGuide **NEVER** asks for, collects, or stores:
  * Bank account numbers
  * ATM PINs or UPI PINs
  * OTPs (One-Time Passwords)
  * Aadhaar or identity numbers
  * Passwords
* All payment screens, dialers, and checks are 100% fictional simulations for educational awareness.
