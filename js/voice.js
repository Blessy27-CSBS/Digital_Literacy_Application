// GramaGuide — Voice-First Interaction Controller
// Automatic Voice Assistant for all website contents
// Web Speech Synthesis (Text-to-Speech) & Web Speech Recognition (Voice Query Assistant)

window.GramaVoice = (function() {
  const synth = window.speechSynthesis;
  let currentUtterance = null;
  let recognition = null;
  let isListening = false;
  let hasUserInteracted = false;
  let pendingAutoplayText = null;
  let currentActiveHash = "#home";

  // Spoken narrative guides for each screen in English, தமிழ் (Tamil), and हिन्दी (Hindi)
  const SCREEN_NARRATIVES = {
    home: {
      ta: "வணக்கம்! கிராம கைடு டிஜிட்டல் வழிகாட்டிக்கு நல்வரவு. ஸ்மார்ட்போன் அடிப்படைகள், யுபிஐ கட்டணங்கள், மற்றும் ஆன்லைன் பாதுகாப்பு ஆகியவற்றை எளிய படங்களுடன் இங்குக் கற்கலாம். கீழே உள்ள ஏதேனும் ஒரு பிரிவைத் தொட்டுத் தொடங்குங்கள்.",
      hi: "नमस्ते! ग्रामगाइड डिजिटल साथी में आपका स्वागत है। स्मार्टफोन, सुरक्षित यूपीआई भुगतान और साइबर सुरक्षा आसानी से सीखें। शुरू करने के लिए किसी भी विषय पर टैप करें।",
      en: "Welcome to GramaGuide, your rural digital literacy companion. Learn smartphone basics, safe UPI payments, and cyber safety step-by-step. Tap any category below to begin."
    },
    learn: {
      ta: "திறன்கள் கற்றல் பகுதி. இங்கு 51 எளிய பாடங்கள் உள்ளன. ஸ்மார்ட்போன், இணையம், அரசு சேவைகள், அல்லது விவசாயக் கருவிகளைத் தேர்வு செய்து கற்கலாம்.",
      hi: "कौशल सीखें। यहाँ 51 व्यावहारिक डिजिटल पाठ हैं। अपनी पसंदीदा श्रेणी चुनें और नए कौशल सीखें।",
      en: "Explore 51 practical digital skills. Choose any category to master phone basics, payments, government portals, or smart farming tools."
    },
    practice: {
      ta: "நேரடி மாதிரி பயிற்சி மையம். போன் அழைப்பு, இருநூற்று ஐம்பது ரூபாய் யுபிஐ கட்டணம், மற்றும் கேமரா எடுப்பதை உண்மையான பண இழப்பின்றி மாதிரி முறையில் பயிற்சி செய்யுங்கள்.",
      hi: "प्रैक्टिस हब। फोन कॉल, सुरक्षित यूपीआई भुगतान और कैमरा फोकस का बिना किसी जोखिम के अभ्यास करें।",
      en: "Hands-on practice hub. Practice dialing numbers, making a safe 250 rupee UPI payment to Ravi Store, and capturing photos in safe simulated sandboxes."
    },
    scam: {
      ta: "மோசடி கண்டறியும் கருவி. சந்தேகத்திற்குரிய எஸ்எம்எஸ் அல்லது வாட்ஸ்அப் செய்தியை இங்கு ஒட்டி, அதில் உள்ள எச்சரிக்கை அறிகுறிகளை உடனடியாக சரிபார்க்கலாம்.",
      hi: "संदिग्ध संदेश जांचें। किसी भी लॉटरी या फर्जी बैंक संदेश को यहाँ पेस्ट करें और धोखाधड़ी के संकेतों की तुरंत जांच करें।",
      en: "Scam detector. Paste any suspicious SMS or WhatsApp message here to analyze fraud signals and warning signs."
    },
    doctor: {
      ta: "போன் டாக்டர் வழிகாட்டி. பேட்டரி விரைவில் குறைவது, இணையம் வேலை செய்யாதது, அல்லது போன் மெதுவாக இயங்குவது போன்ற சிக்கல்களுக்கு எளிய தீர்வுகளைப் பெறுங்கள்.",
      hi: "फ़ोन डॉक्टर। बैटरी जल्दी खत्म होना, इंटरनेट न चलना या फ़ोन हैंग होने जैसी समस्याओं के आसान चरण-दर-चरण समाधान पाएं।",
      en: "Phone doctor troubleshooter. Select your phone problem for step-by-step easy visual solutions."
    },
    family: {
      ta: "குடும்பத்திற்கு கற்பிக்கும் பகுதி. தாத்தா பாட்டி, பெற்றோர், அல்லது குழந்தைகளுக்கு போன் பயன்படுத்தக் கற்றுக்கொடுக்க எளிய சரிபார்ப்புப் பட்டியலைப் பின்பற்றுங்கள்.",
      hi: "परिवार को सिखाएं। दादा-दादी, माता-पिता या बच्चों को डिजिटल दुनिया से जोड़ने के लिए आसान चेकलिस्ट अपनाएं।",
      en: "Teach your family. Follow simple checklists to empower your grandparents, parents, or children with digital skills."
    },
    progress: {
      ta: "உங்கள் முன்னேற்றம் மற்றும் பதக்கங்கள். இதுவரை முடித்த பாடங்கள், வினாடி வினா மதிப்பெண், மற்றும் உங்கள் டிஜிட்டல் நம்பிக்கை நிலையை இங்கு காணலாம்.",
      hi: "आपकी प्रगति और पदक। अपने पूर्ण किए गए पाठ, क्विज स्कोर और डिजिटल आत्मविश्वास स्तर की जांच करें।",
      en: "Learning progress and badges. Check your mastered lessons, quiz scores, and digital confidence level."
    },
    settings: {
      ta: "அமைப்புகள் மற்றும் அணுகல்தன்மை. தமிழ் மொழி, பெரிய எழுத்துக்கள், அதிக மாறுபட்ட வண்ணங்கள், மற்றும் தானியங்கி குரல் வழிகாட்டியை இயக்கலாம்.",
      hi: "सेटिंग्स और सुगमता। भाषा, बड़े अक्षर, उच्च कंट्रास्ट और स्वचालित वॉइस गाइडेंस समायोजित करें।",
      en: "Settings and accessibility. Adjust language, large text mode, high contrast, and automatic voice narration."
    }
  };

  // 1. Initialize Voice System & Assistant UI
  function initVoiceSystem() {
    // Default to enabled if not set
    if (localStorage.getItem("grama_voice_guidance") === null) {
      localStorage.setItem("grama_voice_guidance", "true");
    }

    // Initialize Speech Recognition if supported
    initSpeechRecognition();

    // Render Floating Voice Companion Widget
    injectFloatingWidget();

    // Handle browser autoplay policies on first user interaction
    setupAutoplayUnlock();

    // Set up universal click-to-speak for interactive elements
    setupUniversalElementNarration();

    // Initial greeting on load
    setTimeout(() => {
      autoNarrateRoute(window.location.hash || "#home");
    }, 400);
  }

  function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    try {
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        isListening = true;
        updateMicButtonUI(true);
        updateWidgetStatus("Listening... பேசுங்கள் / Speak now");
      };

      recognition.onend = () => {
        isListening = false;
        updateMicButtonUI(false);
      };

      recognition.onerror = (event) => {
        console.warn("[GramaVoice] Speech recognition error:", event.error);
        isListening = false;
        updateMicButtonUI(false);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("[GramaVoice] User spoke:", transcript);
        handleVoiceCommand(transcript);
      };
    } catch (e) {
      console.warn("[GramaVoice] Speech recognition init error", e);
    }
  }

  // 2. Inject Floating Voice Assistant Companion Bar
  function injectFloatingWidget() {
    if (document.getElementById("floating-voice-widget")) return;

    const widget = document.createElement("div");
    widget.id = "floating-voice-widget";
    widget.className = "floating-voice-bar";
    const isMuted = localStorage.getItem("grama_voice_guidance") === "false";
    if (isMuted) widget.classList.add("muted");
    if (localStorage.getItem("grama_voice_minimized") === "true") {
      widget.classList.add("minimized");
    }

    widget.innerHTML = `
      <div class="voice-assistant-avatar" onclick="GramaVoice.handleAvatarClick()" title="குரல் வழிகாட்டி / Voice Guide">
        <span class="voice-avatar-icon">🗣️</span>
        <span class="voice-wave-dot"></span>
      </div>
      <div class="voice-status-info" onclick="GramaVoice.replayCurrentPage()">
        <div class="voice-status-title" id="voice-widget-title">குரல் வழிகாட்டி • Voice Guide</div>
        <div class="voice-status-text" id="voice-widget-status">கேட்க தட்டவும் / Tap to listen</div>
      </div>
      <div class="voice-actions-group">
        <button class="voice-ctrl-btn" id="voice-replay-btn" onclick="GramaVoice.replayCurrentPage()" title="மீண்டும் பேசு / Read Aloud">
          🔁
        </button>
        <button class="voice-ctrl-btn" id="voice-stop-btn" onclick="GramaVoice.stopSpeaking()" title="நிறுத்து / Stop Voice">
          ⏹️
        </button>
        <button class="voice-ctrl-btn" id="voice-mic-btn" onclick="GramaVoice.toggleVoiceListening()" title="குரலில் கேள் / Voice Search">
          🎤
        </button>
        <button class="voice-ctrl-btn" id="voice-mute-btn" onclick="GramaVoice.toggleMute()" title="முடக்கு / Mute Voice">
          ${isMuted ? "🔕" : "🔔"}
        </button>
        <button class="voice-ctrl-btn voice-minimize-btn" id="voice-minimize-btn" onclick="GramaVoice.toggleWidgetMinimize()" title="சுருக்கு / Minimize">
          ➖
        </button>
      </div>
    `;

    document.body.appendChild(widget);
  }

  function handleAvatarClick() {
    const widget = document.getElementById("floating-voice-widget");
    if (widget && widget.classList.contains("minimized")) {
      toggleWidgetMinimize(false);
    } else {
      replayCurrentPage();
    }
  }

  function toggleWidgetMinimize(forcedState) {
    const widget = document.getElementById("floating-voice-widget");
    if (!widget) return;
    const shouldMin = typeof forcedState === "boolean" ? forcedState : !widget.classList.contains("minimized");
    if (shouldMin) {
      widget.classList.add("minimized");
      localStorage.setItem("grama_voice_minimized", "true");
    } else {
      widget.classList.remove("minimized");
      localStorage.setItem("grama_voice_minimized", "false");
    }
  }

  // Handle browser audio autoplay unlock
  function setupAutoplayUnlock() {
    const unlockHandler = () => {
      hasUserInteracted = true;
      if (pendingAutoplayText) {
        const textToSpeak = pendingAutoplayText;
        pendingAutoplayText = null;
        speakText(textToSpeak);
      }
      window.removeEventListener("click", unlockHandler);
      window.removeEventListener("touchstart", unlockHandler);
      window.removeEventListener("keydown", unlockHandler);
    };

    window.addEventListener("click", unlockHandler, { once: true });
    window.addEventListener("touchstart", unlockHandler, { once: true });
    window.addEventListener("keydown", unlockHandler, { once: true });
  }

  // 3. Universal Speech Synthesis (Text-to-Speech)
  function speakText(text, langOverride, onEndCallback) {
    if (!synth) {
      console.warn("[GramaVoice] Speech synthesis is not supported on this device.");
      return;
    }

    if (!isVoiceGuidanceEnabled()) {
      return;
    }

    if (!text || typeof text !== "string") return;

    // If browser hasn't registered a user interaction yet, modern browsers may block audio
    if (!hasUserInteracted) {
      pendingAutoplayText = text;
      updateWidgetStatus("தட்டவும்: " + text.slice(0, 30) + "...");
    }

    stopSpeaking();

    const lang = langOverride || window.currentLang || localStorage.getItem("grama_lang") || "en";
    let bcp47Lang = "en-IN";
    if (lang === "ta") bcp47Lang = "ta-IN";
    if (lang === "hi") bcp47Lang = "hi-IN";

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = bcp47Lang;
    currentUtterance.rate = 0.88; // Slightly slower pace for maximum rural clarity
    currentUtterance.pitch = 1.0;

    // Select matched voice
    const voices = synth.getVoices();
    const matchingVoice = voices.find(v => v.lang.toLowerCase().startsWith(bcp47Lang.toLowerCase().slice(0, 2)));
    if (matchingVoice) {
      currentUtterance.voice = matchingVoice;
    }

    currentUtterance.onstart = () => {
      setWidgetSpeakingState(true, text);
    };

    currentUtterance.onend = () => {
      setWidgetSpeakingState(false);
      if (onEndCallback) onEndCallback();
    };

    currentUtterance.onerror = (e) => {
      console.warn("[GramaVoice] Speech error:", e);
      setWidgetSpeakingState(false);
    };

    try {
      synth.speak(currentUtterance);
    } catch (err) {
      console.warn("[GramaVoice] Synthesis call error:", err);
    }
  }

  function stopSpeaking() {
    if (synth && synth.speaking) {
      synth.cancel();
    }
    setWidgetSpeakingState(false);
  }

  function setWidgetSpeakingState(isSpeaking, text) {
    const widget = document.getElementById("floating-voice-widget");
    const statusEl = document.getElementById("voice-widget-status");
    const titleEl = document.getElementById("voice-widget-title");
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    if (widget) {
      if (isSpeaking) {
        widget.classList.add("speaking");
      } else {
        widget.classList.remove("speaking");
      }
    }

    if (titleEl) {
      titleEl.textContent = (lang === "ta") ? "குரல் வழிகாட்டி" : ((lang === "hi") ? "ग्रामगाइड वॉइस" : "Voice Guide");
    }

    if (statusEl) {
      if (isSpeaking && text) {
        statusEl.textContent = text.slice(0, 36) + (text.length > 36 ? "..." : "");
      } else {
        statusEl.textContent = (lang === "ta") ? "தயாராக உள்ளது • தட்டவும்" : ((lang === "hi") ? "तैयार • सुनने के लिए टैप करें" : "Ready • Tap to listen");
      }
    }
  }

  function updateWidgetStatus(msg) {
    const statusEl = document.getElementById("voice-widget-status");
    if (statusEl) statusEl.textContent = msg;
  }

  function isVoiceGuidanceEnabled() {
    return localStorage.getItem("grama_voice_guidance") !== "false";
  }

  // 4. Screen-Level Automatic Narration
  function autoNarrateRoute(hash) {
    currentActiveHash = hash || "#home";
    if (!isVoiceGuidanceEnabled()) return;

    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    // If it's a specific lesson (#lesson/{id})
    if (hash.startsWith("#lesson/")) {
      const lessonId = hash.replace("#lesson/", "");
      const lesson = (window.LESSONS_DATA || []).find(l => l.id === lessonId);
      if (lesson) {
        narrateLessonStep(lesson, 1, 0);
      }
      return;
    }

    // Determine category / screen
    let routeKey = "home";
    if (hash.startsWith("#learn")) routeKey = "learn";
    else if (hash === "#practice") routeKey = "practice";
    else if (hash.startsWith("#scam")) routeKey = "scam";
    else if (hash.startsWith("#doctor") || hash.startsWith("#phone-doctor")) routeKey = "doctor";
    else if (hash.startsWith("#family")) routeKey = "family";
    else if (hash.startsWith("#progress")) routeKey = "progress";
    else if (hash.startsWith("#settings")) routeKey = "settings";

    const narrativeObj = SCREEN_NARRATIVES[routeKey] || SCREEN_NARRATIVES.home;
    const textToSpeak = narrativeObj[lang] || narrativeObj.en;

    speakText(textToSpeak, lang);
  }

  // 5. Lesson Stage & Step Automatic Narration
  function narrateLessonStep(lesson, stage, stepIndex) {
    if (!isVoiceGuidanceEnabled() || !lesson) return;

    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    let textToSpeak = "";

    // Stage 1: SEE
    if (stage === 1) {
      const step = lesson.steps[stepIndex] || lesson.steps[0];
      const stepTitle = step.title[lang] || step.title.en;
      const stepDesc = step.desc[lang] || step.desc.en;
      const stepLabel = (lang === "ta") ? `படி ${step.num}: ` : ((lang === "hi") ? `चरण ${step.num}: ` : `Step ${step.num}: `);
      textToSpeak = `${stepLabel} ${stepTitle}. ${stepDesc}`;
    }
    // Stage 2: HEAR
    else if (stage === 2) {
      textToSpeak = lesson.voiceText[lang] || lesson.voiceText.en;
    }
    // Stage 3: TRY
    else if (stage === 3) {
      const sim = lesson.simulation || { type: "generic" };
      if (sim.type === "dialer") {
        textToSpeak = (lang === "ta") ? "பயிற்சி அழைப்பு. ஒன்பது எட்டு ஏழு ஆறு ஐந்து நான்கு மூன்று இரண்டு பூஜ்ஜியம் என எண்களை அழுத்தி பச்சை பட்டனைத் தொடவும்." : "Dial the phone number and press the green call button.";
      } else if (sim.type === "upi_pay" || lesson.category === "payments") {
        textToSpeak = (lang === "ta") ? "பாதுகாப்பான மாதிரி கட்டணம். ரவி ஸ்டோருக்கு ₹250 செலுத்த தொடரவும். பின்னர் ரகசிய பின்னை உள்ளிடவும். இது மாதிரி பயிற்சி மட்டுமே." : "Safe UPI simulator. Practice paying 250 rupees securely to Ravi Store.";
      } else if (sim.type === "camera") {
        textToSpeak = (lang === "ta") ? "கேமரா பயிற்சி. போனை அசையாமல் பிடித்து வெள்ளை வட்ட பொத்தானைத் தொட்டு படம் பிடிக்கவும்." : "Camera practice. Hold steady and tap the shutter button.";
      } else if (sim.type === "sms") {
        textToSpeak = (lang === "ta") ? "எஸ்எம்எஸ் செய்தி அனுப்பும் பயிற்சி. சகோதரர் சரவணனுக்கு செய்தி அனுப்ப அம்பு குறியைத் தொடவும்." : "SMS practice. Send a message to your family member.";
      } else {
        textToSpeak = (lang === "ta") ? "மாதிரி பயிற்சி. இந்த திறனைப் படித்து பயிற்சி செய்துவிட்டேன் என்பதை அழுத்தவும்." : "Interactive practice demo. Review and tap complete.";
      }
    }
    // Stage 4: COMPLETE
    else if (stage === 4) {
      textToSpeak = (lang === "ta") ? "வாழ்த்துக்கள்! இந்த டிஜிட்டல் திறனை நீங்கள் வெற்றிகரமாகக் கற்றுக்கொண்டீர்கள்!" : "Congratulations! You have mastered this digital skill.";
    }

    speakText(textToSpeak, lang);
  }

  // 6. Universal Tap-to-Speak for Cards and Elements
  function setupUniversalElementNarration() {
    document.addEventListener("click", (event) => {
      // Don't interrupt if user is pressing voice control buttons or inputs
      if (event.target.closest("#floating-voice-widget, input, textarea, .lang-btn, .switch-toggle")) {
        return;
      }

      // Check for elements with data-speak attribute
      const speakEl = event.target.closest("[data-speak]");
      if (speakEl) {
        const customText = speakEl.getAttribute("data-speak");
        if (customText) {
          speakText(customText);
          return;
        }
      }

      // Read Daily Tip banner when clicked
      const tipBanner = event.target.closest(".tip-banner");
      if (tipBanner) {
        const textEl = tipBanner.querySelector(".tip-text");
        if (textEl) {
          speakText(textEl.textContent.replace(/"/g, ""));
          return;
        }
      }

      // Read Category Card when clicked or tapped
      const catCard = event.target.closest(".cat-card");
      if (catCard && !event.target.closest("a, button")) {
        const h3 = catCard.querySelector("h3");
        const desc = catCard.querySelector(".cat-desc");
        if (h3 && desc) {
          speakText(`${h3.textContent}. ${desc.textContent}`);
        }
      }
    });
  }

  // 7. Replay the Current Page Aloud
  function replayCurrentPage() {
    hasUserInteracted = true;
    autoNarrateRoute(window.location.hash || "#home");
  }

  // 8. Toggle Voice Guidance Mute/Unmute
  function toggleMute() {
    hasUserInteracted = true;
    const currentState = isVoiceGuidanceEnabled();
    const newState = !currentState;
    localStorage.setItem("grama_voice_guidance", newState ? "true" : "false");

    const widget = document.getElementById("floating-voice-widget");
    const muteBtn = document.getElementById("voice-mute-btn");
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    if (widget) {
      if (newState) {
        widget.classList.remove("muted");
      } else {
        widget.classList.add("muted");
      }
    }

    if (muteBtn) {
      muteBtn.textContent = newState ? "🔔" : "🔕";
    }

    if (newState) {
      const msg = (lang === "ta") ? "குரல் வழிகாட்டி இயக்கப்பட்டது." : ((lang === "hi") ? "वॉइस गाइडेंस चालू किया गया।" : "Voice guidance enabled.");
      speakText(msg);
    } else {
      stopSpeaking();
    }
  }

  // 9. Handle Language Changes with Spoken Feedback
  function onLanguageChanged(newLang) {
    hasUserInteracted = true;
    const langMsg = {
      ta: "மொழி தமிழுக்கு மாற்றப்பட்டது. கிராம கைடு குரல் வழிகாட்டி தயாராக உள்ளது.",
      hi: "भाषा हिंदी में बदल दी गई है। ग्रामगाइड वॉइस गाइड तैयार है।",
      en: "Language set to English. GramaGuide voice assistant is ready."
    };

    const text = langMsg[newLang] || langMsg.en;
    speakText(text, newLang, () => {
      // Immediately narrate the active page in the new language
      setTimeout(() => {
        autoNarrateRoute(window.location.hash || "#home");
      }, 300);
    });
  }

  // 10. Voice Assistant Query Trigger
  function toggleVoiceListening() {
    hasUserInteracted = true;
    if (!recognition) {
      const lang = window.currentLang || "en";
      const errMsg = (lang === "ta") ? "இந்த உலாவியில் மைக்ரோஃபோன் குரல் தேடல் ஆதரிக்கப்படவில்லை." : "Speech recognition is not supported in this browser.";
      alert(errMsg);
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
      let recLang = "en-IN";
      if (lang === "ta") recLang = "ta-IN";
      if (lang === "hi") recLang = "hi-IN";

      recognition.lang = recLang;
      try {
        recognition.start();
      } catch (err) {
        console.warn("[GramaVoice] Recognition start error:", err);
      }
    }
  }

  function updateMicButtonUI(listening) {
    const btn = document.getElementById("header-voice-btn");
    const widgetMicBtn = document.getElementById("voice-mic-btn");
    if (btn) {
      if (listening) btn.classList.add("listening");
      else btn.classList.remove("listening");
    }
    if (widgetMicBtn) {
      widgetMicBtn.style.background = listening ? "var(--color-primary)" : "var(--color-bg)";
      widgetMicBtn.style.color = listening ? "#fff" : "inherit";
    }
  }

  function handleVoiceCommand(query) {
    const q = query.toLowerCase();

    // Check for Scams
    if (q.includes("scam") || q.includes("fraud") || q.includes("safe") || q.includes("மோசடி") || q.includes("பாதுகாப்ப") || q.includes("फ्रॉड") || q.includes("धोखा")) {
      speakText("Opening Scam Detector.");
      window.location.hash = "#scam-detector";
      return;
    }

    // Check for UPI / Payments
    if (q.includes("upi") || q.includes("pay") || q.includes("money") || q.includes("பணம்") || q.includes("கட்டணம்") || q.includes("पैसे") || q.includes("भुगतान")) {
      speakText("Opening UPI payments lesson.");
      window.location.hash = "#lesson/l_pay_3";
      return;
    }

    // Check for Phone Call
    if (q.includes("call") || q.includes("phone") || q.includes("அழைப்பு") || q.includes("போன்") || q.includes("कॉल") || q.includes("फोन")) {
      speakText("Opening phone call simulator.");
      window.location.hash = "#lesson/l_phone_1";
      return;
    }

    // Check for Farmer
    if (q.includes("farm") || q.includes("weather") || q.includes("rain") || q.includes("மழை") || q.includes("விவசாயம்") || q.includes("किसान") || q.includes("बारिश") || q.includes("मौसम")) {
      speakText("Opening Farmer weather guide.");
      window.location.hash = "#lesson/l_farm_1";
      return;
    }

    // Check for Phone Doctor
    if (q.includes("doctor") || q.includes("slow") || q.includes("battery") || q.includes("பழுது") || q.includes("டாக்டர்") || q.includes("समस्या") || q.includes("बैटरी")) {
      speakText("Opening Phone Doctor.");
      window.location.hash = "#phone-doctor";
      return;
    }

    // Fallback: search query on home page
    window.location.hash = "#home";
    setTimeout(() => {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        searchInput.value = query;
        if (window.GramaRouter && window.GramaRouter.handleSearch) {
          window.GramaRouter.handleSearch(query);
        }
      }
    }, 250);
  }

  return {
    initVoiceSystem,
    speakText,
    stopSpeaking,
    autoNarrateRoute,
    narrateLessonStep,
    replayCurrentPage,
    toggleMute,
    onLanguageChanged,
    toggleVoiceListening,
    isVoiceGuidanceEnabled,
    handleAvatarClick,
    toggleWidgetMinimize
  };
})();
