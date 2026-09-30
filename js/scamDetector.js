// GramaGuide — "Is This Safe?" Offline Rule-Based Scam Detection Engine
// Detects fraud indicators across English, Hindi/Hinglish, and Tamil

window.GramaScam = (function() {
  // 10 Realistic Preset Samples for User Exploration
  const SAMPLE_PRESETS = [
    {
      label: { en: "🎁 Lottery ₹50,000", ta: "🎁 ₹50,000 லாட்டரி", hi: "🎁 ₹50,000 लॉटरी" },
      text: "Congratulations! Your mobile number won ₹50,000 in KBC Lucky Draw 2026. Send ₹500 file charge to claim cash immediately."
    },
    {
      label: { en: "⚡ Electricity Cut", ta: "⚡ மின்சாரம் துண்டிப்பு", hi: "⚡ बिजली कनेक्शन कटेगा" },
      text: "Dear Customer, Your power will be disconnected tonight at 9:30 PM due to unpaid bill. Immediately call officer at 9812345678 or click bit.ly/power-pay"
    },
    {
      label: { en: "🔑 Bank KYC & OTP", ta: "🔑 வங்கி KYC & OTP", hi: "🔑 बैंक केवाईसी और ओटीपी" },
      text: "State Bank Alert: Your YONO account is suspended! Tell the 6-digit OTP received on your mobile to reactive your ATM card now."
    },
    {
      label: { en: "📲 Fake APK File", ta: "📲 போலி APK கோப்பு", hi: "📲 फर्जी APK फाइल" },
      text: "Government PM Kisan Bonus: Install PM_Kisan_Bonus_2026.apk from this link to get direct ₹5000 in your bank account."
    },
    {
      label: { en: "🌾 Fake Fertilizer", ta: "🌾 போலி உரம் சலுகை", hi: "🌾 नकली खाद ऑफर" },
      text: "Special Subsidy: Get 10 bags of Urea at 50% discount. Scan this QR code and enter UPI PIN to receive voucher."
    },
    {
      label: { en: "💼 Online Job Scam", ta: "💼 பகுதிநேர வேலை மோசடி", hi: "💼 घर बैठे काम की ठगी" },
      text: "Earn ₹2,500 daily by liking YouTube videos. Deposit ₹1,000 refundable security deposit to start task today!"
    },
    {
      label: { en: "👮 Police Threat", ta: "👮 போலீஸ் அச்சுறுத்தல்", hi: "👮 पुलिस और कोर्ट की धमकी" },
      text: "Urgent: Your parcel contained illegal medicines. CBI warrant issued. Transfer ₹20,000 on GPay to avoid immediate police arrest."
    },
    {
      label: { en: "📶 Free Recharge", ta: "📶 இலவச ரீசார்ஜ்", hi: "📶 मुफ्त मोबाइल रिचार्ज" },
      text: "Jio/Airtel 3 Months Free Recharge offer on festival! Click free-recharge-offer.xyz and forward to 10 WhatsApp groups."
    },
    {
      label: { en: "👨‍👩‍👧 Family Emergency", ta: "👨‍👩‍👧 குடும்ப அவசர அழைப்பு", hi: "👨‍👩‍👧 परिजन की फर्जी मदद" },
      text: "Papa I had a car accident. Police is taking me. Transfer ₹15,000 to this UPI ID right now please do not tell mummy."
    },
    {
      label: { en: "✅ Genuine SMS (Safe)", ta: "✅ உண்மையான வங்கி SMS", hi: "✅ असली बैंक मैसेज (सुरक्षित)" },
      text: "Your SBI Account XX4819 credited by ₹2,000 on 12-Sep-2026 by PM-KISAN DBT. Available balance: ₹14,850. - State Bank of India"
    }
  ];

  // Rule Patterns
  const RULES = [
    {
      id: "otp_pin",
      severity: "high",
      icon: "🔐",
      warning: {
        en: "Asking for OTP or UPI PIN (Huge Danger!)",
        ta: "OTP அல்லது UPI பின் கேட்கப்படுகிறது (மிகப் பெரிய ஆபத்து!)",
        hi: "ओटीपी या यूपीआई पिन मांगा जा रहा है (अत्यधिक खतरा!)"
      },
      regex: /\b(otp|one time password|pin|upi pin|atm pin|cvv|password|passcode|கடவுச்சொல்|பின்|ओटीपी|पिन)\b/i
    },
    {
      id: "lottery_prize",
      severity: "high",
      icon: "🎁",
      warning: {
        en: "Unearned lottery, cash prize, or car claim",
        ta: "லாட்டரி அல்லது பணப் பரிசு கோரிக்கை",
        hi: "लॉटरी, ईनाम या मुफ्त पैसे का झूठा लालच"
      },
      regex: /\b(won|winner|lottery|lucky draw|kbc|congratulations|prize|cashback|gift card|jackpot|வென்றுள்ளீர்கள்|பரிசு|லாட்டரி|जीत|लॉटरी|इनाम)\b/i
    },
    {
      id: "urgency_fear",
      severity: "medium",
      icon: "⏳",
      warning: {
        en: "Urgent pressure, fear tactics, or emergency coercion",
        ta: "அவசரப்படுத்துதல் அல்லது பயமுறுத்தும் அச்சுறுத்தல்",
        hi: "जल्दबाजी, डर या तुरंत करने का दबाव"
      },
      regex: /\b(immediately|urgent|within 24 hours|tonight|blocked|suspended|disconnected|cut off|expire|arrest|warrant|police|accident|jail|துண்டிக்கப்படும்|அவசரம்|இன்றே|तुरंत|बंद हो जाएगा|काट दिया जाएगा|अरेस्ट|पुलिस|दुर्घटना)\b/i
    },
    {
      id: "suspicious_links",
      severity: "high",
      icon: "🔗",
      warning: {
        en: "Contains shortened or suspicious web links (.apk, bit.ly, tinyurl)",
        ta: "சந்தேகத்திற்கிடமான இணைய இணைப்புகள் உள்ளன (.apk, bit.ly)",
        hi: "खतरनाक या अनजान लिंक मौजूद है (.apk, bit.ly)"
      },
      regex: /(bit\.ly|tinyurl\.com|\.apk|free-recharge|\.xyz|\.top|\.click|t\.me|wa\.me)/i
    },
    {
      id: "fee_advance",
      severity: "medium",
      icon: "💸",
      warning: {
        en: "Demands money transfer, advance fee, or UPI payment",
        ta: "பண பரிமாற்றம் அல்லது முன்பணம் கேட்கப்படுகிறது",
        hi: "पैसे ट्रांसफर करने, एडवांस फीस या यूपीआई भुगतान की मांग"
      },
      regex: /\b(processing fee|registration fee|security deposit|transfer fee|send ₹|pay ₹|transfer ₹|upi id|कस्टम ड्यूटी|फीस|पैसे भेजो|பணம் அனுப்பு)\b/i
    },
    {
      id: "enter_pin_to_receive",
      severity: "high",
      icon: "🛑",
      warning: {
        en: "Tells you to 'enter PIN to receive money' (Classic UPI Scam!)",
        ta: "'பணம் பெற பின்னை உள்ளிடுங்கள்' என்று கூறுகிறது (மோசடி!)",
        hi: "'पैसे प्राप्त करने के लिए पिन डालें' (पक्का फ्रॉड!)"
      },
      regex: /(enter pin to receive|scan qr to receive|pin போடு|பணம் பெற பின்|पिन डालकर पैसे लो)/i
    }
  ];

  // Analysis function
  function analyzeText(inputText) {
    if (!inputText || inputText.trim().length === 0) {
      return null;
    }

    const matchedRules = [];
    let highCount = 0;
    let mediumCount = 0;

    RULES.forEach(rule => {
      if (rule.regex.test(inputText)) {
        matchedRules.push(rule);
        if (rule.severity === "high") highCount++;
        else mediumCount++;
      }
    });

    let verdict = "safe"; // 'safe' | 'caution' | 'dangerous'
    if (highCount >= 1 || mediumCount >= 2) {
      verdict = "dangerous";
    } else if (mediumCount === 1) {
      verdict = "caution";
    }

    return {
      verdict,
      matchedRules,
      inputText
    };
  }

  return {
    SAMPLE_PRESETS,
    analyzeText
  };
})();
