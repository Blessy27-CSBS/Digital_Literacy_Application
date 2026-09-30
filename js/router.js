// GramaGuide — Hash-Based View Router
// Handles Home, Learn, Lesson Detail, Practice, Scam Detector, Phone Doctor, Family Mode, Progress, Settings

window.GramaRouter = (function() {
  let currentTipIndex = Math.floor(Math.random() * (window.DAILY_TIPS_DATA ? window.DAILY_TIPS_DATA.length : 50));

  function initRouter() {
    window.addEventListener("hashchange", renderRoute);
    renderRoute();
  }

  function renderRoute() {
    const hash = window.location.hash || "#home";
    const viewport = document.getElementById("main-router-viewport");
    if (!viewport) return;

    // Update active nav links (both desktop sidebar and mobile bottom nav)
    updateNavSelection(hash);

    window.scrollTo(0, 0);

    // Route matching
    if (hash === "" || hash === "#" || hash === "#home") {
      renderHomeScreen(viewport);
    } else if (hash.startsWith("#lesson/")) {
      const lessonId = hash.replace("#lesson/", "");
      if (window.GramaLessons) {
        window.GramaLessons.renderLesson(lessonId, viewport);
      }
    } else if (hash.startsWith("#learn")) {
      const cat = hash.includes("/") ? hash.split("/")[1] : null;
      renderLearnScreen(viewport, cat);
    } else if (hash === "#practice") {
      renderPracticeScreen(viewport);
    } else if (hash === "#scam-detector" || hash === "#scam") {
      renderScamDetectorScreen(viewport);
    } else if (hash === "#phone-doctor" || hash === "#doctor") {
      renderPhoneDoctorScreen(viewport);
    } else if (hash === "#family") {
      renderFamilyScreen(viewport);
    } else if (hash === "#progress") {
      renderProgressScreen(viewport);
    } else if (hash === "#settings") {
      renderSettingsScreen(viewport);
    } else {
      renderHomeScreen(viewport);
    }

    // Automatic Voice Assistant: Announce and guide the user on the active screen
    if (window.GramaVoice && window.GramaVoice.autoNarrateRoute) {
      window.GramaVoice.autoNarrateRoute(hash);
    }
  }

  function updateNavSelection(hash) {
    const routeKey = hash.split("/")[0].replace("#", "") || "home";
    document.querySelectorAll(".nav-item, .mobile-nav-link").forEach(el => {
      const href = el.getAttribute("href");
      if (href && href.startsWith(`#${routeKey}`)) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  // =========================================================================
  // 1. HOME SCREEN
  // =========================================================================
  function renderHomeScreen(viewport) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const tips = window.DAILY_TIPS_DATA || [];
    const currentTip = tips[currentTipIndex % tips.length] || { tip: { en: "Always verify receiver name before sending UPI." }, icon: "🔐" };
    const tipText = currentTip.tip[lang] || currentTip.tip.en;

    // Categories data
    const categories = [
      { id: "smartphone", icon: "📱", title: window.t("cat_smartphone"), desc: window.t("cat_smartphone_desc") },
      { id: "internet", icon: "🌐", title: window.t("cat_internet"), desc: window.t("cat_internet_desc") },
      { id: "payments", icon: "💳", title: window.t("cat_payments"), desc: window.t("cat_payments_desc") },
      { id: "safety", icon: "🛡️", title: window.t("cat_safety"), desc: window.t("cat_safety_desc") },
      { id: "government", icon: "🏛️", title: window.t("cat_government"), desc: window.t("cat_government_desc") },
      { id: "farmer", icon: "🌾", title: window.t("cat_farmer"), desc: window.t("cat_farmer_desc") },
      { id: "business", icon: "🏪", title: window.t("cat_business"), desc: window.t("cat_business_desc") },
      { id: "communication", icon: "💬", title: window.t("cat_communication"), desc: window.t("cat_communication_desc") },
      { id: "maps", icon: "🗺️", title: window.t("cat_maps"), desc: window.t("cat_maps_desc") },
      { id: "ai", icon: "🤖", title: window.t("cat_ai"), desc: window.t("cat_ai_desc") }
    ];

    // Priority ordering based on user interests from onboarding
    const savedInterests = JSON.parse(localStorage.getItem("grama_user_interests") || "[]");
    if (savedInterests.length > 0) {
      categories.sort((a, b) => {
        const aHas = savedInterests.includes(a.id);
        const bHas = savedInterests.includes(b.id);
        if (aHas && !bHas) return -1;
        if (!aHas && bHas) return 1;
        return 0;
      });
    }

    // Calculate completed stats
    const completedList = window.GramaProgress ? window.GramaProgress.getLocalProgressList() : [];
    const allLessons = window.LESSONS_DATA || [];
    const confScore = localStorage.getItem("grama_confidence_score") || "0";
    const levelKey = localStorage.getItem("grama_user_level") || "levelBeginner";

    viewport.innerHTML = `
      <!-- Hero Section -->
      <div class="hero-card">
        <div class="hero-text">
          <h2>${window.t("heroTitle")}</h2>
          <p>${window.t("heroSubtitle")}</p>
          <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <a href="#learn" class="btn-primary">
              ${window.t("startLearningAction")}
            </a>
            <a href="#scam-detector" class="btn-secondary">
              ${window.t("checkMessageAction")}
            </a>
          </div>
        </div>
        <div class="hero-illustration">🌾📱</div>
      </div>

      <!-- Digital Confidence Bar -->
      <div class="confidence-card">
        <div class="confidence-header">
          <div class="confidence-title">
            💪 ${window.t("digitalConfidence")}
          </div>
          <span class="confidence-level-badge" id="confidence-level-badge">${window.t(levelKey)}</span>
        </div>
        <div class="progress-track">
          <div class="progress-bar-fill" id="confidence-progress-bar" style="width:${confScore}%;"></div>
        </div>
        <div class="confidence-stats">
          <span>${window.t("confidenceScoreLabel")} <strong id="confidence-number">${confScore} / 100</strong></span>
          <span>${window.t("completedLabel")} <strong id="stats-completed-count">${completedList.length}</strong> / ${allLessons.length}</span>
        </div>
      </div>

      <!-- Daily Digital Tip -->
      <div class="tip-banner">
        <div class="tip-icon">${currentTip.icon}</div>
        <div class="tip-content">
          <div class="tip-heading">💡 ${window.t("dailyTipTitle")}</div>
          <div class="tip-text" id="daily-tip-text">"${tipText}"</div>
          <div class="tip-actions">
            <button class="btn-small" onclick="GramaVoice.speakText(document.getElementById('daily-tip-text').textContent)">
              🔊 ${window.t("listenTip")}
            </button>
            <button class="btn-small" onclick="GramaRouter.rotateDailyTip()">
              🔄 ${window.t("nextTip")}
            </button>
          </div>
        </div>
      </div>

      <!-- Offline Search Bar -->
      <div class="search-container">
        <span class="search-icon-inside">🔍</span>
        <input type="text" id="search-input" class="search-input" placeholder="${window.t("searchPlaceholder")}" oninput="GramaRouter.handleSearch(this.value)">
      </div>

      <div id="search-results-area" style="display:none; margin-bottom:30px;">
        <h3 class="section-title">${window.t("searchResultsTitle")}</h3>
        <div class="categories-grid" id="search-results-grid"></div>
      </div>

      <!-- Learning Categories Grid -->
      <h3 class="section-title">📚 ${window.t("categoriesTitle")}</h3>
      <div class="categories-grid">
        ${categories.map(cat => {
          const totalInCat = allLessons.filter(l => l.category === cat.id).length;
          const completedInCat = completedList.filter(id => {
            const l = allLessons.find(x => x.id === id);
            return l && l.category === cat.id;
          }).length;
          const pct = totalInCat > 0 ? Math.round((completedInCat / totalInCat) * 100) : 0;
          const isAllDone = totalInCat > 0 && completedInCat === totalInCat;

          return `
            <a href="#learn/${cat.id}" class="cat-card ${isAllDone ? "is-completed" : ""}" aria-label="${cat.title}">
              <div class="cat-card-top-meta">
                <span class="cat-badge ${isAllDone ? "badge-completed" : "badge-start"}">
                  ${isAllDone ? "✅ " + window.t("completedBadge") : `${completedInCat}/${totalInCat} ${window.t("finishedLabel")}`}
                </span>
                <span class="cat-difficulty-pill">
                  ${pct}% ${window.t("learnedLabel")}
                </span>
              </div>
              <div class="cat-card-header">
                <div class="cat-icon-box">${cat.icon}</div>
                <div class="cat-title-wrap">
                  <h3 class="cat-title">${cat.title}</h3>
                </div>
              </div>
              <p class="cat-desc">${cat.desc}</p>
              <div class="cat-card-footer">
                <span class="cat-action-text">${window.t("startLearningAction")}</span>
                <span class="cat-arrow-circle">➔</span>
              </div>
            </a>
          `;
        }).join("")}
      </div>
    `;
  }

  function rotateDailyTip() {
    currentTipIndex++;
    const tips = window.DAILY_TIPS_DATA || [];
    const tip = tips[currentTipIndex % tips.length];
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const el = document.getElementById("daily-tip-text");
    if (el) el.textContent = `"${tip.tip[lang] || tip.tip.en}"`;
  }

  function handleSearch(query) {
    const q = query.trim().toLowerCase();
    const resultsArea = document.getElementById("search-results-area");
    const resultsGrid = document.getElementById("search-results-grid");
    if (!resultsArea || !resultsGrid) return;

    if (!q) {
      resultsArea.style.display = "none";
      return;
    }

    const allLessons = window.LESSONS_DATA || [];
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    const matches = allLessons.filter(l => {
      const t = (l.title[lang] || l.title.en).toLowerCase();
      const d = (l.description[lang] || l.description.en).toLowerCase();
      const cat = l.category.toLowerCase();
      return t.includes(q) || d.includes(q) || cat.includes(q);
    });

    resultsArea.style.display = "block";
    if (matches.length === 0) {
      resultsGrid.innerHTML = `<p style="grid-column:1/-1; padding:16px; color:var(--color-text-muted);">${window.t("noResultsFound")}</p>`;
    } else {
      resultsGrid.innerHTML = matches.map(l => `
        <a href="#lesson/${l.id}" class="cat-card" aria-label="${l.title[lang] || l.title.en}">
          <div class="cat-card-top-meta">
            <span class="cat-badge badge-start">${l.category}</span>
            <span class="cat-difficulty-pill">${l.difficulty === "easy" ? "🌱 " + window.t("difficultyEasy") : "⭐ " + window.t("difficultyMedium")}</span>
          </div>
          <div class="cat-card-header">
            <div class="cat-icon-box">${l.icon}</div>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${l.title[lang] || l.title.en}</h3>
            </div>
          </div>
          <p class="cat-desc">${l.description[lang] || l.description.en}</p>
          <div class="cat-card-footer">
            <span class="cat-action-text">${window.t("startSkill")}</span>
            <span class="cat-arrow-circle">➔</span>
          </div>
        </a>
      `).join("");
    }
  }

  // =========================================================================
  // 2. LEARN SCREEN (List of Lessons with Filters)
  // =========================================================================
  function renderLearnScreen(viewport, selectedCategory) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const allLessons = window.LESSONS_DATA || [];
    const completedList = window.GramaProgress ? window.GramaProgress.getLocalProgressList() : [];

    const categories = [
      { id: "all", label: window.t("allSkills"), icon: "✨" },
      { id: "smartphone", label: window.t("cat_smartphone"), icon: "📱" },
      { id: "internet", label: window.t("cat_internet"), icon: "🌐" },
      { id: "payments", label: window.t("cat_payments"), icon: "💳" },
      { id: "safety", label: window.t("cat_safety"), icon: "🛡️" },
      { id: "government", label: window.t("cat_government"), icon: "🏛️" },
      { id: "farmer", label: window.t("cat_farmer"), icon: "🌾" },
      { id: "business", label: window.t("cat_business"), icon: "🏪" },
      { id: "communication", label: window.t("cat_communication"), icon: "💬" },
      { id: "maps", label: window.t("cat_maps"), icon: "🗺️" },
      { id: "ai", label: window.t("cat_ai"), icon: "🤖" }
    ];

    const currentCat = selectedCategory || "all";
    const filteredLessons = (currentCat === "all") ? allLessons : allLessons.filter(l => l.category === currentCat);

    viewport.innerHTML = `
      <div class="learn-header-row">
        <div>
          <h2 class="section-title" style="margin:0;">📚 ${window.t("navLearn")} (${filteredLessons.length})</h2>
          <p style="color:var(--color-text-muted); font-size:1rem; margin-top:4px;">
            ${window.t("heroSubtitle")}
          </p>
        </div>
        <div class="learn-stats-badge">
          <span class="learn-stats-dot"></span>
          <span>${window.t("completedLabel")} <strong>${completedList.length} / ${allLessons.length}</strong></span>
        </div>
      </div>

      <!-- Category Filter Pills Bar with Scroll Controls & View Switcher -->
      <div class="category-nav-wrapper">
        <button class="cat-nav-arrow cat-nav-arrow-left" id="cat-scroll-left" onclick="GramaRouter.scrollCategoryNav(-1)" title="Scroll Left" aria-label="Scroll left">
          ‹
        </button>
        <div class="category-nav-scroll" id="cat-nav-scroll-container" role="tablist" aria-label="Skill Categories">
          ${categories.map(c => {
            const count = (c.id === "all") ? allLessons.length : allLessons.filter(l => l.category === c.id).length;
            const isActive = currentCat === c.id;
            return `
              <button role="tab" aria-selected="${isActive}" class="cat-pill-btn ${isActive ? "active" : ""}" id="cat-pill-${c.id}" onclick="window.location.hash='#learn/${c.id}'">
                <span class="cat-pill-icon">${c.icon}</span>
                <span class="cat-pill-label">${c.label}</span>
                <span class="cat-pill-count">${count}</span>
              </button>
            `;
          }).join("")}
        </div>
        <button class="cat-nav-arrow cat-nav-arrow-right" id="cat-scroll-right" onclick="GramaRouter.scrollCategoryNav(1)" title="Scroll Right" aria-label="Scroll right">
          ›
        </button>
        <button class="cat-nav-toggle-btn" id="cat-nav-toggle-btn" onclick="GramaRouter.toggleCategoryWrap()" title="Toggle View">
          ⊞ ${window.t("showAllMode") || "All"}
        </button>
      </div>

      <!-- Lessons Grid -->
      <div class="categories-grid">
        ${filteredLessons.map(l => {
          const isDone = completedList.includes(l.id);
          const title = l.title[lang] || l.title.en;
          const desc = l.description[lang] || l.description.en;
          const diffText = l.difficulty === "easy" ? window.t("difficultyEasy") : window.t("difficultyMedium");
          const diffIcon = l.difficulty === "easy" ? "🌱" : "⭐";
          return `
            <a href="#lesson/${l.id}" class="cat-card ${isDone ? "is-completed" : ""}" aria-label="${title}">
              <div class="cat-card-top-meta">
                <span class="cat-badge ${isDone ? "badge-completed" : "badge-start"}">
                  ${isDone ? "✅ " + window.t("completedBadge") : "⚡ " + window.t("startSkill")}
                </span>
                <span class="cat-difficulty-pill">
                  ${diffIcon} ${diffText}
                </span>
              </div>
              <div class="cat-card-header">
                <div class="cat-icon-box">${l.icon}</div>
                <div class="cat-title-wrap">
                  <h3 class="cat-title">${title}</h3>
                </div>
              </div>
              <p class="cat-desc">${desc}</p>
              <div class="cat-card-footer">
                <span class="cat-action-text">${isDone ? (window.t("reviewSkill") || "Review") : (window.t("startSkill") || "Start")}</span>
                <span class="cat-arrow-circle">➔</span>
              </div>
            </a>
          `;
        }).join("")}
      </div>
    `;

    // Auto-scroll active category into visible view and enable smooth mouse wheel scroll
    setTimeout(() => {
      const scrollContainer = document.getElementById("cat-nav-scroll-container");
      if (scrollContainer) {
        const activePill = scrollContainer.querySelector(".cat-pill-btn.active");
        if (activePill) {
          activePill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        }
        scrollContainer.addEventListener("wheel", (e) => {
          if (e.deltaY !== 0 && !e.shiftKey && !scrollContainer.classList.contains("wrap-mode")) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        }, { passive: false });
      }
    }, 40);
  }

  // =========================================================================
  // 3. PRACTICE SCREEN (Simulators Hub & Quizzes)
  // =========================================================================
  function renderPracticeScreen(viewport) {
    viewport.innerHTML = `
      <h2 class="section-title">${window.t("practiceTitle")}</h2>
      <p style="color:var(--color-text-muted); font-size:1.1rem; margin-bottom:24px;">
        ${window.t("practiceSubtitle")}
      </p>

      <div class="categories-grid" style="margin-bottom:36px;">
        <a href="#lesson/l_phone_1" class="cat-card" aria-label="${window.t("practiceCallTitle")}">
          <div class="cat-card-top-meta">
            <span class="cat-badge badge-start">${window.t("practiceCallSub")}</span>
            <span class="cat-difficulty-pill">🌱 ${window.t("difficultyEasy")}</span>
          </div>
          <div class="cat-card-header">
            <div class="cat-icon-box">📞</div>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${window.t("practiceCallTitle")}</h3>
            </div>
          </div>
          <p class="cat-desc">${window.t("practiceCallDesc")}</p>
          <div class="cat-card-footer">
            <span class="cat-action-text">${window.t("practiceNow")}</span>
            <span class="cat-arrow-circle">➔</span>
          </div>
        </a>

        <a href="#lesson/l_pay_3" class="cat-card" aria-label="${window.t("practicePayTitle")}">
          <div class="cat-card-top-meta">
            <span class="cat-badge badge-start">${window.t("practicePaySub")}</span>
            <span class="cat-difficulty-pill">💳 UPI ₹250</span>
          </div>
          <div class="cat-card-header">
            <div class="cat-icon-box">💳</div>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${window.t("practicePayTitle")}</h3>
            </div>
          </div>
          <p class="cat-desc">${window.t("practicePayDesc")}</p>
          <div class="cat-card-footer">
            <span class="cat-action-text">${window.t("practiceNow")}</span>
            <span class="cat-arrow-circle">➔</span>
          </div>
        </a>

        <a href="#lesson/l_phone_3" class="cat-card" aria-label="${window.t("practiceCamTitle")}">
          <div class="cat-card-top-meta">
            <span class="cat-badge badge-start">${window.t("practiceCamSub")}</span>
            <span class="cat-difficulty-pill">🌱 ${window.t("difficultyEasy")}</span>
          </div>
          <div class="cat-card-header">
            <div class="cat-icon-box">📷</div>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${window.t("practiceCamTitle")}</h3>
            </div>
          </div>
          <p class="cat-desc">${window.t("practiceCamDesc")}</p>
          <div class="cat-card-footer">
            <span class="cat-action-text">${window.t("practiceNow")}</span>
            <span class="cat-arrow-circle">➔</span>
          </div>
        </a>

        <a href="#scam-detector" class="cat-card" aria-label="${window.t("practiceScamTitle")}">
          <div class="cat-card-top-meta">
            <span class="cat-badge badge-start">${window.t("practiceScamSub")}</span>
            <span class="cat-difficulty-pill">🛡️ Safety</span>
          </div>
          <div class="cat-card-header">
            <div class="cat-icon-box">🕵️</div>
            <div class="cat-title-wrap">
              <h3 class="cat-title">${window.t("practiceScamTitle")}</h3>
            </div>
          </div>
          <p class="cat-desc">${window.t("practiceScamDesc")}</p>
          <div class="cat-card-footer">
            <span class="cat-action-text">${window.t("practiceNow")}</span>
            <span class="cat-arrow-circle">➔</span>
          </div>
        </a>
      </div>

      <div style="margin-top:30px;">
        <h3 class="section-title">${window.t("practiceQuizSectionTitle")}</h3>
        <div id="quiz-mount-point"></div>
      </div>
    `;

    const quizMount = document.getElementById("quiz-mount-point");
    if (quizMount && window.GramaQuiz) {
      window.GramaQuiz.renderQuiz(quizMount);
    }
  }

  // =========================================================================
  // 4. SCAM DETECTOR SCREEN ("Is This Safe?")
  // =========================================================================
  function renderScamDetectorScreen(viewport) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const presets = window.GramaScam ? window.GramaScam.SAMPLE_PRESETS : [];

    viewport.innerHTML = `
      <div class="scam-box">
        <h2 class="section-title" style="margin-bottom:6px;">${window.t("scamTitle")}</h2>
        <p style="color:var(--color-text-muted); font-size:1.15rem; margin-bottom:20px;">
          ${window.t("scamSubtitle")}
        </p>

        <textarea id="scam-text-input" class="scam-textarea" placeholder="${window.t("scamInputPlaceholder")}"></textarea>

        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
          <button class="btn-primary" onclick="GramaRouter.runScamAnalysis()">
            🔍 ${window.t("scamAnalyzeBtn")}
          </button>
          <button class="btn-secondary" onclick="document.getElementById('scam-text-input').value=''; document.getElementById('scam-result-box').style.display='none';">
            ${window.t("scamClearBtn")}
          </button>
        </div>

        <div style="margin-top:24px;">
          <div style="font-weight:800; font-size:0.95rem; color:var(--color-text-muted); margin-bottom:8px;">
            ${window.t("scamPresetTitle")}
          </div>
          <div class="scam-presets-grid">
            ${presets.map((p, idx) => {
              const chipLabel = typeof p.label === "object" ? (p.label[lang] || p.label.en) : p.label;
              return `
                <button class="preset-chip" onclick="GramaRouter.loadScamPreset(${idx})">
                  ${chipLabel}
                </button>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Result Box -->
        <div id="scam-result-box" class="scam-result-box">
          <div id="scam-verdict-banner" style="font-size:1.6rem; font-weight:900; margin-bottom:8px;"></div>
          <p id="scam-verdict-summary" style="font-size:1.1rem; font-weight:700;"></p>

          <div id="scam-flags-wrapper" style="margin-top:16px;">
            <div style="font-weight:800;">${window.t("scamWhy")}</div>
            <ul id="scam-flags-list" class="warning-flags-list"></ul>
          </div>

          <div style="font-size:0.85rem; color:var(--color-text-muted); margin-top:20px; border-top:1px solid rgba(0,0,0,0.1); padding-top:10px;">
            ${window.t("scamDisclaimer")}
          </div>
        </div>
      </div>
    `;
  }

  function loadScamPreset(idx) {
    const presets = window.GramaScam ? window.GramaScam.SAMPLE_PRESETS : [];
    const p = presets[idx];
    if (!p) return;

    const input = document.getElementById("scam-text-input");
    if (input) {
      input.value = p.text;
      runScamAnalysis();
    }
  }

  function runScamAnalysis() {
    const input = document.getElementById("scam-text-input");
    const resultBox = document.getElementById("scam-result-box");
    const banner = document.getElementById("scam-verdict-banner");
    const summary = document.getElementById("scam-verdict-summary");
    const list = document.getElementById("scam-flags-list");
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    if (!input || !resultBox) return;

    const text = input.value.trim();
    if (!text) {
      alert(lang === "ta" ? "செய்தியை உள்ளிடவும்!" : (lang === "hi" ? "कृपया पहले संदेश लिखें!" : "Please paste or type a message first!"));
      return;
    }

    const res = window.GramaScam.analyzeText(text);
    resultBox.style.display = "block";
    resultBox.className = "scam-result-box";

    if (res.verdict === "dangerous") {
      resultBox.classList.add("scam-result-danger");
      banner.innerHTML = `🔴 ${window.t("scamDangerous")}`;
      summary.textContent = window.t("scamDangerousSummary");
    } else if (res.verdict === "caution") {
      resultBox.classList.add("scam-result-caution");
      banner.innerHTML = `🟡 ${window.t("scamCaution")}`;
      summary.textContent = window.t("scamCautionSummary");
    } else {
      resultBox.classList.add("scam-result-safe");
      banner.innerHTML = `🟢 ${window.t("scamSafe")}`;
      summary.textContent = window.t("scamSafeSummary");
    }

    // List warning flags
    if (res.matchedRules.length > 0) {
      list.innerHTML = res.matchedRules.map(r => `
        <li>${r.icon} ${r.warning[lang] || r.warning.en}</li>
      `).join("");
      document.getElementById("scam-flags-wrapper").style.display = "block";
    } else {
      list.innerHTML = "";
      document.getElementById("scam-flags-wrapper").style.display = "none";
    }
  }

  // =========================================================================
  // 5. PHONE DOCTOR SCREEN
  // =========================================================================
  function renderPhoneDoctorScreen(viewport) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const issues = window.GramaDoctor ? window.GramaDoctor.ISSUES : [];

    viewport.innerHTML = `
      <div class="scam-box">
        <h2 class="section-title">📱 ${window.t("doctorTitle")}</h2>
        <p style="color:var(--color-text-muted); font-size:1.15rem; margin-bottom:24px;">
          ${window.t("doctorSubtitle")}
        </p>

        <div class="doctor-issues-grid">
          ${issues.map(iss => `
            <div class="doctor-issue-card" onclick="GramaRouter.openDoctorIssue('${iss.id}')">
              <span style="font-size:2rem;">${iss.icon}</span>
              <span>${iss.title[lang] || iss.title.en}</span>
            </div>
          `).join("")}
        </div>

        <div id="doctor-flow-viewport" class="doctor-flow-container"></div>
      </div>
    `;
  }

  function openDoctorIssue(issueId) {
    const issues = window.GramaDoctor ? window.GramaDoctor.ISSUES : [];
    const iss = issues.find(x => x.id === issueId);
    const flowContainer = document.getElementById("doctor-flow-viewport");
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    if (!iss || !flowContainer) return;

    flowContainer.style.display = "block";
    flowContainer.scrollIntoView({ behavior: "smooth" });

    let stepsHtml = iss.steps.map((st, idx) => `
      <div class="decision-box">
        <div style="font-size:3rem; margin-bottom:8px;">${st.visual}</div>
        <h3 style="font-size:1.3rem; font-weight:800; margin-bottom:8px;">${st.question[lang] || st.question.en}</h3>
        <p style="font-size:1.1rem; color:var(--color-text-muted); line-height:1.5; margin-bottom:16px;">
          ${st.instruction[lang] || st.instruction.en}
        </p>
        <div class="decision-actions">
          <button class="btn-success" onclick="alert('${window.t("resolvedBtn")}'); document.getElementById('doctor-flow-viewport').style.display='none';">
            ✅ ${window.t("resolvedBtn")}
          </button>
        </div>
      </div>
    `).join("");

    flowContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid var(--color-border); padding-bottom:12px; margin-bottom:16px;">
        <h3 style="font-size:1.4rem; font-weight:900;">${iss.icon} ${iss.title[lang] || iss.title.en}</h3>
        <button class="btn-secondary" style="min-height:36px; padding:6px 12px;" onclick="document.getElementById('doctor-flow-viewport').style.display='none';">${window.t("closeBtn")}</button>
      </div>
      ${stepsHtml}
    `;
  }

  // =========================================================================
  // 6. TEACH MY FAMILY SCREEN
  // =========================================================================
  function renderFamilyScreen(viewport) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const checklists = {
      grandparent: {
        en: [
          "How to turn phone ON and unlock screen",
          "How to tap green phone icon and call son/daughter",
          "How to send a voice note on WhatsApp without typing",
          "How to hear voice news in Tamil/Hindi",
          "How to identify fake missed calls starting with foreign +92"
        ],
        ta: [
          "போனை ஆன் செய்வது மற்றும் திரை பூட்டைத் திறப்பது எப்படி",
          "பச்சை போன் ஐகானைத் தொட்டு மகன்/மகளுக்கு அழைப்பது எப்படி",
          "தட்டச்சு செய்யாமல் வாட்ஸ்அப்பில் குரல் செய்தி (Voice Note) அனுப்புவது எப்படி",
          "தமிழில் வாய்மொழிச் செய்திகளைக் கேட்பது எப்படி",
          "+92 போன்ற வெளிநாட்டு எண்களில் தொடங்கும் போலி அழைப்புகளைக் கண்டறிவது எப்படி"
        ],
        hi: [
          "फोन चालू करना और स्क्रीन लॉक खोलना",
          "हरे फोन आइकन को दबाकर बेटा/बेटी को कॉल करना",
          "बिना टाइप किए व्हाट्सएप पर वॉइस नोट (बोलकर) भेजना",
          "हिंदी में बोलकर समाचार और जानकारी सुनना",
          "+92 से शुरू होने वाली फर्जी विदेशी मिस्ड कॉलों की पहचान करना"
        ]
      },
      parent: {
        en: [
          "How to check bank balance safely with UPI PIN",
          "How to never share 6-digit OTP with anyone",
          "How to view PM-Kisan installment status on phone",
          "How to carry Aadhaar & Ration card in DigiLocker",
          "How to stop dangerous health rumors on WhatsApp groups"
        ],
        ta: [
          "UPI PIN மூலம் வங்கி இருப்புத் தொகையை பாதுகாப்பாக சரிபார்ப்பது எப்படி",
          "6-இலக்க OTP-ஐ ஒருபோதும் யாரிடமும் பகிரக்கூடாது",
          "போனில் PM-கிசான் தவணை நிலையை பார்ப்பது எப்படி",
          "டிஜிலாக்கரில் ஆதார் & ரேஷன் கார்டை வைத்திருப்பது எப்படி",
          "வாட்ஸ்அப் குழுக்களில் ஆபத்தான மருத்துவ வதந்திகளைப் பரப்புவதை நிறுத்துவது எப்படி"
        ],
        hi: [
          "UPI PIN के साथ सुरक्षित बैंक बैलेंस चेक करना",
          "6-अंकों का OTP किसी के साथ कभी भी साझा न करना",
          "फोन पर पीएम-किसान किस्त की स्थिति देखना",
          "डिजिलॉकर में आधार और राशन कार्ड सुरक्षित रखना",
          "व्हाट्सएप ग्रुपों पर फर्जी अफवाहों को आगे न बढ़ाना"
        ]
      },
      child: {
        en: [
          "How to use phone for educational video lessons safely",
          "Never sharing family photos or school details with strangers",
          "Never buying game coins or downloading unknown APK games",
          "Limiting screen time to protect young eyes"
        ],
        ta: [
          "கல்வி வீடியோ பாடங்களுக்கு போனை பாதுகாப்பாகப் பயன்படுத்துவது எப்படி",
          "தெரியாதவர்களுடன் குடும்பப் புகைப்படங்களையோ பள்ளி விவரங்களையோ பகிரக்கூடாது",
          "விளையாட்டு காசுகள் வாங்குவதையோ தெரியாத கேம்களை பதிவிறக்குவதையோ தவிர்க்கவும்",
          "கண் நலனைப் பாதுகாக்க போன் பயன்பாட்டு நேரத்தைக் கட்டுப்படுத்துவது"
        ],
        hi: [
          "शैक्षणिक वीडियो और पढ़ाई के लिए सुरक्षित फोन का उपयोग",
          "अजनबियों के साथ कभी भी पारिवारिक फोटो या स्कूल की जानकारी साझा न करना",
          "गेम कॉइन न खरीदना और अज्ञात गेम ऐप डाउनलोड न करना",
          "आंखों की सुरक्षा के लिए स्क्रीन समय सीमित रखना"
        ]
      },
      farmer: {
        en: [
          "Checking rain probability before spraying chemical pesticides",
          "Checking mandi market crop rates on e-NAM before selling",
          "Calling toll-free Kisan Call Center (1800-180-1551)",
          "Checking blue certified tag on crop seed bags"
        ],
        ta: [
          "பூச்சிக்கொல்லி தெளிப்பதற்கு முன் மழை பெய்யும் வாய்ப்பை சரிபார்த்தல்",
          "பயிர்களை விற்பனை செய்வதற்கு முன் e-NAM-ல் மண்டி சந்தை விலைகளை சரிபார்த்தல்",
          "கட்டணமில்லா கிசான் கால் சென்டரை (1800-180-1551) அழைப்பது",
          "பயிர் விதை பைகளில் நீல நிற சான்றளிக்கப்பட்ட முத்திரையை சரிபார்த்தல்"
        ],
        hi: [
          "कीटनाशक छिड़कने से पहले बारिश की संभावना की जांच करना",
          "फसल बेचने से पहले ई-नाम (e-NAM) पर मंडी भाव चेक करना",
          "टोल-फ्री किसान कॉल सेंटर (1800-180-1551) पर सलाह लेना",
          "बीज की बोरी पर नीला प्रमाणित टैग अवश्य देखना"
        ]
      },
      shopkeeper: {
        en: [
          "Placing QR code stand at counter and testing soundbox",
          "Verifying money arrived in bank SMS before giving goods",
          "Recording credit (udhar) on a digital mobile khata",
          "Sending friendly payment reminder on WhatsApp"
        ],
        ta: [
          "கவுண்டரில் QR குறியீடு ஸ்டாண்டை வைத்து சவுண்ட்பாக்ஸை சோதித்தல்",
          "பொருட்களை கொடுக்கும் முன் வங்கி SMS-ல் பணம் வந்துள்ளதை உறுதி செய்தல்",
          "மொபைல் டிஜிட்டல் கணக்கு புத்தகத்தில் கடன் (உதார்) வரவு-செலவு பதிவிடுதல்",
          "வாட்ஸ்அப்பில் வாடிக்கையாளருக்கு மரியாதை கலந்த கட்டண நினைவூட்டல் அனுப்புதல்"
        ],
        hi: [
          "दुकान काउंटर पर क्यूआर कोड स्टैंड रखना और साउंडबॉक्स चेक करना",
          "सामान देने से पहले बैंक एसएमएस में पैसे आने की पुष्टि करना",
          "मोबाइल डिजिटल खाता में दैनिक उधार व जमा दर्ज करना",
          "व्हाट्सएप पर विनम्र भुगतान रिमाइंडर भेजना"
        ]
      }
    };

    window.activeFamilyRole = window.activeFamilyRole || "grandparent";
    const currentList = (checklists[window.activeFamilyRole] && (checklists[window.activeFamilyRole][lang] || checklists[window.activeFamilyRole].en)) || [];

    viewport.innerHTML = `
      <div class="checklist-container">
        <h2 class="section-title">👨‍👩‍👧 ${window.t("familyTitle")}</h2>
        <p style="color:var(--color-text-muted); font-size:1.15rem; margin-bottom:24px;">
          ${window.t("familySubtitle")}
        </p>

        <div class="family-roles-grid">
          <button class="family-role-btn ${window.activeFamilyRole === 'grandparent' ? 'active' : ''}" onclick="GramaRouter.selectFamilyRole('grandparent')">
            <span class="family-role-icon">👵</span>
            <span>${window.t("familyGrandparent")}</span>
          </button>
          <button class="family-role-btn ${window.activeFamilyRole === 'parent' ? 'active' : ''}" onclick="GramaRouter.selectFamilyRole('parent')">
            <span class="family-role-icon">👨</span>
            <span>${window.t("familyParent")}</span>
          </button>
          <button class="family-role-btn ${window.activeFamilyRole === 'child' ? 'active' : ''}" onclick="GramaRouter.selectFamilyRole('child')">
            <span class="family-role-icon">👧</span>
            <span>${window.t("familyChild")}</span>
          </button>
          <button class="family-role-btn ${window.activeFamilyRole === 'farmer' ? 'active' : ''}" onclick="GramaRouter.selectFamilyRole('farmer')">
            <span class="family-role-icon">👨‍🌾</span>
            <span>${window.t("familyFarmer")}</span>
          </button>
          <button class="family-role-btn ${window.activeFamilyRole === 'shopkeeper' ? 'active' : ''}" onclick="GramaRouter.selectFamilyRole('shopkeeper')">
            <span class="family-role-icon">🏪</span>
            <span>${window.t("familyShopkeeper")}</span>
          </button>
        </div>

        <div style="margin-top:20px;">
          <h3 style="font-size:1.3rem; font-weight:800; margin-bottom:16px;">
            ${window.t("teachingChecklist")}
          </h3>
          <div id="family-checklist-items">
            ${currentList.map((item, i) => `
              <label class="checklist-item">
                <input type="checkbox" class="checklist-checkbox" id="chk-${i}">
                <span>${item}</span>
              </label>
            `).join("")}
          </div>
          <div style="margin-top:24px;">
            <button class="btn-success" onclick="alert(window.currentLang === 'ta' ? 'அற்புதம்! உங்கள் குடும்பத்துடன் பகிரப்படும் அறிவு உங்கள் முழு கிராமத்தையும் மேம்படுத்துகிறது. 🌟' : (window.currentLang === 'hi' ? 'अद्भुत! परिवार के साथ साझा किया गया ज्ञान पूरे गाँव को सशक्त बनाता है। 🌟' : 'Wonderful! Knowledge shared within your family empowers your entire village. 🌟'));">
              ${window.t("markAllDone")}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function selectFamilyRole(role) {
    window.activeFamilyRole = role;
    const viewport = document.getElementById("main-router-viewport");
    if (viewport) renderFamilyScreen(viewport);
  }

  // =========================================================================
  // 7. PROGRESS & BADGES SCREEN
  // =========================================================================
  function renderProgressScreen(viewport) {
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const completedList = window.GramaProgress ? window.GramaProgress.getLocalProgressList() : [];
    const allLessons = window.LESSONS_DATA || [];
    const confScore = localStorage.getItem("grama_confidence_score") || "0";
    const levelKey = localStorage.getItem("grama_user_level") || "levelBeginner";
    const badges = window.GramaProgress ? window.GramaProgress.BADGES : [];
    const unlockedBadges = window.GramaProgress ? window.GramaProgress.getUnlockedBadges() : [];

    viewport.innerHTML = `
      <div class="confidence-card">
        <h2 class="section-title" style="margin-bottom:16px;">📊 ${window.t("navProgress")}</h2>

        <div class="confidence-header">
          <div class="confidence-title">💪 ${window.t("digitalConfidence")}</div>
          <span class="confidence-level-badge">${window.t(levelKey)}</span>
        </div>
        <div class="progress-track" style="height:26px;">
          <div class="progress-bar-fill" style="width:${confScore}%;"></div>
        </div>
        <div class="confidence-stats" style="font-size:1.1rem; margin-top:8px;">
          <span>${window.t("confidenceScoreLabel")} <strong>${confScore} / 100</strong></span>
          <span>${window.t("lessonsMasteredLabel")} <strong>${completedList.length} / ${allLessons.length}</strong></span>
        </div>
      </div>

      <!-- Badges Section -->
      <h3 class="section-title">🏅 ${window.t("badgesEarned")} (${unlockedBadges.length})</h3>
      <div class="badges-grid">
        ${badges.map(b => {
          const isUnlocked = unlockedBadges.includes(b.id);
          const bName = typeof b.name === "object" ? (b.name[lang] || b.name.en) : b.name;
          const bDesc = typeof b.desc === "object" ? (b.desc[lang] || b.desc.en) : b.desc;
          return `
            <div class="badge-item ${isUnlocked ? "" : "locked"}">
              <div class="badge-medal-icon">${b.icon}</div>
              <div class="badge-name">${bName}</div>
              <div style="font-size:0.75rem; color:var(--color-text-muted); margin-top:4px;">${bDesc}</div>
              <div style="font-size:0.75rem; font-weight:800; margin-top:6px; color:${isUnlocked ? "var(--color-secondary)" : "#999"};">
                ${isUnlocked ? window.t("unlockedLabel") : window.t("lockedLabel")}
              </div>
            </div>
          `;
        }).join("")}
      </div>

      <!-- Demo Mode & Reset Controls -->
      <div style="background:var(--color-surface); border:2px solid var(--color-border); border-radius:var(--radius-lg); padding:20px; margin-top:30px; display:flex; gap:16px; flex-wrap:wrap; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:800; font-size:1.1rem;">${window.t("demoBoxTitle")}</div>
          <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("demoBoxDesc")}</div>
        </div>
        <div style="display:flex; gap:12px;">
          <button class="btn-primary" onclick="GramaProgress.activateDemoMode()">${window.t("tryDemoBtn")}</button>
          <button class="btn-danger" onclick="GramaProgress.resetAllProgress()">${window.t("resetProgressBtn")}</button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 8. SETTINGS & ACCESSIBILITY SCREEN
  // =========================================================================
  function renderSettingsScreen(viewport) {
    const isLargeText = document.body.classList.contains("large-text");
    const isHighContrast = document.body.classList.contains("high-contrast");
    const isReduceMotion = document.body.classList.contains("reduce-motion");
    const isVoiceAuto = localStorage.getItem("grama_voice_guidance") === "true";

    viewport.innerHTML = `
      <div class="settings-card">
        <h2 class="section-title">⚙️ ${window.t("settingsTitle")}</h2>

        <!-- Language Selector -->
        <div class="settings-row">
          <div>
            <div class="settings-label">🌐 ${window.t("languageSetting")}</div>
            <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("languageSettingSub")}</div>
          </div>
          <div class="lang-selector">
            <button class="lang-btn ${(window.currentLang === 'en') ? 'active' : ''}" onclick="setLanguage('en')">English</button>
            <button class="lang-btn ${(window.currentLang === 'ta') ? 'active' : ''}" onclick="setLanguage('ta')">தமிழ்</button>
            <button class="lang-btn ${(window.currentLang === 'hi') ? 'active' : ''}" onclick="setLanguage('hi')">हिन्दी</button>
          </div>
        </div>

        <!-- Large Text Mode -->
        <div class="settings-row">
          <div>
            <div class="settings-label">${window.t("largeTextToggle")}</div>
            <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("largeTextSub")}</div>
          </div>
          <label class="switch-toggle">
            <input type="checkbox" ${isLargeText ? "checked" : ""} onchange="GramaRouter.toggleAccessibility('large-text', this.checked)">
            <span class="slider-round"></span>
          </label>
        </div>

        <!-- High Contrast Mode -->
        <div class="settings-row">
          <div>
            <div class="settings-label">${window.t("highContrastToggle")}</div>
            <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("highContrastSub")}</div>
          </div>
          <label class="switch-toggle">
            <input type="checkbox" ${isHighContrast ? "checked" : ""} onchange="GramaRouter.toggleAccessibility('high-contrast', this.checked)">
            <span class="slider-round"></span>
          </label>
        </div>

        <!-- Reduce Motion -->
        <div class="settings-row">
          <div>
            <div class="settings-label">${window.t("reduceMotionToggle")}</div>
            <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("reduceMotionSub")}</div>
          </div>
          <label class="switch-toggle">
            <input type="checkbox" ${isReduceMotion ? "checked" : ""} onchange="GramaRouter.toggleAccessibility('reduce-motion', this.checked)">
            <span class="slider-round"></span>
          </label>
        </div>

        <!-- Auto Voice Guidance -->
        <div class="settings-row">
          <div>
            <div class="settings-label">${window.t("voiceGuidanceToggle")}</div>
            <div style="font-size:0.9rem; color:var(--color-text-muted);">${window.t("voiceGuidanceSub")}</div>
          </div>
          <label class="switch-toggle">
            <input type="checkbox" ${isVoiceAuto ? "checked" : ""} onchange="GramaRouter.toggleVoiceGuidance(this.checked)">
            <span class="slider-round"></span>
          </label>
        </div>

        <!-- Install PWA Button -->
        <div style="margin-top:30px; padding-top:20px; border-top:1px solid var(--color-border); text-align:center;">
          <button id="pwa-install-btn" class="btn-primary" style="font-size:1.2rem; padding:16px 32px;" onclick="triggerPWAInstall()">
            ${window.t("installAppBtn")}
          </button>
          <p style="font-size:0.95rem; color:var(--color-text-muted); margin-top:8px;">
            ${window.t("installInstructions")}
          </p>
        </div>
      </div>
    `;
  }

  function toggleAccessibility(className, enabled) {
    if (enabled) {
      document.body.classList.add(className);
      localStorage.setItem(`grama_${className}`, "true");
    } else {
      document.body.classList.remove(className);
      localStorage.removeItem(`grama_${className}`);
    }
  }

  function toggleVoiceGuidance(enabled) {
    localStorage.setItem("grama_voice_guidance", enabled ? "true" : "false");
  }

  function scrollCategoryNav(direction) {
    const el = document.getElementById("cat-nav-scroll-container");
    if (el) {
      el.scrollBy({ left: direction * 260, behavior: "smooth" });
    }
  }

  function toggleCategoryWrap() {
    const wrapper = document.getElementById("cat-nav-scroll-container");
    const btn = document.getElementById("cat-nav-toggle-btn");
    if (wrapper) {
      wrapper.classList.toggle("wrap-mode");
      const isWrapped = wrapper.classList.contains("wrap-mode");
      if (btn) {
        btn.innerHTML = isWrapped 
          ? `◀▶ ${window.t("sliderMode") || "Slider"}` 
          : `⊞ ${window.t("showAllMode") || "All"}`;
      }
    }
  }

  return {
    initRouter,
    renderRoute,
    rotateDailyTip,
    handleSearch,
    runScamAnalysis,
    loadScamPreset,
    openDoctorIssue,
    selectFamilyRole,
    toggleAccessibility,
    toggleVoiceGuidance,
    scrollCategoryNav,
    toggleCategoryWrap
  };
})();

window.renderCurrentRoute = function() {
  if (window.GramaRouter) window.GramaRouter.renderRoute();
};
