// GramaGuide — Comprehensive Lesson Dataset
// 51 Practical Lessons designed for rural digital literacy
// SEE -> HEAR -> TRY -> COMPLETE framework

window.LESSONS_DATA = [
  // ==================== 1. SMARTPHONE BASICS (5 Lessons) ====================
  {
    id: "l_phone_1",
    category: "smartphone",
    icon: "📞",
    title: {
      en: "How to Make a Phone Call",
      ta: "தொலைபேசி அழைப்பு செய்வது எப்படி",
      hi: "फोन कॉल कैसे करें"
    },
    description: {
      en: "Open contacts, dial numbers, and speak to your family.",
      ta: "தொடர்புகளை திறந்து, எண்களை அழுத்தி குடும்பத்தினரிடம் பேசுங்கள்.",
      hi: "कॉन्टैक्ट खोलें, नंबर डायल करें और परिवार से बात करें।"
    },
    difficulty: "easy",
    badgeReward: "Phone Starter",
    voiceText: {
      en: "To make a phone call, tap the green phone icon. Tap on Keypad to enter numbers, or choose a contact. Then press the big green call button.",
      ta: "தொலைபேசி அழைப்பு செய்ய, பச்சை நிற போன் ஐகானைத் தொடவும். எண் பலகையைத் தொட்டு எண்களை உள்ளிடவும், அல்லது தொடர்பைத் தேர்ந்தெடுக்கவும். பின்னர் பெரிய பச்சை அழைப்பு பொத்தானை அழுத்தவும்.",
      hi: "फोन कॉल करने के लिए, हरे फोन आइकन को दबाएं। नंबर डालने के लिए कीपैड दबाएं, या संपर्क चुनें। फिर बड़ा हरा कॉल बटन दबाएं।"
    },
    steps: [
      { num: 1, title: { en: "Find the Phone Icon", ta: "போன் ஐகானைக் கண்டறியவும்", hi: "फोन आइकन ढूंढें" }, desc: { en: "Look for the green telephone receiver icon on your screen.", ta: "உங்கள் திரையில் பச்சை தொலைபேசி ஐகானைத் தேடுங்கள்.", hi: "अपनी स्क्रीन पर हरे फोन रिसीवर आइकन को देखें।" }, visual: "phone_icon" },
      { num: 2, title: { en: "Type Number or Choose Contact", ta: "எண்ணை தட்டச்சு செய்யவும் அல்லது தொடர்பைத் தேர்வு செய்யவும்", hi: "नंबर टाइप करें या संपर्क चुनें" }, desc: { en: "Tap numbers on the keypad or select from your saved contact list.", ta: "விசைப்பலகையில் எண்களை அழுத்தவும் அல்லது சேமிக்கப்பட்ட தொடர்புகளிலிருந்து தேர்வு செய்யவும்.", hi: "कीपैड पर नंबर दबाएं या अपनी सुरक्षित संपर्क सूची में से चुनें।" }, visual: "keypad" },
      { num: 3, title: { en: "Press the Green Call Button", ta: "பச்சை அழைப்பு பொத்தானை அழுத்தவும்", hi: "हरे कॉल बटन को दबाएं" }, desc: { en: "Tap the green button to begin the call. Hold phone to your ear.", ta: "அழைப்பைத் தொடங்க பச்சை பொத்தானைத் தொடவும். போனை காதில் வைக்கவும்.", hi: "कॉल शुरू करने के लिए हरे बटन को दबाएं। फोन कान पर लगाएं।" }, visual: "calling" },
      { num: 4, title: { en: "End Call with Red Button", ta: "சிவப்பு பொத்தானால் அழைப்பை முடிக்கவும்", hi: "लाल बटन से कॉल समाप्त करें" }, desc: { en: "When finished talking, tap the red button to hang up.", ta: "பேசி முடித்ததும், அழைப்பைத் துண்டிக்க சிவப்பு பொத்தானைத் தொடவும்.", hi: "बात पूरी होने पर कॉल काटने के लिए लाल बटन दबाएं।" }, visual: "end_call" }
    ],
    simulation: {
      type: "dialer",
      defaultNumber: "9876543210",
      contactName: "Ramesh (Son)"
    },
    safetyTip: {
      en: "Never call back unknown missed calls starting with foreign country codes like +92, +88, or +44.",
      ta: "+92, +88 போன்ற வெளிநாட்டு குறியீடுகளுடன் வரும் அறியப்படாத தவறவிட்ட அழைப்புகளுக்கு மீண்டும் அழைக்காதீர்கள்.",
      hi: "+92, +88 जैसे विदेशी कोड वाले अनजान मिस्ड कॉल पर कभी वापस कॉल न करें।"
    }
  },
  {
    id: "l_phone_2",
    category: "smartphone",
    icon: "💬",
    title: {
      en: "How to Send a Text Message (SMS)",
      ta: "குறுஞ்செய்தி (SMS) அனுப்புவது எப்படி",
      hi: "एसएमएस (SMS) संदेश कैसे भेजें"
    },
    description: {
      en: "Type simple words or numbers and send them to anyone.",
      ta: "எளிய வார்த்தைகள் அல்லது எண்களை தட்டச்சு செய்து அனுப்பவும்.",
      hi: "साधारण शब्द या नंबर टाइप करें और किसी को भी भेजें।"
    },
    difficulty: "easy",
    badgeReward: "Message Master",
    voiceText: {
      en: "Tap the message icon. Select start chat. Pick your contact, type your message, and tap the arrow button to send.",
      ta: "செய்தி ஐகானைத் தொடவும். புதிய அரட்டையைத் தேர்ந்தெடுக்கவும். உங்கள் தொடர்பைத் தேர்ந்தெடுத்து, செய்தியைத் தட்டச்சு செய்து, அம்பு பொத்தானை அழுத்தவும்.",
      hi: "संदेश आइकन दबाएं। नया चैट शुरू करें। संपर्क चुनें, संदेश लिखें और तीर के निशान पर दबाकर भेजें।"
    },
    steps: [
      { num: 1, title: { en: "Open Messages App", ta: "செய்தி செயலியைத் திறக்கவும்", hi: "मैसेज ऐप खोलें" }, desc: { en: "Find the blue or yellow speech bubble icon.", ta: "நீல அல்லது மஞ்சள் பேச்சு குமிழி ஐகானைத் தேடுங்கள்.", hi: "नीला या पीला संदेश बबल आइकन ढूंढें।" }, visual: "sms_icon" },
      { num: 2, title: { en: "Select Contact", ta: "தொடர்பைத் தேர்வு செய்க", hi: "संपर्क चुनें" }, desc: { en: "Pick the person you want to send a message to.", ta: "நீங்கள் செய்தி அனுப்ப விரும்பும் நபரைத் தேர்ந்தெடுக்கவும்.", hi: "उस व्यक्ति को चुनें जिसे आप संदेश भेजना चाहते हैं।" }, visual: "contact_select" },
      { num: 3, title: { en: "Type or Use Mic", ta: "தட்டச்சு செய் அல்லது மைக்கை பயன்படுத்து", hi: "लिखें या माइक इस्तेमाल करें" }, desc: { en: "Tap keyboard keys or tap microphone to speak your message.", ta: "விசைப்பலகை விசைகளைத் தொடவும் அல்லது பேச மைக்ரோஃபோனைத் தொடவும்.", hi: "कीबोर्ड पर लिखें या बोलकर संदेश लिखने के लिए माइक दबाएं।" }, visual: "type_box" },
      { num: 4, title: { en: "Press Send Arrow", ta: "அனுப்பும் அம்புக்குறியை அழுத்தவும்", hi: "भेजने वाला तीर दबाएं" }, desc: { en: "Tap the send arrow to deliver your SMS instantly.", ta: "உங்கள் SMS-ஐ உடனடியாக அனுப்ப அம்பு பொத்தானைத் தொடவும்.", hi: "तुरंत एसएमएस भेजने के लिए तीर वाले बटन को दबाएं।" }, visual: "send_arrow" }
    ],
    simulation: {
      type: "sms",
      receiver: "Saravanan (Brother)",
      presetMessage: "Hello, I reached home safely."
    },
    safetyTip: {
      en: "Do not reply to messages asking you to send money or click mysterious web links.",
      ta: "பணம் கேட்கும் அல்லது மர்மமான இணைப்புகளைக் கிளிக் செய்யச் சொல்லும் செய்திகளுக்குப் பதிலளிக்காதீர்கள்.",
      hi: "पैसे मांगने वाले या अजीब लिंक पर क्लिक करने को कहने वाले संदेशों का उत्तर न दें।"
    }
  },
  {
    id: "l_phone_3",
    category: "smartphone",
    icon: "📷",
    title: {
      en: "Taking and Viewing Photos",
      ta: "புகைப்படம் எடுத்து பார்ப்பது எப்படி",
      hi: "फोटो खींचना और देखना"
    },
    description: {
      en: "Capture photos of family, crops, or bills and view them in Gallery.",
      ta: "குடும்பம், பயிர்கள் அல்லது ரசீதுகளை படம் பிடித்து கேலரியில் பார்க்கவும்.",
      hi: "परिवार, फसल या बिल की फोटो खींचें और गैलरी में देखें।"
    },
    difficulty: "easy",
    badgeReward: "Shutter Pro",
    voiceText: {
      en: "Open the Camera icon. Hold phone steady. Tap the round white button to take photo. Tap the small corner square to see your photo.",
      ta: "கேமரா ஐகானைத் திறக்கவும். போனை அசையாமல் பிடிக்கவும். புகைப்படம் எடுக்க வெள்ளை வட்ட பொத்தானைத் தொடவும். எடுத்த படத்தை பார்க்க மூலையில் உள்ள சதுரத்தைத் தொடவும்.",
      hi: "कैमरा आइकन खोलें। फोन को स्थिर रखें। फोटो लेने के लिए सफेद गोल बटन दबाएं। अपनी फोटो देखने के लिए कोने वाले चौकोर बॉक्स को दबाएं।"
    },
    steps: [
      { num: 1, title: { en: "Open Camera", ta: "கேமராவைத் திறக்கவும்", hi: "कैमरा खोलें" }, desc: { en: "Tap the camera lens icon on your home screen.", ta: "உங்கள் முகப்புத் திரையில் உள்ள கேமரா லென்ஸ் ஐகானைத் தொடவும்.", hi: "अपनी होम स्क्रीन पर कैमरा लेंस आइकन दबाएं।" }, visual: "camera_icon" },
      { num: 2, title: { en: "Hold Phone Steady", ta: "போனை அசையாமல் பிடிக்கவும்", hi: "फोन को स्थिर रखें" }, desc: { en: "Point camera at the subject with both hands.", ta: "இரு கைகளாலும் பொருளை நோக்கி கேமராவை நேராக வைக்கவும்.", hi: "दोनों हाथों से फोन को सही दिशा में पकड़ें।" }, visual: "camera_aim" },
      { num: 3, title: { en: "Tap Shutter Button", ta: "ஷட்டர் பொத்தானைத் தொடவும்", hi: "शटर बटन दबाएं" }, desc: { en: "Tap the big round white button at the bottom.", ta: "கீழே உள்ள பெரிய வெள்ளை வட்ட பொத்தானைத் தொடவும்.", hi: "नीचे दिए गए बड़े सफेद गोल बटन को दबाएं।" }, visual: "shutter_tap" },
      { num: 4, title: { en: "Open Gallery", ta: "கேலரியைத் திறக்கவும்", hi: "गैलरी खोलें" }, desc: { en: "Tap the small preview in the corner to see your saved photos.", ta: "சேமிக்கப்பட்ட படங்களை பார்க்க மூலையில் உள்ள முன்னோட்டத்தைத் தொடவும்.", hi: "अपनी सुरक्षित फोटो देखने के लिए कोने में छोटा बॉक्स दबाएं।" }, visual: "gallery_view" }
    ],
    simulation: {
      type: "camera",
      subjectName: "Healthy Tomato Crop"
    },
    safetyTip: {
      en: "Do not take or share photos of your bank passbook, Aadhaar card, or ATM card with strangers.",
      ta: "வங்கி பாஸ்புக், ஆதார் அட்டை அல்லது ஏடிஎம் அட்டை புகைப்படங்களை அந்நியர்களுடன் பகிராதீர்கள்.",
      hi: "अपनी बैंक पासबुक, आधार कार्ड या एटीएम कार्ड की फोटो अनजान लोगों को न भेजें।"
    }
  },
  {
    id: "l_phone_4",
    category: "smartphone",
    icon: "🔊",
    title: {
      en: "Adjusting Volume and Screen Brightness",
      ta: "ஒலி அளவு மற்றும் திரை வெளிச்சத்தை சரிசெய்தல்",
      hi: "आवाज (वॉल्यूम) और स्क्रीन ब्राइटनेस बदलना"
    },
    description: {
      en: "Make sounds louder or silent, and adjust screen light for outdoor sun.",
      ta: "ஒலியை கூட்டவும் அல்லது குறைக்கவும், வெயிலில் திரையைத் தெளிவாகப் பார்க்க வெளிச்சத்தை மாற்றவும்.",
      hi: "आवाज तेज या धीमी करें, और धूप में स्क्रीन साफ देखने के लिए रोशनी बढ़ाएं।"
    },
    difficulty: "easy",
    badgeReward: "Sound Control",
    voiceText: {
      en: "Use the side buttons to make sound louder or softer. Pull down from top of screen to slide the sun icon for brightness.",
      ta: "ஒலியை அதிகரிக்க அல்லது குறைக்க பக்கவாட்டு பொத்தான்களைப் பயன்படுத்தவும். வெளிச்சத்தை மாற்ற திரையின் மேலிருந்து கீழே இழுத்து சூரியன் ஐகானை நகர்த்தவும்.",
      hi: "आवाज तेज या धीमी करने के लिए फोन के साइड बटन दबाएं। रोशनी बदलने के लिए स्क्रीन को ऊपर से नीचे खींचें और सूरज वाला स्लाइडर हिलाएं।"
    },
    steps: [
      { num: 1, title: { en: "Use Side Volume Buttons", ta: "பக்கவாட்டு ஒலி பொத்தான்களைப் பயன்படுத்துங்கள்", hi: "साइड वॉल्यूम बटन का उपयोग करें" }, desc: { en: "Upper button increases volume; lower button decreases volume.", ta: "மேல் பொத்தான் ஒலியை அதிகரிக்கும்; கீழ் பொத்தான் ஒலியைக் குறைக்கும்.", hi: "ऊपर का बटन आवाज बढ़ाता है, नीचे का बटन आवाज घटाता है।" }, visual: "vol_buttons" },
      { num: 2, title: { en: "Pull Down Notification Bar", ta: "அறிவிப்பு பட்டியை கீழே இழுக்கவும்", hi: "नोटिफिकेशन पट्टी नीचे खींचें" }, desc: { en: "Swipe down with one finger from the very top of your screen.", ta: "திரையின் மேற்பகுதியிலிருந்து ஒரு விரலால் கீழே இழுக்கவும்.", hi: "स्क्रीन के सबसे ऊपरी हिस्से से एक उंगली से नीचे की ओर खींचें।" }, visual: "swipe_down" },
      { num: 3, title: { en: "Slide the Sun Icon", ta: "சூரியன் ஐகானை நகர்த்தவும்", hi: "सूरज वाला स्लाइडर खिसकाएं" }, desc: { en: "Drag slider right for bright sun, left at night to rest eyes.", ta: "வெயிலில் பார்க்க வலதுபுறமும், இரவில் கண்களுக்கு இதமாக இடதுபுறமும் நகர்த்தவும்.", hi: "धूप में देखने के लिए दाईं तरफ और रात में बाईं तरफ खिसकाएं।" }, visual: "brightness_bar" }
    ],
    simulation: {
      type: "sliders",
      controls: ["volume", "brightness"]
    },
    safetyTip: {
      en: "Keeping brightness slightly lower saves battery so your phone lasts all day in the field.",
      ta: "திரை வெளிச்சத்தை சற்று குறைவாக வைப்பது பேட்டரியைச் சேமித்து நாள் முழுவதும் நீடிக்க உதவும்.",
      hi: "ब्राइटनेस थोड़ी कम रखने से बैटरी बचती है और फोन पूरे दिन चलता है।"
    }
  },
  {
    id: "l_phone_5",
    category: "smartphone",
    icon: "🔒",
    title: {
      en: "Lock Your Phone with PIN or Pattern",
      ta: "பின் அல்லது பேட்டர்ன் மூலம் போனை பூட்டுங்கள்",
      hi: "पिन (PIN) या पैटर्न से फोन लॉक करें"
    },
    description: {
      en: "Keep your personal photos and money apps safe from others.",
      ta: "உங்கள் தனிப்பட்ட படங்கள் மற்றும் பண செயலிகளை மற்றவர்களிடமிருந்து பாதுகாக்கவும்.",
      hi: "अपनी निजी फोटो और बैंक ऐप्स को दूसरों से सुरक्षित रखें।"
    },
    difficulty: "medium",
    badgeReward: "Phone Guard",
    voiceText: {
      en: "Go to Settings, tap Security or Screen Lock. Choose a 4-digit PIN that only you know. Never use 1234 or your birth year.",
      ta: "அமைப்புகள் சென்று பாதுகாப்பு அல்லது திரை பூட்டைத் தொடவும். உங்களுக்கு மட்டுமே தெரிந்த 4 இலக்க பின்னைத் தேர்ந்தெடுக்கவும். 1234 அல்லது உங்கள் பிறந்த ஆண்டை ஒருபோதும் பயன்படுத்த வேண்டாம்.",
      hi: "सेटिंग्स में जाएं, सिक्योरिटी या स्क्रीन लॉक चुनें। 4 अंकों का ऐसा पिन चुनें जो सिर्फ आपको पता हो। 1234 या अपना जन्म वर्ष कभी न रखें।"
    },
    steps: [
      { num: 1, title: { en: "Open Settings", ta: "அமைப்புகளைத் திறக்கவும்", hi: "सेटिंग्स खोलें" }, desc: { en: "Tap the gear icon on your home screen.", ta: "உங்கள் திரையில் உள்ள கியர் சக்கர ஐகானைத் தொடவும்.", hi: "होम स्क्रीन पर गियर वाले आइकन को दबाएं।" }, visual: "settings_gear" },
      { num: 2, title: { en: "Tap Security / Screen Lock", ta: "பாதுகாப்பு / திரை பூட்டைத் தொடவும்", hi: "सिक्योरिटी / स्क्रीन लॉक चुनें" }, desc: { en: "Look for the padlock symbol in the list.", ta: "பட்டியலில் பூட்டு சின்னத்தைத் தேடுங்கள்.", hi: "सूची में ताले वाले निशान को ढूंढें।" }, visual: "lock_symbol" },
      { num: 3, title: { en: "Choose 4-Digit Secret PIN", ta: "4-இலக்க ரகசிய பின்னைத் தேர்ந்தெடுக்கவும்", hi: "4 अंकों का गुप्त पिन चुनें" }, desc: { en: "Enter 4 numbers you can remember easily, like your favorite tree count.", ta: "நீங்கள் எளிதாக நினைவில் வைத்திருக்கக்கூடிய 4 எண்களை உள்ளிடவும்.", hi: "कोई भी 4 अंक डालें जो आपको याद रहें, जैसे कोई खास तारीख।" }, visual: "pin_entry" }
    ],
    simulation: {
      type: "pin_setup",
      targetPin: "5829"
    },
    safetyTip: {
      en: "Never write your screen lock PIN on a sticker pasted on the back of your phone.",
      ta: "உங்கள் திரை பூட்டு பின்னை போனின் பின்புறத்தில் காகிதத்தில் எழுதி ஒட்டாதீர்கள்.",
      hi: "फोन के पीछे स्टीकर या पर्ची पर अपना स्क्रीन लॉक पिन कभी न लिखें।"
    }
  },

  // ==================== 2. INTERNET BASICS (5 Lessons) ====================
  {
    id: "l_net_1",
    category: "internet",
    icon: "🌐",
    title: {
      en: "Mobile Data vs Wi-Fi Explained",
      ta: "மொபைல் டேட்டா மற்றும் வைஃபை வேறுபாடு",
      hi: "मोबाइल डेटा और वाई-फाई में क्या अंतर है"
    },
    description: {
      en: "Learn when you are using your SIM card balance versus free Wi-Fi.",
      ta: "உங்கள் சிம் கார்டு டேட்டா மற்றும் இலவச வைஃபை எப்போது பயன்படுகிறது என்பதைப் புரிந்து கொள்ளுங்கள்.",
      hi: "समझें कि कब आपका सिम डेटा खर्च हो रहा है और कब वाई-फाई चल रहा है।"
    },
    difficulty: "easy",
    badgeReward: "Data Watcher",
    voiceText: {
      en: "Mobile data uses your SIM recharge. Wi-Fi connects to a wireless router in your home or shop. When Wi-Fi is on, you save your mobile data.",
      ta: "மொபைல் டேட்டா உங்கள் சிம் ரீசார்ஜைப் பயன்படுத்துகிறது. வைஃபை வீடு அல்லது கடையில் உள்ள வயர்லெஸ் ரூட்டருடன் இணைகிறது. வைஃபை இருக்கும்போது மொபைல் டேட்டா மிச்சமாகும்.",
      hi: "मोबाइल डेटा आपके सिम के रिचार्ज से चलता है। वाई-फाई घर या दुकान के ब्रॉडबैंड से जुड़ता है। वाई-फाई चलने पर आपका मोबाइल डेटा बचता है।"
    },
    steps: [
      { num: 1, title: { en: "Swipe Down for Quick Settings", ta: "விரைவு அமைப்புகளுக்கு கீழே இழுக்கவும்", hi: "क्विक सेटिंग्स के लिए नीचे खींचें" }, desc: { en: "See the two main icons: two arrows for Data, fan waves for Wi-Fi.", ta: "இரு அம்புக்குறி டேட்டாவையும், விசிறி அலைகள் வைஃபையையும் குறிக்கின்றன.", hi: "दो तीर वाला निशान डेटा है, और पंखे जैसी तरंगें वाई-फाई हैं।" }, visual: "data_wifi_icons" },
      { num: 2, title: { en: "Mobile Data (Arrows)", ta: "மொபைல் டேட்டா (அம்புகள்)", hi: "मोबाइल डेटा (तीर का निशान)" }, desc: { en: "Turn ON when traveling outside where there is no Wi-Fi.", ta: "வெளியில் செல்லும்போது இதை ஆன் செய்யவும்.", hi: "जब आप बाहर हों और वाई-फाई न हो, तब इसे चालू रखें।" }, visual: "data_toggle" },
      { num: 3, title: { en: "Wi-Fi (Fan Symbol)", ta: "வைஃபை (விசிறி சின்னம்)", hi: "वाई-फाई (वेव निशान)" }, desc: { en: "Connects to trusted local internet without using your daily 1.5GB limit.", ta: "உங்கள் தினசரி 1.5GB வரம்பைப் பயன்படுத்தாமல் இணையத்தைப் பெறலாம்.", hi: "दैनिक 1.5GB सीमा खर्च किए बिना इंटरनेट चलाने के लिए इसे जोड़ें।" }, visual: "wifi_toggle" }
    ],
    simulation: {
      type: "toggle_net",
      options: ["mobileData", "wifi"]
    },
    safetyTip: {
      en: "Turn off Mobile Data before sleeping so apps do not consume your balance during the night.",
      ta: "இரவில் தூங்கும் முன் மொபைல் டேட்டாவை அணைத்தால் தேவையற்ற டேட்டா வீணாகாது.",
      hi: "रात को सोने से पहले मोबाइल डेटा बंद कर दें ताकि डेटा अपने आप खर्च न हो।"
    }
  },
  {
    id: "l_net_2",
    category: "internet",
    icon: "🧭",
    title: {
      en: "How to Browse a Website",
      ta: "வலைத்தளத்தை எவ்வாறு பார்ப்பது",
      hi: "वेबसाइट कैसे खोलें और देखें"
    },
    description: {
      en: "Use Google Chrome browser to visit government or educational pages.",
      ta: "அரசு அல்லது கல்வி பக்கங்களைப் பார்க்க கூகுள் குரோம் உலாவியைப் பயன்படுத்துங்கள்.",
      hi: "सरकारी या ज्ञानवर्धक पेज देखने के लिए गूगल क्रोम ब्राउज़र का उपयोग करें।"
    },
    difficulty: "easy",
    badgeReward: "Web Navigator",
    voiceText: {
      en: "Open Chrome. Tap the search bar at top. Type a website name or question. Tap the blue search button on keypad. Tap back arrow to return.",
      ta: "குரோம் திறக்கவும். மேலே உள்ள தேடல் பட்டியைத் தொடவும். இணையதள பெயர் அல்லது கேள்வியைத் தட்டச்சு செய்யவும். நீல தேடல் பொத்தானை அழுத்தவும். முந்தைய பக்கத்திற்கு திரும்ப பின் அம்புக்குறியைத் தொடவும்.",
      hi: "क्रोम खोलें। सबसे ऊपर सर्च बार दबाएं। वेबसाइट का नाम या सवाल लिखें। कीपैड पर नीला सर्च बटन दबाएं। वापस जाने के लिए बैक तीर दबाएं।"
    },
    steps: [
      { num: 1, title: { en: "Open Chrome Browser", ta: "குரோம் உலாவியைத் திறக்கவும்", hi: "क्रोम ब्राउज़र खोलें" }, desc: { en: "Tap the colorful circle icon (Red, Yellow, Green with Blue center).", ta: "வண்ண வட்ட ஐகானைத் தொடவும் (சிவப்பு, மஞ்சள், பச்சை மற்றும் நீல மையம்).", hi: "रंग-बिरंगे गोल आइकन (लाल, पीला, हरा और नीला) को दबाएं।" }, visual: "chrome_icon" },
      { num: 2, title: { en: "Tap Address Bar", ta: "முகவரிப் பட்டியைத் தொடவும்", hi: "सर्च बार पर टैप करें" }, desc: { en: "The bar at the top with a magnifying glass.", ta: "பூதக்கண்ணாடி கொண்ட மேல் பட்டை.", hi: "ऊपर दी गई पट्टी जहां मैग्निफाइंग ग्लास बना होता है।" }, visual: "address_bar" },
      { num: 3, title: { en: "Look for the Padlock 🔒", ta: "பூட்டு சின்னத்தைப் பாருங்கள் 🔒", hi: "ताले का निशान देखें 🔒" }, desc: { en: "A closed lock means the connection is encrypted and safer.", ta: "மூடிய பூட்டு சின்னம் என்றால் இணைப்பு பாதுகாப்பானது.", hi: "बंद ताला मतलब वेबसाइट सुरक्षित है।" }, visual: "ssl_lock" }
    ],
    simulation: {
      type: "browser_sim",
      address: "https://gramaguide.org"
    },
    safetyTip: {
      en: "Never enter your bank details on a website that does not show the padlock 🔒 icon.",
      ta: "பூட்டு 🔒 ஐகான் இல்லாத வலைத்தளங்களில் உங்கள் வங்கி விவரங்களை உள்ளிடாதீர்கள்.",
      hi: "जिस वेबसाइट पर ताले 🔒 का निशान न हो, वहां कभी भी अपनी बैंक जानकारी न डालें।"
    }
  },
  {
    id: "l_net_3",
    category: "internet",
    icon: "🎤",
    title: {
      en: "Searching with Voice Instead of Typing",
      ta: "தட்டச்சு செய்வதற்கு பதிலாக குரல் மூலம் தேடுதல்",
      hi: "टाइप करने की जगह बोलकर सर्च करना"
    },
    description: {
      en: "Just tap the microphone and speak in your own mother tongue.",
      ta: "மைக்ரோஃபோனைத் தொட்டு உங்கள் சொந்த தாய்மொழியில் பேசுங்கள்.",
      hi: "बस माइक वाले बटन को दबाएं और अपनी भाषा में बोलकर खोजें।"
    },
    difficulty: "easy",
    badgeReward: "Voice Explorer",
    voiceText: {
      en: "You do not need to type in English. Tap the microphone icon on Google. Speak clearly in Tamil, Hindi, or your language. The answers will appear.",
      ta: "நீங்கள் ஆங்கிலத்தில் தட்டச்சு செய்ய வேண்டியதில்லை. கூகுளில் உள்ள மைக்ரோஃபோன் ஐகானைத் தொடவும். தமிழ், இந்தி அல்லது உங்கள் மொழியில் தெளிவாகப் பேசுங்கள். பதில்கள் தோன்றும்.",
      hi: "अंग्रेजी में लिखने की कोई जरूरत नहीं है। गूगल पर माइक आइकन दबाएं। हिंदी या अपनी भाषा में साफ बोलें। उत्तर अपने आप आ जाएंगे।"
    },
    steps: [
      { num: 1, title: { en: "Find the Colorful Mic", ta: "வண்ண மைக் ஐகானைக் கண்டறியவும்", hi: "रंग-बिरंगा माइक ढूंढें" }, desc: { en: "Look for the microphone on the right side of the search bar.", ta: "தேடல் பட்டியின் வலதுபுறத்தில் உள்ள மைக்ரோஃபோனைப் பாருங்கள்.", hi: "सर्च पट्टी के दाईं ओर बने माइक को देखें।" }, visual: "mic_icon" },
      { num: 2, title: { en: "Tap and Wait for 'Listening'", ta: "தொட்டு 'கேட்கிறது' என்பதற்காக காத்திருங்கள்", hi: "दबाएं और 'सुन रहा है' का इंतजार करें" }, desc: { en: "Tap once. When the circle pulses, start speaking.", ta: "ஒரு முறை தொடவும். வட்டம் அசையும் போது பேசத் தொடங்குங்கள்.", hi: "एक बार दबाएं। जब गोला हिलने लगे तब बोलना शुरू करें।" }, visual: "listening_wave" },
      { num: 3, title: { en: "Ask Your Question Clearly", ta: "உங்கள் கேள்வியைத் தெளிவாகக் கேளுங்கள்", hi: "अपना सवाल साफ आवाज में पूछें" }, desc: { en: "Example: 'Tomorrow weather in Madurai' or 'Tomato mandi rate'.", ta: "எடுத்துக்காட்டு: 'நாளை மழை வருமா?' அல்லது 'தக்காளி விலை என்ன?'", hi: "उदाहरण: 'कल बारिश होगी क्या?' या 'गेहूं का मंडी भाव बताओ'।" }, visual: "voice_query" }
    ],
    simulation: {
      type: "voice_search_sim",
      sampleQueries: ["Weather forecast", "Mandi prices", "Nearest government hospital"]
    },
    safetyTip: {
      en: "Do not speak out loud your bank PIN or ATM card number when using voice search in public places.",
      ta: "பொது இடங்களில் குரல் தேடலைப் பயன்படுத்தும்போது உங்கள் வங்கி பின்னை சத்தமாகப் பேசாதீர்கள்.",
      hi: "सार्वजनिक स्थानों पर बोलकर सर्च करते समय कभी अपना बैंक पिन या पासवर्ड न बोलें।"
    }
  },
  {
    id: "l_net_4",
    category: "internet",
    icon: "📥",
    title: {
      en: "Downloading Files Safely",
      ta: "கோப்புகளை பாதுகாப்பாக பதிவிறக்குவது எப்படி",
      hi: "फाइलें सुरक्षित तरीके से कैसे डाउनलोड करें"
    },
    description: {
      en: "Download official forms and receipts without downloading viruses.",
      ta: "வைரஸ்கள் இல்லாமல் அரசு விண்ணப்பங்கள் மற்றும் ரசீதுகளை பதிவிறக்கவும்.",
      hi: "वायरस से बचते हुए सरकारी फॉर्म और रसीदें डाउनलोड करना सीखें।"
    },
    difficulty: "medium",
    badgeReward: "Safe Downloader",
    voiceText: {
      en: "Download only PDFs from known websites. Never download files ending in dot APK from WhatsApp messages, as they can steal your money.",
      ta: "தெரிந்த வலைத்தளங்களிலிருந்து மட்டுமே PDF கோப்புகளை பதிவிறக்கவும். வாட்ஸ்அப் செய்திகளில் வரும் .apk கோப்புகளை பதிவிறக்காதீர்கள், அவை பணத்தைத் திருடலாம்.",
      hi: "सिर्फ जानी-पहचानी वेबसाइट से ही पीडीएफ डाउनलोड करें। वॉट्सऐप पर आने वाली .apk फाइलें कभी डाउनलोड न करें, वे आपके पैसे चुरा सकती हैं।"
    },
    steps: [
      { num: 1, title: { en: "Check the File Type", ta: "கோப்பு வகையை சரிபார்க்கவும்", hi: "फाइल का प्रकार जांचें" }, desc: { en: "Safe: .pdf, .jpg, .png. Dangerous: .apk, .exe.", ta: "பாதுகாப்பானது: .pdf, .jpg. ஆபத்தானது: .apk, .exe.", hi: "सुरक्षित: .pdf, .jpg. खतरनाक: .apk, .exe।" }, visual: "file_types" },
      { num: 2, title: { en: "Look for Download Arrow", ta: "பதிவிறக்க அம்புக்குறியைத் தேடுங்கள்", hi: "डाउनलोड तीर का निशान देखें" }, desc: { en: "Tap the downward arrow symbol on official portal.", ta: "அரசு போர்ட்டலில் கீழ்நோக்கிய அம்பு குறியீட்டைத் தொடவும்.", hi: "आधिकारिक पोर्टल पर नीचे की ओर मुड़े तीर पर टैप करें।" }, visual: "download_arrow" },
      { num: 3, title: { en: "Check Downloads Folder", ta: "பதிவிறக்கங்கள் கோப்புறையை சரிபார்க்கவும்", hi: "डाउनलोड्स फोल्डर देखें" }, desc: { en: "Open Files app on your phone to open your downloaded receipt.", ta: "பதிவிறக்கிய ரசீதை திறக்க உங்கள் போனில் Files செயலியைத் திறக்கவும்.", hi: "अपनी रसीद देखने के लिए फोन में 'Files' ऐप खोलें।" }, visual: "files_folder" }
    ],
    simulation: {
      type: "download_sim",
      fileName: "Kisan_Application_Form.pdf"
    },
    safetyTip: {
      en: "If someone on WhatsApp says 'Download this APK to update your SIM or KYC', it is 100% a fraud!",
      ta: "வாட்ஸ்அப்பில் 'KYC புதுப்பிக்க இந்த APK பதிவிறக்குங்கள்' என்று யாராவது கூறினால், அது நூறு சதவீதம் மோசடி!",
      hi: "वॉट्सऐप पर अगर कोई कहे कि 'सिम या केवाईसी के लिए ये APK डाउनलोड करो', तो वह 100% फ्रॉड है!"
    }
  },
  {
    id: "l_net_5",
    category: "internet",
    icon: "🛍️",
    title: {
      en: "Installing Apps Safely from Play Store",
      ta: "ப்ளே ஸ்டோரிலிருந்து செயலிகளை பாதுகாப்பாக நிறுவுதல்",
      hi: "प्ले स्टोर से सुरक्षित ऐप डाउनलोड करना"
    },
    description: {
      en: "Check ratings, developer name, and download count before installing.",
      ta: "நிறுவுவதற்கு முன் மதிப்பீடுகள், உருவாக்கியவர் பெயர் மற்றும் பதிவிறக்க எண்ணிக்கையை சரிபார்க்கவும்.",
      hi: "ऐप इंस्टॉल करने से पहले उसकी रेटिंग, डेवलपर का नाम और डाउनलोड संख्या जरूर देखें।"
    },
    difficulty: "medium",
    badgeReward: "App Expert",
    voiceText: {
      en: "Always use Google Play Store to install apps. Check that it has millions of downloads and 4-star ratings. Never install from random links.",
      ta: "செயலிகளை நிறுவ எப்போதும் கூகுள் ப்ளே ஸ்டோரைப் பயன்படுத்துங்கள். லட்சக்கணக்கான பதிவிறக்கங்கள் மற்றும் 4 நட்சத்திர மதிப்பீடு உள்ளதா எனப் பார்க்கவும்.",
      hi: "ऐप्स हमेशा गूगल प्ले स्टोर से ही इंस्टॉल करें। देखें कि उसके लाखों डाउनलोड और 4 स्टार रेटिंग हों। किसी अनजान लिंक से ऐप न डालें।"
    },
    steps: [
      { num: 1, title: { en: "Open Play Store", ta: "ப்ளே ஸ்டோரைத் திறக்கவும்", hi: "प्ले स्टोर खोलें" }, desc: { en: "Find the colorful triangle icon.", ta: "வண்ண முக்கோண ஐகானைத் தேடுங்கள்.", hi: "रंग-बिरंगे त्रिकोण वाले आइकन को ढूंढें।" }, visual: "playstore_icon" },
      { num: 2, title: { en: "Check Downloads & Stars", ta: "பதிவிறக்கங்கள் & நட்சத்திரங்களை சரிபார்க்கவும்", hi: "डाउनलोड और रेटिंग देखें" }, desc: { en: "Genuine banking/govt apps have 1 Crore+ downloads and verified badges.", ta: "உண்மையான வங்கி செயலிகள் 1 கோடிக்கு மேல் பதிவிறக்கங்களைக் கொண்டிருக்கும்.", hi: "असली बैंक और सरकारी ऐप्स के 1 करोड़ से ज्यादा डाउनलोड होते हैं।" }, visual: "app_ratings" },
      { num: 3, title: { en: "Tap Green Install Button", ta: "பச்சை நிறுவு பொத்தானைத் தொடவும்", hi: "हरा इंस्टॉल बटन दबाएं" }, desc: { en: "Wait for the circle to finish. Tap Open when ready.", ta: "வட்டம் முடியும் வரை காத்திருங்கள். தயாரானதும் 'Open' பொத்தானைத் தொடவும்.", hi: "डाउनलोड पूरा होने का इंतजार करें। फिर ओपन दबाएं।" }, visual: "install_btn" }
    ],
    simulation: {
      type: "store_sim",
      appName: "BHIM UPI",
      downloads: "50M+",
      rating: "4.3 ⭐"
    },
    safetyTip: {
      en: "Beware of lookalike fake loan apps that request full access to your photo gallery and contacts.",
      ta: "உங்கள் தொடர்புகள் மற்றும் புகைப்படங்களை அணுக அனுமதி கேட்கும் போலி கடன் செயலிகளிடம் எச்சரிக்கையாக இருங்கள்.",
      hi: "फर्जी लोन ऐप्स से बचें जो आपकी फोटो गैलरी और संपर्कों की पूरी अनुमति मांगते हैं।"
    }
  },

  // ==================== 3. DIGITAL PAYMENTS & UPI (5 Lessons) ====================
  {
    id: "l_pay_1",
    category: "payments",
    icon: "💳",
    title: {
      en: "What is UPI and How Does it Work?",
      ta: "UPI என்றால் என்ன, அது எவ்வாறு செயல்படுகிறது?",
      hi: "यूपीआई (UPI) क्या है और यह कैसे काम करता है?"
    },
    description: {
      en: "Send and receive money directly between bank accounts instantly for free.",
      ta: "வங்கி கணக்குகளுக்கு இடையே நேரடியாக, உடனடியாக இலவசமாக பணம் அனுப்பலாம் மற்றும் பெறலாம்.",
      hi: "बिना किसी शुल्क के एक बैंक खाते से दूसरे खाते में तुरंत पैसे भेजें और पाएं।"
    },
    difficulty: "easy",
    badgeReward: "UPI Novice",
    voiceText: {
      en: "UPI is a free government-backed system. It moves money directly from your bank to the receiver's bank in 2 seconds. You do not need to keep money in the app.",
      ta: "யுபிஐ என்பது அரசாங்கத்தால் ஆதரிக்கப்படும் இலவச அமைப்பாகும். இது உங்கள் வங்கியிலிருந்து பெறுநரின் வங்கிக்கு 2 வினாடிகளில் பணத்தை மாற்றுகிறது.",
      hi: "यूपीआई एक सरकारी और सुरक्षित प्रणाली है। यह 2 सेकंड में आपके बैंक से सामने वाले के बैंक में सीधे पैसे ट्रांसफर करता है।"
    },
    steps: [
      { num: 1, title: { en: "Direct Bank to Bank", ta: "நேரடி வங்கி பரிமாற்றம்", hi: "सीधे बैंक से बैंक" }, desc: { en: "Money does not stay in phone; it goes safely between official bank accounts.", ta: "பணம் போனில் தங்காது; வங்கிக் கணக்குகளுக்கு இடையே பாதுகாப்பாக செல்கிறது.", hi: "पैसे फोन में नहीं रहते, सीधे सरकारी बैंक खातों में जाते हैं।" }, visual: "bank_to_bank" },
      { num: 2, title: { en: "Works 24 Hours Every Day", ta: "24 மணி நேரமும் செயல்படும்", hi: "24 घंटे कभी भी काम करता है" }, desc: { en: "Works even on Sundays, festival holidays, and midnight.", ta: "ஞாயிறு, திருவிழா விடுமுறை மற்றும் நள்ளிரவிலும் செயல்படும்.", hi: "रविवार, त्योहार की छुट्टी या आधी रात को भी तुरंत चलता है।" }, visual: "clock_247" },
      { num: 3, title: { en: "Zero Hidden Fees", ta: "பூஜ்ஜிய கட்டணம்", hi: "कोई अतिरिक्त शुल्क नहीं" }, desc: { en: "Normal UPI payments for tea, vegetables, or friends have zero charges.", ta: "தேநீர், காய்கறிகள் வாங்குவதற்கு யுபிஐ பயன்படுத்த எந்த கட்டணமும் இல்லை.", hi: "चाय, सब्जी या खरीदारी के लिए सामान्य यूपीआई लेनदेन बिल्कुल मुफ्त है।" }, visual: "zero_fee" }
    ],
    simulation: {
      type: "diagram_sim",
      flow: ["Your Bank", "Secure UPI Network", "Merchant Bank"]
    },
    safetyTip: {
      en: "You ONLY enter your UPI PIN when SENDING money. You NEVER enter your PIN to RECEIVE money!",
      ta: "பணம் அனுப்பும்போது மட்டுமே UPI பின்னை உள்ளிட வேண்டும். பணம் பெற ஒருபோதும் பின்னை உள்ளிட வேண்டாம்!",
      hi: "पैसे भेजते समय ही यूपीआई पिन डाला जाता है। पैसे प्राप्त करने के लिए कभी पिन नहीं डालना होता!"
    }
  },
  {
    id: "l_pay_2",
    category: "payments",
    icon: "📷",
    title: {
      en: "Scanning a Shop QR Code",
      ta: "கடை QR குறியீட்டை ஸ்கேன் செய்வது எப்படி",
      hi: "दुकान का क्यूआर (QR) कोड कैसे स्कैन करें"
    },
    description: {
      en: "Point your camera at the black-and-white square standee in shops.",
      ta: "கடைகளில் உள்ள கருப்பு வெள்ளை சதுர QR பலகையை கேமராவால் பார்க்கவும்.",
      hi: "दुकानों पर रखे काले और सफेद चौकोर क्यूआर कोड को कैमरे से स्कैन करें।"
    },
    difficulty: "easy",
    badgeReward: "QR Scanner",
    voiceText: {
      en: "Open your payment app. Tap Scan QR. Hold your phone camera over the shop standee. The shopkeeper's name will appear on your screen.",
      ta: "உங்கள் கட்டண செயலியைத் திறக்கவும். Scan QR என்பதைத் தொடவும். கடையின் பலகை மீது கேமராவைப் பிடிக்கவும். கடைக்காரரின் பெயர் திரையில் தோன்றும்.",
      hi: "अपना पेमेंट ऐप खोलें। स्कैन क्यूआर दबाएं। दुकान के स्टैंड पर बने कोड पर कैमरा रखें। दुकानदार का नाम स्क्रीन पर आ जाएगा।"
    },
    steps: [
      { num: 1, title: { en: "Tap 'Scan QR' Icon", ta: "'Scan QR' ஐகானைத் தொடவும்", hi: "'स्कैन क्यूआर' आइकन दबाएं" }, desc: { en: "Look for the square scanner symbol at the top of your payment app.", ta: "உங்கள் கட்டண செயலியின் மேற்பகுதியில் உள்ள சதுர ஸ்கேனர் சின்னத்தைப் பாருங்கள்.", hi: "अपने पेमेंट ऐप में सबसे ऊपर बने चौकोर स्कैनर निशान को दबाएं।" }, visual: "scan_icon" },
      { num: 2, title: { en: "Hold Frame Over QR Code", ta: "QR குறியீட்டின் மீது போனைப் பிடிக்கவும்", hi: "क्यूआर कोड के ऊपर कैमरा रखें" }, desc: { en: "Center the square inside the camera box until it beeps.", ta: "கேமரா பெட்டியின் நடுவில் QR குறியீடு இருக்குமாறு பிடிக்கவும்.", hi: "कैमरे के चौकोर बॉक्स के अंदर क्यूआर कोड को सीधा रखें।" }, visual: "qr_frame" },
      { num: 3, title: { en: "VERIFY the Name!", ta: "பெயரைச் சரிபார்க்கவும்!", hi: "दुकानदार का नाम जरूर जांचें!" }, desc: { en: "Confirm the shop name shown on screen matches the shop banner before typing money.", ta: "பணம் தட்டச்சு செய்வதற்கு முன் திரையில் தோன்றும் கடையின் பெயரைச் சரிபார்க்கவும்.", hi: "रुपये डालने से पहले स्क्रीन पर दिख रहा नाम दुकानदार से जरूर पूछें।" }, visual: "verify_name" }
    ],
    simulation: {
      type: "qr_scanner_sim",
      merchant: "Lakshmi Kirana & General Store",
      vpa: "lakshmistore@upi"
    },
    safetyTip: {
      en: "Always verify the shop name out loud: 'Bhaiya, is your QR showing Lakshmi Store?' before paying.",
      ta: "பணம் செலுத்துவதற்கு முன் கடையின் பெயரை சத்தமாகச் கேட்டு உறுதிப்படுத்திக் கொள்ளுங்கள்.",
      hi: "पैसे भेजने से पहले दुकानदार से नाम जरूर पूछें: 'भाईसाहब, आपके क्यूआर पर लक्ष्मी स्टोर नाम आ रहा है?'"
    }
  },
  {
    id: "l_pay_3",
    category: "payments",
    icon: "💵",
    title: {
      en: "Safe UPI Payment Practice",
      ta: "பாதுகாப்பான UPI கட்டணப் பயிற்சி",
      hi: "सुरक्षित यूपीआई पेमेंट का अभ्यास"
    },
    description: {
      en: "Practice paying ₹250 to Ravi General Store in a 100% safe sandbox.",
      ta: "ரவி ஜெனரல் ஸ்டோருக்கு ₹250 செலுத்தி முழுமையான பாதுகாப்பான பயிற்சி பெறுங்கள்.",
      hi: "रवि जनरल स्टोर को ₹250 भेजने का 100% सुरक्षित अभ्यास करें।"
    },
    difficulty: "medium",
    badgeReward: "Payment Learner",
    voiceText: {
      en: "In this practice, you will pay 250 rupees to Ravi Store. Check the recipient name, enter the amount, and type the practice PIN 1234. No real money will be deducted.",
      ta: "இந்த பயிற்சியில், நீங்கள் ரவி ஸ்டோருக்கு 250 ரூபாய் செலுத்துவீர்கள். பெயரைச் சரிபார்த்து, தொகையை உள்ளிட்டு, 1234 என்ற பயிற்சி பின்னை உள்ளிடவும். உண்மையான பணம் பிடித்தம் செய்யப்படாது.",
      hi: "इस अभ्यास में आप रवि स्टोर को 250 रुपये भेजेंगे। नाम जांचें, राशि भरें और अभ्यास पिन 1234 डालें। कोई असली पैसा नहीं कटेगा।"
    },
    steps: [
      { num: 1, title: { en: "Verify Receiver Name", ta: "பெறுநரின் பெயரை சரிபார்க்கவும்", hi: "प्राप्तकर्ता का नाम जांचें" }, desc: { en: "Screen shows: Ravi General Store.", ta: "திரை காட்டுகிறது: ரவி ஜெனரல் ஸ்டோர்.", hi: "स्क्रीन पर नाम दिख रहा है: रवि जनरल स्टोर।" }, visual: "check_receiver" },
      { num: 2, title: { en: "Enter Amount (₹250)", ta: "தொகையை உள்ளிடவும் (₹250)", hi: "रुपये डालें (₹250)" }, desc: { en: "Type the exact price agreed with the seller.", ta: "விற்பனையாளரிடம் ஒப்புக்கொண்ட சரியான தொகையை தட்டச்சு செய்யவும்.", hi: "जितना सामान लिया है, उतनी ही सही रकम दर्ज करें।" }, visual: "enter_amount" },
      { num: 3, title: { en: "Enter UPI PIN Privately", ta: "ரகசியமாக UPI பின்னை உள்ளிடவும்", hi: "छिपकर अपना यूपीआई पिन डालें" }, desc: { en: "Cover your screen with your other hand so nobody nearby sees your PIN.", ta: "அருகில் உள்ள எவரும் பார்க்காதவாறு மறு கையால் மறைத்து பின்னை அழுத்தவும்.", hi: "दूसरे हाथ से स्क्रीन छुपाएं ताकि कोई भी आपका पिन न देख सके।" }, visual: "pin_pad" },
      { num: 4, title: { en: "Hear Green Tick & Voice Box", ta: "பச்சை டிக் & குரல் அறிவிப்பைக் கேளுங்கள்", hi: "हरा टिक और ध्वनि संदेश सुनें" }, desc: { en: "The green tick confirms money went directly to the store.", ta: "பச்சை நிற டிக் கடைக்கு பணம் வெற்றிகரமாக சென்றுவிட்டது என்பதை உறுதிப்படுத்துகிறது.", hi: "हरा टिक आते ही समझें कि पेमेंट पूरा हो गया है।" }, visual: "success_tick" }
    ],
    simulation: {
      type: "upi_pay",
      merchantName: "Ravi General Store",
      amount: 250,
      correctPin: "1234"
    },
    safetyTip: {
      en: "If a payment ever fails or shows 'Pending', do NOT pay again immediately. Wait 5 minutes and check your bank SMS.",
      ta: "பணம் செலுத்துவதில் தவறு ஏற்பட்டால் அல்லது 'Pending' என்று காட்டினால், உடனடியாக மீண்டும் பணம் செலுத்த வேண்டாம். 5 நிமிடங்கள் காத்திருந்து உங்கள் வங்கி SMS-ஐ சரிபார்க்கவும்.",
      hi: "अगर पेमेंट अटक जाए या पेंडिंग दिखाए, तो तुरंत दोबारा पैसे न भेजें। 5 मिनट रुकें और बैंक का मैसेज देखें।"
    }
  },
  {
    id: "l_pay_4",
    category: "payments",
    icon: "🛡️",
    title: {
      en: "Golden Rule: PIN vs OTP",
      ta: "தங்க விதி: பின் (PIN) vs OTP வேறுபாடு",
      hi: "स्वर्ण नियम: यूपीआई पिन और ओटीपी में अंतर"
    },
    description: {
      en: "Understand why you NEVER enter your PIN to receive prizes or money.",
      ta: "பரிசுகள் அல்லது பணத்தைப் பெற நீங்கள் ஏன் ஒருபோதும் பின்னை உள்ளிடக்கூடாது என்பதைப் புரிந்து கொள்ளுங்கள்.",
      hi: "समझें कि लॉटरी या पैसे पाने के लिए कभी भी पिन क्यों नहीं डाला जाता।"
    },
    difficulty: "easy",
    badgeReward: "PIN Protector",
    voiceText: {
      en: "Remember this golden rule: UPI PIN is only used to send money out of your bank. To receive money, you just give your phone number. You NEVER type your PIN to receive money.",
      ta: "இந்த தங்க விதியை நினைவில் கொள்ளுங்கள்: உங்கள் வங்கியிலிருந்து பணம் அனுப்பும்போது மட்டுமே UPI பின் பயன்படுத்தப்படுகிறது. பணம் பெற உங்கள் தொலைபேசி எண்ணைக் கொடுத்தால் போதும். பணம் பெற ஒருபோதும் பின்னை உள்ளிட வேண்டாம்.",
      hi: "यह नियम हमेशा याद रखें: यूपीआई पिन सिर्फ बैंक से पैसे काटने के लिए डाला जाता है। पैसे लेने के लिए सिर्फ अपना फोन नंबर देना होता है। पैसे पाने के लिए कभी पिन न डालें।"
    },
    steps: [
      { num: 1, title: { en: "Sending Money = Enter PIN", ta: "பணம் அனுப்ப = பின்னை உள்ளிடவும்", hi: "पैसे भेजने के लिए = पिन डालें" }, desc: { en: "You buy groceries or send to son: You type PIN.", ta: "மளிகை பொருட்கள் வாங்குகிறீர்கள் அல்லது மகனுக்கு அனுப்புகிறீர்கள்: பின்னை உள்ளிடுகிறீர்கள்.", hi: "आप सामान खरीद रहे हैं या बेटे को भेज रहे हैं: आप पिन डालते हैं।" }, visual: "send_money_pin" },
      { num: 2, title: { en: "Receiving Money = NO PIN!", ta: "பணம் பெற = பின் தேவையில்லை!", hi: "पैसे लेने के लिए = पिन नहीं चाहिए!" }, desc: { en: "Government pension, crop payment, or friend sending money arrives automatically.", ta: "அரசு உதவித்தொகை அல்லது பயிர் விற்பனை பணம் தானாகவே வந்து சேரும்.", hi: "पेंशन या फसल का पैसा सीधे खाते में आ जाता है, कुछ नहीं दबाना होता।" }, visual: "receive_no_pin" },
      { num: 3, title: { en: "Scammer Trick Exposed", ta: "மோசடி வித்தை அம்பலமானது", hi: "ठगों की चाल से सावधान" }, desc: { en: "If someone says 'Enter PIN to receive ₹5000 bonus', they are robbing you!", ta: "'₹5000 பெற பின்னை உள்ளிடுங்கள்' என்று யாராவது சொன்னால், அவர்கள் உங்கள் பணத்தைத் திருடுகிறார்கள்!", hi: "अगर कोई कहे कि '5000 पाने के लिए पिन डालो', तो समझो वह आपके पैसे लूट रहा है!" }, visual: "scam_exposed" }
    ],
    simulation: {
      type: "scam_rule_sim",
      scenario: "Stranger calls: 'Sir I sent ₹2000 by mistake, enter PIN to return or claim bonus'"
    },
    safetyTip: {
      en: "Any person who sends a QR code and tells you to scan it to 'receive money' is a fraudster.",
      ta: "பணம் பெற QR குறியீட்டை ஸ்கேன் செய்யச் சொல்லும் எவரும் ஒரு மோசடிக்காரர்.",
      hi: "जो कोई भी कहे कि पैसे लेने के लिए यह क्यूआर कोड स्कैन करो, वह 100% धोखेबाज है।"
    }
  },
  {
    id: "l_pay_5",
    category: "payments",
    icon: "🏦",
    title: {
      en: "Checking Bank Balance Safely",
      ta: "வங்கி இருப்புத் தொகையை பாதுகாப்பாக சரிபார்த்தல்",
      hi: "बैंक बैलेंस सुरक्षित तरीके से चेक करना"
    },
    description: {
      en: "Check how much money is in your account without going to the bank branch.",
      ta: "வங்கி கிளைக்கு செல்லாமலேயே உங்கள் கணக்கில் எவ்வளவு பணம் உள்ளது என்பதைப் பாருங்கள்.",
      hi: "बैंक की लाइन में लगे बिना घर बैठे फोन पर चेक करें कि खाते में कितने रुपये हैं।"
    },
    difficulty: "easy",
    badgeReward: "Balance Checker",
    voiceText: {
      en: "Open your payment app. Tap Check Balance. Select your bank account. Enter your secret UPI PIN. Your real account balance will display on screen.",
      ta: "உங்கள் கட்டண செயலியைத் திறக்கவும். Check Balance என்பதைத் தொடவும். உங்கள் வங்கிக் கணக்கைத் தேர்ந்தெடுக்கவும். உங்கள் ரகசிய UPI பின்னை உள்ளிடவும். இருப்புத் தொகை திரையில் தோன்றும்.",
      hi: "पेमेंट ऐप खोलें। चेक बैलेंस पर दबाएं। अपना बैंक खाता चुनें। अपना यूपीआई पिन डालें। आपके खाते के असली रुपये स्क्रीन पर दिख जाएंगे।"
    },
    steps: [
      { num: 1, title: { en: "Tap 'Check Balance'", ta: "'Check Balance' என்பதைத் தொடவும்", hi: "'चेक बैलेंस' पर टैप करें" }, desc: { en: "Located on the main home screen of your UPI app.", ta: "உங்கள் UPI செயலியின் முகப்புத் திரையில் அமைந்துள்ளது.", hi: "यह आपके यूपीआई ऐप की होम स्क्रीन पर ही मिल जाता है।" }, visual: "check_bal_btn" },
      { num: 2, title: { en: "Select Bank Account", ta: "வங்கிக் கணக்கைத் தேர்ந்தெடுக்கவும்", hi: "अपना बैंक खाता चुनें" }, desc: { en: "Tap your State Bank, Canara, or Gramin Bank account.", ta: "உங்கள் ஸ்டேட் பாங்க் அல்லது கிராமின் வங்கி கணக்கைத் தொடவும்.", hi: "अपना एसबीआई, केनरा या ग्रामीण बैंक खाता चुनें।" }, visual: "bank_list" },
      { num: 3, title: { en: "Enter UPI PIN", ta: "UPI பின்னை உள்ளிடவும்", hi: "यूपीआई पिन दर्ज करें" }, desc: { en: "Only your bank checks this PIN to verify your identity.", ta: "உங்கள் வங்கியில் மட்டுமே இந்த பின் சரிபார்க்கப்படுகிறது.", hi: "बैंक आपकी सुरक्षा के लिए यह पिन मांगता है।" }, visual: "pin_pad_secure" }
    ],
    simulation: {
      type: "balance_sim",
      bankName: "Tamil Nadu Grama Bank / Baroda UP Bank",
      simulatedBalance: "₹14,850.00"
    },
    safetyTip: {
      en: "Never ask a stranger at a tea stall or bus stop to enter your PIN to check your balance.",
      ta: "தேநீர் கடை அல்லது பேருந்து நிறுத்தத்தில் உள்ள அந்நியரிடம் பின்னை கொடுத்து இருப்புத் தொகையை சரிபார்க்கச் சொல்லாதீர்கள்.",
      hi: "चाय की दुकान या बस स्टैंड पर किसी अनजान व्यक्ति को अपना पिन देकर बैलेंस चेक न करवाएं।"
    }
  },

  // ==================== 4. ONLINE SAFETY & SCAMS (8 Lessons) ====================
  {
    id: "l_safe_1",
    category: "safety",
    icon: "🔐",
    title: {
      en: "Never Share Your OTP with Anyone",
      ta: "உங்கள் OTP-ஐ யாரிடமும் பகிராதீர்கள்",
      hi: "अपना ओटीपी (OTP) किसी को कभी न बताएं"
    },
    description: {
      en: "The 6-digit number is the master key to your bank account. Keep it secret.",
      ta: "6 இலக்க எண் உங்கள் வங்கிக் கணக்கின் முதன்மை சாவி. அதை ரகசியமாக வைத்திருங்கள்.",
      hi: "6 अंकों का ओटीपी आपके बैंक खाते की चाबी है। इसे हमेशा गुप्त रखें।"
    },
    difficulty: "easy",
    badgeReward: "Safety Champion",
    voiceText: {
      en: "OTP means One Time Password. Banks, police, or government officers will NEVER call you to ask for your OTP. If anyone asks for OTP on call, disconnect immediately.",
      ta: "OTP என்பது ஒரு முறை கடவுச்சொல். வங்கிகள், காவல்துறை அல்லது அரசு அதிகாரிகள் ஒருபோதும் உங்களை அழைத்து OTP கேட்க மாட்டார்கள். யாராவது போனில் OTP கேட்டால், உடனே அழைப்பைத் துண்டிக்கவும்.",
      hi: "ओटीपी मतलब वन टाइम पासवर्ड। बैंक मैनेजर, पुलिस या कोई भी अधिकारी कभी फोन पर आपसे ओटीपी नहीं मांगते। अगर कोई फोन पर ओटीपी मांगे तो तुरंत फोन काट दें।"
    },
    steps: [
      { num: 1, title: { en: "What is an OTP?", ta: "OTP என்றால் என்ன?", hi: "ओटीपी क्या होता है?" }, desc: { en: "A temporary 4 or 6-digit number sent by SMS during logins or payments.", ta: "பணம் செலுத்தும் போது SMS மூலம் அனுப்பப்படும் தற்காலிக 4 அல்லது 6 இலக்க எண்.", hi: "लॉगिन या पेमेंट के समय एसएमएस से आने वाला 4 या 6 अंकों का गुप्त कोड।" }, visual: "otp_sms" },
      { num: 2, title: { en: "Who Can Ask for OTP?", ta: "யார் OTP கேட்க முடியும்?", hi: "ओटीपी कौन मांग सकता है?" }, desc: { en: "NOBODY! Not bank managers, not electricity board, not gas delivery.", ta: "யாரும் இல்லை! வங்கி மேலாளர், மின்சார வாரியம், எரிவாயு விநியோகஸ்தர் எவரும் கேட்கக்கூடாது.", hi: "कोई भी नहीं! न बैंक मैनेजर, न बिजली विभाग, न कोई रिश्तेदार।" }, visual: "nobody_icon" },
      { num: 3, title: { en: "Action: Hang Up!", ta: "நடவடிக்கை: போனை வையுங்கள்!", hi: "तुरंत कॉल काटें!" }, desc: { en: "Press the red button immediately if someone asks for numbers from SMS.", ta: "செய்தியில் வந்த எண்களை யாராவது கேட்டால் உடனடியாக சிவப்பு பொத்தானை அழுத்தவும்.", hi: "अगर कोई मैसेज में आया नंबर पूछे तो तुरंत लाल बटन दबाकर फोन काट दें।" }, visual: "hangup_call" }
    ],
    simulation: {
      type: "call_defense_sim",
      callerName: "Unknown - Fake Bank Manager",
      dialogue: "Sir, your ATM card is expiring today. Tell me the 6-digit OTP to renew it!"
    },
    safetyTip: {
      en: "Even if the caller claims your pension or gas subsidy will be stopped, NEVER tell your OTP.",
      ta: "உங்கள் ஓய்வூதியம் அல்லது எரிவாயு மானியம் நிறுத்தப்படும் என்று அழைப்பவர் கூறினாலும், ஒருபோதும் OTP-ஐச் சொல்லாதீர்கள்.",
      hi: "चाहे फोन करने वाला कहे कि पेंशन या गैस सब्सिडी बंद हो जाएगी, फिर भी ओटीपी कभी न बताएं।"
    }
  },
  {
    id: "l_safe_2",
    category: "safety",
    icon: "🎁",
    title: {
      en: "Spotting Fake Lottery & Prize Messages",
      ta: "போலி லாட்டரி மற்றும் பரிசு செய்திகளை கண்டறிதல்",
      hi: "लॉटरी और ईनाम वाले फर्जी संदेशों की पहचान"
    },
    description: {
      en: "'Congratulations! You won ₹50,000 in KBC lottery' is always a 100% scam.",
      ta: "'வாழ்த்துக்கள்! நீங்கள் ₹50,000 வென்றுள்ளீர்கள்' என்பது எப்போதும் 100% மோசடி.",
      hi: "'बधाई हो! आपने 50 हजार की लॉटरी जीती है' ऐसा संदेश हमेशा 100% फ्रॉड होता है।"
    },
    difficulty: "easy",
    badgeReward: "Scam Spotter",
    voiceText: {
      en: "You cannot win a lottery that you never bought a ticket for. Fraudsters send fake WhatsApp messages saying you won cash or a car to make you pay fake tax fees.",
      ta: "நீங்கள் டிக்கெட் வாங்காத லாட்டரியை நீங்கள் வெல்ல முடியாது. போலி வரி கட்டணம் செலுத்த வைக்க மோசடி செய்பவர்கள் ரொக்கம் அல்லது கார் வென்றதாக போலி செய்திகளை அனுப்புகிறார்கள்.",
      hi: "जिस लॉटरी का टिकट आपने कभी खरीदा ही नहीं, उसे आप कैसे जीत सकते हैं? ठग लोग टैक्स या फाइल चार्ज के नाम पर आपसे पैसे ऐंठने के लिए ऐसे झूठे मैसेज भेजते हैं।"
    },
    steps: [
      { num: 1, title: { en: "Red Flag: Unearned Money", ta: "ஆபத்து அறிகுறி: உழைக்காத பணம்", hi: "खतरे की घंटी: बिना मांगे पैसा" }, desc: { en: "Nobody gives thousands of rupees for free on the internet.", ta: "இணையத்தில் யாரும் ஆயிரக்கணக்கான ரூபாய்களை சும்மா தருவதில்லை.", hi: "इंटरनेट पर कोई भी बिना किसी वजह के मुफ्त में रुपये नहीं बांटता।" }, visual: "free_money_flag" },
      { num: 2, title: { en: "The Trap: 'Pay ₹500 fee first'", ta: "பொறி: 'முதலில் ₹500 கட்டணம் செலுத்துங்கள்'", hi: "ठगी का जाल: 'पहले 500 रुपये फीस दो'" }, desc: { en: "They ask you to transfer small money first to unlock the big prize.", ta: "பெரிய பரிசைப் பெற சிறிய தொகையை முதலில் அனுப்பச் சொல்வார்கள்.", hi: "वे बड़ा ईनाम देने के नाम पर पहले 500 या 1000 रुपये जमा करने को कहते हैं।" }, visual: "trap_fee" },
      { num: 3, title: { en: "Action: Delete & Block", ta: "நடவடிக்கை: நீக்கு & பிளாக் செய்", hi: "कार्रवाई: डिलीट और ब्लॉक करें" }, desc: { en: "Delete the message and block the unknown number immediately.", ta: "செய்தியை நீக்கி, அறியப்படாத எண்ணை உடனடியாக பிளாக் செய்யவும்.", hi: "मैसेज को तुरंत डिलीट करें और उस अनजान नंबर को ब्लॉक करें।" }, visual: "block_number" }
    ],
    simulation: {
      type: "quiz_interactive",
      question: "You get a message: 'You won a Maruti Car in Diwali Draw! Send ₹1200 for registration.' What do you do?",
      options: ["Send ₹1200", "Forward to all friends", "Delete and report scam ✅"],
      correctIndex: 2
    },
    safetyTip: {
      en: "Real government schemes deposit subsidy directly into bank account via DBT; they never send WhatsApp prize links.",
      ta: "அரசு மானியங்கள் டிபிடி மூலம் நேரடியாக வங்கிக் கணக்கில் வரவு வைக்கப்படும்; அவை வாட்ஸ்அப் பரிசு இணைப்புகளை அனுப்பாது.",
      hi: "सरकारी योजनाओं का पैसा सीधे खाते (DBT) में आता है, कभी वॉट्सऐप लिंक पर क्लिक करके नहीं मिलता।"
    }
  },
  {
    id: "l_safe_3",
    category: "safety",
    icon: "🔗",
    title: {
      en: "Dangerous Links and Strange Messages",
      ta: "ஆபத்தான இணைப்புகள் மற்றும் விசித்திரமான செய்திகள்",
      hi: "खतरनाक लिंक और अनजान वेबसाइटों से बचाव"
    },
    description: {
      en: "Why you should never tap blue underline links sent by unknown strangers.",
      ta: "அறியாதவர்கள் அனுப்பும் நீல நிற அடிக்கோடிட்ட இணைப்புகளை ஏன் தொடக்கூடாது.",
      hi: "अनजान लोगों द्वारा भेजे गए नीले लिंक पर कभी क्लिक क्यों नहीं करना चाहिए।"
    },
    difficulty: "medium",
    badgeReward: "Link Defender",
    voiceText: {
      en: "Blue underline text is a web link. Tapping it can open a fake page that steals your passwords or installs harmful software. Only tap links from people you trust.",
      ta: "நீல அடிக்கோடிட்ட உரை ஒரு இணைய இணைப்பு. அதைத் தொடுவது உங்கள் கடவுச்சொற்களைத் திருடும் போலி பக்கத்தைத் திறக்கலாம். நீங்கள் நம்பும் நபர்களின் இணைப்புகளை மட்டுமே தொடவும்.",
      hi: "नीले रंग का अंडरलाइन वाला शब्द वेब लिंक होता है। उस पर क्लिक करने से फर्जी पेज खुल सकता है जो आपकी जानकारी चुरा सकता है। सिर्फ भरोसेमंद लिंक ही खोलें।"
    },
    steps: [
      { num: 1, title: { en: "Identify Blue Links", ta: "நீல இணைப்புகளை அடையாளம் காணவும்", hi: "नीले लिंक की पहचान करें" }, desc: { en: "Looks like 'bit.ly/claim-cash' or 'sbi-update-kyc.xyz'.", ta: "'bit.ly/cash' அல்லது 'sbi-update.xyz' போன்று இருக்கும்.", hi: "'bit.ly/cash' या 'sbi-update.xyz' जैसे अजीब नाम वाले लिंक।" }, visual: "link_sample" },
      { num: 2, title: { en: "Official vs Fake Domains", ta: "அரசு vs போலி முகவரிகள்", hi: "सरकारी बनाम फर्जी वेबसाइट" }, desc: { en: "Official Indian government portals end with '.gov.in' or '.nic.in'.", ta: "அரசு இணையதளங்கள் '.gov.in' அல்லது '.nic.in' என்று முடியும்.", hi: "असली भारतीय सरकारी पोर्टल के अंत में '.gov.in' या '.nic.in' होता है।" }, visual: "gov_domain" },
      { num: 3, title: { en: "Ask Family or 'Is This Safe?'", ta: "குடும்பத்தினர் அல்லது 'Is This Safe?' கருவியைக் கேளுங்கள்", hi: "परिवार या 'क्या यह सुरक्षित है?' टूल से पूछें" }, desc: { en: "Paste suspicious text into GramaGuide's scam detector before opening.", ta: "திறப்பதற்கு முன் சந்தேகத்திற்கிடமான உரையை எங்கள் மோசடி கண்டறிதல் கருவியில் சரிபார்க்கவும்.", hi: "खोलने से पहले संदिग्ध मैसेज को हमारे 'स्कैम डिटेक्टर' में डालकर जांचें।" }, visual: "check_detector" }
    ],
    simulation: {
      type: "link_inspection_sim",
      sampleLinks: [
        { url: "https://pmkisan.gov.in", safe: true },
        { url: "http://free-recharge-offer.xyz", safe: false }
      ]
    },
    safetyTip: {
      en: "Free mobile recharge links are always fake; they steal your contacts and send spam to your relatives.",
      ta: "இலவச மொபைல் ரீசார்ஜ் இணைப்புகள் எப்போதுமே போலியானவை; அவை உங்கள் தொடர்புகளைத் திருடி உறவினர்களுக்கு ஸ்பேம் அனுப்புகின்றன.",
      hi: "मुफ्त मोबाइल रिचार्ज वाले लिंक हमेशा झूठे होते हैं; वे आपके फोन के नंबर चुराकर दोस्तों को स्पैम भेजते हैं।"
    }
  },
  {
    id: "l_safe_4",
    category: "safety",
    icon: "🚨",
    title: {
      en: "Fake Bank Calls & KYC Threats",
      ta: "போலி வங்கி அழைப்புகள் & KYC மிரட்டல்கள்",
      hi: "फर्जी बैंक कॉल और बिजली बिल/केवाईसी की धमकी"
    },
    description: {
      en: "'Your electricity will be cut tonight at 9:30 PM' scam explained.",
      ta: "'இன்று இரவு 9:30 மணிக்கு உங்கள் மின்சாரம் துண்டிக்கப்படும்' மோசடி விளக்கம்.",
      hi: "'आज रात 9:30 बजे बिजली कट जाएगी' वाले मैसेज और कॉल का सच जानें।"
    },
    difficulty: "medium",
    badgeReward: "Threat Shield",
    voiceText: {
      en: "Scammers create fear by threatening that your electricity will be cut or your SIM will be blocked in two hours. Do not panic. Official departments send notice letters, not urgent threatening calls.",
      ta: "உங்கள் மின்சாரம் துண்டிக்கப்படும் அல்லது சிம் பிளாக் செய்யப்படும் என்று மிரட்டி மோசடி செய்பவர்கள் பயத்தை உருவாக்குகிறார்கள். பயப்பட வேண்டாம். அரசுத் துறைகள் கடிதங்களை அனுப்புகின்றன, அச்சுறுத்தும் அழைப்புகளை அல்ல.",
      hi: "धोखेबाज लोग डराने के लिए कहते हैं कि 2 घंटे में सिम बंद हो जाएगी या रात को बिजली कट जाएगी। घबराएं नहीं। सरकारी विभाग सीधे नोटिस भेजते हैं, ऐसे धमकी भरे कॉल नहीं करते।"
    },
    steps: [
      { num: 1, title: { en: "Recognize the Fear Tactic", ta: "பயமுறுத்தும் உத்தியை அடையாளம் காணவும்", hi: "डराने के तरीके को पहचानें" }, desc: { en: "Scammers always give very little time: 'Do it in 15 minutes or lose everything'.", ta: "மோசடிக்காரர்கள் மிகக் குறைந்த நேரமே தருவார்கள்: '15 நிமிடங்களில் செய்யுங்கள்'.", hi: "ठग हमेशा कम समय देते हैं: 'तुरंत 15 मिनट में करो वरना कनेक्शन कट जाएगा'।" }, visual: "fear_tactic" },
      { num: 2, title: { en: "Never Install Screen Sharing Apps", ta: "திரை பகிர்வு செயலிகளை நிறுவ வேண்டாம்", hi: "एनीडेस्क (AnyDesk) जैसे ऐप कभी न डालें" }, desc: { en: "Never install AnyDesk, TeamViewer, or QuickSupport on caller's request.", ta: "அழைப்பாளர் சொன்னால் AnyDesk, TeamViewer போன்ற செயலிகளை நிறுவ வேண்டாம்.", hi: "कॉल करने वाले के कहने पर एनीडेस्क, टीमव्यूअर जैसी ऐप कभी इंस्टॉल न करें।" }, visual: "screen_share_warn" },
      { num: 3, title: { en: "Visit Local Office Directly", ta: "உள்ளூர் அலுவலகத்தை நேரடியாக அணுகவும்", hi: "सीधे स्थानीय दफ्तर जाएं" }, desc: { en: "Go physically to your local electricity board or bank branch to verify.", ta: "உறுதிப்படுத்த உங்கள் உள்ளூர் மின்வாரியம் அல்லது வங்கி கிளைக்கு நேரில் செல்லுங்கள்.", hi: "सच्चाई जानने के लिए खुद अपने नजदीकी बिजली दफ्तर या बैंक शाखा में जाएं।" }, visual: "visit_office" }
    ],
    simulation: {
      type: "scam_analyzer_demo",
      sampleText: "Dear Customer, Your electricity power will be disconnected tonight at 9:30 PM because previous bill was not updated. Immediately call officer at 9812345678."
    },
    safetyTip: {
      en: "Screen sharing apps allow a stranger to see your phone screen and copy your banking passwords live.",
      ta: "திரை பகிர்வு செயலிகள் ஒரு அந்நியர் உங்கள் போன் திரையைப் பார்க்கவும் உங்கள் வங்கி கடவுச்சொற்களைத் திருடவும் அனுமதிக்கின்றன.",
      hi: "स्क्रीन शेयरिंग ऐप से सामने बैठा ठग आपके फोन की पूरी स्क्रीन और पासवर्ड लाइव देख सकता है।"
    }
  },
  {
    id: "l_safe_5",
    category: "safety",
    icon: "👥",
    title: {
      en: "Social Media Privacy & Fake Profiles",
      ta: "சமூக ஊடக தனியுரிமை & போலி கணக்குகள்",
      hi: "सोशल मीडिया पर प्राइवेसी और फर्जी प्रोफाइल से बचाव"
    },
    description: {
      en: "Protect your family photos and do not accept requests from strangers.",
      ta: "உங்கள் குடும்ப புகைப்படங்களைப் பாதுகாக்கவும், தெரியாதவர்களின் கோரிக்கைகளை ஏற்காதீர்கள்.",
      hi: "अपनी पारिवारिक फोटो को सुरक्षित रखें और अनजान लोगों की फ्रेंड रिक्वेस्ट न अपनाएं।"
    },
    difficulty: "easy",
    badgeReward: "Privacy Guard",
    voiceText: {
      en: "Lock your profile so only close friends can see your photos. If a friend creates a new profile and asks for urgent money for an operation, call their real phone number first to check.",
      ta: "நெருங்கிய நண்பர்கள் மட்டுமே உங்கள் படங்களைப் பார்க்க உங்கள் சுயவிவரத்தைப் பூட்டுங்கள். நண்பர் ஒரு புதிய கணக்கைத் தொடங்கி மருத்துவமனைக்கு அவசரப் பணம் கேட்டால், முதலில் அவரது உண்மையான எண்ணை அழைத்து விசாரிக்கவும்.",
      hi: "अपनी प्रोफाइल को लॉक रखें ताकि केवल रिश्तेदार ही फोटो देख सकें। अगर कोई दोस्त नई आईडी से तुरंत ऑपरेशन के लिए पैसे मांगे, तो पहले उसके पुराने नंबर पर फोन करके सच जानें।"
    },
    steps: [
      { num: 1, title: { en: "Turn On Profile Lock", ta: "சுயவிவரப் பூட்டை இயக்கவும்", hi: "प्रोफाइल लॉक चालू करें" }, desc: { en: "Keeps strangers from zooming or downloading your daughters' or family photos.", ta: "அந்நியர்கள் உங்கள் குடும்பப் படங்களைப் பதிவிறக்குவதைத் தடுக்கிறது.", hi: "अनजान लोग आपकी या परिवार की फोटो डाउनलोड नहीं कर पाएंगे।" }, visual: "profile_lock" },
      { num: 2, title: { en: "Beware of Duplicate Friends", ta: "போலி நண்பர்கள் கணக்குகளிடம் எச்சரிக்கை", hi: "दोस्त के नाम से बने नए खाते से सावधान" }, desc: { en: "Scammers copy someone's photo and pretend to be them asking for emergency money.", ta: "மோசடிக்காரர்கள் நண்பரின் படத்தை நகலெடுத்து அவசர பணம் கேட்கிறார்கள்.", hi: "ठग आपके दोस्त की फोटो लगाकर फर्जी आईडी बनाते हैं और मदद के नाम पर पैसे मांगते हैं।" }, visual: "duplicate_friend" }
    ],
    simulation: {
      type: "privacy_toggle_sim",
      options: ["lockProfile", "hidePhone", "friendsOnly"]
    },
    safetyTip: {
      en: "Always call on normal voice call before sending any money to a relative requesting help on social media.",
      ta: "சமூக ஊடகங்களில் உதவி கேட்கும் உறவினருக்கு பணம் அனுப்பும் முன் எப்போதும் சாதாரண குரல் அழைப்பில் பேசுங்கள்.",
      hi: "सोशल मीडिया पर कोई रिश्तेदार पैसे मांगे तो भेजने से पहले उसे सामान्य फोन करके जरूर पूछें।"
    }
  },
  {
    id: "l_safe_6",
    category: "safety",
    icon: "⚙️",
    title: {
      en: "Checking App Permissions",
      ta: "செயலி அனுமதிகளை சரிபார்த்தல்",
      hi: "ऐप की परमिशन (अनुमतियां) चेक करना"
    },
    description: {
      en: "Why does a flashlight or calculator app need access to your photos and contacts?",
      ta: "ஒரு டார்ச்லைட் அல்லது கால்குலேட்டர் செயலிக்கு உங்கள் புகைப்படங்கள் மற்றும் தொடர்புகள் ஏன் தேவை?",
      hi: "टॉर्च या कैलकुलेटर ऐप को आपकी फोटो और फोन नंबरों की परमिशन क्यों चाहिए?"
    },
    difficulty: "medium",
    badgeReward: "Permission Detective",
    voiceText: {
      en: "When you install an app, it asks for permissions. A simple calculator does not need camera or contacts. Always tap 'Don't Allow' for permissions that make no sense.",
      ta: "நீங்கள் ஒரு செயலியை நிறுவும் போது, அது அனுமதிகளைக் கேட்கிறது. ஒரு எளிய கால்குலேட்டருக்கு கேமரா அல்லது தொடர்புகள் தேவையில்லை. தேவையில்லாத அனுமதிகளுக்கு 'Don't Allow' என்பதைத் தொடவும்.",
      hi: "जब आप कोई ऐप डालते हैं तो वह परमिशन मांगती है। कैलकुलेटर को कैमरे या कॉन्टैक्ट की कोई जरूरत नहीं होती। बेवजह की परमिशन पर हमेशा 'मना करें' (Don't Allow) चुनें।"
    },
    steps: [
      { num: 1, title: { en: "Understand App Needs", ta: "செயலியின் தேவையைப் புரிந்து கொள்ளுங்கள்", hi: "ऐप की जरूरत समझें" }, desc: { en: "Camera app needs Camera. Flashlight app only needs Flashlight.", ta: "கேமரா செயலிக்கு கேமரா தேவை. டார்ச் செயலிக்கு ஒளி மட்டுமே தேவை.", hi: "कैमरा ऐप को कैमरा चाहिए। टॉर्च ऐप को केवल फ्लैशलाइट चाहिए।" }, visual: "permission_logic" },
      { num: 2, title: { en: "Choose 'Only While Using'", ta: "'பயன்படுத்தும்போது மட்டும்' தேர்வு செய்க", hi: "'केवल उपयोग के दौरान' चुनें" }, desc: { en: "Never select 'Allow all the time' for location or microphone.", ta: "இருப்பிடம் அல்லது மைக்ரோஃபோனுக்கு 'எப்போதும் அனுமதி' என்பதைத் தேர்ந்தெடுக்க வேண்டாம்.", hi: "लोकेशन या माइक के लिए कभी भी 'हमेशा अनुमति दें' न चुनें।" }, visual: "permission_dialog" },
      { num: 3, title: { en: "Revoke in Phone Settings", ta: "போன் அமைப்புகளில் ரத்து செய்யவும்", hi: "सेटिंग्स में जाकर परमिशन हटाएं" }, desc: { en: "Go to Settings > Apps > Permissions to turn off unnecessary access.", ta: "தேவையற்ற அனுமதிகளை அணைக்க Settings > Apps செல்லவும்.", hi: "सेटिंग्स में ऐप्स में जाकर गैर-जरूरी परमिशन बंद कर दें।" }, visual: "permission_toggle" }
    ],
    simulation: {
      type: "permissions_sim",
      appName: "Simple Calculator",
      requested: ["Microphone", "Contacts", "Location", "Storage"]
    },
    safetyTip: {
      en: "Malicious apps use contact permissions to harass everyone in your phonebook if you take illegal micro-loans.",
      ta: "சட்டவிரோத கடன் செயலிகள் உங்கள் தொடர்புகளைப் பயன்படுத்தி உங்கள் நண்பர்களை அச்சுறுத்துகின்றன.",
      hi: "गलत लोन ऐप्स कॉन्टैक्ट की परमिशन लेकर आपके रिश्तेदारों और दोस्तों को फोन करके परेशान करते हैं।"
    }
  },
  {
    id: "l_safe_7",
    category: "safety",
    icon: "📶",
    title: {
      en: "The Danger of Free Public Wi-Fi for Banking",
      ta: "வங்கி பரிவர்த்தனைக்கு இலவச பொது வைஃபை பயன்படுத்துவதன் ஆபத்து",
      hi: "फ्री पब्लिक वाई-फाई पर बैंक ऐप चलाने का खतरा"
    },
    description: {
      en: "Why railway stations or bus stop open Wi-Fi should never be used for UPI.",
      ta: "ரயில் நிலையம் அல்லது பேருந்து நிலைய இலவச வைஃபை மூலம் ஏன் UPI பரிவர்த்தனை செய்யக்கூடாது.",
      hi: "रेलवे स्टेशन या बस स्टैंड के फ्री वाई-फाई पर यूपीआई पेमेंट क्यों नहीं करना चाहिए।"
    },
    difficulty: "medium",
    badgeReward: "Cyber Aware",
    voiceText: {
      en: "Free public Wi-Fi without a password can be monitored by hackers nearby. Use public Wi-Fi for watching videos or reading news, but always switch to your own mobile SIM data for bank payments.",
      ta: "கடவுச்சொல் இல்லாத இலவச பொது வைஃபை ஹேக்கர்களால் கண்காணிக்கப்படலாம். வீடியோக்கள் பார்க்க இதைப் பயன்படுத்தலாம், ஆனால் வங்கி பரிவர்த்தனைக்கு உங்கள் சொந்த மொபைல் டேட்டாவைப் பயன்படுத்துங்கள்.",
      hi: "बिना पासवर्ड वाले फ्री वाई-फाई पर पास बैठा कोई भी जानकार व्यक्ति डेटा देख सकता है। फ्री वाई-फाई पर वीडियो देखें या खबरें पढ़ें, पर बैंक और यूपीआई के लिए हमेशा अपना मोबाइल डेटा इस्तेमाल करें।"
    },
    steps: [
      { num: 1, title: { en: "Public vs Private Wi-Fi", ta: "பொது vs தனியார் வைஃபை", hi: "सार्वजनिक बनाम निजी वाई-फाई" }, desc: { en: "Public Wi-Fi has no lock symbol in the Wi-Fi list.", ta: "பொது வைஃபை பட்டியலில் பூட்டு சின்னம் இருக்காது.", hi: "सार्वजनिक वाई-फाई की सूची में ताले का निशान नहीं होता।" }, visual: "open_wifi" },
      { num: 2, title: { en: "Switch to Mobile Data for Payments", ta: "பணம் செலுத்த மொபைல் டேட்டாவிற்கு மாறவும்", hi: "पेमेंट के लिए मोबाइल डेटा चालू करें" }, desc: { en: "Turn OFF Wi-Fi and turn ON Mobile SIM data when paying bills or UPI.", ta: "UPI செலுத்தும் போது வைஃபையை அணைத்துவிட்டு மொபைல் டேட்டாவை இயக்கவும்.", hi: "बैंक ऐप खोलने से पहले वाई-फाई बंद करें और अपना सिम डेटा ऑन करें।" }, visual: "switch_to_data" }
    ],
    simulation: {
      type: "network_choice_sim",
      action: "Make ₹500 UPI Payment",
      options: ["Free Railway Station Open Wi-Fi", "My Jio/Airtel 4G SIM Data ✅"]
    },
    safetyTip: {
      en: "Never make digital payments or enter ATM card details when connected to free hotel or roadside Wi-Fi.",
      ta: "இலவச தங்கும் விடுதி அல்லது சாலை ஓர வைஃபையில் இணைந்திருக்கும் போது வங்கி விவரங்களை உள்ளிடாதீர்கள்.",
      hi: "होटल या सड़क किनारे वाले मुफ्त वाई-फाई से जुड़े होने पर कभी बैंक का पासवर्ड न डालें।"
    }
  },
  {
    id: "l_safe_8",
    category: "safety",
    icon: "🆘",
    title: {
      en: "What to Do If You Get Scammed (1930 Helpline)",
      ta: "நீங்கள் ஏமாற்றப்பட்டால் என்ன செய்ய வேண்டும் (1930 உதவி எண்)",
      hi: "अगर फ्रॉड हो जाए तो क्या करें (1930 हेल्पलाइन)"
    },
    description: {
      en: "Act within the golden 2 hours: Call 1930 or visit cybercrime.gov.in.",
      ta: "முதல் 2 மணி நேரத்திற்குள் நடவடிக்கை எடுங்கள்: 1930 எண்ணை அழைக்கவும்.",
      hi: "गोल्डन 2 घंटे में तुरंत कदम उठाएं: 1930 पर कॉल करें या cybercrime.gov.in पर जाएं।"
    },
    difficulty: "medium",
    badgeReward: "Crisis Ready",
    voiceText: {
      en: "If money is wrongly deducted, do not stay silent or feel ashamed. Call the National Cyber Crime Helpline number 1930 immediately. If reported quickly, the police can freeze the stolen money before the fraudster withdraws it.",
      ta: "பணம் தவறாக கழிக்கப்பட்டால் அமைதியாக இருக்காதீர்கள். உடனடியாக 1930 என்ற தேசிய இணைய குற்ற உதவி எண்ணை அழைக்கவும். விரைவாக புகார் செய்தால், திருடப்பட்ட பணத்தை முடக்க முடியும்.",
      hi: "अगर खाते से धोखे से पैसे कट जाएं तो डरे या शर्माएं नहीं। तुरंत राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर 1930 पर फोन करें। जल्दी सूचना देने पर पुलिस उस पैसे को तुरंत फ्रीज करवा सकती है।"
    },
    steps: [
      { num: 1, title: { en: "Call Official 1930 Helpline", ta: "அதிகாரப்பூர்வ 1930 உதவி எண்ணை அழைக்கவும்", hi: "1930 हेल्पलाइन पर कॉल करें" }, desc: { en: "Free government helpline working 24/7 in multiple Indian languages.", ta: "பல்வேறு இந்திய மொழிகளில் 24/7 செயல்படும் இலவச அரசு உதவி எண்.", hi: "यह भारत सरकार का चौबीसों घंटे चलने वाला मुफ्त हेल्पलाइन नंबर है।" }, visual: "call_1930" },
      { num: 2, title: { en: "Call Your Bank to Block Account", ta: "கணக்கை முடக்க உங்கள் வங்கியை அழைக்கவும்", hi: "खाता ब्लॉक कराने बैंक को फोन करें" }, desc: { en: "Use the official toll-free number printed on the back of your ATM card.", ta: "உங்கள் ஏடிஎம் அட்டையின் பின்புறத்தில் அச்சிடப்பட்ட எண்ணைப் பயன்படுத்தவும்.", hi: "अपने एटीएम कार्ड के पीछे लिखे आधिकारिक टोल-फ्री नंबर पर फोन करें।" }, visual: "block_bank" },
      { num: 3, title: { en: "Save SMS & Transaction ID", ta: "SMS மற்றும் பரிவர்த்தனை ஐடியை சேமிக்கவும்", hi: "एसएमएस और यूटीआर नंबर संभाल कर रखें" }, desc: { en: "Take screenshot of the deduction message with 12-digit UTR number.", ta: "12 இலக்க UTR எண்ணுடன் கூடிய கழித்தல் செய்தியை ஸ்கிரீன்ஷாட் எடுக்கவும்.", hi: "पैसे कटने वाले मैसेज और 12 अंकों के यूटीआर नंबर का स्क्रीनशॉट रख लें।" }, visual: "save_utr" }
    ],
    simulation: {
      type: "emergency_guide_sim",
      helpline: "1930",
      portal: "cybercrime.gov.in"
    },
    safetyTip: {
      en: "Never search Google for 'Bank Customer Care Number'; scammers post fake numbers on Google Maps. Only use numbers on your ATM card or passbook.",
      ta: "கூகுளில் 'வங்கி வாடிக்கையாளர் சேவை எண்' என்று தேடாதீர்கள்; ஏடிஎம் அட்டை அல்லது பாஸ்புக்கில் உள்ள எண்ணை மட்டுமே பயன்படுத்தவும்.",
      hi: "गूगल पर 'कस्टमर केयर नंबर' सर्च न करें; वहां ठगों के फर्जी नंबर होते हैं। सिर्फ अपनी पासबुक या एटीएम के पीछे का नंबर मिलाएं।"
    }
  },

  // ==================== 5. GOVERNMENT SERVICES (5 Lessons) ====================
  {
    id: "l_gov_1",
    category: "government",
    icon: "🪪",
    title: {
      en: "Using DigiLocker for Identity Cards",
      ta: "அடையாள அட்டைகளுக்கு டிஜிலாக்கரை பயன்படுத்துதல்",
      hi: "डिजीलॉकर (DigiLocker) में पहचान पत्र रखना"
    },
    description: {
      en: "Carry your Aadhaar, driving license, and ration card digitally on your phone.",
      ta: "உங்கள் ஆதார், ஓட்டுநர் உரிமம் மற்றும் ரேஷன் கார்டை உங்கள் போனில் எடுத்துச் செல்லுங்கள்.",
      hi: "आधार कार्ड, ड्राइविंग लाइसेंस और राशन कार्ड फोन में सुरक्षित रखना सीखें।"
    },
    difficulty: "medium",
    badgeReward: "Digital Citizen",
    voiceText: {
      en: "DigiLocker is an official Indian government app. It keeps your Aadhaar, vehicle registration, and school certificates safely on your phone. Police and offices accept it legally just like original paper cards.",
      ta: "டிஜிலாக்கர் என்பது இந்திய அரசின் அதிகாரப்பூர்வ செயலியாகும். இது உங்கள் ஆதார், வாகன பதிவு மற்றும் பள்ளி சான்றிதழ்களை போனில் பாதுகாப்பாக வைத்திருக்கிறது. இது அசல் அட்டை போன்றே சட்டப்பூர்வமானது.",
      hi: "डिजीलॉकर भारत सरकार की ऐप है। इसमें आपका आधार, गाड़ी की आरसी और अंकतालिका सुरक्षित रहती है। पुलिस और सरकारी दफ्तरों में यह असली कागज जितना ही मान्य है।"
    },
    steps: [
      { num: 1, title: { en: "Install DigiLocker App", ta: "டிஜிலாக்கர் செயலியை நிறுவவும்", hi: "डिजीलॉकर ऐप खोलें" }, desc: { en: "Official app by Ministry of Electronics & IT with Ashoka emblem.", ta: "அசோக சின்னத்துடன் கூடிய மின்னணு அமைச்சகத்தின் அதிகாரப்பூர்வ செயலி.", hi: "अशोक स्तंभ वाले निशान वाली सरकारी ऐप खोलें।" }, visual: "digilocker_icon" },
      { num: 2, title: { en: "Sign in with Aadhaar OTP", ta: "ஆதார் OTP மூலம் உள்நுழைக", hi: "आधार ओटीपी से लॉगिन करें" }, desc: { en: "Uses OTP sent to your Aadhaar-linked mobile number for setup.", ta: "ஆதாருடன் இணைக்கப்பட்ட எண்ணுக்கு வரும் OTP-ஐப் பயன்படுத்துகிறது.", hi: "आधार से जुड़े फोन नंबर पर आए सुरक्षित ओटीपी से चालू होता है।" }, visual: "aadhaar_auth" },
      { num: 3, title: { en: "Issued Documents Section", ta: "வழங்கப்பட்ட ஆவணங்கள் பிரிவு", hi: "'इश्यूड डॉक्यूमेंट्स' में देखें" }, desc: { en: "See legally valid digital copies with QR verification code.", ta: "QR சரிபார்ப்புக் குறியீட்டுடன் சட்டப்பூர்வ டிஜிட்டல் பிரதிகளைக் காண்க.", hi: "क्यूआर कोड के साथ अपनी असली डिजिटल कॉपी कभी भी दिखाएं।" }, visual: "issued_docs" }
    ],
    simulation: {
      type: "digilocker_sim",
      documents: ["Aadhaar Card", "Driving License", "Ration Card (NFSA)"]
    },
    safetyTip: {
      en: "Set a 6-digit Security PIN on DigiLocker so nobody can view your family certificates if they borrow your phone.",
      ta: "டிஜிலாக்கரில் 6 இலக்க பாதுகாப்பு பின்னை அமைத்து உங்கள் குடும்ப சான்றிதழ்களைப் பாதுகாக்கவும்.",
      hi: "डिजीलॉकर पर 6 अंकों का सिक्योरिटी पिन जरूर लगाएं ताकि कोई अन्य आपके दस्तावेज न देख सके।"
    }
  },
  {
    id: "l_gov_2",
    category: "government",
    icon: "🍚",
    title: {
      en: "Checking Ration Card & PDS Entitlement",
      ta: "ரேஷன் கார்டு & பொருட்கள் விவரங்களை சரிபார்த்தல்",
      hi: "राशन कार्ड और मिलने वाले खाद्यान्न की जांच"
    },
    description: {
      en: "Check monthly rice, wheat, and sugar quota allocated to your family.",
      ta: "உங்கள் குடும்பத்திற்கு ஒதுக்கப்பட்ட மாதாந்திர அரிசி, கோதுமை மற்றும் சர்க்கரை அளவைச் சரிபார்க்கவும்.",
      hi: "अपने परिवार के लिए तय चावल, गेहूं और चीनी का कोटा फोन पर देखना सीखें।"
    },
    difficulty: "easy",
    badgeReward: "Ration Smart",
    voiceText: {
      en: "Use the Mera Ration app or state food portal to check how much rice, wheat, or oil is allocated for your card this month. You can also find the nearest fair price shop.",
      ta: "மேரா ரேஷன் செயலி மூலம் இந்த மாதம் உங்கள் கார்டுக்கு எவ்வளவு அரிசி, கோதுமை ஒதுக்கப்பட்டுள்ளது என்பதைப் பார்க்கலாம். அருகிலுள்ள நியாயவிலைக் கடையையும் கண்டறியலாம்.",
      hi: "'मेरा राशन' ऐप से चेक करें कि इस महीने आपके कार्ड पर कितना गेहूं, चावल या तेल मिलेगा। इससे कोटेदार आपको कम राशन नहीं दे पाएगा।"
    },
    steps: [
      { num: 1, title: { en: "Open 'Mera Ration' App", ta: "'மேரா ரேஷன்' செயலியைத் திறக்கவும்", hi: "'मेरा राशन' ऐप खोलें" }, desc: { en: "Official Government of India One Nation One Ration Card application.", ta: "இந்திய அரசின் அதிகாரப்பூர்வ ஒரே நாடு ஒரே ரேஷன் கார்டு செயலி.", hi: "भारत सरकार की आधिकारिक राशन कार्ड ऐप।" }, visual: "ration_app" },
      { num: 2, title: { en: "Tap 'Know Your Entitlement'", ta: "'உரிமைகளை அறிவோம்' என்பதைத் தொடவும்", hi: "'अपनी पात्रता जानें' पर टैप करें" }, desc: { en: "Enter your 12-digit Ration card or Aadhaar number.", ta: "உங்கள் 12 இலக்க ரேஷன் கார்டு அல்லது ஆதார் எண்ணை உள்ளிடவும்.", hi: "अपना 12 अंकों का राशन कार्ड या आधार नंबर डालें।" }, visual: "entitlement_screen" },
      { num: 3, title: { en: "View Allocation Table", ta: "ஒதுக்கீடு அட்டவணையைப் பார்க்கவும்", hi: "राशन की लिस्ट देखें" }, desc: { en: "Shows: Rice 20kg (₹0), Wheat 15kg (₹0). Know your exact rights.", ta: "காட்டுகிறது: அரிசி 20 கிலோ (இலவசம்). உங்கள் உரிமைகளை சரியாக அறிந்து கொள்ளுங்கள்.", hi: "चावल 20 किलो, गेहूं 15 किलो। अपनी सही पात्रता जानकर उचित राशन लें।" }, visual: "quota_table" }
    ],
    simulation: {
      type: "ration_sim",
      cardType: "PHH (Priority Household)",
      familyMembers: 4,
      items: [
        { name: "Rice", qty: "20 kg", price: "Free" },
        { name: "Wheat", qty: "10 kg", price: "Free" },
        { name: "Sugar", qty: "1 kg", price: "₹25" }
      ]
    },
    safetyTip: {
      en: "Ration shopkeeper cannot demand money for free central government grain under PMGKAY.",
      ta: "இலவச அரசு தானியங்களுக்கு நியாயவிலைக் கடைக்காரர் பணம் கேட்க முடியாது.",
      hi: "मुफ्त राशन योजना के तहत मिलने वाले खाद्यान्न के लिए कोटेदार कोई रुपये नहीं मांग सकता।"
    }
  },
  {
    id: "l_gov_3",
    category: "government",
    icon: "🌾",
    title: {
      en: "PM-Kisan Samman Nidhi Status Check",
      ta: "பிஎம்-கிசான் உதவித்தொகை நிலவரத்தை சரிபார்த்தல்",
      hi: "पीएम किसान सम्मान निधि की किस्त चेक करना"
    },
    description: {
      en: "Check if the ₹2000 installment has been credited to your bank account.",
      ta: "உங்கள் வங்கிக் கணக்கில் ₹2000 தவணை வரவு வைக்கப்பட்டுள்ளதா என்பதைச் சரிபார்க்கவும்.",
      hi: "चेक करें कि 2000 रुपये की किसान किस्त आपके खाते में आई या नहीं।"
    },
    difficulty: "easy",
    badgeReward: "Kisan Beneficiary",
    voiceText: {
      en: "Go to pmkisan.gov.in. Tap 'Beneficiary Status'. Enter your registration number or Aadhaar number. It shows which bank and date your 2000 rupees installment arrived.",
      ta: "pmkisan.gov.in செல்லவும். 'Beneficiary Status' என்பதைத் தொடவும். உங்கள் பதிவு எண் அல்லது ஆதார் எண்ணை உள்ளிடவும். உங்கள் 2000 ரூபாய் தவணை எந்த வங்கியில் எப்போது வந்தது என்பதைக் காட்டும்.",
      hi: "pmkisan.gov.in वेबसाइट पर जाएं। 'लाभार्थी स्थिति' (Beneficiary Status) दबाएं। अपना रजिस्ट्रेशन या आधार नंबर डालें। यहां दिख जाएगा कि 2000 रुपये की किस्त कब आई।"
    },
    steps: [
      { num: 1, title: { en: "Visit pmkisan.gov.in", ta: "pmkisan.gov.in பக்கத்திற்கு செல்லவும்", hi: "pmkisan.gov.in पर जाएं" }, desc: { en: "Make sure the address ends with .gov.in (Official portal).", ta: "முகவரி .gov.in என்று முடிவதை உறுதிப்படுத்தவும்.", hi: "ध्यान रखें कि वेबसाइट के अंत में .gov.in जरूर लिखा हो।" }, visual: "pmkisan_web" },
      { num: 2, title: { en: "Tap 'Beneficiary Status'", ta: "'பயனாளி நிலை' என்பதைத் தொடவும்", hi: "'लाभार्थी की स्थिति' चुनें" }, desc: { en: "Look for the farmer icon under Farmers Corner.", ta: "விவசாயிகள் பகுதியில் உள்ள விவசாயி ஐகானைத் தேடுங்கள்.", hi: "फार्मर्स कॉर्नर में किसान वाले चिन्ह पर क्लिक करें।" }, visual: "farmer_corner" },
      { num: 3, title: { en: "Check eKYC Status", ta: "eKYC நிலையை சரிபார்க்கவும்", hi: "ई-केवाईसी की स्थिति देखें" }, desc: { en: "Ensure eKYC is marked YES and Land Seeding is marked YES.", ta: "eKYC மற்றும் நில பதிவு இரண்டும் YES என இருப்பதை உறுதி செய்யவும்.", hi: "देखें कि ई-केवाईसी और लैंड सीडिंग के आगे 'YES' लिखा होना चाहिए।" }, visual: "ekyc_check" }
    ],
    simulation: {
      type: "pmkisan_sim",
      farmerName: "Muthuvel K / Ramprasad",
      installment: "16th Installment (₹2000)",
      status: "Credited via DBT"
    },
    safetyTip: {
      en: "Never pay money to unauthorized cyber cafes for eKYC; face-authentication is free on the official PM-Kisan mobile app.",
      ta: "eKYC செய்வதற்கு இடைத்தரகர்களிடம் அதிக பணம் கொடுக்காதீர்கள்; அதிகாரப்பூர்வ செயலியில் இது இலவசம்.",
      hi: "ई-केवाईसी के लिए दलालों को ज्यादा पैसे न दें; पीएम किसान ऐप पर चेहरा दिखाकर यह मुफ्त हो जाता है।"
    }
  },
  {
    id: "l_gov_4",
    category: "government",
    icon: "🏥",
    title: {
      en: "Ayushman Bharat Health Card (ABHA)",
      ta: "ஆயுஷ்மான் பாரத் மருத்துவ அட்டை (ABHA)",
      hi: "आयुष्मान भारत हेल्थ कार्ड (₹5 लाख मुफ्त इलाज)"
    },
    description: {
      en: "How to use your health card for free hospital treatment up to ₹5 Lakhs.",
      ta: "₹5 லட்சம் வரை இலவச மருத்துவமனை சிகிச்சை பெற உங்கள் மருத்துவ அட்டையைப் பயன்படுத்துவது எப்படி.",
      hi: "अस्पताल में 5 लाख रुपये तक का मुफ्त इलाज पाने के लिए कार्ड की जानकारी लें।"
    },
    difficulty: "medium",
    badgeReward: "Health Shield",
    voiceText: {
      en: "Ayushman Bharat card provides up to 5 lakh rupees per family every year for hospital treatment. You can search empanelled government and private hospitals on your phone.",
      ta: "ஆயுஷ்மான் பாரத் அட்டை மருத்துவமனை சிகிச்சைக்காக ஒவ்வொரு ஆண்டும் ஒரு குடும்பத்திற்கு 5 லட்சம் ரூபாய் வரை வழங்குகிறது. உங்கள் போனில் அங்கீகரிக்கப்பட்ட மருத்துவமனைகளைத் தேடலாம்.",
      hi: "आयुष्मान कार्ड से पूरे परिवार को हर साल 5 लाख रुपये तक का मुफ्त अस्पताल इलाज मिलता है। आप फोन पर ही चेक कर सकते हैं कि पास में कौन सा अस्पताल इस योजना में शामिल है।"
    },
    steps: [
      { num: 1, title: { en: "Download Ayushman App", ta: "ஆயுஷ்மான் செயலியை பதிவிறக்கவும்", hi: "आयुष्मान ऐप डाउनलोड करें" }, desc: { en: "Search for 'Ayushman App' by NHA on Google Play Store.", ta: "ப்ளே ஸ்டோரில் NHA வழங்கிய 'Ayushman App' ஐத் தேடுங்கள்.", hi: "प्ले स्टोर से राष्ट्रीय स्वास्थ्य प्राधिकरण (NHA) की ऐप खोलें।" }, visual: "ayushman_icon" },
      { num: 2, title: { en: "Find Empanelled Hospital", ta: "அங்கீகரிக்கப்பட்ட மருத்துவமனையைக் கண்டறியவும்", hi: "योजना वाले अस्पताल ढूंढें" }, desc: { en: "Search your district to find free treatment hospitals.", ta: "இலவச சிகிச்சை மருத்துவமனைகளைக் கண்டறிய உங்கள் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்.", hi: "अपना जिला चुनकर देखें कि किन सरकारी और प्राइवेट अस्पतालों में फ्री इलाज होगा।" }, visual: "hospital_search" },
      { num: 3, title: { en: "Show Card at Ayushman Mitra Desk", ta: "ஆயுஷ்மான் மித்ரா கவுண்டரில் காட்டவும்", hi: "अस्पताल में आयुष्मान मित्र से मिलें" }, desc: { en: "Every hospital has a free help desk to admit cardholders without cash deposit.", ta: "முன்பணம் இன்றி அனுமதிக்க ஒவ்வொரு மருத்துவமனையிலும் இலவச உதவி மையம் உள்ளது.", hi: "हर बड़े अस्पताल में आयुष्मान मित्र काउंटर होता है, जो बिना पैसे जमा किए भर्ती कराता है।" }, visual: "mitra_desk" }
    ],
    simulation: {
      type: "ayushman_sim",
      coverageAmount: "₹5,00,000 / year",
      eligibleMembers: 5
    },
    safetyTip: {
      en: "Hospitals under Ayushman Bharat cannot charge money for medicines or surgery during admitted care.",
      ta: "அனுமதிக்கப்பட்ட சிகிச்சையின் போது மருந்துகளுக்கோ அறுவை சிகிச்சைக்கோ கட்டணம் வசூலிக்க முடியாது.",
      hi: "आयुष्मान भारत में भर्ती होने पर अस्पताल आपसे दवाओं या ऑपरेशन के लिए अलग से पैसे नहीं मांग सकता।"
    }
  },
  {
    id: "l_gov_5",
    category: "government",
    icon: "🗺️",
    title: {
      en: "Village Land Records & Patta / Chitta",
      ta: "கிராம நில ஆவணங்கள் & பட்டா / சிட்டா பார்த்தல்",
      hi: "जमीन के कागजात (खसरा/खतौनी/भूलेख) देखना"
    },
    description: {
      en: "View your agricultural land ownership details online without visiting taluk office.",
      ta: "வட்டாட்சியர் அலுவலகத்திற்கு செல்லாமல் உங்கள் விவசாய நில உரிமை விவரங்களை ஆன்லைனில் பார்க்கலாம்.",
      hi: "तहसील के चक्कर काटे बिना घर बैठे अपने खेत की खतौनी और जमीन का रकबा देखें।"
    },
    difficulty: "medium",
    badgeReward: "Land Guardian",
    voiceText: {
      en: "Every state has an official land records website like AnyRoR, Bhulekh, or AnyTa/AnyChitta. You can enter your district, taluk, village, and survey number to verify your agricultural land title.",
      ta: "ஒவ்வொரு மாநிலத்திலும் அதிகாரப்பூர்வ நில பதிவேடு இணையதளம் உள்ளது. உங்கள் மாவட்டம், வட்டம், கிராமம் மற்றும் புல எண்ணை உள்ளிட்டு நில உரிமையை சரிபார்க்கலாம்.",
      hi: "हर राज्य का अपना भूलेख या भूमि पोर्टल होता है। आप अपना जिला, तहसील, गांव और खसरा नंबर डालकर अपनी जमीन की नकल और मालिक का नाम देख सकते हैं।"
    },
    steps: [
      { num: 1, title: { en: "Open State Bhulekh Portal", ta: "மாநில நில போர்ட்டலைத் திறக்கவும்", hi: "राज्य का भूलेख पोर्टल खोलें" }, desc: { en: "Examples: eservices.tn.gov.in (Tamil Nadu), upbhulekh.gov.in (UP).", ta: "எடுத்துக்காட்டு: eservices.tn.gov.in (தமிழ்நாடு).", hi: "उदाहरण: upbhulekh.gov.in (उत्तर प्रदेश), mpbhulekh (मध्य प्रदेश)।" }, visual: "bhulekh_web" },
      { num: 2, title: { en: "Select District & Village", ta: "மாவட்டம் & கிராமத்தைத் தேர்ந்தெடுக்கவும்", hi: "जिला, तहसील और गांव चुनें" }, desc: { en: "Choose from simple drop-down lists in your local language.", ta: "உங்கள் உள்ளூர் மொழியில் எளிய கீழ்தோன்றும் பட்டியலிலிருந்து தேர்ந்தெடுக்கவும்.", hi: "सरल सूची में से अपना जिला और गांव का नाम चुनें।" }, visual: "village_select" },
      { num: 3, title: { en: "Enter Survey / Khasra Number", ta: "புல எண் / சர்வே எண்ணை உள்ளிடவும்", hi: "खसरा या गाटा संख्या दर्ज करें" }, desc: { en: "The exact parcel number printed on your older land deeds.", ta: "உங்கள் பழைய பத்திரத்தில் அச்சிடப்பட்ட சரியான நில எண்.", hi: "अपनी पुरानी जमीन की रसीद या बैनामे पर लिखा खसरा नंबर डालें।" }, visual: "survey_num" }
    ],
    simulation: {
      type: "land_records_sim",
      district: "Thanjavur / Varanasi",
      surveyNumber: "142/3A",
      ownerName: "Verified Land Title"
    },
    safetyTip: {
      en: "Viewing land records on official government portals is free or costs just ₹10; beware of fake scam sites charging ₹500.",
      ta: "அரசு இணையதளங்களில் நில பதிவேடுகளைப் பார்ப்பது இலவசம் அல்லது ₹10 மட்டுமே; ₹500 கேட்கும் போலி தளங்களை நம்பாதீர்கள்.",
      hi: "सरकारी पोर्टल पर जमीन की नकल देखना मुफ्त या केवल ₹10-15 का होता है; ₹500 मांगने वाली फर्जी साइटों से बचें।"
    }
  },

  // ==================== 6. SMART FARMER TOOLS (5 Lessons) ====================
  {
    id: "l_farm_1",
    category: "farmer",
    icon: "🌦️",
    title: {
      en: "Checking Tomorrow's Rain & Weather",
      ta: "நாளை மழை மற்றும் வானிலை முன்னறிவிப்பை அறிதல்",
      hi: "कल की बारिश और मौसम का पूर्वानुमान देखना"
    },
    description: {
      en: "Know when rain is coming before spraying fertilizer or cutting your harvest.",
      ta: "உரம் தெளிப்பதற்கு அல்லது அறுவடை செய்வதற்கு முன் மழை வருமா என்பதை அறிந்து கொள்ளுங்கள்.",
      hi: "दवा छिड़कने या फसल काटने से पहले जानें कि कल बारिश होगी या तेज धूप।"
    },
    difficulty: "easy",
    badgeReward: "Weather Wizard",
    voiceText: {
      en: "Check weather on your phone before spraying pesticides. Tap the Google weather widget. It shows hourly rainfall chance, wind speed, and high temperature for your village.",
      ta: "பூச்சிக்கொல்லி மருந்து தெளிப்பதற்கு முன் உங்கள் போனில் வானிலை சரிபார்க்கவும். மணிநேர மழை வாய்ப்பு, காற்றின் வேகம் மற்றும் வெப்பநிலையை இது காட்டுகிறது.",
      hi: "खेत में कीटनाशक छिड़कने से पहले फोन पर मौसम देखें। यह आपके गांव के लिए अगले कुछ घंटों में बारिश की संभावना, हवा की गति और तापमान बताता है।"
    },
    steps: [
      { num: 1, title: { en: "Look at Weather Widget", ta: "வானிலை விட்ஜெட்டைப் பாருங்கள்", hi: "मौसम वाला विजेट देखें" }, desc: { en: "Tap the cloud and temperature number on your home screen.", ta: "உங்கள் முகப்புத் திரையில் உள்ள மேகம் மற்றும் வெப்பநிலையைத் தொடவும்.", hi: "होम स्क्रीन पर बने बादल और तापमान वाले अंक पर टैप करें।" }, visual: "weather_widget" },
      { num: 2, title: { en: "Check 'Rain Probability %'", ta: "'மழை வாய்ப்பு %' ஐச் சரிபார்க்கவும்", hi: "'बारिश की संभावना %' देखें" }, desc: { en: "If it shows 80% rain at 2:00 PM, postpone chemical spraying.", ta: "பிற்பகல் 2 மணிக்கு 80% மழை என்று காட்டினால், மருந்து தெளிப்பதை ஒத்திவைக்கவும்.", hi: "अगर दोपहर 2 बजे 80% बारिश दिखे, तो खेत में दवा छिड़कना टाल दें।" }, visual: "rain_percent" },
      { num: 3, title: { en: "Wind Speed for Spraying", ta: "மருந்து தெளிக்க காற்றின் வேகம்", hi: "हवा की गति जांचें" }, desc: { en: "High winds waste expensive pesticide spray into other fields.", ta: "அதிவேக காற்று விலையுயர்ந்த பூச்சிக்கொல்லியை வீணடிக்கும்.", hi: "तेज हवा चलने पर महंगी दवा उड़कर दूसरे के खेत में चली जाती है।" }, visual: "wind_speed" }
    ],
    simulation: {
      type: "weather_sim",
      temp: "32°C",
      condition: "Partly Cloudy",
      rainChance: "15% - Safe for Harvesting",
      wind: "8 km/h"
    },
    safetyTip: {
      en: "During lightning and thunderstorms, never stand under a tall solitary tree in the middle of an open field with your phone.",
      ta: "இடி மின்னலின் போது, திறந்தவெளியில் உள்ள உயரமான மரத்தின் கீழ் நிற்காதீர்கள்.",
      hi: "आसमानी बिजली कड़कने पर कभी भी खेत के बीच अकेले ऊंचे पेड़ के नीचे फोन लेकर न खड़े हों।"
    }
  },
  {
    id: "l_farm_2",
    category: "farmer",
    icon: "💰",
    title: {
      en: "Checking Mandi Market Crop Prices",
      ta: "மண்டி சந்தை பயிர் விலைகளை சரிபார்த்தல்",
      hi: "मंडी के ताजा फसल भाव (एगमार्कनेट) चेक करना"
    },
    description: {
      en: "Compare crop rates across nearby mandis on e-NAM before selling your produce.",
      ta: "உங்கள் விளைபொருட்களை விற்பதற்கு முன் அருகிலுள்ள சந்தைகளில் பயிர் விலைகளை ஒப்பிட்டுப் பாருங்கள்.",
      hi: "अपनी उपज बेचने से पहले फोन पर देखें कि आसपास की किस मंडी में सबसे ज्यादा भाव मिल रहा है।"
    },
    difficulty: "easy",
    badgeReward: "Market Master",
    voiceText: {
      en: "Never sell blindly to middle-men at low prices. Open Agmarknet or e-NAM app. Select your crop, like Paddy or Onion. Check the highest price in all nearby market yards.",
      ta: "இடைத்தரகர்களிடம் குறைந்த விலைக்கு விற்காதீர்கள். e-NAM செயலியைத் திறந்து உங்கள் பயிரைத் தேர்ந்தெடுக்கவும். அருகிலுள்ள அனைத்து சந்தைகளிலும் அதிகபட்ச விலையைச் சரிபார்க்கவும்.",
      hi: "बिचौलियों को औने-पौने दाम पर फसल न बेचें। ई-नाम (e-NAM) या एगमार्कनेट पर अपने धान, गेहूं या प्याज का भाव देखें कि किस मंडी में सबसे अच्छा रेट है।"
    },
    steps: [
      { num: 1, title: { en: "Open e-NAM / Agmarknet", ta: "e-NAM / அக்மார்க்நெட் திறக்கவும்", hi: "ई-नाम पोर्टल खोलें" }, desc: { en: "Official National Agriculture Market portal for transparent prices.", ta: "வெளிப்படையான விலைகளுக்கான அதிகாரப்பூர்வ தேசிய வேளாண் சந்தை.", hi: "पारदर्शी भाव जानने के लिए राष्ट्रीय कृषि बाजार पोर्टल खोलें।" }, visual: "enam_logo" },
      { num: 2, title: { en: "Select Your Commodity", ta: "உங்கள் பயிரைத் தேர்ந்தெடுக்கவும்", hi: "अपनी फसल चुनें" }, desc: { en: "Choose Paddy, Cotton, Tomato, Wheat, or Groundnut.", ta: "நெல், பருத்தி, தக்காளி, கோதுமை அல்லது நிலக்கடலையைத் தேர்ந்தெடுக்கவும்.", hi: "धान, कपास, टमाटर, सरसों या सोयाबीन चुनें।" }, visual: "crop_select" },
      { num: 3, title: { en: "Compare Min & Max Rates", ta: "குறைந்த & அதிக விலைகளை ஒப்பிடுக", hi: "न्यूनतम और अधिकतम रेट देखें" }, desc: { en: "Shows: ₹2,450/quintal in Town A vs ₹2,620/quintal in Town B.", ta: "காட்டுகிறது: சந்தை A-ல் ₹2,450 vs சந்தை B-ல் ₹2,620/குவிண்டால்.", hi: "मंडी A में ₹2450 और मंडी B में ₹2620 क्विंटल। जहां बेहतर भाव हो, वहां बेचें।" }, visual: "price_compare" }
    ],
    simulation: {
      type: "mandi_sim",
      crops: [
        { name: "Paddy (Basmati)", rate: "₹3,850 / Qtl", trend: "up" },
        { name: "Tomato", rate: "₹1,400 / Qtl", trend: "down" },
        { name: "Cotton", rate: "₹7,200 / Qtl", trend: "up" }
      ]
    },
    safetyTip: {
      en: "If an unknown buyer calls offering double the market rate and asks you to pay a 'transport advance', it is a scam.",
      ta: "சந்தை விலையை விட இருமடங்கு தருவதாகக் கூறி 'போக்குவரத்து முன்பணம்' கேட்கும் வியாபாரிகள் மோசடிக்காரர்கள்.",
      hi: "अगर कोई अनजान खरीदार मंडी से दोगुना भाव देकर 'ट्रांसपोर्ट का एडवांस' मांगे, तो वह पक्का ठग है।"
    }
  },
  {
    id: "l_farm_3",
    category: "farmer",
    icon: "🌿",
    title: {
      en: "Taking Photo of Sick Crop for Agridoctor",
      ta: "பயிர் நோயைக் கண்டறிய தெளிவான புகைப்படம் எடுத்தல்",
      hi: "बीमार फसल की सही फोटो खींचकर कृषि विशेषज्ञ को भेजना"
    },
    description: {
      en: "Take sharp close-up photos of yellow leaves or insect pests to get medicine advice.",
      ta: "மருந்து ஆலோசனை பெற மஞ்சள் இலைகள் அல்லது பூச்சிகளை துல்லியமாக படம் பிடிக்கவும்.",
      hi: "कीड़े या पीली पत्तियों की साफ फोटो खींचना सीखें ताकि डॉक्टर सही कीटनाशक बता सके।"
    },
    difficulty: "easy",
    badgeReward: "Crop Doctor",
    voiceText: {
      en: "To identify crop disease, take a close-up photo showing both the sick leaf and a healthy leaf. Keep your hand steady and ensure good sunlight. Send it to your local KVK or Agridoctor app.",
      ta: "பயிர் நோயைக் கண்டறிய, பாதிக்கப்பட்ட இலை மற்றும் ஆரோக்கியமான இலை இரண்டையும் காட்டும் தெளிவான படத்தை எடுக்கவும். நல்ல வெளிச்சத்தில் போனை அசையாமல் பிடித்து படம் பிடிக்கவும்.",
      hi: "फसल की बीमारी पहचानने के लिए बीमार पत्ती और स्वस्थ पत्ती की पास से साफ फोटो लें। धूप में हाथ स्थिर रखकर फोटो खींचें और कृषि विज्ञान केंद्र या ऐप पर भेजें।"
    },
    steps: [
      { num: 1, title: { en: "Focus on the Leaf Damage", ta: "இலை சேதத்தின் மீது கவனம் செலுத்துங்கள்", hi: "खराब पत्ती पर फोकस करें" }, desc: { en: "Tap on the phone screen right over the spot or insect to focus clearly.", ta: "தெளிவாக ஃபோகஸ் செய்ய திரையில் பூச்சி இருக்கும் இடத்தை தொடவும்.", hi: "साफ दिखने के लिए स्क्रीन पर कीड़े या धब्बे वाले हिस्से को उंगली से छुएं।" }, visual: "leaf_focus" },
      { num: 2, title: { en: "Avoid Sun Glare", ta: "சூரிய ஒளி கூச்சத்தை தவிர்க்கவும்", hi: "तेज धूप की चमक से बचें" }, desc: { en: "Use your body shadow if direct sun makes the leaf too bright or white.", ta: "நேரடி வெயில் இலையை வெண்மையாக்கினால் உங்கள் நிழலை லேசாகப் பயன்படுத்தவும்.", hi: "अगर बहुत तेज चमक हो तो थोड़ा सा साया करके फोटो लें ताकि रंग सही दिखे।" }, visual: "shadow_shot" },
      { num: 3, title: { en: "Send via WhatsApp or Plantix", ta: "வாட்ஸ்அப் அல்லது பிளான்டிக்ஸ் மூலம் அனுப்பவும்", hi: "वॉट्सऐप या कृषि ऐप पर भेजें" }, desc: { en: "Send directly to agricultural university helpline or KVK WhatsApp group.", ta: "வேளாண் பல்கலைக்கழக உதவி எண் அல்லது கேவிகே வாட்ஸ்அப் குழுவிற்கு அனுப்பவும்.", hi: "अपने नजदीकी कृषि विज्ञान केंद्र या कृषि हेल्पलाइन पर फोटो भेजें।" }, visual: "send_agri" }
    ],
    simulation: {
      type: "crop_cam_sim",
      detectedIssue: "Bacterial Leaf Blight in Paddy",
      recommendation: "Drain excess water; spray Streptocycline 6g with Copper Oxychloride 300g per acre."
    },
    safetyTip: {
      en: "Never buy unlabelled pesticides sold in loose bottles without printed manufacturing and expiry dates.",
      ta: "தயாரிப்பு மற்றும் காலாவதி தேதி அச்சிடப்படாத பூச்சிக்கொல்லிகளை ஒருபோதும் வாங்காதீர்கள்.",
      hi: "बिना लेबल या खुली बोतलों में बिकने वाली सस्ती कीटनाशक दवाएं कभी न खरीदें।"
    }
  },
  {
    id: "l_farm_4",
    category: "farmer",
    icon: "☎️",
    title: {
      en: "Calling Kisan Call Center (1800-180-1551)",
      ta: "கிசான் கால் சென்டரை அழைப்பது (1800-180-1551)",
      hi: "किसान कॉल सेंटर (1800-180-1551) पर बात करना"
    },
    description: {
      en: "Talk directly to agricultural scientists in your mother tongue for free.",
      ta: "வேளாண் விஞ்ஞானிகளுடன் உங்கள் தாய்மொழியில் இலவசமாக நேரடியாகப் பேசுங்கள்.",
      hi: "खेती के विशेषज्ञों से अपनी भाषा में मुफ्त सलाह पाने के लिए टोल-फ्री कॉल करें।"
    },
    difficulty: "easy",
    badgeReward: "Kisan Voice",
    voiceText: {
      en: "1800-180-1551 is the toll-free number for Kisan Call Center. It operates 7 days a week from 6 AM to 10 PM. You can ask any question about seeds, fertilizers, or diseases in your own language.",
      ta: "1800-180-1551 என்பது கிசான் கால் சென்டரின் இலவச கட்டணமில்லா எண். இது வாரத்தில் 7 நாட்களும் காலை 6 மணி முதல் இரவு 10 மணி வரை செயல்படுகிறது. உங்கள் தாய்மொழியில் எதையும் கேட்கலாம்.",
      hi: "1800-180-1551 किसान कॉल सेंटर का बिल्कुल मुफ्त नंबर है। यह सातों दिन सुबह 6 से रात 10 बजे तक खुला रहता है। आप खाद, बीज या फसल के रोगों पर अपनी भाषा में पूछ सकते हैं।"
    },
    steps: [
      { num: 1, title: { en: "Dial 1800-180-1551", ta: "1800-180-1551 எண்ணை டயல் செய்யவும்", hi: "1800-180-1551 डायल करें" }, desc: { en: "It is 100% toll-free; zero balance is required on your SIM.", ta: "இது முற்றிலும் இலவசம்; உங்கள் சிம்மில் இருப்புத் தொகை தேவையில்லை.", hi: "यह पूरी तरह टोल-फ्री है, फोन में बैलेंस न होने पर भी कॉल लग जाती है।" }, visual: "dial_1800" },
      { num: 2, title: { en: "Choose Your Language", ta: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்", hi: "अपनी भाषा चुनें" }, desc: { en: "Press 1 for Hindi, or regional options for Tamil, Telugu, etc.", ta: "தமிழ் அல்லது இந்திக்கான எண்ணை அழுத்தவும்.", hi: "हिंदी या अपनी राज्य की भाषा के लिए संबंधित नंबर दबाएं।" }, visual: "language_press" },
      { num: 3, title: { en: "Ask Your Question", ta: "உங்கள் கேள்வியைக் கேளுங்கள்", hi: "अपनी फसल की समस्या बताएं" }, desc: { en: "Tell your district, soil type, and exact crop condition.", ta: "உங்கள் மாவட்டம், மண் வகை மற்றும் சரியான பயிர் நிலையைத் தெரிவிக்கவும்.", hi: "अपना जिला, मिट्टी और फसल में दिख रही परेशानी साफ-साफ बताएं।" }, visual: "agri_expert" }
    ],
    simulation: {
      type: "kisan_call_sim",
      expertResponse: "Namaste Kisan Bhai, for leaf spots in Groundnut (Tikka disease), spray Mancozeb 2g per liter."
    },
    safetyTip: {
      en: "Government Kisan Call Center is completely free; never pay anyone who claims to arrange private calls with scientists.",
      ta: "அரசு கிசான் கால் சென்டர் முற்றிலும் இலவசம்; யாருக்கும் பணம் கொடுக்க வேண்டாம்.",
      hi: "सरकारी किसान कॉल सेंटर पूरी तरह मुफ्त है, इसके लिए किसी को कोई फीस न दें।"
    }
  },
  {
    id: "l_farm_5",
    category: "farmer",
    icon: "🌱",
    title: {
      en: "Identifying Fake Seeds & Fertilizers",
      ta: "போலி விதைகள் மற்றும் உரங்களை அடையாளம் காணுதல்",
      hi: "नकली खाद और नकली बीज के घोटालों से सावधान"
    },
    description: {
      en: "Scan QR codes on fertilizer bags and check government certification tags.",
      ta: "உர மூட்டைகளில் உள்ள QR குறியீடுகளை ஸ்கேன் செய்து அரசு சான்றிதழை சரிபார்க்கவும்.",
      hi: "खाद की बोरी पर क्यूआर कोड और सरकारी सील देखकर असली-नकली की पहचान करें।"
    },
    difficulty: "medium",
    badgeReward: "Seed Guardian",
    voiceText: {
      en: "Fake seeds ruin your entire season's hard work. Always buy seeds from authorized government or primary cooperative societies. Check the blue or green certified tag with government stamp on every seed bag.",
      ta: "போலி விதைகள் உங்கள் ஒரு பருவ உழைப்பையே பாழாக்கிவிடும். அரசு அல்லது தொடக்க கூட்டுறவு சங்கங்களில் மட்டுமே விதைகளை வாங்குங்கள். ஒவ்வொரு பையிலும் அரசு முத்திரையிடப்பட்ட சான்றிதழ் குறியை சரிபார்க்கவும்.",
      hi: "नकली बीज आपकी पूरी फसल और मेहनत बर्बाद कर देते हैं। हमेशा सरकारी बीज निगम या अधिकृत सोसायटी से ही बीज खरीदें। बोरी पर लगा नीले या हरे रंग का सरकारी सर्टिफाइड टैग जरूर देखें।"
    },
    steps: [
      { num: 1, title: { en: "Check the Certification Tag", ta: "சான்றிதழ் குறியை சரிபார்க்கவும்", hi: "सर्टिफाइड टैग जांचें" }, desc: { en: "Certified seeds have a blue tag with germination purity % printed.", ta: "சான்றளிக்கப்பட்ட விதைகள் முளைப்புத்திறன் % அச்சிடப்பட்ட நீல நிறக் குறியைக் கொண்டிருக்கும்.", hi: "असली प्रमाणित बीज के थैले पर नीले रंग का टैग और अंकुरण प्रतिशत लिखा होता है।" }, visual: "seed_tag" },
      { num: 2, title: { en: "Demand Printed Tax Bill", ta: "அச்சிடப்பட்ட ரசீதை கோருங்கள்", hi: "पक्का बिल जरूर मांगें" }, desc: { en: "Always get a signed bill mentioning lot number and expiry date.", ta: "லாட் எண் மற்றும் காலாவதி தேதி குறிப்பிடப்பட்ட கையொப்பமிட்ட ரசீதை எப்போதும் பெறுங்கள்.", hi: "बिल पर लॉट नंबर, एक्सपायरी डेट और दुकानदार के दस्तखत जरूर करवाएं।" }, visual: "tax_invoice" },
      { num: 3, title: { en: "Scan Urea/DAP QR Code", ta: "யூரியா/டிஏபி QR குறியீட்டை ஸ்கேன் செய்யுங்கள்", hi: "खाद की बोरी का बारकोड स्कैन करें" }, desc: { en: "Government bags feature barcode tracking to prevent black-marketing.", ta: "கள்ளச்சந்தையைத் தடுக்க அரசு உர மூட்டைகளில் பார்கோடு உள்ளது.", hi: "सरकारी यूरिया-डीएपी की बोरी पर बारकोड होता है जिससे असली कंपनी का पता चलता है।" }, visual: "bag_barcode" }
    ],
    simulation: {
      type: "seed_check_sim",
      bagName: "Hybrid Paddy Seed - Certified Tag #TN-88219",
      isValid: true
    },
    safetyTip: {
      en: "Do not buy seeds sold off the back of unknown mini-trucks visiting the village at night without receipts.",
      ta: "இரவில் கிராமங்களுக்கு வரும் அறியப்படாத வாகனங்களில் ரசீது இல்லாமல் விற்கப்படும் விதைகளை வாங்காதீர்கள்.",
      hi: "रात के समय गांव में गाड़ी लेकर फेरी लगाकर बिना बिल के बीज बेचने वालों से कभी सामान न लें।"
    }
  },

  // ==================== 7. SMART SHOP & BUSINESS (5 Lessons) ====================
  {
    id: "l_biz_1",
    category: "business",
    icon: "🏪",
    title: {
      en: "Displaying Your Shop QR Code & Soundbox",
      ta: "உங்கள் கடை QR குறியீடு மற்றும் ஒலிப்பெட்டியை அமைத்தல்",
      hi: "दुकान पर क्यूआर स्टैंड और साउंडबॉक्स लगाना"
    },
    description: {
      en: "Let customers pay via phone and hear instant voice confirmation for every rupee.",
      ta: "வாடிக்கையாளர்கள் போன் மூலம் பணம் செலுத்தவும், ஒவ்வொரு ரூபாய்க்கும் உடனடி குரல் அறிவிப்பைக் கேட்கவும் செய்யுங்கள்.",
      hi: "ग्राहकों से फोन से पैसे लें और हर पेमेंट पर बोलकर बताने वाला साउंडबॉक्स लगाएं।"
    },
    difficulty: "easy",
    badgeReward: "Smart Vyapar",
    voiceText: {
      en: "Keep your QR stand right at the front counter at eye level. Use a payment soundbox so you hear loud voice announcements like 'Received 50 rupees on UPI' without looking at your phone during rush hours.",
      ta: "உங்கள் QR பலகையை கடையின் முன்புற மேசையில் வையுங்கள். கூட்ட நெரிசலின் போது போனைப் பார்க்காமல் 'யுபிஐயில் 50 ரூபாய் பெறப்பட்டது' என்ற குரல் அறிவிப்பைக் கேட்க சவுண்ட்பாக்ஸைப் பயன்படுத்துங்கள்.",
      hi: "क्यूआर स्टैंड को हमेशा गल्ले के सामने रखें। साउंडबॉक्स जरूर लगवाएं ताकि भीड़ के समय भी '50 रुपये प्राप्त हुए' की तेज आवाज सुनाई दे और आपको बार-बार फोन न देखना पड़े।"
    },
    steps: [
      { num: 1, title: { en: "Place QR at Eye Level", ta: "கண் பார்வையில் QR வையுங்கள்", hi: "क्यूआर को सामने सही जगह रखें" }, desc: { en: "Keep it dry and away from oily or dusty goods.", ta: "எண்ணெய் அல்லது தூசி படாமல் சுத்தமாக வையுங்கள்.", hi: "इसे साफ-सुथरी जगह रखें जहां ग्राहक आसानी से कैमरा दिखा सके।" }, visual: "qr_standee" },
      { num: 2, title: { en: "Soundbox Audio Confirmation", ta: "ஒலிப்பெட்டி குரல் உறுதிப்படுத்தல்", hi: "साउंडबॉक्स से आवाज सुनना" }, desc: { en: "Loud voice announces payment in Tamil, Hindi, or English immediately.", ta: "பணம் வந்தவுடன் தமிழ் அல்லது இந்தியில் சத்தமாக அறிவிக்கும்.", hi: "पेमेंट आते ही तेज आवाज में आपकी भाषा में बोलता है।" }, visual: "soundbox_speaker" }
    ],
    simulation: {
      type: "soundbox_sim",
      amount: "₹120",
      audioMessage: "Received ₹120 on BHIM UPI!"
    },
    safetyTip: {
      en: "Never give goods based on a customer just showing a green screen on their phone; wait until YOUR soundbox speaks or your bank SMS arrives.",
      ta: "வாடிக்கையாளர் போனில் பச்சைத் திரையைக் காட்டுவதை மட்டும் நம்பி பொருட்களைத் தராதீர்கள்; உங்கள் சவுண்ட்பாக்ஸ் சொல்லும் வரை காத்திருங்கள்.",
      hi: "ग्राहक के फोन पर केवल हरा टिक देखकर सामान न दें; जब तक आपके साउंडबॉक्स से आवाज न आए या आपके फोन पर मैसेज न आए, तब तक इंतजार करें।"
    }
  },
  {
    id: "l_biz_2",
    category: "business",
    icon: "📒",
    title: {
      en: "Digital Daily Khata & Credit Ledger",
      ta: "டிஜிட்டல் தினசரி கணக்கு & கடன் புத்தகம்",
      hi: "डिजिटल खाता बही (उधार-जमा का हिसाब)"
    },
    description: {
      en: "Record customer udhar credit on your phone so paper books are never lost or torn.",
      ta: "காகித புத்தகங்கள் தொலைந்து போகாமல் வாடிக்கையாளர் கடன்களை போனில் பதிவு செய்யுங்கள்.",
      hi: "कागज की डायरी फटने या खोने की चिंता छोड़ें, फोन पर ग्राहकों के उधारी-जमा का सही हिसाब रखें।"
    },
    difficulty: "easy",
    badgeReward: "Digital BahiKhata",
    voiceText: {
      en: "Paper notebooks get wet, torn, or misplaced. Use free digital khata apps. Whenever a customer buys on credit, enter their name and amount. It automatically backs up safely to your phone number.",
      ta: "காகித நோட்டுகள் கிழிந்துவிடலாம். டிஜிட்டல் கணக்கு செயலிகளைப் பயன்படுத்துங்கள். வாடிக்கையாளர் கடன் வாங்கும் போது பெயர் மற்றும் தொகையை உள்ளிடுங்கள். இது பாதுகாப்பாக சேமிக்கப்படும்.",
      hi: "कागज के रजिस्टर भीग जाते हैं या खो जाते हैं। फोन में डिजिटल खाता ऐप इस्तेमाल करें। जब भी कोई ग्राहक उधार ले, उसका नाम और रुपये दर्ज करें। यह हमेशा सुरक्षित रहता है।"
    },
    steps: [
      { num: 1, title: { en: "Add Customer Name", ta: "வாடிக்கையாளர் பெயரைச் சேர்க்கவும்", hi: "ग्राहक का नाम जोड़ें" }, desc: { en: "Select from phone contacts or type their village name.", ta: "தொடர்புகளிலிருந்து தேர்வு செய்யவும் அல்லது ஊர் பெயரைத் தட்டச்சு செய்யவும்.", hi: "अपने फोन के संपर्कों में से चुनें या नया नाम लिखें।" }, visual: "add_customer" },
      { num: 2, title: { en: "Tap 'You Gave' (Red) or 'You Got' (Green)", ta: "'கொடுத்தீர்கள்' அல்லது 'பெற்றீர்கள்' என்பதைத் தொடவும்", hi: "'दिया' (लाल) या 'लिया' (हरा) दर्ज करें" }, desc: { en: "Red records money owed to you; Green records payment received.", ta: "சிவப்பு வாடிக்கையாளர் தர வேண்டிய கடன்; பச்சை அவர்கள் தந்த தொகை.", hi: "लाल मतलब आपने उधार दिया; हरा मतलब ग्राहक ने रुपये चुका दिए।" }, visual: "khata_buttons" }
    ],
    simulation: {
      type: "khata_sim",
      customer: "Murugan (Driver)",
      totalDue: "₹640",
      lastEntry: "Rice & Oil: ₹350 (Given)"
    },
    safetyTip: {
      en: "Always take a phone number for credit customers so the digital khata can send automatic polite reminder SMS.",
      ta: "கடன் வாடிக்கையாளர்களிடம் எப்போதும் போன் எண்ணை வாங்குங்கள்.",
      hi: "उधार लेने वाले ग्राहकों का मोबाइल नंबर जरूर रखें ताकि उन्हें हिसाब का प्यारा सा मैसेज भेजा जा सके।"
    }
  },
  {
    id: "l_biz_3",
    category: "business",
    icon: "💬",
    title: {
      en: "Sending Friendly WhatsApp Payment Reminders",
      ta: "நட்பான வாட்ஸ்அப் கட்டண நினைவூட்டல் அனுப்புதல்",
      hi: "वॉट्सऐप पर तकादा (उधार का मैसेज) प्यार से भेजना"
    },
    description: {
      en: "Send polite reminder messages with your UPI payment link without awkward arguments.",
      ta: "சண்டை இல்லாமல் உங்கள் UPI கட்டண இணைப்புடன் கண்ணியமான நினைவூட்டல் செய்திகளை அனுப்புங்கள்.",
      hi: "बिना किसी झगड़े के ग्राहक को वॉट्सऐप पर भुगतान लिंक के साथ शिष्ट संदेश भेजें।"
    },
    difficulty: "easy",
    badgeReward: "Polite Merchant",
    voiceText: {
      en: "Asking for pending money face-to-face can feel awkward. Digital khata lets you tap 'Send Reminder'. It sends a polite WhatsApp message with total balance and your shop UPI QR link.",
      ta: "நேரில் கடன் கேட்பது சங்கடமாக இருக்கலாம். 'Send Reminder' என்பதைத் தொட்டால், நிலுவைத் தொகை மற்றும் உங்கள் UPI இணைப்புடன் வாட்ஸ்அப் செய்தி தானாகச் சென்றுவிடும்.",
      hi: "मुंह पर उधारी मांगना कई बार संकोच भरा होता है। ऐप से 'सेंड रिमाइंडर' दबाएं। यह ग्राहक को आदरपूर्वक बकाया राशि और आपका यूपीआई लिंक भेज देता है।"
    },
    steps: [
      { num: 1, title: { en: "Select Pending Customer", ta: "நிலுவையில் உள்ள வாடிக்கையாளரைத் தேர்வு செய்க", hi: "बकायादार ग्राहक को चुनें" }, desc: { en: "See total outstanding balance at a glance.", ta: "மொத்த நிலுவைத் தொகையை ஒரே பார்வையில் பாருங்கள்.", hi: "देखें कि किस ग्राहक पर कितने रुपये बाकी हैं।" }, visual: "due_customer" },
      { num: 2, title: { en: "Tap 'Send WhatsApp Reminder'", ta: "'வாட்ஸ்அப் நினைவூட்டல் அனுப்பு' என்பதைத் தொடவும்", hi: "'वॉट्सऐप रिमाइंडर भेजें' पर दबाएं" }, desc: { en: "Generates polite greeting: 'Namaste, gentle reminder of ₹450 pending at Sharma Kirana'.", ta: "கண்ணியமான வாழ்த்துடன் செய்தி உருவாகும்.", hi: "नमस्ते, आपकी 450 रुपये की उधारी का संदेश आसानी से भेजा जा सकता है।" }, visual: "reminder_preview" }
    ],
    simulation: {
      type: "whatsapp_reminder_sim",
      customer: "Suresh Mason",
      amount: "₹420",
      sampleText: "Namaste Suresh ji, gentle reminder of ₹420 pending at Ravi Store. Pay safely on UPI: ravi@upi"
    },
    safetyTip: {
      en: "Never send aggressive or threatening messages to customers; polite digital reminders recover 80% more money.",
      ta: "வாடிக்கையாளர்களுக்கு அச்சுறுத்தும் செய்திகளை அனுப்ப வேண்டாம்; கண்ணியமான நினைவூட்டல்கள் அதிக பலன் தரும்.",
      hi: "ग्राहकों को कभी धमकी भरे मैसेज न भेजें; विनम्रता से भेजा गया डिजिटल मैसेज ज्यादा असरदार होता है।"
    }
  },
  {
    id: "l_biz_4",
    category: "business",
    icon: "📸",
    title: {
      en: "Good Product Photography with Phone",
      ta: "போன் மூலம் சிறந்த தயாரிப்பு புகைப்படம் எடுத்தல்",
      hi: "फोन से सामान की अच्छी फोटो खींचकर बिक्री बढ़ाना"
    },
    description: {
      en: "Photograph sarees, honey, vegetables, or handicrafts in clean light for WhatsApp status.",
      ta: "புடவைகள், தேன் அல்லது கைவினைப் பொருட்களை வாட்ஸ்அப் ஸ்டேட்டஸுக்கு அழகாக படம் எடுங்கள்.",
      hi: "साड़ी, शहद, ताजी सब्जियां या मिट्टी के बर्तनों की साफ फोटो खींचकर वॉट्सऐप पर स्टेटस लगाएं।"
    },
    difficulty: "easy",
    badgeReward: "Photo Marketer",
    voiceText: {
      en: "Good photos attract buyers. Place your product near a window with soft natural daylight. Keep a plain clean background, like a white cloth or wooden table. Clean your camera lens with a soft cloth before shooting.",
      ta: "நல்ல புகைப்படங்கள் வாடிக்கையாளர்களை ஈர்க்கும். மென்மையான பகல் வெளிச்சம் உள்ள சாளரத்தின் அருகே தயாரிப்பை வைக்கவும். வெள்ளை துணி போன்ற எளிய பின்னணியைப் பயன்படுத்துங்கள். கேமரா லென்ஸை துணியால் துடைக்கவும்.",
      hi: "अच्छी फोटो देखकर ग्राहक जल्दी आकर्षित होते हैं। सामान को खिड़की के पास रखें जहां दिन की प्राकृतिक रोशनी हो। पीछे साफ कपड़ा या लकड़ी की मेज रखें और फोटो लेने से पहले कैमरे का शीशा जरूर पोंछ लें।"
    },
    steps: [
      { num: 1, title: { en: "Wipe Camera Lens Clean", ta: "கேமரா லென்ஸை சுத்தமாக துடைக்கவும்", hi: "कैमरा लेंस को साफ कपड़े से पोंछें" }, desc: { en: "Finger oil makes photos blurry and hazy.", ta: "விரல் எண்ணெய் படிந்தால் படங்கள் மங்கலாகத் தெரியும்.", hi: "अक्सर अंगुली के पसीने से फोटो धुंधली आती है।" }, visual: "wipe_lens" },
      { num: 2, title: { en: "Use Natural Morning Light", ta: "காலை இயற்கை வெளிச்சத்தைப் பயன்படுத்துங்கள்", hi: "सुबह की प्राकृतिक रोशनी का उपयोग करें" }, desc: { en: "Avoid yellow bulb glare or harsh flash shadows.", ta: "மஞ்சள் பல்ப் அல்லது கடுமையான ஃபிளாஷ் ஒளியைத் தவிர்க்கவும்.", hi: "कमरे के पीले बल्ब या मोबाइल की तेज फ्लैश से बचें।" }, visual: "sun_light" },
      { num: 3, title: { en: "Post on WhatsApp Business Status", ta: "வாட்ஸ்அப் ஸ்டேட்டஸில் பதிவிடுங்கள்", hi: "वॉट्सऐप स्टेटस पर कीमत के साथ लगाएं" }, desc: { en: "Add price and size: 'Pure Forest Honey, 500g, ₹280. Home delivery available'.", ta: "விலை மற்றும் எடையைச் சேர்க்கவும்: 'இயற்கை தேன், 500 கிராம், ₹280'.", hi: "दाम और मात्रा लिखें: 'शुद्ध शहद, 500 ग्राम, ₹280, घर पहुंच सेवा'।" }, visual: "status_post" }
    ],
    simulation: {
      type: "product_photo_sim",
      productName: "Handwoven Cotton Saree",
      suggestedPrice: "₹850"
    },
    safetyTip: {
      en: "Never ship goods to unknown distant callers who send fake payment slips before money shows in your passbook.",
      ta: "பணம் வங்கியில் வரவு வைக்கப்படும் முன் போலி ரசீதை நம்பி பொருட்களை அனுப்பாதீர்கள்.",
      hi: "अकाउंट में पैसे जमा होने का बैंक मैसेज आए बिना केवल फर्जी पर्ची देखकर किसी को सामान कूरियर न करें।"
    }
  },
  {
    id: "l_biz_5",
    category: "business",
    icon: "🛑",
    title: {
      en: "Spotting Fake Payment Screenshot Scams",
      ta: "போலி கட்டண ஸ்கிரீன்ஷாட் மோசடியை கண்டறிதல்",
      hi: "फर्जी पेमेंट स्क्रीनशॉट वाले धोखे से कैसे बचें"
    },
    description: {
      en: "Scammers use fake spoof apps that show a fake green 'Paid ₹500' screen.",
      ta: "மோசடிக்காரர்கள் 'Paid ₹500' என்று காட்டும் போலி செயலிகளைப் பயன்படுத்துகிறார்கள்.",
      hi: "ठग लोग नकली ऐप से फोन पर '₹500 सफल' का फर्जी स्क्रीनशॉट दिखाकर भाग जाते हैं।"
    },
    difficulty: "medium",
    badgeReward: "Fraud Detector",
    voiceText: {
      en: "Beware of customers who rush you saying 'See brother, 1000 rupees paid, look at my green tick'. Spoof apps create fake payment screens. Always verify that money came into YOUR account before handing over goods.",
      ta: "'பாருங்கள் அண்ணா, 1000 ரூபாய் செலுத்திவிட்டேன்' என்று அவசரப்படுத்தும் நபர்களிடம் எச்சரிக்கையாக இருங்கள். பொருட்களைக் கொடுப்பதற்கு முன் உங்கள் வங்கிக் கணக்கில் பணம் வந்ததை உறுதிப்படுத்திக் கொள்ளுங்கள்.",
      hi: "'देखिए भाईसाहब, हरा टिक आ गया, 1000 रुपये भेज दिए' ऐसी जल्दबाजी दिखाने वालों से सावधान रहें। नकली ऐप से फर्जी स्क्रीन बन जाती है। जब तक आपके खुद के फोन पर मैसेज न आए, ग्राहक को न जाने दें।"
    },
    steps: [
      { num: 1, title: { en: "Never Trust Buyer's Phone Screen", ta: "வாங்குபவரின் போன் திரையை மட்டும் நம்பாதீர்கள்", hi: "सामने वाले के फोन पर भरोसा न करें" }, desc: { en: "Anyone can show an image or fake Paytm/GPay simulator.", ta: "யாரும் போலி படம் அல்லது செயலியை காட்ட முடியும்.", hi: "कोई भी पुरानी फोटो या नकली ऐप का स्क्रीनशॉट दिखा सकता है।" }, visual: "fake_screen" },
      { num: 2, title: { en: "Listen for Your Soundbox", ta: "உங்கள் ஒலிப்பெட்டியைக் கேளுங்கள்", hi: "अपने साउंडबॉक्स की आवाज सुनें" }, desc: { en: "Soundbox only triggers when real money hits your registered bank.", ta: "உண்மையான பணம் வங்கிக்கு வரும்போது மட்டுமே சவுண்ட்பாக்ஸ் ஒலிக்கும்.", hi: "साउंडबॉक्स केवल तभी बोलता है जब सचमुच बैंक में रुपये आ जाएं।" }, visual: "real_soundbox" },
      { num: 3, title: { en: "Check Your Own Bank SMS", ta: "உங்கள் சொந்த வங்கி SMS-ஐ சரிபார்க்கவும்", hi: "अपने फोन का बैंक मैसेज देखें" }, desc: { en: "Look for SMS from your official bank (e.g. VK-SBI, AD-CANARA).", ta: "உங்கள் வங்கியிலிருந்து வந்த அதிகாரப்பூர்வ SMS-ஐப் பாருங்கள்.", hi: "अपने खुद के इनबॉक्स में बैंक का क्रेडिट मैसेज चेक करें।" }, visual: "bank_sms_verify" }
    ],
    simulation: {
      type: "fake_screenshot_detector_sim",
      scenarios: [
        { desc: "Customer shows green screen, but your soundbox stays completely silent.", action: "Do not give goods; ask them to wait for real bank SMS ✅" }
      ]
    },
    safetyTip: {
      en: "If a buyer says 'It will take 2 hours to reflect, please give the goods now', politely say 'No problem, please come back when the money arrives'.",
      ta: "'பணம் வர 2 மணி நேரம் ஆகும், பொருட்களை இப்போதே கொடுங்கள்' என்று சொன்னால், 'பணம் வந்ததும் வாருங்கள்' என்று சொல்லுங்கள்.",
      hi: "अगर ग्राहक कहे कि 'पैसे आने में 2 घंटे लगेंगे, सामान अभी दे दो', तो आदर से कहें 'पैसे आते ही सामान ले जाइएगा'।"
    }
  },

  // ==================== 8. COMMUNICATION (5 Lessons) ====================
  {
    id: "l_comm_1",
    category: "communication",
    icon: "📹",
    title: {
      en: "Making Free WhatsApp Voice & Video Calls",
      ta: "இலவச வாட்ஸ்அப் குரல் மற்றும் வீடியோ அழைப்பு",
      hi: "वॉट्सऐप पर मुफ्त वीडियो और वॉयस कॉल करना"
    },
    description: {
      en: "See and talk to your children or grandchildren living far away for free over internet.",
      ta: "வெளியூரில் வாழும் குழந்தைகள் அல்லது பேரக்குழந்தைகளை இணையம் வழியாக இலவசமாக பார்த்துப் பேசுங்கள்.",
      hi: "दूर रहने वाले बच्चों या नाती-पोतों से मुफ्त में चेहरा देखकर वीडियो पर बात करें।"
    },
    difficulty: "easy",
    badgeReward: "Family Connector",
    voiceText: {
      en: "Open WhatsApp. Tap the contact of your child or family. Look at the top right corner. The phone receiver icon makes a voice call; the camera icon makes a live video call.",
      ta: "வாட்ஸ்அப் திறக்கவும். உங்கள் குடும்பத் தொடர்பைத் தொடவும். மேல் வலது மூலையைப் பாருங்கள். போன் ஐகான் குரல் அழைப்பையும், கேமரா ஐகான் வீடியோ அழைப்பையும் செய்யும்.",
      hi: "वॉट्सऐप खोलें। अपने बच्चे या रिश्तेदार के नाम पर टैप करें। ऊपर दाईं ओर देखें। फोन का निशान वॉयस कॉल के लिए है और कैमरा का निशान वीडियो कॉल के लिए है।"
    },
    steps: [
      { num: 1, title: { en: "Open Chat with Family Member", ta: "குடும்ப உறுப்பினருடன் அரட்டையைத் திறக்கவும்", hi: "रिश्तेदार का चैट खोलें" }, desc: { en: "Tap their photo in your WhatsApp chat list.", ta: "வாட்ஸ்அப் பட்டியலில் அவர்களின் புகைப்படத்தைத் தொடவும்.", hi: "अपनी चैट लिस्ट में उनके नाम या फोटो पर दबाएं।" }, visual: "chat_open" },
      { num: 2, title: { en: "Tap Camera Icon for Video Call", ta: "வீடியோ அழைப்பிற்கு கேமரா ஐகானைத் தொடவும்", hi: "वीडियो कॉल के लिए कैमरा आइकन दबाएं" }, desc: { en: "Located at the top right of your screen.", ta: "திரையின் மேல் வலதுபுறத்தில் அமைந்துள்ளது.", hi: "स्क्रीन के ऊपर दाईं तरफ बने छोटे कैमरे को दबाएं।" }, visual: "video_cam_btn" },
      { num: 3, title: { en: "Flip Front/Back Camera", ta: "முன்/பின் கேமராவை மாற்றவும்", hi: "आगे और पीछे का कैमरा बदलें" }, desc: { en: "Tap the circular arrows icon to show your face or show your house/farm.", ta: "உங்கள் முகத்தைக் காட்ட அல்லது வயலைக் காட்ட வட்ட அம்புக்குறிகளைத் தொடவும்.", hi: "गोल तीर वाले निशान से अपना चेहरा या खेत का नजारा दिखाएं।" }, visual: "flip_cam" }
    ],
    simulation: {
      type: "whatsapp_call_sim",
      caller: "Daughter Priya (Bangalore)",
      callType: "video"
    },
    safetyTip: {
      en: "Never accept video calls from unknown foreign numbers (+92, +62); fraudsters record compromising videos for blackmail.",
      ta: "அறியப்படாத எண்களிலிருந்து வரும் வீடியோ அழைப்புகளை ஏற்காதீர்கள்; அச்சுறுத்தி பணம் பறிக்க அவர்கள் வீடியோக்களை பதிவு செய்யலாம்.",
      hi: "अनजान नंबरों से आने वाली वीडियो कॉल कभी न उठाएं; ठग आपत्तिजनक वीडियो बनाकर ब्लैकमेल करते हैं।"
    }
  },
  {
    id: "l_comm_2",
    category: "communication",
    icon: "🎙️",
    title: {
      en: "Sending Voice Notes Instead of Typing",
      ta: "தட்டச்சு செய்வதற்கு பதிலாக குரல் குறிப்பு அனுப்புதல்",
      hi: "लिखने की जगह बोलकर वॉयस मैसेज (Voice Note) भेजना"
    },
    description: {
      en: "Press and hold the green microphone to speak your message without typing letters.",
      ta: "எழுத்துக்களை தட்டச்சு செய்யாமல் பேச பச்சை மைக்ரோஃபோனை அழுத்திப் பிடிக்கவும்.",
      hi: "बिना अक्षर लिखे, बस हरा माइक दबाकर रखें और बोलकर अपना पूरा संदेश भेजें।"
    },
    difficulty: "easy",
    badgeReward: "Voice Messenger",
    voiceText: {
      en: "If typing is difficult, use voice messages. In any WhatsApp chat, press and hold the green microphone button at the bottom right. Speak your message. Let go of the button to send it instantly.",
      ta: "தட்டச்சு செய்வது கடினமாக இருந்தால், குரல் செய்திகளைப் பயன்படுத்துங்கள். கீழ் வலதுபுறத்தில் உள்ள பச்சை மைக்ரோஃபோன் பொத்தானை அழுத்திப் பிடித்துப் பேசுங்கள். பொத்தானை விட்டால் செய்தி சென்றுவிடும்.",
      hi: "अगर टाइप करना कठिन लगता है तो वॉयस मैसेज सबसे आसान है। वॉट्सऐप में नीचे दाएं कोने पर हरे माइक बटन को दबाकर रखें। बोलें और छोड़ते ही मैसेज चला जाएगा।"
    },
    steps: [
      { num: 1, title: { en: "Find Green Mic at Bottom Right", ta: "கீழ் வலதுபுறத்தில் பச்சை மைக்கைக் கண்டறியவும்", hi: "नीचे दाएं कोने में हरा माइक देखें" }, desc: { en: "Next to the text typing box.", ta: "உரை தட்டச்சு பெட்டிக்கு அருகில்.", hi: "संदेश लिखने वाले बॉक्स के ठीक बगल में।" }, visual: "green_mic" },
      { num: 2, title: { en: "Hold While Speaking", ta: "பேசும் போது அழுத்திப் பிடிக்கவும்", hi: "बोलते समय दबाकर रखें" }, desc: { en: "Keep your finger pressed on the mic while speaking clearly.", ta: "தெளிவாகப் பேசும் வரை உங்கள் விரலை மைக்கில் வைத்திருக்கவும்.", hi: "जब तक आप बोल रहे हैं, उंगली को माइक पर दबाए रखें।" }, visual: "holding_mic" },
      { num: 3, title: { en: "Slide Left to Cancel", ta: "ரத்து செய்ய இடதுபுறம் நகர்த்தவும்", hi: "रद्द करने के लिए बाईं ओर सरकाएं" }, desc: { en: "If you made a mistake, slide finger to the left trash bin icon.", ta: "தவறு செய்தால், ரத்து செய்ய விரலை இடதுபுறம் உள்ள குப்பைத் தொட்டிக்கு நகர்த்தவும்.", hi: "अगर कुछ गलत बोल दिया हो तो उंगली बाईं तरफ खिसकाएं, मैसेज डिलीट हो जाएगा।" }, visual: "slide_cancel" }
    ],
    simulation: {
      type: "voice_note_sim",
      recipient: "Village Group",
      duration: "0:06"
    },
    safetyTip: {
      en: "Do not say sensitive bank card numbers or passwords out loud in voice messages.",
      ta: "குரல் செய்திகளில் ரகசிய வங்கி விவரங்களை சத்தமாகப் பேசாதீர்கள்.",
      hi: "वॉयस मैसेज में कभी भी अपने बैंक के पासवर्ड या गोपनीय नंबर न बोलें।"
    }
  },
  {
    id: "l_comm_3",
    category: "communication",
    icon: "📍",
    title: {
      en: "Sharing Your Location with Family",
      ta: "உங்கள் இருப்பிடத்தை குடும்பத்தினருடன் பகிர்தல்",
      hi: "परिवार को अपनी लोकेशन (स्थान) भेजना"
    },
    description: {
      en: "Send your exact map pin so children know where you are or find you during travel.",
      ta: "உங்கள் சரியான இருப்பிடத்தை அனுப்பி குடும்பத்தினர் உங்களை எளிதாகக் கண்டறிய உதவுங்கள்.",
      hi: "अपनी सही लोकेशन भेजें ताकि यात्रा के समय बच्चे जान सकें कि आप सुरक्षित कहां पहुंचे हैं।"
    },
    difficulty: "medium",
    badgeReward: "Safe Traveler",
    voiceText: {
      en: "When traveling or in an emergency, open WhatsApp with your son or daughter. Tap the paperclip icon. Tap Location. Choose 'Share Live Location' so they can see your bus movement in real time.",
      ta: "பயணத்தின் போது அல்லது அவசர காலத்தில், வாட்ஸ்அப்பில் பேப்பர்கிளிப் ஐகானைத் தொட்டு 'Location' என்பதைத் தேர்ந்தெடுக்கவும். உங்கள் பேருந்து செல்லும் வழியை அவர்கள் நேரலையில் பார்க்கலாம்.",
      hi: "सफर के समय या जरूरत पड़ने पर बेटे-बेटी का वॉट्सऐप खोलें। पिन वाले निशान (Paperclip) पर दबाएं और 'लोकेशन' चुनें। इससे उन्हें पता रहेगा कि आपकी बस कहां तक पहुंची है।"
    },
    steps: [
      { num: 1, title: { en: "Tap Paperclip Attachment Icon", ta: "பேப்பர்கிளிப் ஐகானைத் தொடவும்", hi: "पेपरक्लिप (पिन) वाला निशान दबाएं" }, desc: { en: "Located at the bottom of the chat box.", ta: "அரட்டை பெட்டியின் கீழே அமைந்துள்ளது.", hi: "चैट बॉक्स में नीचे बने पिन जैसे निशान पर टैप करें।" }, visual: "paperclip_icon" },
      { num: 2, title: { en: "Tap Green 'Location' Symbol", ta: "பச்சை 'Location' சின்னத்தைத் தொடவும்", hi: "हरे 'लोकेशन' निशान पर टैप करें" }, desc: { en: "Looks like an upside-down map teardrop pin.", ta: "வரைபட ஊசி போன்ற சின்னம்.", hi: "उल्टे आंसू या नक्शे के पिन जैसा निशान।" }, visual: "location_pin" },
      { num: 3, title: { en: "Choose 'Send Your Current Location'", ta: "'தற்போதைய இருப்பிடத்தை அனுப்பு' என்பதைத் தேர்ந்தெடுக்கவும்", hi: "'करंट लोकेशन भेजें' चुनें" }, desc: { en: "Sends your fixed spot instantly with 10-meter accuracy.", ta: "உங்கள் சரியான இடத்தை உடனடியாக அனுப்பிவிடும்.", hi: "यह तुरंत बताता है कि आप इस समय किस जगह खड़े हैं।" }, visual: "send_current_loc" }
    ],
    simulation: {
      type: "location_sim",
      placeName: "District Bus Stand, Platform 4",
      status: "Shared with Family"
    },
    safetyTip: {
      en: "Never share live location in public WhatsApp groups with unknown strangers.",
      ta: "அந்நியர்கள் உள்ள பொது வாட்ஸ்அப் குழுக்களில் உங்கள் நேரடி இருப்பிடத்தைப் பகிராதீர்கள்.",
      hi: "अनजान लोगों वाले वॉट्सऐप ग्रुप में कभी भी अपनी लाइव लोकेशन शेयर न करें।"
    }
  },
  {
    id: "l_comm_4",
    category: "communication",
    icon: "👥",
    title: {
      en: "WhatsApp Group Etiquette & Respect",
      ta: "வாட்ஸ்அப் குழு ஒழுக்கம் மற்றும் மரியாதை",
      hi: "वॉट्सऐप ग्रुप के जरूरी नियम और शिष्टाचार"
    },
    description: {
      en: "Avoid spamming 20 'Good Morning' stickers and keep village groups peaceful.",
      ta: "தேவையற்ற படங்களை தவிர்த்து கிராமக் குழுக்களை பயனுள்ளதாக வைத்திருங்கள்.",
      hi: "दिन भर 20 'गुड मॉर्निंग' फोटो भेजने से बचें और ग्रुप में शांति बनाए रखें।"
    },
    difficulty: "easy",
    badgeReward: "Group Leader",
    voiceText: {
      en: "Large WhatsApp groups use a lot of phone storage and data. Only share useful village notices, event news, or verified information. Mute noisy groups if notifications disturb your sleep.",
      ta: "பெரிய வாட்ஸ்அப் குழுக்கள் போன் சேமிப்பகத்தையும் டேட்டாவையும் அதிகம் பயன்படுத்தும். பயனுள்ள கிராம அறிவிப்புகளை மட்டுமே பகிருங்கள். தொந்தரவு செய்யும் குழுக்களை மியூட் செய்யுங்கள்.",
      hi: "बड़े वॉट्सऐप ग्रुप फोन की मेमोरी और डेटा भर देते हैं। सिर्फ काम की सूचना या जरूरी जानकारी ही भेजें। अगर बार-बार मैसेज की घंटी बजे तो ग्रुप को 'म्यूट' कर दें।"
    },
    steps: [
      { num: 1, title: { en: "Avoid Mass Forwards", ta: "தேவையற்ற பகிர்வுகளைத் தவிர்க்கவும்", hi: "बेवजह के फॉरवर्ड न भेजें" }, desc: { en: "Sending 50 greetings fills everyone's phone gallery with duplicate photos.", ta: "50 வாழ்த்துகளை அனுப்புவது அனைவரின் போன் சேமிப்பகத்தையும் நிரப்புகிறது.", hi: "बहुत सारी फोटो भेजने से दूसरों का फोन धीमा हो जाता है।" }, visual: "storage_warn" },
      { num: 2, title: { en: "How to Mute a Noisy Group", ta: "அரட்டை குழுவை மியூட் செய்வது எப்படி", hi: "ग्रुप को म्यूट (आवाज बंद) कैसे करें" }, desc: { en: "Tap group name > Mute notifications > Select 'Always'.", ta: "குழு பெயர் > Mute notifications > 'Always' என்பதைத் தொடவும்.", hi: "ग्रुप के नाम पर दबाएं > म्यूट नोटिफिकेशन > 'Always' चुनें।" }, visual: "mute_group" }
    ],
    simulation: {
      type: "group_mute_sim",
      groupName: "Grama Panchayat Panchayat All Members"
    },
    safetyTip: {
      en: "Creating or forwarding messages inciting communal tension or violence in groups can lead to legal action by police.",
      ta: "வன்முறையைத் தூண்டும் செய்திகளை வாட்ஸ்அப் குழுக்களில் பகிர்வது சட்டப்படி குற்றமாகும்.",
      hi: "ग्रुप में भड़काऊ या नफरत फैलाने वाले मैसेज फॉरवर्ड करने पर पुलिस कानूनी कार्रवाई कर सकती है।"
    }
  },
  {
    id: "l_comm_5",
    category: "communication",
    icon: "🛑",
    title: {
      en: "Stopping Fake News and Rumors",
      ta: "போலி செய்திகள் மற்றும் வதந்திகளை தடுத்தல்",
      hi: "अफवाहों और फर्जी खबरों को फैलने से रोकना"
    },
    description: {
      en: "Look for 'Forwarded Many Times' label before trusting or sharing alarming rumors.",
      ta: "'Forwarded Many Times' என்று உள்ள வதந்திகளைப் பகிராதீர்கள்.",
      hi: "'फॉरवर्डेड मेनी टाइम्स' का निशान देखें और अफवाहों को आगे न भेजें।"
    },
    difficulty: "medium",
    badgeReward: "Truth Seeker",
    voiceText: {
      en: "Rumors about child-lifters, fake government announcements, or false health cures spread fast. If a message has two arrows saying 'Forwarded Many Times', pause and verify with local authorities before forwarding.",
      ta: "போலி அரசு அறிவிப்புகள் அல்லது வதந்திகள் வேகமாக பரவுகின்றன. 'Forwarded Many Times' என்று இருந்தால், அதை மற்றவர்களுக்கு அனுப்புவதற்கு முன் உண்மைதானா எனச் சரிபார்க்கவும்.",
      hi: "बच्चा चोर, फर्जी सरकारी आदेश या गलत दवाइयों की अफवाहें तेजी से फैलती हैं। अगर किसी मैसेज पर 'फॉरवर्डेड कई बार' लिखा हो, तो उसे बिना जांचे किसी को आगे न भेजें।"
    },
    steps: [
      { num: 1, title: { en: "Check for Double Arrow ⏩", ta: "இரட்டை அம்புக்குறியைப் பாருங்கள் ⏩", hi: "डबल तीर का निशान देखें ⏩" }, desc: { en: "Shows the message was copied and passed through many unknown people.", ta: "செய்தி பல தெரியாத நபர்களால் அனுப்பப்பட்டது என்பதைக் குறிக்கிறது.", hi: "इसका मतलब है कि यह मैसेज कई अनजान हाथों से होकर आया है।" }, visual: "forward_arrow" },
      { num: 2, title: { en: "Ask 'Is it in the Newspaper?'", ta: "'செய்தித்தாளில் வந்துள்ளதா?' என்று கேளுங்கள்", hi: "सच्चाई की जांच करें" }, desc: { en: "Real government announcements always appear on TV and official newspapers.", ta: "உண்மையான அரசு அறிவிப்புகள் தொலைக்காட்சிகளிலும் நாளிதழ்களிலும் வரும்.", hi: "सच्ची सरकारी घोषणाएं हमेशा टीवी समाचार और अखबारों में आती हैं।" }, visual: "newspaper_check" },
      { num: 3, title: { en: "Break the Chain: Do Not Forward", ta: "சங்கிலியை உடைக்கவும்: பகிர வேண்டாம்", hi: "कड़ी तोड़ें: आगे न भेजें" }, desc: { en: "Protect your friends and relatives from panic by deleting the rumor.", ta: "வதந்திகளை நீக்குவதன் மூலம் உங்கள் நண்பர்களை தேவையற்ற பயத்திலிருந்து காப்பாற்றுங்கள்.", hi: "अफवाह को वहीं रोककर अपने गांव और परिवार को डर से बचाएं।" }, visual: "break_chain" }
    ],
    simulation: {
      type: "fake_news_quiz_sim",
      headline: "Alert! Drinking boiled salt water prevents all fever viruses, forward to 10 groups!",
      isReal: false
    },
    safetyTip: {
      en: "Never forward health advice or medical prescriptions received on social media without consulting a qualified MBBS/AYUSH doctor.",
      ta: "மருத்துவ ஆலோசனைகளை மருத்துவரைக் கேட்காமல் சமூக ஊடகங்களில் பகிராதீர்கள்.",
      hi: "डॉक्टर की सलाह के बिना सोशल मीडिया पर बताए गए घरेलू नुस्खे किसी को न भेजें।"
    }
  },

  // ==================== 9. MAPS & NAVIGATION (3 Lessons) ====================
  {
    id: "l_maps_1",
    category: "maps",
    icon: "🗺️",
    title: {
      en: "Finding the Route to Hospital or Market",
      ta: "மருத்துவமனை அல்லது சந்தைக்கு வழி கண்டறிதல்",
      hi: "अस्पताल या बाजार जाने का रास्ता ढूंढना"
    },
    description: {
      en: "Search any place on Google Maps and follow the blue path line.",
      ta: "கூகுள் மேப்ஸில் எந்த இடத்தையும் தேடி நீல நிற வழித்தடக் கோட்டைப் பின்பற்றுங்கள்.",
      hi: "गूगल मैप्स पर कोई भी जगह खोजें और नीली लाइन देखकर रास्ता पाएं।"
    },
    difficulty: "easy",
    badgeReward: "Path Finder",
    voiceText: {
      en: "Open Google Maps. Tap the search bar and say 'Government Hospital'. Tap Directions. Choose if you are walking, on motorcycle, or taking a bus. A blue line will guide you.",
      ta: "கூகுள் மேப்ஸைத் திறக்கவும். 'அரசு மருத்துவமனை' என்று குரல் மூலம் தேடுங்கள். Directions என்பதைத் தொடவும். பைக், நடை அல்லது பேருந்து வழியைத் தேர்வு செய்யவும்.",
      hi: "गूगल मैप्स खोलें। सर्च बार में बोलें 'सरकारी अस्पताल'। 'दिशाएं' (Directions) दबाएं। बाइक, पैदल या बस का विकल्प चुनें। नीली रेखा आपको पूरा रास्ता दिखाएगी।"
    },
    steps: [
      { num: 1, title: { en: "Open Maps App", ta: "மேப்ஸ் செயலியைத் திறக்கவும்", hi: "मैप्स ऐप खोलें" }, desc: { en: "Look for the colorful map location pin icon.", ta: "வண்ண வரைபட லொகேஷன் பின் ஐகானைத் தேடுங்கள்.", hi: "रंग-बिरंगे लोकेशन पिन वाले आइकन को दबाएं।" }, visual: "maps_icon" },
      { num: 2, title: { en: "Speak Destination into Mic", ta: "சேருமிடத்தை மைக்கில் பேசவும்", hi: "माइक में जगह का नाम बोलें" }, desc: { en: "Example: 'Thanjavur Medical College' or 'Nearby Petrol Pump'.", ta: "எடுத்துக்காட்டு: 'அருகிலுள்ள பெட்ரோல் பங்க்'.", hi: "उदाहरण: 'नजदीकी पेट्रोल पंप' या 'जिला अस्पताल'।" }, visual: "maps_mic" },
      { num: 3, title: { en: "Tap Blue 'Directions' Button", ta: "நீல 'Directions' பொத்தானைத் தொடவும்", hi: "नीला 'रास्ता' (Directions) बटन दबाएं" }, desc: { en: "Shows total kilometers and expected travel time.", ta: "மொத்த தூரம் மற்றும் பயண நேரத்தைக் காட்டுகிறது.", hi: "यह बताता है कि कितनी दूरी है और कितना समय लगेगा।" }, visual: "directions_btn" }
    ],
    simulation: {
      type: "maps_sim",
      destination: "District Government Hospital",
      distance: "6.4 km",
      time: "14 mins"
    },
    safetyTip: {
      en: "Download offline map of your district in Google Maps so it guides you even when there is zero mobile signal in remote forest roads.",
      ta: "காட்டுப் பகுதிகளில் சிக்னல் இல்லாதபோதும் வழிகாட்ட ஆஃப்லைன் மேப் பதிவிறக்கம் செய்து கொள்ளுங்கள்.",
      hi: "अपने जिले का 'ऑफलाइन मैप' डाउनलोड करके रखें ताकि जंगल या बीहड़ में नेटवर्क न होने पर भी रास्ता दिखता रहे।"
    }
  },
  {
    id: "l_maps_2",
    category: "maps",
    icon: "🔊",
    title: {
      en: "Voice Directions in Your Native Language",
      ta: "உங்கள் தாய்மொழியில் குரல் வழி வழிகாட்டுதல்",
      hi: "अपनी भाषा में बोलकर रास्ता बताने वाला नेविगेशन"
    },
    description: {
      en: "Hear 'Turn left after 200 meters' in Tamil or Hindi so you don't stare at your screen while riding.",
      ta: "வாகனம் ஓட்டும்போது திரையைப் பார்க்காமல் '200 மீட்டரில் இடதுபுறம் திரும்பவும்' என்ற குரல் வழியைக் கேளுங்கள்.",
      hi: "गाड़ी चलाते समय स्क्रीन देखने की जरूरत नहीं; '200 मीटर बाद बाएं मुड़ें' अपनी भाषा में सुनें।"
    },
    difficulty: "easy",
    badgeReward: "Voice Guide",
    voiceText: {
      en: "Press the green Start button on Maps. The phone will speak aloud: 'Turn left', 'Keep right', or 'You have arrived'. You can set the voice language to Tamil or Hindi in settings.",
      ta: "மேப்ஸில் பச்சை 'Start' பொத்தானை அழுத்தவும். 'இடதுபுறம் திரும்பவும்', 'வலதுபுறம் செல்லவும்' என்று போன் சத்தமாக வழிகாட்டும்.",
      hi: "मैप्स पर हरा 'Start' बटन दबाएं। फोन खुद बोलेगा: 'बाएं मुड़ें', 'सीधे चलें'। आप सेटिंग्स में जाकर इसे हिंदी या अपनी भाषा में सेट कर सकते हैं।"
    },
    steps: [
      { num: 1, title: { en: "Tap Green 'Start' Button", ta: "பச்சை 'Start' பொத்தானைத் தொடவும்", hi: "हरा 'Start' बटन दबाएं" }, desc: { en: "Begins real-time GPS turn-by-turn navigation.", ta: "நேரடி ஜிபிஎஸ் வழிசெலுத்தலைத் தொடங்குகிறது.", hi: "यह आपको मोड़-दर-मोड़ रास्ता बताना शुरू कर देगा।" }, visual: "start_nav" },
      { num: 2, title: { en: "Ensure Speaker Icon is ON", ta: "ஸ்பீக்கர் ஐகான் ஆன் செய்யப்பட்டுள்ளதை உறுதிப்படுத்தவும்", hi: "स्पीकर का निशान खुला रखें" }, desc: { en: "Make sure there is no slash through the speaker symbol.", ta: "ஸ்பீக்கர் சின்னத்தில் கோடு இல்லை என்பதை உறுதிப்படுத்தவும்.", hi: "देखें कि स्पीकर पर कोई कट का निशान न हो।" }, visual: "speaker_on" },
      { num: 3, title: { en: "Keep Phone in Holder / Pocket", ta: "போனை பாக்கெட்டில் அல்லது ஹோல்டரில் வைக்கவும்", hi: "फोन को सुरक्षित होल्डर या जेब में रखें" }, desc: { en: "Listen to voice announcements without taking eyes off the road.", ta: "சாலையிலிருந்து பார்வையை விலக்காமல் குரல் வழி கேட்கவும்.", hi: "सड़क पर ध्यान रखते हुए केवल आवाज सुनकर गाड़ी चलाएं।" }, visual: "pocket_guide" }
    ],
    simulation: {
      type: "voice_nav_sim",
      nextTurn: "In 150 meters, turn right towards Railway Feeder Road"
    },
    safetyTip: {
      en: "Never hold your phone in hand while driving a motorcycle; it causes severe accidents and heavy police fines.",
      ta: "இருசக்கர வாகனம் ஓட்டும் போது போனை கையில் வைத்திருக்காதீர்கள்; இது விபத்துகளை ஏற்படுத்தும்.",
      hi: "मोटरसाइकिल चलाते समय हाथ में फोन पकड़कर न चलाएं; इससे गंभीर दुर्घटना हो सकती है।"
    }
  },
  {
    id: "l_maps_3",
    category: "maps",
    icon: "⏱️",
    title: {
      en: "Sharing Live Trip Location for Safety",
      ta: "பாதுகாப்பிற்காக நேரலை பயண இருப்பிடத்தைப் பகிர்தல்",
      hi: "सफर में सुरक्षा के लिए लाइव लोकेशन शेयर करना"
    },
    description: {
      en: "Let your family track your night auto or bus journey until you reach home safely.",
      ta: "நீங்கள் பாதுகாப்பாக வீடு வந்து சேரும் வரை உங்கள் இரவு பயணத்தை குடும்பத்தினர் கண்காணிக்கட்டும்.",
      hi: "रात में ऑटो या बस से घर लौटते समय परिवार को लाइव लोकेशन भेजें ताकि वे निश्चिंत रहें।"
    },
    difficulty: "medium",
    badgeReward: "Guardian Angel",
    voiceText: {
      en: "When traveling late at night in an auto or taxi, swipe up in Google Maps navigation and tap 'Share Trip Progress'. Pick your family member. They will see your moving vehicle live on their phone.",
      ta: "இரவு நேரத்தில் ஆட்டோ அல்லது வாடகைக் காரில் பயணிக்கும் போது, கூகுள் மேப்ஸில் 'Share Trip Progress' என்பதைத் தொடவும். குடும்பத்தினர் உங்கள் பயணத்தை நேரலையில் பார்க்கலாம்.",
      hi: "रात में ऑटो या बस में सफर करते समय मैप्स में नीचे से ऊपर सरकाएं और 'शेयर ट्रिप' दबाएं। अपने परिजन को चुनें। वे अपने फोन पर आपकी गाड़ी को चलते हुए देख सकेंगे।"
    },
    steps: [
      { num: 1, title: { en: "Start Navigation", ta: "வழிசெலுத்தலைத் தொடங்கவும்", hi: "नेविगेशन शुरू करें" }, desc: { en: "Set home as your destination and tap Start.", ta: "வீட்டை சேருமிடமாக அமைத்து Start என்பதைத் தொடவும்.", hi: "घर का पता डालकर स्टार्ट दबाएं।" }, visual: "nav_start_trip" },
      { num: 2, title: { en: "Swipe Up Bottom Bar", ta: "கீழ் பட்டியை மேலே இழுக்கவும்", hi: "नीचे की पट्टी ऊपर खींचे" }, desc: { en: "Reveals menu options during the trip.", ta: "பயணத்தின் போது கூடுதல் விருப்பங்களைக் காட்டுகிறது.", hi: "सफर के दौरान दिए गए विकल्पों को खोलें।" }, visual: "swipe_up_menu" },
      { num: 3, title: { en: "Tap 'Share Trip Progress'", ta: "'பயண முன்னேற்றத்தைப் பகிர்' என்பதைத் தொடவும்", hi: "'शेयर ट्रिप' पर टैप करें" }, desc: { en: "Automatically stops sharing when you arrive safely at your doorstep.", ta: "நீங்கள் பாதுகாப்பாக வீடு வந்து சேர்ந்ததும் பகிர்வு தானாக நின்றுவிடும்.", hi: "घर पहुंचते ही यह लोकेशन शेयरिंग अपने आप बंद हो जाएगी।" }, visual: "trip_shared" }
    ],
    simulation: {
      type: "trip_share_sim",
      eta: "9:45 PM",
      recipient: "Spouse / Parent"
    },
    safetyTip: {
      en: "Save your local village police station number on speed dial before embarking on late night solitary journeys.",
      ta: "இரவு பயணத்திற்கு முன் உள்ளூர் காவல் நிலைய எண்ணை விரைவு அழைப்பில் சேமித்து வைக்கவும்.",
      hi: "रात में सफर करने से पहले अपने नजदीकी थाने का नंबर फोन में स्पीड डायल पर रखें।"
    }
  },

  // ==================== 10. AI MADE SIMPLE (5 Lessons) ====================
  {
    id: "l_ai_1",
    category: "ai",
    icon: "🤖",
    title: {
      en: "What is AI? (Artificial Intelligence Explained)",
      ta: "AI என்றால் என்ன? (செயற்கை நுண்ணறிவு விளக்கம்)",
      hi: "एआई (AI) क्या है? (आर्टिफिशियल इंटेलिजेंस की सरल समझ)"
    },
    description: {
      en: "Think of AI as a very fast student who read all the books in the world.",
      ta: "உலகில் உள்ள அனைத்து புத்தகங்களையும் படித்த ஒரு சிறந்த மாணவராக AI-ஐ நினையுங்கள்.",
      hi: "एआई को एक ऐसा होशियार सहायक समझें जिसने दुनिया की सारी किताबें पढ़ रखी हैं।"
    },
    difficulty: "easy",
    badgeReward: "AI Curious",
    voiceText: {
      en: "Artificial Intelligence, or AI, is computer software that learns patterns from millions of examples. Just as a farmer learns to spot crop disease after years in the field, AI learns by looking at millions of photos.",
      ta: "செயற்கை நுண்ணறிவு அல்லது AI என்பது கணினி மென்பொருளாகும். ஒரு விவசாயி பயிர் நோய்களை அனுபவத்தால் அறிவது போல, லட்சக்கணக்கான புகைப்படங்களைப் பார்த்து AI கற்றுக்கொள்கிறது.",
      hi: "आर्टिफिशियल इंटेलिजेंस (AI) एक ऐसा कंप्यूटर प्रोग्राम है जो लाखों उदाहरणों से सीखता है। जैसे एक अनुभवी किसान पत्ती देखकर बीमारी पहचान लेता है, वैसे ही एआई लाखों फोटो देखकर सीखता है।"
    },
    steps: [
      { num: 1, title: { en: "Not Magic, Just Smart Software", ta: "மந்திரம் அல்ல, அறிவார்ந்த மென்பொருள்", hi: "कोई जादू नहीं, बस समझदार सॉफ्टवेयर" }, desc: { en: "Computers trained on millions of sentences and pictures.", ta: "லட்சக்கணக்கான வாக்கியங்கள் மற்றும் படங்கள் மூலம் பயிற்சி பெற்றது.", hi: "लाखों वाक्यों और तस्वीरों को पढ़कर तैयार किया गया प्रोग्राम।" }, visual: "brain_chip" },
      { num: 2, title: { en: "Already on Your Phone!", ta: "ஏற்கனவே உங்கள் போனில் உள்ளது!", hi: "आपके फोन में पहले से मौजूद है!" }, desc: { en: "Powers voice typing, camera portrait blur, and language translation.", ta: "குரல் தட்டச்சு, கேமரா போர்ட்ரெய்ட் மற்றும் மொழிபெயர்ப்பில் உள்ளது.", hi: "बोलकर टाइप करना, कैमरे का बैकग्राउंड धुंधला करना सब एआई है।" }, visual: "phone_ai" },
      { num: 3, title: { en: "Can Make Mistakes!", ta: "தவறுகளும் நடக்கலாம்!", hi: "यह गलतियां भी कर सकता है!" }, desc: { en: "AI is not God. Always verify important health, legal, or money facts.", ta: "AI கடவுள் அல்ல. முக்கியமான தகவல்களை எப்போதும் சரிபாருங்கள்.", hi: "एआई सब कुछ सही नहीं बताता। स्वास्थ्य या पैसों के मामलों में इसकी बात आंख मूंदकर न मानें।" }, visual: "verify_ai" }
    ],
    simulation: {
      type: "ai_concept_sim",
      examples: [
        { task: "Identify Crop Disease", howAIHelps: "Compares your leaf photo with 10,000 leaf images in 1 second." },
        { task: "Translate English Board", howAIHelps: "Reads letters and changes them into Tamil or Hindi text." }
      ]
    },
    safetyTip: {
      en: "Never take medical pills solely based on an AI chatbot response; always visit a real registered doctor.",
      ta: "AI சொல்வதை மட்டும் கேட்டு சுயமாக மருந்துகளை உட்கொள்ளாதீர்கள்; மருத்துவரை அணுகவும்.",
      hi: "एआई के कहने पर कभी भी कोई दवाई न खाएं; हमेशा असली डॉक्टर को दिखाएं।"
    }
  },
  {
    id: "l_ai_2",
    category: "ai",
    icon: "🗣️",
    title: {
      en: "Using Phone Voice Assistant (Google Assistant)",
      ta: "போன் குரல் உதவியாளரைப் பயன்படுத்துதல்",
      hi: "गूगल वॉयस असिस्टेंट का उपयोग करना"
    },
    description: {
      en: "Say 'Hey Google, set alarm for 5 AM' or 'Call Suresh on speaker'.",
      ta: "'ஹே கூகுள், காலை 5 மணிக்கு அலாரம் வை' அல்லது 'சுரேஷை அழை' என்று சொல்லுங்கள்.",
      hi: "'हे गूगल, सुबह 5 बजे का अलार्म लगाओ' या 'राजू को फोन मिलाओ' बोलकर काम कराएं।"
    },
    difficulty: "easy",
    badgeReward: "Assistant User",
    voiceText: {
      en: "Press and hold the round home button or say 'Hey Google'. You can command your phone in your language: 'Play devotional songs', 'What is the weather today?', or 'Turn on flashlight'.",
      ta: "முகப்பு பொத்தானை அழுத்திப் பிடிக்கவும் அல்லது 'ஹே கூகுள்' என்று கூறவும். 'பக்திப் பாடல்களைப் போடு' அல்லது 'டார்ச்லைட்டை ஆன் செய்' என்று கட்டளையிடலாம்.",
      hi: "बीच वाला गोल होम बटन दबाकर रखें या 'हे गूगल' बोलें। आप अपनी भाषा में कह सकते हैं: 'भजन चलाओ', 'आज बारिश होगी क्या?' या 'टॉर्च चालू करो'।"
    },
    steps: [
      { num: 1, title: { en: "Hold Center Home Button", ta: "நடு முகப்பு பொத்தானை அழுத்திப் பிடிக்கவும்", hi: "बीच वाला गोल बटन दबाकर रखें" }, desc: { en: "Four colorful dancing dots will appear on bottom of screen.", ta: "திரையின் கீழே நான்கு வண்ண புள்ளிகள் தோன்றும்.", hi: "स्क्रीन के नीचे चार रंग-बिरंगी नाचती हुई बिंदियां दिखेंगी।" }, visual: "assistant_dots" },
      { num: 2, title: { en: "Speak Your Request", ta: "உங்கள் கோரிக்கையைப் பேசுங்கள்", hi: "अपनी बात साफ बोलें" }, desc: { en: "Example: 'Turn on flashlight' or 'What is 450 multiplied by 12?'.", ta: "எடுத்துக்காட்டு: 'டார்ச்லைட்டை இயக்கு' அல்லது '450 பெருக்கல் 12 எவ்வளவு?'.", hi: "उदाहरण: 'टॉर्च ऑन करो' या '450 गुना 12 कितना होता है?'" }, visual: "speak_command" },
      { num: 3, title: { en: "Phone Does it Automatically", ta: "போன் தானாகவே அதைச் செய்கிறது", hi: "फोन तुरंत आपका काम कर देगा" }, desc: { en: "No need to search through complicated menus or type words.", ta: "மெனுக்களைத் தேடவோ தட்டச்சு செய்யவோ தேவையில்லை.", hi: "सेटिंग्स ढूंढने या टाइप करने की कोई जरूरत नहीं पड़ती।" }, visual: "auto_action" }
    ],
    simulation: {
      type: "assistant_sim",
      command: "Set alarm for 5:30 AM tomorrow",
      result: "Alarm set for 5:30 AM tomorrow morning ⏰"
    },
    safetyTip: {
      en: "Be aware that voice assistants listen for their wake word; turn off assistant if you prefer complete privacy in private rooms.",
      ta: "முழுமையான தனியுரிமை வேண்டுமெனில் அமைப்புகளில் குரல் உதவியாளரை அணைக்கலாம்.",
      hi: "अगर आपको पूरी प्राइवेसी चाहिए तो सेटिंग्स में जाकर वॉयस असिस्टेंट को बंद भी किया जा सकता है।"
    }
  },
  {
    id: "l_ai_3",
    category: "ai",
    icon: "🔍",
    title: {
      en: "AI Camera & Instant Language Translation (Google Lens)",
      ta: "AI கேமரா & உடனடி மொழிபெயர்ப்பு (கூகுள் லென்ஸ்)",
      hi: "गूगल लेंस से अंग्रेजी बोर्ड और पर्चियों का हिंदी अनुवाद"
    },
    description: {
      en: "Point your phone camera at an English signboard or medicine slip and read it in Tamil or Hindi.",
      ta: "ஆங்கிலப் பலகை அல்லது மருந்துச் சீட்டை கேமராவால் பார்த்து தமிழ் அல்லது இந்தியில் படியுங்கள்.",
      hi: "अस्पताल के अंग्रेजी पर्चे या साइनबोर्ड पर कैमरा रखें और उसे अपनी भाषा में बदलें।"
    },
    difficulty: "easy",
    badgeReward: "Translator Pro",
    voiceText: {
      en: "Google Lens is like magic glasses. Open Lens, point camera at any English text, like a train station board or fertilizer bag. Tap Translate. The English words change into your mother tongue right on your camera screen.",
      ta: "கூகுள் லென்ஸ் மாயக் கண்ணாடி போன்றது. கேமராவை ஆங்கிலப் பலகையை நோக்கிப் பிடித்து 'Translate' என்பதைத் தொடவும். அது உங்கள் தாய்மொழியாக மாறிவிடும்.",
      hi: "गूगल लेंस एक जादुई चश्मे जैसा है। इसे खोलें और किसी भी अंग्रेजी बोर्ड या खाद के कट्टे पर कैमरा रखें। 'अनुवाद' (Translate) दबाते ही सारे अंग्रेजी शब्द हिंदी में बदल जाएंगे।"
    },
    steps: [
      { num: 1, title: { en: "Open Google Lens", ta: "கூகுள் லென்ஸைத் திறக்கவும்", hi: "गूगल लेंस खोलें" }, desc: { en: "Tap the colorful camera icon in the Google search bar.", ta: "தேடல் பட்டியில் உள்ள வண்ண கேமரா ஐகானைத் தொடவும்.", hi: "गूगल सर्च बार में बने रंग-बिरंगे कैमरे के निशान को दबाएं।" }, visual: "lens_icon" },
      { num: 2, title: { en: "Select 'Translate' Mode", ta: "'Translate' பயன்முறையைத் தேர்ந்தெடுக்கவும்", hi: "'अनुवाद' (Translate) चुनें" }, desc: { en: "Tap the translate button on the bottom left.", ta: "கீழ் இடதுபுறத்தில் உள்ள மொழிபெயர்ப்பு பொத்தானைத் தொடவும்.", hi: "नीचे बाईं ओर बने अनुवाद वाले विकल्प पर टैप करें।" }, visual: "lens_translate" },
      { num: 3, title: { en: "Point at Printed Paper or Board", ta: "அச்சிடப்பட்ட காகிதம் அல்லது பலகையை நோக்கிப் பிடிக்கவும்", hi: "कागज या बोर्ड के सामने कैमरा रखें" }, desc: { en: "The letters magically transform into Tamil or Hindi instantly.", ta: "எழுத்துக்கள் உடனடியாக உங்கள் தாய்மொழியாக மாறும்.", hi: "अंग्रेजी अक्षर तुरंत आपकी मातृभाषा में बदलकर दिखने लगेंगे।" }, visual: "translated_text" }
    ],
    simulation: {
      type: "lens_sim",
      originalText: "CAUTION: HIGH VOLTAGE ELECTRIC FENCE - KEEP AWAY",
      translatedText: "எச்சரிக்கை: உயர் மின்னழுத்த மின்வேலி - தள்ளி இருங்கள் / सावधान: उच्च वोल्टेज बिजली का बाड़ा - दूर रहें"
    },
    safetyTip: {
      en: "Translation can sometimes confuse medical dosages; always double check child medicine amounts with a pharmacist.",
      ta: "மருந்து அளவுகளை மொழிபெயர்க்கும்போது மருந்து விற்பனையாளரிடமும் கேட்டு உறுதிப்படுத்தவும்.",
      hi: "दवाइयों के पर्चे का अनुवाद करते समय डॉक्टर या मेडिकल स्टोर वाले से खुराक जरूर पूछ लें।"
    }
  },
  {
    id: "l_ai_4",
    category: "ai",
    icon: "✍️",
    title: {
      en: "Asking AI Helpful Daily Questions",
      ta: "அன்றாட சந்தேகங்களை AI-யிடம் கேட்பது எப்படி",
      hi: "एआई से रोजमर्रा के काम के सवाल पूछना"
    },
    description: {
      en: "Ask how to remove stains, calculate loan interest, or write a leave letter to school.",
      ta: "கறைகளை நீக்குவது, கடன் வட்டி கணக்கிடுவது அல்லது பள்ளிக்கு விடுப்பு கடிதம் எழுதுவது எப்படிக் கேளுங்கள்.",
      hi: "कपड़े से दाग छुड़ाने, ब्याज का हिसाब करने या स्कूल के लिए छुट्टी का पत्र लिखने में मदद लें।"
    },
    difficulty: "medium",
    badgeReward: "Smart Inquirer",
    voiceText: {
      en: "You can talk to AI in conversational language. Ask: 'My cow is not eating grass, what should I check?', or 'Write a polite Tamil letter to headmaster for 2 days leave for my son'. AI gives you instant drafts.",
      ta: "நீங்கள் AI-யிடம் சாதாரணமாகப் பேசலாம். 'என் மகனுக்கு 2 நாள் விடுப்புக் கடிதம் எழுதித் தா' என்று கேட்டால் அது உடனே எழுதித் தரும்.",
      hi: "आप एआई से बिल्कुल अपने दोस्त की तरह बात कर सकते हैं। कहें: 'मेरे बेटे के लिए स्कूल की छुट्टी का प्रार्थना पत्र लिखो' या 'ब्याज कैसे निकालें'। यह तुरंत आपकी मदद करेगा।"
    },
    steps: [
      { num: 1, title: { en: "Be Specific in Your Question", ta: "உங்கள் கேள்வியை தெளிவாகக் கேளுங்கள்", hi: "अपनी बात पूरी और साफ बताएं" }, desc: { en: "Tell your exact situation: 'I have 2 acres of black soil, which crop is best in June?'.", ta: "உங்கள் சரியான சூழ்நிலையைச் சொல்லுங்கள்.", hi: "जैसे: 'मेरे पास 2 एकड़ काली मिट्टी है, जून में क्या बोना सही रहेगा?'" }, visual: "specific_prompt" },
      { num: 2, title: { en: "Ask in Your Native Tongue", ta: "உங்கள் தாய்மொழியிலேயே கேளுங்கள்", hi: "अपनी भाषा में पूछें" }, desc: { en: "AI understands Tamil, Hindi, Telugu, Bengali, and English.", ta: "AI தமிழ், இந்தி உள்ளிட்ட மொழிகளைப் புரிந்து கொள்கிறது.", hi: "एआई हिंदी और क्षेत्रीय भाषाओं को बहुत अच्छी तरह समझता है।" }, visual: "native_input" }
    ],
    simulation: {
      type: "ai_chat_sim",
      userPrompt: "Write a short leave letter to teacher for my daughter's fever",
      aiReply: "To: The Class Teacher, Respected Sir/Madam, My daughter Priya is suffering from fever. Kindly grant her leave for 2 days. Thank you. - Muthuvel"
    },
    safetyTip: {
      en: "Never share private family secrets, bank account numbers, or passwords when chatting with an AI tool.",
      ta: "AI கருவிகளுடன் பேசும் போது தனிப்பட்ட வங்கி அல்லது குடும்ப ரகசியங்களைப் பகிராதீர்கள்.",
      hi: "एआई से बात करते समय कभी भी अपना बैंक खाता, आधार नंबर या गुप्त पासवर्ड न डालें।"
    }
  },
  {
    id: "l_ai_5",
    category: "ai",
    icon: "🎭",
    title: {
      en: "Spotting AI Fake Videos & Voice Clones (Deepfakes)",
      ta: "AI போலி வீடியோக்கள் & குரல் குளோனிங் (டீப்ஃபேக்) கண்டறிதல்",
      hi: "एआई से बने फर्जी वीडियो और नकली आवाज (डीपफेक) की पहचान"
    },
    description: {
      en: "Scammers can now fake your son's voice saying 'Papa, I was arrested, send ₹20,000'.",
      ta: "'அப்பா, என்னை கைது செய்துவிட்டார்கள், ₹20,000 அனுப்புங்கள்' என்று உங்கள் மகன் குரலில் பேசும் போலி AI குரல் மோசடி.",
      hi: "ठग आपके बेटे की हूबहू आवाज बनाकर फोन कर सकते हैं: 'पापा, मेरा एक्सीडेंट हो गया है, 20 हजार भेजो'।"
    },
    difficulty: "medium",
    badgeReward: "Deepfake Shield",
    voiceText: {
      en: "Computer software can now clone a person's face and voice using just a 10-second video. If you get a terrifying call from your grandson or son crying for bail money, DO NOT panic. Disconnect and call his personal phone number directly to verify.",
      ta: "ஒருவரது முகத்தையும் குரலையும் போலி மென்பொருளால் உருவாக்க முடியும். உறவினர் அவசர பணம் கேட்டு அழைத்தால், பயப்படாமல் அழைப்பைத் துண்டித்து, அவரது சொந்த எண்ணுக்கு நேரடியாக அழைத்து விசாரிக்கவும்.",
      hi: "आजकल कंप्यूटर सिर्फ 10 सेकंड की रिकॉर्डिंग से किसी की भी बिल्कुल असली आवाज बना सकता है। अगर बेटे की आवाज में रोते हुए तुरंत पैसे भेजने का फोन आए, तो घबराएं नहीं। फोन काटकर सीधे उसके खुद के नंबर पर कॉल मिलाएं।"
    },
    steps: [
      { num: 1, title: { en: "Recognize Voice Clones", ta: "போலிக் குரல்களை அடையாளம் காணவும்", hi: "नकली आवाज के फ्रॉड को समझें" }, desc: { en: "Scammer plays an AI-generated recording of family member crying in emergency.", ta: "குடும்பத்தினர் அவசரத்தில் அழுவது போல AI குரலை மோசடிக்காரர் ஒலிப்பார்.", hi: "ठग किसी परिजन की आवाज में रोने या पुलिस केस में फंसने का नाटक करते हैं।" }, visual: "voice_clone_alert" },
      { num: 2, title: { en: "Family Secret Safety Word", ta: "குடும்ப ரகசிய குறியீட்டு சொல்", hi: "परिवार का एक गुप्त सुरक्षा कोड रखें" }, desc: { en: "Agree on a secret word (e.g. 'Mango') known only to your children.", ta: "உங்கள் குழந்தைகளுக்கு மட்டுமே தெரிந்த ஒரு ரகசிய சொல்லை முன்கூட்டியே முடிவு செய்யுங்கள்.", hi: "बच्चों से पहले ही कोई गुप्त शब्द तय कर लें जो सिर्फ आपको और उन्हें पता हो।" }, visual: "secret_word" },
      { num: 3, title: { en: "Always Call Back Directly", ta: "நேரடியாக மீண்டும் அழைக்கவும்", hi: "हमेशा उनके असली नंबर पर दोबारा फोन करें" }, desc: { en: "Hang up on the stranger's number and dial your son's saved contact.", ta: "அந்நியர் அழைப்பைத் துண்டித்துவிட்டு உங்கள் மகனின் சேமிக்கப்பட்ட எண்ணை அழைக்கவும்.", hi: "सामने वाले का फोन काटें और अपने बेटे के पुराने नंबर पर कॉल करके सच जानें।" }, visual: "call_back_direct" }
    ],
    simulation: {
      type: "deepfake_detector_sim",
      caller: "Unknown Lawyer / Police officer",
      dialogue: "Your grandson was caught in an accident. Send ₹15,000 on Google Pay immediately to avoid jail."
    },
    safetyTip: {
      en: "Police officers never demand Google Pay/UPI transfers on WhatsApp to release someone; it is always a cyber fraud.",
      ta: "காவல்துறையினர் ஒருவரை விடுவிக்க வாட்ஸ்அப் அல்லது கூகுள் பே மூலம் ஒருபோதும் பணம் கேட்க மாட்டார்கள்.",
      hi: "पुलिस कभी भी किसी को छोड़ने के लिए वॉट्सऐप या फोनपे पर पैसे ट्रांसफर करने को नहीं कहती।"
    }
  }
];
