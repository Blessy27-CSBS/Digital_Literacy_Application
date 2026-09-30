// GramaGuide — Interactive Visual Quiz Engine
// Instant feedback, score tracking, and Digital Confidence integration

window.GramaQuiz = (function() {
  let currentIndex = 0;
  let score = 0;
  let selectedOptionId = null;
  let isAnswerSubmitted = false;

  function renderQuiz(container) {
    const questions = window.QUIZZES_DATA || [];
    if (questions.length === 0) {
      container.innerHTML = `<p>No quiz questions available.</p>`;
      return;
    }

    if (currentIndex >= questions.length) {
      renderQuizSummary(container, questions.length);
      return;
    }

    const q = questions[currentIndex];
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const questionText = q.question[lang] || q.question.en;

    isAnswerSubmitted = false;
    selectedOptionId = null;

    container.innerHTML = `
      <div class="quiz-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <span style="font-weight:800; color:var(--color-primary); font-size:1.1rem;">
            ${window.t("questionNumber")} ${currentIndex + 1} ${window.t("ofText")} ${questions.length}
          </span>
          <span style="font-weight:800; background:var(--color-primary-light); color:var(--color-primary-dark); padding:4px 12px; border-radius:var(--radius-full);">
            ⭐ ${window.t("quizScore")}: ${score}
          </span>
        </div>

        <div style="display:flex; align-items:flex-start; gap:16px; margin-bottom:20px;">
          <div style="font-size:3rem; line-height:1;">${q.icon}</div>
          <h2 style="font-size:1.35rem; font-weight:800; line-height:1.4;">${questionText}</h2>
        </div>

        <div class="quiz-options-list" id="quiz-options-container">
          ${q.options.map(opt => `
            <button class="quiz-option-btn" id="opt-${opt.id}" onclick="GramaQuiz.selectOption('${opt.id}')">
              ${opt.text[lang] || opt.text.en}
            </button>
          `).join("")}
        </div>

        <div class="quiz-feedback-box" id="quiz-feedback-box">
          <div id="quiz-feedback-title" style="font-weight:900; font-size:1.2rem; margin-bottom:6px;"></div>
          <p id="quiz-feedback-explanation" style="font-size:1.05rem; font-weight:600; line-height:1.4;"></p>
        </div>

        <div style="display:flex; justify-content:flex-end; margin-top:20px;">
          <button class="btn-primary" id="quiz-action-btn" onclick="GramaQuiz.submitAnswer()">
            ${window.t("submitAnswer")} ➔
          </button>
        </div>
      </div>
    `;
  }

  function selectOption(optId) {
    if (isAnswerSubmitted) return;
    selectedOptionId = optId;

    document.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.classList.remove("selected");
    });
    const chosen = document.getElementById(`opt-${optId}`);
    if (chosen) chosen.classList.add("selected");
  }

  function submitAnswer() {
    const questions = window.QUIZZES_DATA || [];
    const q = questions[currentIndex];
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    if (!isAnswerSubmitted) {
      if (!selectedOptionId) {
        alert("Please select an answer first!");
        return;
      }

      isAnswerSubmitted = true;
      const isCorrect = (selectedOptionId === q.answer);
      if (isCorrect) score++;

      // Save to IndexedDB progress
      if (window.GramaProgress) {
        window.GramaProgress.saveQuizResult(q.id, isCorrect);
      }

      // Mark option styling
      const chosenBtn = document.getElementById(`opt-${selectedOptionId}`);
      const correctBtn = document.getElementById(`opt-${q.answer}`);

      if (isCorrect) {
        if (chosenBtn) chosenBtn.classList.add("correct");
      } else {
        if (chosenBtn) chosenBtn.classList.add("incorrect");
        if (correctBtn) correctBtn.classList.add("correct");
      }

      // Show explanation feedback
      const fbBox = document.getElementById("quiz-feedback-box");
      const fbTitle = document.getElementById("quiz-feedback-title");
      const fbExp = document.getElementById("quiz-feedback-explanation");

      fbBox.style.display = "block";
      if (isCorrect) {
        fbBox.style.background = "#E8F5E9";
        fbBox.style.border = "2px solid #81C784";
        fbTitle.style.color = "#1B5E20";
        fbTitle.textContent = window.t("quizCorrectAlert");
      } else {
        fbBox.style.background = "#FFEBEE";
        fbBox.style.border = "2px solid #E57373";
        fbTitle.style.color = "#B71C1C";
        fbTitle.textContent = window.t("quizIncorrectAlert");
      }

      fbExp.textContent = q.explanation[lang] || q.explanation.en;

      // Update button to Next Question
      const actBtn = document.getElementById("quiz-action-btn");
      actBtn.textContent = `${window.t("nextQuestion")} ➔`;
    } else {
      // Proceed to next question
      currentIndex++;
      const container = document.getElementById("main-router-viewport");
      if (container) renderQuiz(container);
    }
  }

  function renderQuizSummary(container, totalQuestions) {
    container.innerHTML = `
      <div class="quiz-card" style="text-align:center; padding:40px 20px;">
        <div style="font-size:5rem;">🏆</div>
        <h2 style="font-size:2rem; font-weight:900; margin:16px 0;">${window.t("quizCompletedTitle")}</h2>
        <div style="font-size:1.5rem; font-weight:800; color:var(--color-primary); margin-bottom:12px;">
          ${window.t("yourScore")} ${score} / ${totalQuestions}
        </div>
        <p style="font-size:1.15rem; color:var(--color-text-muted); max-width:500px; margin:0 auto 24px;">
          ${window.t("quizCompletedDesc")}
        </p>
        <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
          <button class="btn-primary" onclick="GramaQuiz.restartQuiz()">${window.t("restartQuizBtn")}</button>
          <button class="btn-secondary" onclick="window.location.hash='#progress'">${window.t("viewBadgesBtn")}</button>
        </div>
      </div>
    `;
  }

  function restartQuiz() {
    currentIndex = 0;
    score = 0;
    const container = document.getElementById("main-router-viewport");
    if (container) renderQuiz(container);
  }

  return {
    renderQuiz,
    selectOption,
    submitAnswer,
    restartQuiz
  };
})();
