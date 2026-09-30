// GramaGuide — Lesson Engine: SEE → HEAR → TRY → COMPLETE
// Interactive sandbox simulators: Phone Dialer, SMS, Camera, UPI Payment with PIN Pad

window.GramaLessons = (function() {
  let currentLesson = null;
  let currentStepIndex = 0;
  let currentStage = 1; // 1: SEE, 2: HEAR, 3: TRY, 4: COMPLETE
  let isShowMeMode = false;

  // Render a specific lesson
  function renderLesson(lessonId, container) {
    const lesson = (window.LESSONS_DATA || []).find(l => l.id === lessonId);
    if (!lesson) {
      container.innerHTML = `<p style="padding:20px;">Lesson not found. <a href="#learn">Back to lessons</a></p>`;
      return;
    }

    currentLesson = lesson;
    currentStepIndex = 0;
    currentStage = 1;

    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const title = lesson.title[lang] || lesson.title.en;
    const desc = lesson.description[lang] || lesson.description.en;

    container.innerHTML = `
      <div class="lesson-view-container" id="active-lesson-shell">
        <div class="lesson-top-bar">
          <button class="btn-back" onclick="window.location.hash='#learn'">
            ← ${window.t("backToLessons")}
          </button>
          <button class="mode-toggle-btn" id="show-me-toggle-btn" onclick="GramaLessons.toggleShowMeMode()">
            ${isShowMeMode ? window.t("normalMode") : window.t("showMeMode")}
          </button>
        </div>

        <div class="lesson-title-area">
          <div class="lesson-main-icon">${lesson.icon}</div>
          <div>
            <h2>${title}</h2>
            <p style="color:var(--color-text-muted); font-weight:600;">${desc}</p>
          </div>
        </div>

        <!-- 4 Stage Pills Indicator -->
        <div class="stages-stepper">
          <div class="stage-pill active" id="stage-pill-1" onclick="GramaLessons.goToStage(1)">${window.t("stageSee")}</div>
          <div class="stage-pill" id="stage-pill-2" onclick="GramaLessons.goToStage(2)">${window.t("stageHear")}</div>
          <div class="stage-pill" id="stage-pill-3" onclick="GramaLessons.goToStage(3)">${window.t("stageTry")}</div>
          <div class="stage-pill" id="stage-pill-4" onclick="GramaLessons.goToStage(4)">${window.t("stageComplete")}</div>
        </div>

        <!-- Stage Dynamic Content View -->
        <div id="stage-content-viewport">
          <!-- Rendered by updateStageView() -->
        </div>

        <!-- Safety Rule Warning Box -->
        <div class="safety-warning-box">
          <div class="warn-icon">🛡️</div>
          <div>
            <div style="font-weight:800; color:#E65100; font-size:0.95rem;">${window.t("safetyTipHeading")}</div>
            <div style="font-weight:700; color:#3E2723;">${lesson.safetyTip[lang] || lesson.safetyTip.en}</div>
          </div>
        </div>
      </div>
    `;

    updateStageView();
  }

  function goToStage(stageNum) {
    currentStage = stageNum;
    for (let i = 1; i <= 4; i++) {
      const pill = document.getElementById(`stage-pill-${i}`);
      if (pill) {
        pill.classList.remove("active", "completed");
        if (i < stageNum) pill.classList.add("completed");
        if (i === stageNum) pill.classList.add("active");
      }
    }
    updateStageView();
  }

  function toggleShowMeMode() {
    isShowMeMode = !isShowMeMode;
    const btn = document.getElementById("show-me-toggle-btn");
    if (btn) btn.textContent = isShowMeMode ? window.t("normalMode") : window.t("showMeMode");
    updateStageView();
  }

  // Update View based on Stage
  function updateStageView() {
    const viewport = document.getElementById("stage-content-viewport");
    if (!viewport || !currentLesson) return;

    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    // STAGE 1: SEE
    if (currentStage === 1) {
      if (isShowMeMode) {
        // Show Me Mode: Pure icon sequences and large numbers with zero reading barrier
        let iconFlowHtml = currentLesson.steps.map(s => `
          <div style="display:inline-flex; flex-direction:column; align-items:center; margin:12px;">
            <div style="font-size:2rem; font-weight:900; color:var(--color-primary);">${s.num}️⃣</div>
            <div style="font-size:4rem;">${getVisualIcon(s.visual)}</div>
          </div>
        `).join(`<div style="display:inline-block; font-size:2.5rem; color:var(--color-border); vertical-align:middle;">➔</div>`);

        viewport.innerHTML = `
          <div class="step-visual-card">
            <div style="font-size:1.4rem; font-weight:800; margin-bottom:16px;">👀 ${window.t("showMeMode")}</div>
            <div style="display:flex; flex-wrap:wrap; justify-content:center; align-items:center;">
              ${iconFlowHtml}
            </div>
            <div style="margin-top:24px;">
              <button class="btn-primary" onclick="GramaLessons.goToStage(2)">
                ${window.t("stageHear")} ➔
              </button>
            </div>
          </div>
        `;
      } else {
        const step = currentLesson.steps[currentStepIndex];
        const stepTitle = step.title[lang] || step.title.en;
        const stepDesc = step.desc[lang] || step.desc.en;

        viewport.innerHTML = `
          <div class="step-visual-card">
            <div class="step-visual-icon">${getVisualIcon(step.visual)}</div>
            <span class="step-num-badge">${window.t("step")} ${step.num} ${window.t("ofText")} ${currentLesson.steps.length}</span>
            <h3 class="step-heading">${stepTitle}</h3>
            <p class="step-explanation">${stepDesc}</p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
              ${currentStepIndex > 0 ? `<button class="btn-secondary" onclick="GramaLessons.prevStep()">← ${window.t("prevStep")}</button>` : ""}
              ${currentStepIndex < currentLesson.steps.length - 1 ? 
                `<button class="btn-primary" onclick="GramaLessons.nextStep()">${window.t("nextStep")} →</button>` : 
                `<button class="btn-success" onclick="GramaLessons.goToStage(2)">${window.t("stageHear")} ➔</button>`
              }
            </div>
          </div>
        `;
      }
    }

    // STAGE 2: HEAR
    else if (currentStage === 2) {
      const voiceNarrative = currentLesson.voiceText[lang] || currentLesson.voiceText.en;
      viewport.innerHTML = `
        <div class="step-visual-card">
          <div class="step-visual-icon">🔊</div>
          <h3 class="step-heading">${window.t("hearInstructionsAloud")}</h3>
          <p class="step-explanation" style="font-size:1.25rem; color:#2E7D32; font-weight:700;">"${voiceNarrative}"</p>
          <div class="audio-action-bar">
            <button class="audio-btn-large" onclick="GramaLessons.speakStageHearText()">
              🔊 <span class="voice-btn-indicator">${window.t("listenVoice")}</span>
            </button>
            <button class="btn-secondary" onclick="GramaVoice.stopSpeaking()">
              ⏹️ ${window.t("voiceStop")}
            </button>
          </div>
          <div style="margin-top:20px;">
            <button class="btn-primary" onclick="GramaLessons.goToStage(3)">
              ${window.t("stageTry")} (${window.t("trySimulationBtn")}) ➔
            </button>
          </div>
        </div>
      `;
    }

    // STAGE 3: TRY (Interactive Sandbox Simulators)
    else if (currentStage === 3) {
      renderSimulationSandbox(viewport, currentLesson);
    }

    // STAGE 4: COMPLETE
    else if (currentStage === 4) {
      // Mark completed in IndexedDB
      if (window.GramaProgress) {
        window.GramaProgress.markLessonCompleted(currentLesson.id);
      }

      viewport.innerHTML = `
        <div class="celebration-screen">
          <div class="celebration-icon">🎉</div>
          <h2 style="font-size:2.2rem; font-weight:900; color:var(--color-secondary); margin:12px 0;">
            ${window.t("lessonCompletedCongrats")}
          </h2>
          <p style="font-size:1.3rem; font-weight:700; color:var(--color-text-muted); margin-bottom:24px;">
            ${window.t("lessonCompletedSub")}
          </p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <button class="btn-primary" onclick="GramaLessons.goToNextLesson()">
              ${window.t("continueNextLesson")} ➔
            </button>
            <button class="btn-secondary" onclick="window.location.hash='#learn'">
              ${window.t("backToLessons")}
            </button>
          </div>
        </div>
      `;
    }

    // Automatic Voice Assistant: Narrate active stage & step aloud
    if (window.GramaVoice && window.GramaVoice.narrateLessonStep) {
      window.GramaVoice.narrateLessonStep(currentLesson, currentStage, currentStepIndex);
    }
  }

  function nextStep() {
    if (currentStepIndex < currentLesson.steps.length - 1) {
      currentStepIndex++;
      updateStageView();
    }
  }

  function prevStep() {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      updateStageView();
    }
  }

  function goToNextLesson() {
    const all = window.LESSONS_DATA || [];
    const idx = all.findIndex(l => l.id === currentLesson.id);
    if (idx !== -1 && idx < all.length - 1) {
      window.location.hash = `#lesson/${all[idx + 1].id}`;
    } else {
      window.location.hash = "#learn";
    }
  }

  // Visual helper for icons
  function getVisualIcon(type) {
    const map = {
      phone_icon: "📞",
      keypad: "🔢",
      calling: "📲",
      end_call: "🔴",
      sms_icon: "💬",
      contact_select: "👤",
      type_box: "⌨️",
      send_arrow: "➡️",
      camera_icon: "📷",
      camera_aim: "🎯",
      shutter_tap: "⚪",
      gallery_view: "🖼️",
      vol_buttons: "🔊",
      swipe_down: "⬇️",
      brightness_bar: "☀️",
      settings_gear: "⚙️",
      lock_symbol: "🔒",
      pin_entry: "🔢",
      data_wifi_icons: "📶",
      data_toggle: "🔄",
      wifi_toggle: "📡",
      chrome_icon: "🌐",
      address_bar: "🔍",
      ssl_lock: "🔒",
      mic_icon: "🎤",
      listening_wave: "〰️",
      voice_query: "🗣️",
      file_types: "📄",
      download_arrow: "📥",
      files_folder: "📁",
      playstore_icon: "🛍️",
      app_ratings: "⭐",
      install_btn: "🟢",
      bank_to_bank: "🏦",
      clock_247: "⏰",
      zero_fee: "🆓",
      scan_icon: "📷",
      qr_frame: "🔲",
      verify_name: "✅",
      check_receiver: "👤",
      enter_amount: "💵",
      pin_pad: "🔢",
      success_tick: "🎉",
      send_money_pin: "📤",
      receive_no_pin: "📥",
      scam_exposed: "🚨",
      check_bal_btn: "🏦",
      bank_list: "🏛️",
      pin_pad_secure: "🔐",
      otp_sms: "📩",
      nobody_icon: "🚫",
      hangup_call: "📴",
      free_money_flag: "🚩",
      trap_fee: "⚠️",
      block_number: "⛔",
      link_sample: "🔗",
      gov_domain: "🏛️",
      check_detector: "🕵️",
      fear_tactic: "⏱️",
      screen_share_warn: "🛑",
      visit_office: "🏢",
      profile_lock: "🔐",
      duplicate_friend: "👥",
      permission_logic: "🛡️",
      permission_dialog: "✋",
      permission_toggle: "⚙️",
      open_wifi: "⚠️",
      switch_to_data: "📶",
      call_1930: "🆘",
      block_bank: "🏛️",
      save_utr: "📝",
      digilocker_icon: "🪪",
      aadhaar_auth: "🔐",
      issued_docs: "📜",
      ration_app: "🍚",
      entitlement_screen: "🌾",
      quota_table: "📊",
      pmkisan_web: "🌾",
      farmer_corner: "👨‍🌾",
      ekyc_check: "✅",
      ayushman_icon: "🏥",
      hospital_search: "🔎",
      mitra_desk: "🤝",
      bhulekh_web: "🗺️",
      village_select: "🏡",
      survey_num: "📐",
      weather_widget: "🌦️",
      rain_percent: "🌧️",
      wind_speed: "💨",
      enam_logo: "💰",
      crop_select: "🌾",
      price_compare: "⚖️",
      leaf_focus: "🌿",
      shadow_shot: "📷",
      send_agri: "📲",
      dial_1800: "☎️",
      language_press: "🌐",
      agri_expert: "👨‍🔬",
      seed_tag: "🏷️",
      tax_invoice: "🧾",
      bag_barcode: "🔲",
      qr_standee: "🏪",
      soundbox_speaker: "🔊",
      add_customer: "👤",
      khata_buttons: "📒",
      due_customer: "⏳",
      reminder_preview: "💬",
      wipe_lens: "✨",
      sun_light: "☀️",
      status_post: "📲",
      fake_screen: "🛑",
      real_soundbox: "🔊",
      bank_sms_verify: "📩",
      chat_open: "💬",
      video_cam_btn: "📹",
      flip_cam: "🔄",
      green_mic: "🎙️",
      holding_mic: "🔴",
      slide_cancel: "🗑️",
      paperclip_icon: "📎",
      location_pin: "📍",
      send_current_loc: "📤",
      storage_warn: "💾",
      mute_group: "🔕",
      forward_arrow: "⏩",
      newspaper_check: "📰",
      break_chain: "🛑",
      maps_icon: "🗺️",
      maps_mic: "🎤",
      directions_btn: "🧭",
      start_nav: "🟢",
      speaker_on: "🔊",
      pocket_guide: "👖",
      nav_start_trip: "🚗",
      swipe_up_menu: "⬆️",
      trip_shared: "👨‍👩‍👧",
      brain_chip: "🤖",
      phone_ai: "📱",
      verify_ai: "🧐",
      assistant_dots: "🌈",
      speak_command: "🗣️",
      auto_action: "⚡",
      lens_icon: "🔍",
      lens_translate: "🌐",
      translated_text: "✨",
      specific_prompt: "✍️",
      native_input: "🗣️",
      voice_clone_alert: "🎭",
      secret_word: "🔑",
      call_back_direct: "📞"
    };
    return map[type] || "📱";
  }

  // =========================================================================
  // SIMULATOR RENDERING (TRY Step Sandbox)
  // =========================================================================
  function renderSimulationSandbox(viewport, lesson) {
    const sim = lesson.simulation || { type: "generic" };
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";

    // 1. PHONE DIALER SIMULATOR
    if (sim.type === "dialer") {
      viewport.innerHTML = `
        <div class="simulation-box">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">📱 ${window.t("simPracticeHeading")} ${window.t("practiceCallTitle")}</h3>
          <p style="color:var(--color-text-muted); margin-bottom:16px;">${window.t("simDialSub")}</p>

          <div class="simulated-phone">
            <div class="phone-top-speaker"></div>
            <div class="phone-screen-inner" id="phone-sim-screen">
              <div>
                <div style="font-size:0.85rem; color:#718096; font-weight:700;">SIM 1 - Airtel / Jio</div>
                <div id="sim-dialed-number" style="font-size:1.7rem; font-weight:900; letter-spacing:2px; height:45px; margin-top:8px; border-bottom:2px solid #CBD5E1; color:#1A202C;"></div>
              </div>

              <div class="dialpad-grid">
                ${[1,2,3,4,5,6,7,8,9,"*",0,"#"].map(k => `
                  <button class="dialpad-key" onclick="GramaLessons.simDialPress('${k}')">${k}</button>
                `).join("")}
              </div>

              <div style="display:flex; justify-content:space-around; align-items:center;">
                <button class="btn-success" style="width:70px; height:70px; border-radius:50%; font-size:2rem;" onclick="GramaLessons.simStartCall()">
                  📞
                </button>
                <button class="btn-secondary" style="width:50px; height:50px; border-radius:50%; font-size:1.2rem;" onclick="GramaLessons.simBackspace()">
                  ⌫
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 2. UPI PAYMENT SIMULATOR (₹250 to Ravi Store)
    else if (sim.type === "upi_pay" || lesson.category === "payments") {
      window.simEnteredPin = "";
      viewport.innerHTML = `
        <div class="simulation-box">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">💳 ${window.t("practicePayTitle")}</h3>
          <p style="color:var(--color-text-muted); margin-bottom:16px;">${window.t("simUpiSub")}</p>

          <div class="simulated-phone">
            <div class="phone-top-speaker"></div>
            <div class="phone-screen-inner" id="upi-sim-screen">
              <!-- Screen 1: Payment Details -->
              <div id="upi-step-1">
                <div style="text-align:center; margin:16px 0;">
                  <div style="font-size:3rem;">🏪</div>
                  <div style="font-size:1.3rem; font-weight:800; color:#1A202C;">Ravi General Store</div>
                  <div style="font-size:0.85rem; color:#718096; font-weight:700;">ravistore@upi • Verified ✅</div>
                </div>

                <div style="background:#F7FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:16px; text-align:center; margin:16px 0;">
                  <div style="font-size:0.9rem; color:#718096; font-weight:700;">${window.t("upiAmount")}</div>
                  <div style="font-size:2.2rem; font-weight:900; color:#2D3748;">₹250</div>
                </div>

                <div style="margin-top:auto;">
                  <button class="btn-primary" style="width:100%;" onclick="GramaLessons.upiProceedToPin()">
                    ${window.t("upiPayNow")}
                  </button>
                </div>
              </div>

              <!-- Screen 2: Enter UPI PIN -->
              <div id="upi-step-2" style="display:none;">
                <div style="text-align:center; margin-top:10px;">
                  <div style="font-size:0.9rem; font-weight:800; color:#4A5568;">${window.t("upiEnterPin")}</div>
                  <div style="font-size:0.8rem; color:#E53E3E; font-weight:700; margin-top:4px;">${window.t("upiPinWarning")}</div>
                  
                  <div class="pin-dots-display">
                    <div class="pin-dot" id="pdot-1"></div>
                    <div class="pin-dot" id="pdot-2"></div>
                    <div class="pin-dot" id="pdot-3"></div>
                    <div class="pin-dot" id="pdot-4"></div>
                  </div>
                </div>

                <div class="dialpad-grid" style="margin-top:10px;">
                  ${[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map(k => {
                    if (k === "") return `<div></div>`;
                    if (k === "⌫") return `<button class="dialpad-key" onclick="GramaLessons.upiPinBackspace()">⌫</button>`;
                    return `<button class="dialpad-key" onclick="GramaLessons.upiPinType('${k}')">${k}</button>`;
                  }).join("")}
                </div>

                <button class="btn-success" style="width:100%; margin-top:8px;" onclick="GramaLessons.upiConfirmPayment()">
                  ${window.t("upiConfirmBtn")}
                </button>
              </div>

              <!-- Screen 3: Success Screen -->
              <div id="upi-step-3" style="display:none; text-align:center; padding-top:40px;">
                <div style="font-size:4.5rem; color:#2E7D32;">✅</div>
                <div style="font-size:1.6rem; font-weight:900; color:#1B5E20;">${window.t("upiSuccess")}</div>
                <div style="font-size:0.95rem; font-weight:700; color:#4A5568; margin:8px 0;">${window.t("smsTo")} Ravi General Store</div>
                <div style="background:#E8F5E9; border:1px solid #A5D6A7; border-radius:12px; padding:12px; margin:20px 0; font-size:0.85rem; font-weight:700; color:#1B5E20;">
                  ${window.t("upiSoundboxMsg")}
                </div>
                <button class="btn-primary" style="width:100%;" onclick="GramaLessons.goToStage(4)">
                  ${window.t("stageComplete")} ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 3. CAMERA / CROP SIMULATOR
    else if (sim.type === "camera" || sim.type === "crop_cam_sim") {
      viewport.innerHTML = `
        <div class="simulation-box">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">📷 ${window.t("practiceCamTitle")}</h3>
          <p style="color:var(--color-text-muted); margin-bottom:16px;">${window.t("simCamSub")}</p>

          <div class="simulated-phone">
            <div class="phone-top-speaker"></div>
            <div class="phone-screen-inner" style="background:#000; color:#fff; position:relative; justify-content:space-between;">
              <div style="display:flex; justify-content:space-between; font-size:1.2rem; padding:8px;">
                <span>⚡</span>
                <span>HDR</span>
                <span>⚙️</span>
              </div>

              <div id="cam-subject" style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                <div style="font-size:5.5rem;">🌿</div>
                <div style="background:rgba(0,0,0,0.6); padding:4px 12px; border-radius:20px; font-size:0.85rem; margin-top:8px;">
                  Healthy Crop Focus [ 🎯 ]
                </div>
              </div>

              <div style="display:flex; justify-content:space-around; align-items:center; padding:16px 0;">
                <div style="width:44px; height:44px; border-radius:8px; border:2px solid #fff; background:#222; overflow:hidden;" id="cam-gallery-thumb"></div>
                <button style="width:68px; height:68px; border-radius:50%; background:#fff; border:4px solid #CBD5E1; cursor:pointer;" onclick="GramaLessons.simSnapPhoto()"></button>
                <div style="width:44px; height:44px; font-size:1.5rem; text-align:center;">🔄</div>
              </div>
            </div>
          </div>

          <div id="cam-success-btn" style="margin-top:20px; display:none;">
            <button class="btn-success" onclick="GramaLessons.goToStage(4)">
              ${window.t("photoCapturedSuccess")}
            </button>
          </div>
        </div>
      `;
    }

    // 4. SMS COMPOSER SIMULATOR
    else if (sim.type === "sms") {
      viewport.innerHTML = `
        <div class="simulation-box">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">💬 ${window.t("simPracticeHeading")} SMS</h3>
          <p style="color:var(--color-text-muted); margin-bottom:16px;">${window.t("simSmsSub")}</p>

          <div class="simulated-phone">
            <div class="phone-top-speaker"></div>
            <div class="phone-screen-inner">
              <div style="border-bottom:1px solid #E2E8F0; padding-bottom:8px;">
                <div style="font-size:0.85rem; color:#718096; font-weight:700;">${window.t("smsTo")} Saravanan</div>
                <div style="font-size:0.75rem; color:#38A169;">${window.t("onlineStatus")}</div>
              </div>

              <div id="sms-thread" style="flex:1; padding:12px 0; display:flex; flex-direction:column; justify-content:flex-end;">
                <div style="background:#EDF2F7; padding:10px 14px; border-radius:14px; align-self:flex-start; font-size:0.9rem; max-width:80%;">
                  ${window.t("smsSampleReply")}
                </div>
              </div>

              <div style="display:flex; gap:8px; border-top:1px solid #E2E8F0; padding-top:8px;">
                <input type="text" id="sms-input-field" value="${window.t("smsPresetText")}" style="flex:1; padding:8px 12px; border-radius:20px; border:1px solid #CBD5E1; font-size:0.95rem;">
                <button class="btn-primary" style="min-height:40px; padding:8px 14px; border-radius:50%;" onclick="GramaLessons.simSendSMS()">➔</button>
              </div>
            </div>
          </div>

          <div id="sms-success-btn" style="margin-top:20px; display:none;">
            <button class="btn-success" onclick="GramaLessons.goToStage(4)">
              ${window.t("messageDeliveredSuccess")}
            </button>
          </div>
        </div>
      `;
    }

    // 5. DEFAULT / GENERIC INTERACTIVE DEMO (WEATHER / KHATA / DIAGRAM)
    else {
      viewport.innerHTML = `
        <div class="simulation-box">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">🎯 ${window.t("trySimulationBtn")}</h3>
          <p style="color:var(--color-text-muted); margin-bottom:16px;">${window.t("simGenericSub")}</p>
          <div style="background:#fff; border:2px solid var(--color-border); border-radius:16px; padding:24px; max-width:480px; margin:0 auto; text-align:left;">
            <div style="font-size:3rem; text-align:center; margin-bottom:12px;">${lesson.icon}</div>
            <div style="font-weight:800; font-size:1.15rem; margin-bottom:8px; color:var(--color-primary);">${lesson.title[lang] || lesson.title.en}</div>
            <div style="font-size:1rem; color:var(--color-text-muted); line-height:1.5; margin-bottom:16px;">
              ${lesson.description[lang] || lesson.description.en}
            </div>
            <button class="btn-success" style="width:100%;" onclick="GramaLessons.goToStage(4)">
              ${window.t("iHavePracticed")}
            </button>
          </div>
        </div>
      `;
    }
  }

  // Dialer Simulator Actions
  function simDialPress(char) {
    const el = document.getElementById("sim-dialed-number");
    if (el && el.textContent.length < 12) {
      el.textContent += char;
    }
  }

  function simBackspace() {
    const el = document.getElementById("sim-dialed-number");
    if (el && el.textContent.length > 0) {
      el.textContent = el.textContent.slice(0, -1);
    }
  }

  function simStartCall() {
    const el = document.getElementById("sim-dialed-number");
    const screen = document.getElementById("phone-sim-screen");
    const num = el ? el.textContent : "9876543210";
    if (!num) return;

    screen.innerHTML = `
      <div style="text-align:center; padding-top:60px;">
        <div style="font-size:1.1rem; color:#718096; font-weight:700;">${window.t("callingState")}</div>
        <div style="font-size:1.8rem; font-weight:900; margin:12px 0; color:#1A202C;">${num}</div>
        <div style="font-size:0.9rem; color:#4A5568;">Ramesh (Son)</div>
        <div style="font-size:3.5rem; margin:40px 0;">📞</div>
        <button class="btn-danger" style="width:70px; height:70px; border-radius:50%; font-size:2rem; margin:0 auto;" onclick="GramaLessons.simEndCall()">
          📴
        </button>
      </div>
    `;
  }

  function simEndCall() {
    const screen = document.getElementById("phone-sim-screen");
    screen.innerHTML = `
      <div style="text-align:center; padding-top:80px;">
        <div style="font-size:1.4rem; font-weight:800; color:#2E7D32;">${window.t("callEnded")} (0:12)</div>
        <div style="font-size:4rem; margin:20px 0;">🎉</div>
        <button class="btn-primary" style="width:100%;" onclick="GramaLessons.goToStage(4)">
          ${window.t("stageComplete")} ➔
        </button>
      </div>
    `;
  }

  // UPI Simulator Actions
  function upiProceedToPin() {
    document.getElementById("upi-step-1").style.display = "none";
    document.getElementById("upi-step-2").style.display = "block";
    window.simEnteredPin = "";
    updatePinDots();
  }

  function upiPinType(digit) {
    if (window.simEnteredPin.length < 4) {
      window.simEnteredPin += digit;
      updatePinDots();
    }
  }

  function upiPinBackspace() {
    if (window.simEnteredPin.length > 0) {
      window.simEnteredPin = window.simEnteredPin.slice(0, -1);
      updatePinDots();
    }
  }

  function updatePinDots() {
    for (let i = 1; i <= 4; i++) {
      const dot = document.getElementById(`pdot-${i}`);
      if (dot) {
        if (i <= window.simEnteredPin.length) dot.classList.add("filled");
        else dot.classList.remove("filled");
      }
    }
  }

  function upiConfirmPayment() {
    if (window.simEnteredPin.length < 4) {
      const l = window.currentLang || localStorage.getItem("grama_lang") || "en";
      const msg = l === "ta" ? "பயிற்சிக்காக 4-இலக்க பின்னை உள்ளிடவும்." : (l === "hi" ? "अभ्यास के लिए कृपया 4 अंकों का पिन दर्ज करें।" : "Please enter a 4-digit PIN for practice.");
      alert(msg);
      return;
    }
    document.getElementById("upi-step-2").style.display = "none";
    document.getElementById("upi-step-3").style.display = "block";
  }

  // Camera Simulator Actions
  function simSnapPhoto() {
    const sub = document.getElementById("cam-subject");
    sub.style.opacity = "0.2";
    setTimeout(() => {
      sub.style.opacity = "1";
      const thumb = document.getElementById("cam-gallery-thumb");
      if (thumb) thumb.innerHTML = `<span style="font-size:1.8rem;">🌿</span>`;
      const btn = document.getElementById("cam-success-btn");
      if (btn) btn.style.display = "block";
    }, 150);
  }

  // SMS Simulator Actions
  function simSendSMS() {
    const input = document.getElementById("sms-input-field");
    const thread = document.getElementById("sms-thread");
    if (!input || !thread) return;

    const val = input.value || "Hello!";
    const msgDiv = document.createElement("div");
    msgDiv.style.cssText = "background:#2E7D32; color:#fff; padding:10px 14px; border-radius:14px; align-self:flex-end; font-size:0.9rem; max-width:80%; margin-top:8px;";
    msgDiv.innerHTML = `${val} <span style="font-size:0.7rem; color:#A5D6A7;">✓✓</span>`;
    thread.appendChild(msgDiv);
    input.value = "";

    const btn = document.getElementById("sms-success-btn");
    if (btn) btn.style.display = "block";
  }

  function speakStageHearText() {
    if (!currentLesson) return;
    const lang = window.currentLang || localStorage.getItem("grama_lang") || "en";
    const voiceNarrative = (currentLesson.voiceText && (currentLesson.voiceText[lang] || currentLesson.voiceText.en)) || "";
    if (window.GramaVoice && window.GramaVoice.speakText) {
      window.GramaVoice.speakText(voiceNarrative, lang);
    }
  }

  return {
    renderLesson,
    goToStage,
    toggleShowMeMode,
    nextStep,
    prevStep,
    goToNextLesson,
    speakStageHearText,
    simDialPress,
    simBackspace,
    simStartCall,
    simEndCall,
    upiProceedToPin,
    upiPinType,
    upiPinBackspace,
    upiConfirmPayment,
    simSnapPhoto,
    simSendSMS
  };
})();
