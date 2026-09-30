// GramaGuide — Main Application Initializer & Global State
// Service worker registration, onboarding flow, PWA installation, and bootstrap

window.currentLang = localStorage.getItem("grama_lang") || "en";
let deferredInstallPrompt = null;

document.addEventListener("DOMContentLoaded", async () => {
  // 1. Restore Accessibility Settings
  if (localStorage.getItem("grama_large-text") === "true") document.body.classList.add("large-text");
  if (localStorage.getItem("grama_high-contrast") === "true") document.body.classList.add("high-contrast");
  if (localStorage.getItem("grama_reduce-motion") === "true") document.body.classList.add("reduce-motion");

  // 2. Initialize IndexedDB & Progress
  if (window.GramaProgress && window.GramaProgress.initDB) {
    await window.GramaProgress.initDB();
    window.GramaProgress.calculateDigitalConfidence();
    window.GramaProgress.checkBadgeUnlocks();
  }

  // 3. Initialize Offline Monitor
  if (window.initOfflineDetector) {
    window.initOfflineDetector();
  }

  // 4. Initialize Hash Router
  if (window.GramaRouter && window.GramaRouter.initRouter) {
    window.GramaRouter.initRouter();
  }

  // 5. Initialize Automatic Voice Assistant System
  if (window.GramaVoice && window.GramaVoice.initVoiceSystem) {
    window.GramaVoice.initVoiceSystem();
  }

  // 6. Update Header Language Selector state & static translations
  updateHeaderLangButtons();
  updateDOMTranslations();

  // 7. Check First-Time User Onboarding
  checkFirstTimeUser();

  // 8. Register Service Worker for Offline PWA
  registerServiceWorker();
});

// Update static DOM elements tagged with data-i18n
function updateDOMTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && window.t) {
      el.textContent = window.t(key);
    }
  });
  // Also update search input placeholder if exists
  const searchInput = document.getElementById("search-input");
  if (searchInput && window.t) {
    searchInput.placeholder = window.t("searchPlaceholder");
  }
}

// Switch Active Language
window.setLanguage = function(lang) {
  window.currentLang = lang;
  localStorage.setItem("grama_lang", lang);
  updateHeaderLangButtons();
  updateDOMTranslations();
  if (window.renderCurrentRoute) {
    window.renderCurrentRoute();
  }
  if (window.GramaVoice && window.GramaVoice.onLanguageChanged) {
    window.GramaVoice.onLanguageChanged(lang);
  }
};

function updateHeaderLangButtons() {
  const current = window.currentLang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === current) {
      btn.classList.add("active");
    }
  });
}

// First-Time User Experience (Onboarding)
function checkFirstTimeUser() {
  const hasOnboarded = localStorage.getItem("grama_onboarded");
  if (!hasOnboarded) {
    showOnboardingModal();
  }
}

function showOnboardingModal() {
  const modal = document.createElement("div");
  modal.id = "onboarding-modal";
  modal.className = "modal-backdrop";

  modal.innerHTML = `
    <div class="modal-card">
      <div style="font-size:3.5rem; text-align:center; margin-bottom:8px;">🌾📱</div>
      <h2 style="font-size:1.8rem; font-weight:900; text-align:center; color:var(--color-primary-dark); margin-bottom:6px;">
        ${window.t("welcomeTitle")}
      </h2>
      <p style="text-align:center; color:var(--color-text-muted); font-size:1.1rem; margin-bottom:20px;">
        ${window.t("welcomeSubtitle")}
      </p>

      <!-- Language Choice -->
      <div style="margin-bottom:20px;">
        <label style="font-weight:800; display:block; margin-bottom:8px;">${window.t("chooseLangPrompt")}</label>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px;">
          <button class="btn-secondary ${(window.currentLang === 'en') ? 'active' : ''}" style="min-height:50px; font-weight:800;" onclick="selectOnboardingLang('en', this)">🌐 English</button>
          <button class="btn-secondary ${(window.currentLang === 'ta') ? 'active' : ''}" style="min-height:50px; font-weight:800;" onclick="selectOnboardingLang('ta', this)">தமிழ் Tamil</button>
          <button class="btn-secondary ${(window.currentLang === 'hi') ? 'active' : ''}" style="min-height:50px; font-weight:800;" onclick="selectOnboardingLang('hi', this)">हिन्दी Hindi</button>
        </div>
      </div>

      <!-- Interests Selection -->
      <div style="margin-bottom:24px;">
        <label style="font-weight:800; display:block; margin-bottom:8px;">${window.t("chooseInterestsPrompt")}</label>
        <div class="interests-selection-grid">
          <button class="interest-btn" onclick="toggleInterest(this, 'smartphone')">📱 ${window.t("cat_smartphone")}</button>
          <button class="interest-btn" onclick="toggleInterest(this, 'payments')">💳 ${window.t("cat_payments")}</button>
          <button class="interest-btn" onclick="toggleInterest(this, 'safety')">🛡️ ${window.t("cat_safety")}</button>
          <button class="interest-btn" onclick="toggleInterest(this, 'farmer')">🌾 ${window.t("cat_farmer")}</button>
          <button class="interest-btn" onclick="toggleInterest(this, 'business')">🏪 ${window.t("cat_business")}</button>
          <button class="interest-btn" onclick="toggleInterest(this, 'government')">🏛️ ${window.t("cat_government")}</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        <button class="btn-primary" style="width:100%; font-size:1.25rem;" onclick="finishOnboarding(false)">
          ${window.t("startLearningBtn")} ➔
        </button>
        <button class="btn-secondary" style="width:100%;" onclick="finishOnboarding(true)">
          ⭐ ${window.t("exploreDemoPrompt")}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

window.selectOnboardingLang = function(lang, btn) {
  window.setLanguage(lang);
  const oldModal = document.getElementById("onboarding-modal");
  if (oldModal) oldModal.remove();
  showOnboardingModal();
};

window.selectedInterests = ["smartphone", "payments"];
window.toggleInterest = function(btn, interestId) {
  btn.classList.toggle("selected");
  if (window.selectedInterests.includes(interestId)) {
    window.selectedInterests = window.selectedInterests.filter(x => x !== interestId);
  } else {
    window.selectedInterests.push(interestId);
  }
};

window.finishOnboarding = function(activateDemo) {
  localStorage.setItem("grama_onboarded", "true");
  localStorage.setItem("grama_user_interests", JSON.stringify(window.selectedInterests));

  const modal = document.getElementById("onboarding-modal");
  if (modal) modal.remove();

  if (activateDemo && window.GramaProgress) {
    window.GramaProgress.activateDemoMode();
  }

  if (window.renderCurrentRoute) {
    window.renderCurrentRoute();
  }
};

// PWA Service Worker Registration
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js")
        .then(reg => {
          console.log("[PWA] Service Worker registered with scope:", reg.scope);
        })
        .catch(err => {
          console.warn("[PWA] Service Worker registration failed:", err);
        });
    });
  }
}

// PWA Install Prompt Handler
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  console.log("[PWA] App is installable; prompt deferred.");
  const pwaBtn = document.getElementById("pwa-install-btn");
  if (pwaBtn) pwaBtn.style.display = "inline-flex";
});

window.triggerPWAInstall = function() {
  if (!deferredInstallPrompt) {
    alert("To install GramaGuide, open your browser menu (⋮) and tap 'Add to Home Screen' or 'Install App'.");
    return;
  }
  deferredInstallPrompt.prompt();
  deferredInstallPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("[PWA] User accepted the installation");
    }
    deferredInstallPrompt = null;
  });
};
