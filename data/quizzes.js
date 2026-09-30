// GramaGuide — 30+ Practical Visual Quizzes with Bilingual Explanations
// Instant feedback, score tracking, and safety reinforcement

window.QUIZZES_DATA = [
  {
    id: "q1",
    category: "payments",
    icon: "💳",
    question: {
      en: "Someone on WhatsApp sends you a QR code and says: 'Scan this to receive ₹3,000 lottery cash.' What should you do?",
      ta: "வாட்ஸ்அப்பில் ஒருவர் QR குறியீட்டை அனுப்பி: 'இதை ஸ்கேன் செய்து ₹3,000 லாட்டரி பணத்தைப் பெறுங்கள்' என்கிறார். நீங்கள் என்ன செய்ய வேண்டும்?",
      hi: "वॉट्सऐप पर कोई क्यूआर कोड भेजकर कहे: '3000 रुपये पाने के लिए इसे स्कैन करो।' आपको क्या करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Scan and enter your UPI PIN immediately", ta: "உடனே ஸ்கேன் செய்து உங்கள் UPI பின்னை உள்ளிடவும்", hi: "तुरंत स्कैन करके अपना यूपीआई पिन डालें" } },
      { id: "b", text: { en: "Do NOT scan. UPI PIN is only for sending money, never for receiving! ✅", ta: "ஸ்கேன் செய்யாதீர்கள். பணம் பெற பின் தேவையில்லை! ✅", hi: "स्कैन न करें। पैसे लेने के लिए कभी पिन नहीं डालना होता! ✅" } },
      { id: "c", text: { en: "Forward it to 5 friends", ta: "இதை 5 நண்பர்களுக்கு பகிருங்கள்", hi: "इसे 5 दोस्तों को भेजें" } }
    ],
    answer: "b",
    explanation: {
      en: "Golden Rule: To receive money, you NEVER need to scan a QR or enter your UPI PIN. That QR code would deduct money from your account.",
      ta: "தங்க விதி: பணம் பெற நீங்கள் ஒருபோதும் QR குறியீட்டை ஸ்கேன் செய்யவோ அல்லது உங்கள் UPI பின்னை உள்ளிடவோ தேவையில்லை.",
      hi: "स्वर्ण नियम: पैसे प्राप्त करने के लिए कभी भी क्यूआर कोड स्कैन करने या यूपीआई पिन डालने की जरूरत नहीं होती।"
    }
  },
  {
    id: "q2",
    category: "safety",
    icon: "📞",
    question: {
      en: "A caller claims to be your Bank Manager and asks for your 6-digit OTP to unblock your ATM card. What should you do?",
      ta: "வங்கி மேலாளர் என்று கூறும் ஒருவர் உங்கள் ஏடிஎம் கார்டை அன்பிளாக் செய்ய 6 இலக்க OTP கேட்கிறார். என்ன செய்ய வேண்டும்?",
      hi: "फोन करने वाला खुद को बैंक मैनेजर बताकर एटीएम चालू रखने के लिए 6 अंकों का ओटीपी मांगता है। क्या करें?"
    },
    options: [
      { id: "a", text: { en: "Tell the OTP quickly before card is blocked", ta: "கார்டு பிளாக் ஆகும் முன் விரைவாக OTP சொல்லுங்கள்", hi: "जल्दी से ओटीपी बता दें ताकि कार्ड बंद न हो" } },
      { id: "b", text: { en: "Cut the call immediately. Real bank managers never ask for OTP! ✅", ta: "அழைப்பை உடனே துண்டிக்கவும். வங்கி மேலாளர் ஒருபோதும் OTP கேட்க மாட்டார்! ✅", hi: "तुरंत फोन काट दें। बैंक मैनेजर कभी फोन पर ओटीपी नहीं मांगते! ✅" } },
      { id: "c", text: { en: "Ask him to call tomorrow", ta: "நாளை அழைக்கச் சொல்லுங்கள்", hi: "उसे कल फोन करने को कहें" } }
    ],
    answer: "b",
    explanation: {
      en: "Banks strictly instruct that no official will ever ask for OTP. Sharing it lets scammers empty your bank account.",
      ta: "எந்த ஒரு வங்கி அதிகாரியும் OTP கேட்க மாட்டார்கள். அதைப் பகிர்வது உங்கள் வங்கிக் கணக்கில் உள்ள பணத்தை இழக்க வழிவகுக்கும்.",
      hi: "बैंक कभी भी फोन पर ओटीपी नहीं मांगते। ओटीपी बताते ही खाते के सारे पैसे गायब हो सकते हैं।"
    }
  },
  {
    id: "q3",
    category: "smartphone",
    icon: "🔋",
    question: {
      en: "Your smartphone battery drains too quickly in the field. Which of these helps save battery?",
      ta: "வயலில் உங்கள் போன் பேட்டரி மிக வேகமாக குறைகிறது. பேட்டரியை சேமிக்க எது உதவும்?",
      hi: "खेत में फोन की बैटरी बहुत जल्दी खत्म हो जाती है। बैटरी बचाने के लिए क्या करें?"
    },
    options: [
      { id: "a", text: { en: "Lower screen brightness and turn off GPS when not in use ✅", ta: "திரை வெளிச்சத்தை குறைத்து தேவையில்லாத போது ஜிபிஎஸ்-ஐ அணைக்கவும் ✅", hi: "स्क्रीन की ब्राइटनेस कम करें और जीपीएस बंद रखें ✅" } },
      { id: "b", text: { en: "Keep flashlight turned on constantly", ta: "டார்ச்லைட்டை எப்போதும் எரிய வைக்கவும்", hi: "टॉर्च हमेशा जलाकर रखें" } },
      { id: "c", text: { en: "Install 10 battery booster apps", ta: "10 பேட்டரி பூஸ்டர் செயலிகளை நிறுவுங்கள்", hi: "10 बैटरी बूस्टर ऐप डाउनलोड करें" } }
    ],
    answer: "a",
    explanation: {
      en: "Screen brightness and GPS location consume the most battery power. Lowering brightness makes the battery last all day.",
      ta: "திரை வெளிச்சம் மற்றும் ஜிபிஎஸ் அதிக பேட்டரியை செலவழிக்கின்றன. வெளிச்சத்தை குறைப்பது பேட்டரி நாள் முழுவதும் நீடிக்க உதவும்.",
      hi: "स्क्रीन की रोशनी और जीपीएस सबसे ज्यादा बैटरी खाते हैं। इन्हें कम रखने से बैटरी दिन भर चलती है।"
    }
  },
  {
    id: "q4",
    category: "farmer",
    icon: "🌧️",
    question: {
      en: "Before spraying expensive pesticide spray on your crops, what should you check on your phone?",
      ta: "உங்கள் பயிர்களுக்கு பூச்சிக்கொல்லி மருந்து தெளிப்பதற்கு முன் போனில் எதைச் சரிபார்க்க வேண்டும்?",
      hi: "खेत में महंगी कीटनाशक दवा छिड़कने से पहले फोन पर क्या देखना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Watch a movie trailer", ta: "திரைப்பட டிரெய்லரைப் பாருங்கள்", hi: "कोई नई फिल्म देखें" } },
      { id: "b", text: { en: "Rain probability and wind speed forecast ✅", ta: "மழை வாய்ப்பு மற்றும் காற்றின் வேக முன்னறிவிப்பு ✅", hi: "बारिश की संभावना और हवा की गति का मौसम पूर्वानुमान ✅" } },
      { id: "c", text: { en: "Change phone wallpaper", ta: "போன் வால்பேப்பரை மாற்றவும்", hi: "फोन का वॉलपेपर बदलें" } }
    ],
    answer: "b",
    explanation: {
      en: "If rain arrives shortly after spraying, the pesticide washes away completely, wasting your money.",
      ta: "மருந்து தெளித்த உடனேயே மழை பெய்தால், மருந்து வீணாகி உங்கள் பணம் இழப்பாகும்.",
      hi: "छिड़काव के तुरंत बाद बारिश होने पर दवा धुल जाती है और आपके हजारों रुपये बर्बाद हो जाते हैं।"
    }
  },
  {
    id: "q5",
    category: "safety",
    icon: "🚨",
    question: {
      en: "If you lose money in an online cyber fraud, what is the official National Helpline number to call immediately?",
      ta: "ஆன்லைன் மோசடியில் பணத்தை இழந்தால் உடனடியாக அழைக்க வேண்டிய அதிகாரப்பூர்வ தேசிய உதவி எண் எது?",
      hi: "अगर ऑनलाइन साइबर फ्रॉड में पैसे कट जाएं तो तुरंत किस राष्ट्रीय हेल्पलाइन पर कॉल करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "1930 ✅", ta: "1930 ✅", hi: "1930 ✅" } },
      { id: "b", text: { en: "1008", ta: "1008", hi: "1008" } },
      { id: "c", text: { en: "9999", ta: "9999", hi: "9999" } }
    ],
    answer: "a",
    explanation: {
      en: "1930 is the Government of India National Cyber Financial Fraud Helpline. Quick reporting helps freeze the stolen funds.",
      ta: "1930 என்பது இந்திய அரசின் தேசிய இணைய நிதி மோசடி உதவி எண் ஆகும்.",
      hi: "1930 भारत सरकार का साइबर अपराध हेल्पलाइन नंबर है। तुरंत फोन करने से चोरी हुआ पैसा फ्रीज हो जाता है।"
    }
  },
  {
    id: "q6",
    category: "business",
    icon: "🏪",
    question: {
      en: "A customer shows a green tick on his phone saying 'Paid ₹500', but your soundbox made no announcement. What should you do?",
      ta: "வாடிக்கையாளர் 'Paid ₹500' என்று காட்டுகிறார், ஆனால் சவுண்ட்பாக்ஸ் எதுவும் பேசவில்லை. என்ன செய்ய வேண்டும்?",
      hi: "ग्राहक ने फोन पर '500 रुपये सफल' दिखाया पर आपके साउंडबॉक्स से कोई आवाज नहीं आई। क्या करें?"
    },
    options: [
      { id: "a", text: { en: "Give the goods immediately without checking", ta: "சரிபார்க்காமல் உடனடியாக பொருட்களைக் கொடுங்கள்", hi: "बिना चेक किए तुरंत सामान दे दें" } },
      { id: "b", text: { en: "Wait! Check your own bank SMS or soundbox before handing over goods ✅", ta: "காத்திருங்கள்! பொருட்களைத் தரும் முன் உங்கள் வங்கி SMS அல்லது சவுண்ட்பாக்ஸை சரிபார்க்கவும் ✅", hi: "रुकें! सामान देने से पहले अपने बैंक का मैसेज या साउंडबॉक्स की आवाज देखें ✅" } },
      { id: "c", text: { en: "Switch off your soundbox", ta: "உங்கள் சவுண்ட்பாக்ஸை அணைக்கவும்", hi: "साउंडबॉक्स बंद कर दें" } }
    ],
    answer: "b",
    explanation: {
      en: "Scammers use fake payment screenshot apps. Always confirm receipt on YOUR own phone or soundbox.",
      ta: "மோசடிக்காரர்கள் போலி கட்டண ஸ்கிரீன்ஷாட் செயலிகளைப் பயன்படுத்துகிறார்கள். உங்கள் போன் அல்லது சவுண்ட்பாக்ஸில் உறுதிப்படுத்தவும்.",
      hi: "ठग फर्जी ऐप से नकली स्क्रीनशॉट दिखाते हैं। हमेशा अपने फोन पर मैसेज आने के बाद ही सामान दें।"
    }
  },
  {
    id: "q7",
    category: "government",
    icon: "🪪",
    question: {
      en: "Is an Aadhaar or Driving License shown on DigiLocker app legally valid for police and government officers?",
      ta: "டிஜிலாக்கர் செயலியில் காட்டப்படும் ஆதார் அல்லது ஓட்டுநர் உரிமம் சட்டப்பூர்வமாக செல்லுபடியாகுமா?",
      hi: "क्या डिजीलॉकर में दिखाया गया आधार कार्ड या ड्राइविंग लाइसेंस पुलिस और सरकारी दफ्तरों में मान्य है?"
    },
    options: [
      { id: "a", text: { en: "Yes, under Indian Law (IT Act), it is 100% legally equivalent to original paper cards ✅", ta: "ஆம், தகவல் தொழில்நுட்பச் சட்டத்தின்படி இது 100% அசல் அட்டைக்கு சமம் ✅", hi: "हां, भारतीय कानून (IT एक्ट) के तहत यह 100% असली कागज जितना ही मान्य है ✅" } },
      { id: "b", text: { en: "No, only laminated plastic cards are accepted", ta: "இல்லை, பிளாஸ்டிக் அட்டை மட்டுமே ஏற்றுக்கொள்ளப்படும்", hi: "नहीं, सिर्फ लेमिनेशन वाला कार्ड ही चलता है" } },
      { id: "c", text: { en: "Only accepted on Mondays", ta: "திங்கட்கிழமைகளில் மட்டுமே ஏற்றுக்கொள்ளப்படும்", hi: "केवल सोमवार को मान्य है" } }
    ],
    answer: "a",
    explanation: {
      en: "Under Rule 9A of IT Rules 2016, digital documents on DigiLocker are treated at par with original physical certificates.",
      ta: "தகவல் தொழில்நுட்ப விதிகளின்படி, டிஜிலாக்கரில் உள்ள டிஜிட்டல் ஆவணங்கள் அசல் சான்றிதழ்களுக்கு இணையாகக் கருதப்படுகின்றன.",
      hi: "आईटी नियम 2016 के तहत डिजीलॉकर के दस्तावेज असली कागजात के बराबर मान्य होते हैं।"
    }
  },
  {
    id: "q8",
    category: "internet",
    icon: "🌐",
    question: {
      en: "What does the closed padlock 🔒 symbol next to a website address mean?",
      ta: "வலைத்தள முகவரிக்கு அருகில் உள்ள மூடிய பூட்டு 🔒 சின்னம் எதைக் குறிக்கிறது?",
      hi: "वेबसाइट के पते के पास बंद ताले 🔒 के निशान का क्या मतलब होता है?"
    },
    options: [
      { id: "a", text: { en: "The website is broken", ta: "வலைத்தளம் பழுதாகிவிட்டது", hi: "वेबसाइट खराब हो गई है" } },
      { id: "b", text: { en: "The connection is encrypted and safer for viewing ✅", ta: "இணைப்பு என்க்ரிப்ட் செய்யப்பட்டு பாதுகாப்பானது ✅", hi: "कनेक्शन सुरक्षित और एन्क्रिप्टेड है ✅" } },
      { id: "c", text: { en: "Your phone is locked", ta: "உங்கள் போன் பூட்டப்பட்டுள்ளது", hi: "आपका फोन लॉक हो गया है" } }
    ],
    answer: "b",
    explanation: {
      en: "The lock indicates SSL encryption. Never enter personal details or passwords on websites without this lock icon.",
      ta: "பூட்டு சின்னம் பாதுகாப்பான இணைப்பைக் குறிக்கிறது. இந்த சின்னம் இல்லாத தளங்களில் தனிப்பட்ட விவரங்களை உள்ளிடாதீர்கள்.",
      hi: "ताले का निशान बताता है कि वेबसाइट सुरक्षित है। बिना ताले वाली वेबसाइट पर कभी कोई जानकारी न डालें।"
    }
  },
  {
    id: "q9",
    category: "ai",
    icon: "🤖",
    question: {
      en: "Can Artificial Intelligence (AI) make mistakes or give incorrect answers?",
      ta: "செயற்கை நுண்ணறிவு (AI) தவறுகள் செய்யலாமா அல்லது தவறான பதில்களைத் தர முடியுமா?",
      hi: "क्या आर्टिफिशियल इंटेलिजेंस (AI) कभी गलतियां कर सकता है या गलत जानकारी दे सकता है?"
    },
    options: [
      { id: "a", text: { en: "No, AI is always 100% perfect and knows everything", ta: "இல்லை, AI எப்போதும் சரியானது", hi: "नहीं, एआई भगवान है और कभी गलत नहीं हो सकता" } },
      { id: "b", text: { en: "Yes! AI can make mistakes. Always check important health and money facts ✅", ta: "ஆம்! AI தவறுகள் செய்யலாம். முக்கிய விவரங்களை எப்போதும் சரிபார்க்கவும் ✅", hi: "हां! एआई से गलती हो सकती है। जरूरी स्वास्थ्य और पैसों की बात की दोबारा जांच करें ✅" } },
      { id: "c", text: { en: "AI only works on computers, not phones", ta: "AI போன்களில் வேலை செய்யாது", hi: "एआई सिर्फ कंप्यूटर में काम करता है" } }
    ],
    answer: "b",
    explanation: {
      en: "AI models generate answers based on patterns and can hallucinate false facts. Never rely purely on AI for medical prescriptions or critical legal advice.",
      ta: "AI தவறான தகவல்களையும் தரக்கூடும். மருத்துவ அல்லது சட்ட விஷயங்களுக்கு AI-ஐ மட்டுமே நம்பாதீர்கள்.",
      hi: "एआई कई बार मनगढ़ंत बातें भी बोल सकता है। गंभीर बीमारी या कानूनी सलाह के लिए हमेशा विशेषज्ञों से मिलें।"
    }
  },
  {
    id: "q10",
    category: "communication",
    icon: "🎙️",
    question: {
      en: "If you find it difficult to type in English or regional keyboard on WhatsApp, what is the easiest way to send a message?",
      ta: "வாட்ஸ்அப்பில் தட்டச்சு செய்வது கடினமாக இருந்தால், செய்தி அனுப்ப எளிதான வழி எது?",
      hi: "अगर वॉट्सऐप पर टाइप करना मुश्किल लगता है, तो संदेश भेजने का सबसे आसान तरीका क्या है?"
    },
    options: [
      { id: "a", text: { en: "Hold the green microphone button and send a Voice Note ✅", ta: "பச்சை மைக்ரோஃபோனை அழுத்திப் பிடித்து குரல் குறிப்பை அனுப்பவும் ✅", hi: "हरा माइक बटन दबाकर बोलें और वॉयस मैसेज भेजें ✅" } },
      { id: "b", text: { en: "Ask someone else to type your private chats", ta: "மற்றவர்களிடம் உங்கள் தனிப்பட்ட அரட்டையை தட்டச்சு செய்யச் சொல்லுங்கள்", hi: "किसी और से अपनी निजी बातें लिखवाएं" } },
      { id: "c", text: { en: "Stop using the phone", ta: "போன் பயன்படுத்துவதை நிறுத்துங்கள்", hi: "फोन चलाना बंद कर दें" } }
    ],
    answer: "a",
    explanation: {
      en: "Voice notes let you speak naturally in your mother tongue without typing any letters. Just hold the mic, speak, and release to send.",
      ta: "குரல் குறிப்புகள் தட்டச்சு செய்யாமல் உங்கள் தாய்மொழியில் பேச அனுமதிக்கின்றன.",
      hi: "वॉयस मैसेज से आप बिना लिखे अपनी भाषा में सीधे बोलकर बात कर सकते हैं।"
    }
  },
  {
    id: "q11",
    category: "safety",
    icon: "🔗",
    question: {
      en: "You receive an SMS: 'Electricity power will be cut tonight. Update bill immediately: click bit.ly/power-pay'. What is this?",
      ta: "'இன்று இரவு மின்சாரம் துண்டிக்கப்படும். உடனே பில் புதுப்பிக்க இந்த இணைப்பை கிளிக் செய்யவும்' என்று செய்தி வந்தால் அது என்ன?",
      hi: "'आज रात बिजली काट दी जाएगी, बिल अपडेट करने के लिए bit.ly/power-pay पर क्लिक करें।' यह क्या है?"
    },
    options: [
      { id: "a", text: { en: "Genuine reminder from electricity department", ta: "மின்வாரியத்தின் உண்மையான செய்தி", hi: "बिजली विभाग का असली संदेश" } },
      { id: "b", text: { en: "A dangerous scam! Never click short links or panic ✅", ta: "ஆபத்தான மோசடி! மர்ம இணைப்புகளை கிளிக் செய்யாதீர்கள் ✅", hi: "एक खतरनाक फ्रॉड! अनजान लिंक पर क्लिक न करें और न घबराएं ✅" } },
      { id: "c", text: { en: "Pay ₹10,000 immediately", ta: "உடனே ₹10,000 செலுத்துங்கள்", hi: "तुरंत 10,000 रुपये भेज दें" } }
    ],
    answer: "b",
    explanation: {
      en: "Electricity boards do not threaten immediate disconnection via random personal mobile numbers with bit.ly links.",
      ta: "மின்சார வாரியம் குறுகிய இணைப்புகளுடன் தனிப்பட்ட எண்களிலிருந்து இதுபோன்ற அச்சுறுத்தும் செய்திகளை அனுப்புவதில்லை.",
      hi: "बिजली विभाग कभी भी अनजान मोबाइल नंबर से लिंक भेजकर तुरंत कनेक्शन काटने की धमकी नहीं देता।"
    }
  },
  {
    id: "q12",
    category: "farmer",
    icon: "📞",
    question: {
      en: "What is the official toll-free telephone number for the Kisan Call Center in India?",
      ta: "இந்தியாவில் கிசான் கால் சென்டரின் அதிகாரப்பூர்வ இலவச தொலைபேசி எண் எது?",
      hi: "भारत में किसान कॉल सेंटर का आधिकारिक टोल-फ्री नंबर क्या है?"
    },
    options: [
      { id: "a", text: { en: "1800-180-1551 ✅", ta: "1800-180-1551 ✅", hi: "1800-180-1551 ✅" } },
      { id: "b", text: { en: "100", ta: "100", hi: "100" } },
      { id: "c", text: { en: "1800-000-0000", ta: "1800-000-0000", hi: "1800-000-0000" } }
    ],
    answer: "a",
    explanation: {
      en: "1800-180-1551 is free from any phone and connects you directly to agricultural scientists in your local language.",
      ta: "1800-180-1551 என்பது உங்கள் உள்ளூர் மொழியில் வேளாண் விஞ்ஞானிகளை இணைக்கும் இலவச எண்.",
      hi: "1800-180-1551 पूरी तरह मुफ्त नंबर है जहां कृषि वैज्ञानिक आपकी भाषा में सवालों के जवाब देते हैं।"
    }
  },
  {
    id: "q13",
    category: "payments",
    icon: "🔒",
    question: {
      en: "When entering your secret UPI PIN to make a payment at a crowded store, what should you do?",
      ta: "கூட்டமான கடையில் பணம் செலுத்த ரகசிய UPI பின்னை உள்ளிடும்போது என்ன செய்ய வேண்டும்?",
      hi: "भीड़भाड़ वाली दुकान में यूपीआई पिन डालते समय क्या सावधानी बरतनी चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Say the PIN out loud so shopkeeper can hear", ta: "கடைக்காரர் கேட்கும் வகையில் பின்னை சத்தமாக சொல்லுங்கள்", hi: "जोर से बोलकर पिन बताएं ताकि दुकानदार सुन सके" } },
      { id: "b", text: { en: "Cover your phone screen with your other hand while typing ✅", ta: "தட்டச்சு செய்யும்போது உங்கள் மறு கையால் திரையை மறைக்கவும் ✅", hi: "पिन डालते समय दूसरे हाथ से स्क्रीन को छुपाएं ताकि कोई न देखे ✅" } },
      { id: "c", text: { en: "Let a stranger type the PIN for you", ta: "அந்நியர் ஒருவரை உங்களுக்காக பின்னை தட்டச்சு செய்ய விடுங்கள்", hi: "किसी अनजान व्यक्ति से पिन डलवाएं" } }
    ],
    answer: "b",
    explanation: {
      en: "Always shield your PIN screen from nearby eyes and CCTV cameras to prevent PIN theft.",
      ta: "பின் திருட்டைத் தடுக்க அருகிலுள்ளவர்கள் மற்றும் சிசிடிவி கேமராக்களிலிருந்து உங்கள் திரையை எப்போதும் மறைக்கவும்.",
      hi: "पिन चोरी से बचने के लिए आसपास खड़े लोगों और सीसीटीवी कैमरे से स्क्रीन को हमेशा हाथ से छुपाएं।"
    }
  },
  {
    id: "q14",
    category: "government",
    icon: "🌾",
    question: {
      en: "How much annual financial benefit is provided to eligible farmers under PM-Kisan Samman Nidhi?",
      ta: "பிஎம்-கிசான் திட்டத்தின் கீழ் தகுதியான விவசாயிகளுக்கு ஆண்டுதோறும் எவ்வளவு நிதியுதவி வழங்கப்படுகிறது?",
      hi: "पीएम-किसान सम्मान निधि योजना के तहत किसानों को साल में कुल कितने रुपये मिलते हैं?"
    },
    options: [
      { id: "a", text: { en: "₹6,000 per year (3 installments of ₹2,000) ✅", ta: "ஆண்டுக்கு ₹6,000 (தலா ₹2,000 என 3 தவணைகள்) ✅", hi: "साल के ₹6,000 (2000 रुपये की 3 किस्तें) ✅" } },
      { id: "b", text: { en: "₹50,000 one time", ta: "ஒரே முறையில் ₹50,000", hi: "एक बार में ₹50,000" } },
      { id: "c", text: { en: "₹500 per month", ta: "மாதத்திற்கு ₹500", hi: "₹500 हर महीने" } }
    ],
    answer: "a",
    explanation: {
      en: "Eligible landholding farmer families receive ₹6,000 every year directly into their bank accounts in 3 equal installments of ₹2,000.",
      ta: "விவசாயிகளுக்கு தலா ₹2,000 வீதம் மூன்று தவணைகளாக ஆண்டுக்கு ₹6,000 நேரடியாக வங்கிக் கணக்கில் வழங்கப்படுகிறது.",
      hi: "पीएम किसान योजना में साल में 2000-2000 रुपये की तीन किस्तें सीधे बैंक खाते में भेजी जाती हैं।"
    }
  },
  {
    id: "q15",
    category: "internet",
    icon: "📦",
    question: {
      en: "A stranger on WhatsApp sends you a file named 'Kisan_Yojna_Bonus.apk'. Should you open and install it?",
      ta: "வாட்ஸ்அப்பில் ஒருவர் 'Kisan_Yojna.apk' என்ற கோப்பை அனுப்புகிறார். அதைத் திறந்து நிறுவ வேண்டுமா?",
      hi: "वॉट्सऐप पर कोई 'Kisan_Bonus.apk' नाम की फाइल भेजे तो क्या आपको उसे इंस्टॉल करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Yes, open it immediately", ta: "ஆம், உடனே திறக்கவும்", hi: "हां, तुरंत खोलें" } },
      { id: "b", text: { en: "NO! Files ending in .apk from chat messages are dangerous spyware/viruses ✅", ta: "கூடாது! வாட்ஸ்அப்பில் வரும் .apk கோப்புகள் ஆபத்தான வைரஸ்கள் ✅", hi: "बिल्कुल नहीं! चैट पर आने वाली .apk फाइल खतरनाक वायरस होती है ✅" } },
      { id: "c", text: { en: "Install it on family members' phones too", ta: "குடும்பத்தினரின் போன்களிலும் நிறுவுங்கள்", hi: "घर के बाकी फोन में भी डालें" } }
    ],
    answer: "b",
    explanation: {
      en: ".apk files downloaded outside Google Play Store can hijack your phone and read your SMS and bank OTPs.",
      ta: "ப்ளே ஸ்டோரைத் தவிர்த்து பதிவிறக்கப்படும் .apk கோப்புகள் உங்கள் போனை முடக்கி OTP-களை திருடக்கூடும்.",
      hi: "प्ले स्टोर के बाहर से आने वाली .apk फाइलें आपका फोन हैक करके बैंक के सारे मैसेज पढ़ सकती हैं।"
    }
  },
  {
    id: "q16",
    category: "ai",
    icon: "🔍",
    question: {
      en: "Which free tool lets you point your camera at English text and instantly read it translated in Tamil or Hindi?",
      ta: "கேமராவை ஆங்கில உரை மீது பிடித்து உடனடியாக தமிழ் அல்லது இந்தியில் மொழிபெயர்த்து படிக்க உதவும் இலவச கருவி எது?",
      hi: "कैमरा अंग्रेजी बोर्ड पर रखकर उसे तुरंत हिंदी या क्षेत्रीय भाषा में बदलने वाला मुफ्त टूल कौन सा है?"
    },
    options: [
      { id: "a", text: { en: "Google Lens ✅", ta: "கூகுள் லென்ஸ் (Google Lens) ✅", hi: "गूगल लेंस (Google Lens) ✅" } },
      { id: "b", text: { en: "Calculator", ta: "கால்குலேட்டர்", hi: "कैलकुलेटर" } },
      { id: "c", text: { en: "Clock", ta: "கடிகாரம்", hi: "घड़ी ऐप" } }
    ],
    answer: "a",
    explanation: {
      en: "Google Lens uses visual AI to detect words through your camera lens and replace them with your local language.",
      ta: "கூகுள் லென்ஸ் கேமரா மூலம் எழுத்துக்களைக் கண்டறிந்து உங்கள் உள்ளூர் மொழியில் மாற்றுகிறது.",
      hi: "गूगल लेंस कैमरे के जरिए अक्षरों को पहचानकर तुरंत आपकी भाषा में अनुवाद कर देता है।"
    }
  },
  {
    id: "q17",
    category: "smartphone",
    icon: "🔒",
    question: {
      en: "Which of these is the SAFEST screen lock PIN for your smartphone?",
      ta: "உங்கள் போனுக்கு இவற்றில் எது பாதுகாப்பான திரை பூட்டு பின் ஆகும்?",
      hi: "आपके स्मार्टफोन के लिए इनमें से सबसे सुरक्षित स्क्रीन लॉक पिन कौन सा है?"
    },
    options: [
      { id: "a", text: { en: "1234 or 0000", ta: "1234 அல்லது 0000", hi: "1234 या 0000" } },
      { id: "b", text: { en: "Your birth year like 1985", ta: "உங்கள் பிறந்த ஆண்டு 1985", hi: "अपना जन्म वर्ष जैसे 1985" } },
      { id: "c", text: { en: "A random 4-digit number known only to you (e.g. 7392) ✅", ta: "உங்களுக்கு மட்டுமே தெரிந்த ஒரு சீரற்ற 4 இலக்க எண் (எ.கா. 7392) ✅", hi: "कोई भी 4 अंकों का गुप्त नंबर जो केवल आपको पता हो (जैसे 7392) ✅" } }
    ],
    answer: "c",
    explanation: {
      en: "Never use easy numbers like 1234, 0000, or birth years that anyone in your village can easily guess.",
      ta: "1234, 0000 அல்லது பிறந்த ஆண்டு போன்ற எளிதில் யூகிக்கக்கூடிய எண்களை ஒருபோதும் பயன்படுத்த வேண்டாம்.",
      hi: "1234, 0000 या जन्म वर्ष जैसे आसान नंबर कोई भी आसानी से पहचान लेता है। हमेशा अलग नंबर रखें।"
    }
  },
  {
    id: "q18",
    category: "business",
    icon: "📒",
    question: {
      en: "Why is a digital mobile khata better than maintaining paper notebooks for shop credit?",
      ta: "கடை கடனுக்கு காகித நோட்டுகளை விட டிஜிட்டல் மொபைல் கணக்கு ஏன் சிறந்தது?",
      hi: "दुकान के उधार के लिए कागज की बही से बेहतर डिजिटल खाता ऐप क्यों है?"
    },
    options: [
      { id: "a", text: { en: "It never tears, backs up safely, and sends polite WhatsApp reminders ✅", ta: "இது கிழியாது, பாதுகாப்பாக இருக்கும், வாட்ஸ்அப் நினைவூட்டல்களை அனுப்பும் ✅", hi: "यह कभी फटता नहीं, हमेशा सुरक्षित रहता है और वॉट्सऐप पर हिसाब भेज देता है ✅" } },
      { id: "b", text: { en: "It gives free money to customers", ta: "இது வாடிக்கையாளர்களுக்கு இலவச பணம் தருகிறது", hi: "यह ग्राहकों को मुफ्त में पैसे देता है" } },
      { id: "c", text: { en: "Paper is always better", ta: "காகிதமே எப்போதும் சிறந்தது", hi: "कागज ही हमेशा अच्छा होता है" } }
    ],
    answer: "a",
    explanation: {
      en: "Paper registers get lost, damaged by rain or pests, and cannot calculate totals or send automatic payment reminders.",
      ta: "காகித பதிவேடுகள் தொலைந்து போகலாம், மழையில் சேதமடையலாம், தானியங்கி நினைவூட்டல்களை அனுப்ப முடியாது.",
      hi: "कागज के रजिस्टर भीगकर खराब हो जाते हैं। डिजिटल खाता कभी खोता नहीं और हिसाब जोड़कर रखता है।"
    }
  },
  {
    id: "q19",
    category: "safety",
    icon: "📱",
    question: {
      en: "A caller claims your son was arrested in an accident and demands ₹25,000 on GPay to release him. What should you do?",
      ta: "உங்கள் மகன் விபத்தில் சிக்கியதாக கூறி அவரை விடுவிக்க ₹25,000 கேட்கும் மர்ம அழைப்பிற்கு என்ன செய்ய வேண்டும்?",
      hi: "कॉल पर कोई कहे कि आपका बेटा पुलिस केस में फंस गया है और उसे छुड़ाने के लिए 25 हजार फोनपे करो। क्या करें?"
    },
    options: [
      { id: "a", text: { en: "Panic and send money immediately", ta: "பயந்து உடனே பணம் அனுப்புங்கள்", hi: "घबराकर तुरंत पैसे भेज दें" } },
      { id: "b", text: { en: "Hang up, breathe, and call your son's actual phone number directly to verify! ✅", ta: "அழைப்பை துண்டித்து, உங்கள் மகனின் எண்ணை நேரடியாக அழைத்து விசாரியுங்கள்! ✅", hi: "फोन काटें और सीधे अपने बेटे के खुद के नंबर पर कॉल करके सच जानें! ✅" } },
      { id: "c", text: { en: "Send ₹50,000 instead", ta: "மாறாக ₹50,000 அனுப்புங்கள்", hi: "50 हजार रुपये भेजें" } }
    ],
    answer: "b",
    explanation: {
      en: "This is the classic 'Digital Arrest / Family Emergency' extortion scam. Scammers fake voices and create panic. Always verify directly.",
      ta: "இது பயமுறுத்தி பணம் பறிக்கும் மோசடி. எப்போதும் உங்கள் குடும்பத்தினரின் சொந்த எண்ணை நேரடியாக அழைத்து உறுதிப்படுத்தவும்.",
      hi: "यह डर दिखाकर पैसे ऐंठने वाला फर्जी कॉल है। तुरंत अपने बेटे या उसके दोस्तों से फोन पर बात करें।"
    }
  },
  {
    id: "q20",
    category: "maps",
    icon: "🔊",
    question: {
      en: "While riding a motorcycle, how should you use Google Maps navigation safely?",
      ta: "இருசக்கர வாகனம் ஓட்டும் போது கூகுள் மேப்ஸை எவ்வாறு பாதுகாப்பாகப் பயன்படுத்துவது?",
      hi: "मोटरसाइकिल चलाते समय गूगल मैप्स का सुरक्षित उपयोग कैसे करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Hold the phone in your right hand while riding", ta: "வண்டி ஓட்டும் போது போனை வலது கையில் பிடித்துக் கொள்ளுங்கள்", hi: "गाड़ी चलाते समय हाथ में फोन पकड़कर स्क्रीन देखें" } },
      { id: "b", text: { en: "Turn ON voice guidance so you can listen without looking at the screen ✅", ta: "திரையைப் பார்க்காமல் கேட்க குரல் வழிகாட்டியை ஆன் செய்யுங்கள் ✅", hi: "वॉयस नेविगेशन चालू रखें ताकि बिना स्क्रीन देखे सिर्फ आवाज सुनकर रास्ता मिले ✅" } },
      { id: "c", text: { en: "Close your eyes", ta: "கண்களை மூடிக் கொள்ளுங்கள்", hi: "आंखें बंद कर लें" } }
    ],
    answer: "b",
    explanation: {
      en: "Voice directions tell you every turn in advance so your hands stay on the handle and eyes on the road.",
      ta: "குரல் வழிகாட்டுதல் முன்கூட்டியே வழியைச் சொல்வதால் விபத்துகளைத் தவிர்க்கலாம்.",
      hi: "बोलकर रास्ता बताने वाले फीचर से आपका ध्यान सड़क पर रहता है और दुर्घटना का खतरा नहीं होता।"
    }
  },
  {
    id: "q21",
    category: "communication",
    icon: "🛑",
    question: {
      en: "You see a message on WhatsApp claiming: 'Child lifters are visiting our district tonight, beat any stranger on sight!'. What should you do?",
      ta: "வாட்ஸ்அப்பில் 'குழந்தை கடத்துபவர்கள் கிராமத்திற்கு வருகிறார்கள், யாரையும் அடியுங்கள்' என்று வதந்தி வந்தால் என்ன செய்ய வேண்டும்?",
      hi: "वॉट्सऐप पर अफवाह आए कि 'गांव में बच्चा चोर घूम रहे हैं, किसी भी अजनबी को पीटो'। आपको क्या करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "DO NOT forward! Report rumors to local police and do not harm innocent people ✅", ta: "பகிர வேண்டாம்! வதந்திகளை காவல்துறையிடம் தெரிவியுங்கள் ✅", hi: "आगे बिल्कुल न भेजें! पुलिस को बताएं और किसी बेकसूर को नुकसान न पहुंचाएं ✅" } },
      { id: "b", text: { en: "Forward immediately to 20 groups", ta: "உடனடியாக 20 குழுக்களுக்கு பகிருங்கள்", hi: "तुरंत 20 ग्रुपों में फॉरवर्ड करें" } },
      { id: "c", text: { en: "Gather a mob with sticks", ta: "தடிகளுடன் கூட்டத்தைக் கூட்டுங்கள்", hi: "लाठी लेकर भीड़ इकट्ठी करें" } }
    ],
    answer: "a",
    explanation: {
      en: "False rumors have tragically harmed innocent visitors. Breaking the chain saves innocent lives.",
      ta: "பொய்யான வதந்திகள் அப்பாவிகளை பாதிக்கின்றன. வதந்திகளைப் பகிர்வதை நிறுத்துங்கள்.",
      hi: "ऐसी झूठी अफवाहों से निर्दोष लोगों की जान खतरे में पड़ जाती है। ऐसी अफवाह को कभी आगे न बढ़ाएं।"
    }
  },
  {
    id: "q22",
    category: "payments",
    icon: "💵",
    question: {
      en: "What happens if a UPI payment shows 'Pending' or fails at a petrol pump or shop?",
      ta: "பெட்ரோல் பங்க் அல்லது கடையில் UPI கட்டணம் 'Pending' என்று காட்டினால் என்ன செய்வது?",
      hi: "दुकान या पेट्रोल पंप पर अगर यूपीआई पेमेंट 'पेंडिंग' दिखाए तो क्या करना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Immediately pay 4 more times quickly", ta: "உடனடியாக மேலும் 4 முறை பணம் செலுத்துங்கள்", hi: "तुरंत 4 बार दोबारा पैसे भेजें" } },
      { id: "b", text: { en: "Wait 5 minutes and check your bank balance and SMS before paying again ✅", ta: "மீண்டும் செலுத்தும் முன் 5 நிமிடங்கள் காத்திருந்து வங்கி SMS-ஐ சரிபார்க்கவும் ✅", hi: "5 मिनट रुकें, अपना बैंक मैसेज और बैलेंस चेक करें, फिर निर्णय लें ✅" } },
      { id: "c", text: { en: "Throw the phone away", ta: "போனை தூக்கி எறியுங்கள்", hi: "फोन फेंक दें" } }
    ],
    answer: "b",
    explanation: {
      en: "Network delays cause pending status. Paying repeatedly often causes multiple deductions from your account.",
      ta: "நெட்வொர்க் தாமதம் காரணமாக 'Pending' வரலாம். மீண்டும் மீண்டும் செலுத்தினால் பலமுறை பணம் கழிந்துவிடும்.",
      hi: "नेटवर्क धीमा होने से कई बार पेंडिंग दिखता है। बार-बार भेजने पर खाते से कई बार पैसे कट जाते हैं।"
    }
  },
  {
    id: "q23",
    category: "government",
    icon: "🍚",
    question: {
      en: "Can the local ration shop dealer demand ₹50 per person for PMGKAY free food grains?",
      ta: "ரேஷன் கடைக்காரர் இலவச உணவு தானியங்களுக்கு ஒரு நபருக்கு ₹50 கேட்க முடியுமா?",
      hi: "क्या कोटेदार मुफ्त राशन योजना (PMGKAY) के गेहूं-चावल के बदले पैसे मांग सकता है?"
    },
    options: [
      { id: "a", text: { en: "No! PMGKAY grains are 100% free by Government mandate ✅", ta: "முடியாது! அரசு விதிகளின்படி இது 100% இலவசம் ✅", hi: "बिल्कुल नहीं! सरकारी नियमों के अनुसार यह खाद्यान्न 100% मुफ्त है ✅" } },
      { id: "b", text: { en: "Yes, it is their personal fee", ta: "ஆம், அது அவர்களின் கட்டணம்", hi: "हां, यह उनका निजी हक है" } },
      { id: "c", text: { en: "Only on festival days", ta: "பண்டிகை நாட்களில் மட்டுமே", hi: "केवल त्योहार के दिन" } }
    ],
    answer: "a",
    explanation: {
      en: "Central government food grain under PMGKAY is completely free. Complaints can be filed on toll-free 1967.",
      ta: "அரசு தானியங்கள் முற்றிலும் இலவசம். புகார்களுக்கு 1967 என்ற எண்ணை அழைக்கலாம்.",
      hi: "प्रधानमंत्री गरीब कल्याण अन्न योजना के तहत अनाज पूरी तरह मुफ्त है। शिकायत के लिए 1967 पर कॉल करें।"
    }
  },
  {
    id: "q24",
    category: "farmer",
    icon: "🌱",
    question: {
      en: "When buying certified crop seeds, what color tag should you look for on the bag?",
      ta: "சான்றளிக்கப்பட்ட விதைகளை வாங்கும் போது பையில் என்ன நிறக் குறியைப் பார்க்க வேண்டும்?",
      hi: "प्रमाणित (सर्टिफाइड) बीज खरीदते समय बोरी पर किस रंग का सरकारी टैग होना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Blue tag with official purity & germination stamp ✅", ta: "அரசு முத்திரையுடன் கூடிய நீல நிறக் குறி ✅", hi: "नीले रंग का सरकारी टैग जिस पर शुद्धता और अंकुरण लिखा हो ✅" } },
      { id: "b", text: { en: "Plain blank paper with handwritten pencil marks", ta: "பென்சிலால் எழுதப்பட்ட வெற்று காகிதம்", hi: "पेंसिल से लिखा सादा कागज" } },
      { id: "c", text: { en: "No tag is needed at all", ta: "எந்த குறியும் தேவையில்லை", hi: "किसी टैग की जरूरत नहीं होती" } }
    ],
    answer: "a",
    explanation: {
      en: "Certified seeds recognized by the National Seeds Corporation carry a blue tag detailing genetic purity and germination %.",
      ta: "சான்றளிக்கப்பட்ட விதைகள் மரபணு தூய்மை மற்றும் முளைப்புத்திறன் விவரங்களுடன் நீல நிறக் குறியைக் கொண்டிருக்கும்.",
      hi: "राष्ट्रीय बीज निगम के प्रमाणित बीज की बोरी पर हमेशा नीले रंग का अधिकृत टैग लगा होता है।"
    }
  },
  {
    id: "q25",
    category: "safety",
    icon: "📶",
    question: {
      en: "Why is it unsafe to open your banking app on free open Wi-Fi at a bus stop or railway station?",
      ta: "பேருந்து அல்லது ரயில் நிலைய இலவச வைஃபையில் வங்கி செயலியைப் பயன்படுத்துவது ஏன் பாதுகாப்பற்றது?",
      hi: "बस स्टैंड या रेलवे स्टेशन के फ्री वाई-फाई पर बैंक ऐप खोलना खतरनाक क्यों हो सकता है?"
    },
    options: [
      { id: "a", text: { en: "Anyone on the same open network might intercept unencrypted data ✅", ta: "அதே நெட்வொர்க்கில் உள்ள எவரும் தரவை இடைமறிக்க வாய்ப்புள்ளது ✅", hi: "उसी नेटवर्क से जुड़ा कोई भी व्यक्ति आपके डेटा पर नजर रख सकता है ✅" } },
      { id: "b", text: { en: "It makes the phone screen cracked", ta: "இது போன் திரையை உடைத்துவிடும்", hi: "इससे फोन की स्क्रीन टूट जाती है" } },
      { id: "c", text: { en: "Free Wi-Fi uses up your phone storage", ta: "இது போன் சேமிப்பகத்தை நிரப்பும்", hi: "यह फोन की मेमोरी भर देता है" } }
    ],
    answer: "a",
    explanation: {
      en: "Public open Wi-Fi networks lack private security. Always use your personal SIM 4G/5G data for financial transactions.",
      ta: "பொது வைஃபையில் பாதுகாப்பு குறைவு. பண பரிவர்த்தனைகளுக்கு உங்கள் சிம் டேட்டாவைப் பயன்படுத்துங்கள்.",
      hi: "सार्वजनिक वाई-फाई पूरी तरह सुरक्षित नहीं होते। बैंक और पैसों के काम हमेशा अपने सिम डेटा से करें।"
    }
  },
  {
    id: "q26",
    category: "ai",
    icon: "🗣️",
    question: {
      en: "What happens when you speak to Google Voice Assistant on your phone?",
      ta: "உங்கள் போனில் கூகுள் குரல் உதவியாளரிடம் பேசும்போது என்ன நடக்கும்?",
      hi: "फोन में गूगल वॉयस असिस्टेंट से बोलने पर क्या होता है?"
    },
    options: [
      { id: "a", text: { en: "It understands your spoken words and can set alarms, play songs, or make calls ✅", ta: "இது உங்கள் வார்த்தைகளைப் புரிந்து கொண்டு அலாரம் வைக்கும், அழைப்புகளைச் செய்யும் ✅", hi: "यह आपकी बात समझकर अलार्म लगा सकता है, गाने बजा सकता है या फोन मिला सकता है ✅" } },
      { id: "b", text: { en: "It immediately deletes all your contacts", ta: "இது உங்கள் தொடர்புகளை நீக்கிவிடும்", hi: "यह सारे फोन नंबर डिलीट कर देता है" } },
      { id: "c", text: { en: "Nothing happens", ta: "எதுவும் நடக்காது", hi: "कुछ भी नहीं होता" } }
    ],
    answer: "a",
    explanation: {
      en: "Voice assistants make smartphones effortless for people who cannot read or type in English.",
      ta: "ஆங்கிலத்தில் படிக்கவோ தட்டச்சு செய்யவோ முடியாதவர்களுக்கு குரல் உதவியாளர்கள் போனை எளிதாக்குகின்றன.",
      hi: "वॉयस असिस्टेंट से वो लोग भी आसानी से फोन चला सकते हैं जो अंग्रेजी पढ़ना या लिखना नहीं जानते।"
    }
  },
  {
    id: "q27",
    category: "smartphone",
    icon: "☀️",
    question: {
      en: "When working outdoors in bright afternoon sunlight, you cannot see your screen. What should you adjust?",
      ta: "மதிய வெயிலில் வேலை செய்யும் போது திரை தெரியவில்லை. நீங்கள் எதை சரிசெய்ய வேண்டும்?",
      hi: "दोपहर की तेज धूप में स्क्रीन पर कुछ दिखाई नहीं दे रहा। क्या बढ़ाना चाहिए?"
    },
    options: [
      { id: "a", text: { en: "Increase screen brightness (drag the sun icon right) ✅", ta: "திரை வெளிச்சத்தை அதிகரிக்கவும் (சூரியன் ஐகானை வலதுபுறம் நகர்த்தவும்) ✅", hi: "स्क्रीन की ब्राइटनेस बढ़ाएं (सूरज वाले स्लाइडर को दाईं तरफ खिसकाएं) ✅" } },
      { id: "b", text: { en: "Pour water on the screen", ta: "திரையில் தண்ணீர் ஊற்றுங்கள்", hi: "स्क्रीन पर पानी डाल दें" } },
      { id: "c", text: { en: "Increase ringtone volume", ta: "ரிங்டோன் ஒலியை அதிகரிக்கவும்", hi: "रिंगटोन की आवाज बढ़ाएं" } }
    ],
    answer: "a",
    explanation: {
      en: "Sliding brightness up makes the screen readable under direct sunlight. Turn it back down indoors to save battery.",
      ta: "வெளிச்சத்தை அதிகரிப்பது வெயிலில் திரையைத் தெளிவாகக் காட்டும். உள்ளே வந்ததும் பேட்டரியைச் சேமிக்க குறைக்கவும்.",
      hi: "धूप में ब्राइटनेस बढ़ाने से स्क्रीन साफ दिखने लगती है। अंदर आने पर बैटरी बचाने के लिए कम कर लें।"
    }
  },
  {
    id: "q28",
    category: "safety",
    icon: "⚙️",
    question: {
      en: "A newly installed flashlight or calculator app asks for permission to access your Contacts and Photos. What should you do?",
      ta: "ஒரு டார்ச் செயலி உங்கள் தொடர்புகள் மற்றும் புகைப்படங்களை அணுக அனுமதி கேட்டால் என்ன செய்ய வேண்டும்?",
      hi: "एक टॉर्च या कैलकुलेटर ऐप आपके कॉन्टैक्ट और फोटो देखने की परमिशन मांग रही है। क्या करें?"
    },
    options: [
      { id: "a", text: { en: "Deny permission (Don't Allow)! A flashlight never needs to see your photos ✅", ta: "அனுமதிக்க வேண்டாம்! டார்ச் செயலிக்கு புகைப்படங்கள் தேவையில்லை ✅", hi: "मना करें (Don't Allow)! टॉर्च ऐप को फोटो या फोन नंबर की कोई जरूरत नहीं होती ✅" } },
      { id: "b", text: { en: "Allow everything always", ta: "எப்போதும் அனைத்தையும் அனுமதிக்கவும்", hi: "सब कुछ हमेशा के लिए अनुमति दें" } },
      { id: "c", text: { en: "Give your ATM card to the phone", ta: "போனிடம் ஏடிஎம் கார்டை கொடுங்கள்", hi: "फोन को एटीएम कार्ड दे दें" } }
    ],
    answer: "a",
    explanation: {
      en: "Suspicious apps harvest personal photos and contacts to blackmail users. Always reject unnecessary permissions.",
      ta: "சந்தேகத்திற்கிடமான செயலிகள் தனிப்பட்ட தகவல்களைத் திருடக்கூடும். தேவையற்ற அனுமதிகளை மறுக்கவும்.",
      hi: "गलत ऐप्स फोटो चुराने के लिए ऐसी परमिशन मांगती हैं। बिना काम की परमिशन को हमेशा मना कर दें।"
    }
  },
  {
    id: "q29",
    category: "business",
    icon: "📸",
    question: {
      en: "Before photographing sarees, honey, or crafts to sell on WhatsApp, what is the most important step?",
      ta: "வாட்ஸ்அப்பில் விற்க புடவைகள் அல்லது கைவினைப் பொருட்களை படம் எடுக்கும் முன் மிக முக்கியமான படி எது?",
      hi: "वॉट्सऐप पर सामान बेचने के लिए फोटो खींचने से पहले सबसे जरूरी काम क्या है?"
    },
    options: [
      { id: "a", text: { en: "Wipe camera lens with a soft cloth and use bright daylight ✅", ta: "கேமரா லென்ஸை துடைத்து நல்ல பகல் வெளிச்சத்தைப் பயன்படுத்தவும் ✅", hi: "कैमरे के शीशे को साफ कपड़े से पोंछें और दिन की अच्छी रोशनी में फोटो लें ✅" } },
      { id: "b", text: { en: "Take photo in a pitch black room", ta: "இருண்ட அறையில் படம் எடுங்கள்", hi: "अंधेरे कमरे में फोटो लें" } },
      { id: "c", text: { en: "Shake your hands rapidly while shooting", ta: "படம் எடுக்கும் போது கைகளை வேகமாக அசைக்கவும்", hi: "फोटो खींचते समय हाथ हिलाते रहें" } }
    ],
    answer: "a",
    explanation: {
      en: "Clean lenses and natural light produce sharp, honest product photos that build buyer trust and increase sales.",
      ta: "சுத்தமான லென்ஸ் மற்றும் நல்ல வெளிச்சம் வாடிக்கையாளர் நம்பிக்கையை அதிகரிக்கும் சிறந்த படங்களைத் தரும்.",
      hi: "साफ लेंस और अच्छी रोशनी से सामान की चमक और असली रंग दिखता है जिससे बिक्री बढ़ती है।"
    }
  },
  {
    id: "q30",
    category: "government",
    icon: "🏥",
    question: {
      en: "Under the Ayushman Bharat PM-JAY scheme, how much free health coverage is provided per eligible family each year?",
      ta: "ஆயுஷ்மான் பாரத் திட்டத்தின் கீழ் ஒரு குடும்பத்திற்கு ஆண்டுதோறும் எவ்வளவு இலவச மருத்துவக் காப்பீடு வழங்கப்படுகிறது?",
      hi: "आयुष्मान भारत योजना के तहत पात्र परिवार को हर साल कितने रुपये तक का मुफ्त इलाज मिलता है?"
    },
    options: [
      { id: "a", text: { en: "Up to ₹5 Lakhs per family per year ✅", ta: "ஒரு குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை ✅", hi: "हर साल ₹5 लाख तक का मुफ्त इलाज प्रति परिवार ✅" } },
      { id: "b", text: { en: "Only ₹5,000", ta: "₹5,000 மட்டுமே", hi: "केवल ₹5,000" } },
      { id: "c", text: { en: "Free food only", ta: "இலவச உணவு மட்டுமே", hi: "सिर्फ खाना" } }
    ],
    answer: "a",
    explanation: {
      en: "Ayushman Bharat PM-JAY offers cash-free hospitalization up to ₹5,00,000 per family per year across India.",
      ta: "ஆயுஷ்மான் பாரத் திட்டம் இந்தியா முழுவதும் ஒரு குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் வரை பணமில்லா மருத்துவமனைக் காப்பீட்டை வழங்குகிறது.",
      hi: "आयुष्मान भारत योजना में पूरे देश के सरकारी और चुने हुए प्राइवेट अस्पतालों में ₹5 लाख तक का कैशलेस इलाज मिलता है।"
    }
  }
];
