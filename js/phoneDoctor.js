// GramaGuide — "Phone Doctor" Visual Troubleshooter
// Interactive visual decision tree for 7 common rural smartphone challenges

window.GramaDoctor = (function() {
  const ISSUES = [
    {
      id: "doc_net",
      icon: "📶",
      title: {
        en: "No Internet or Wi-Fi",
        ta: "இணையம் அல்லது வைஃபை வேலை செய்யவில்லை",
        hi: "इंटरनेट या वाई-फाई नहीं चल रहा"
      },
      steps: [
        {
          question: {
            en: "Step 1: Is Mobile Data or Wi-Fi turned ON?",
            ta: "படி 1: மொபைல் டேட்டா அல்லது வைஃபை ஆன் செய்யப்பட்டுள்ளதா?",
            hi: "पहला कदम: क्या मोबाइल डेटा या वाई-फाई चालू है?"
          },
          visual: "📶",
          instruction: {
            en: "Swipe down from the top of your screen. Look for the two vertical arrows (Data) or fan symbol (Wi-Fi). Tap it so it turns BLUE/GREEN.",
            ta: "திரையின் மேலிருந்து கீழே இழுக்கவும். இரு அம்புக்குறி (டேட்டா) அல்லது விசிறி சின்னத்தை (வைஃபை) தொட்டு ஆன் செய்யவும்.",
            hi: "स्क्रीन को ऊपर से नीचे खींचें। दो तीर (डेटा) या पंखे वाले निशान को दबाकर चालू करें।"
          }
        },
        {
          question: {
            en: "Step 2: Still no signal? Try 'Aeroplane Mode' Reset",
            ta: "படி 2: இன்னும் சிக்னல் இல்லையா? ஏரோப்ளேன் மோடை ஆன் செய்து ஆஃப் செய்யவும்",
            hi: "दूसरा कदम: अभी भी नेटवर्क नहीं? 'एरोप्लेन मोड' चालू करके बंद करें"
          },
          visual: "✈️",
          instruction: {
            en: "Tap the Aeroplane ✈️ icon. Wait 10 seconds. Tap it again to turn OFF. This reconnects your phone to the nearest village mobile tower.",
            ta: "விமானம் ✈️ ஐகானைத் தொடவும். 10 வினாடிகள் காத்திருக்கவும். மீண்டும் அதை அணைக்கவும். இது அருகில் உள்ள டவருடன் இணைக்கும்.",
            hi: "हवाई जहाज ✈️ वाले निशान को दबाएं। 10 सेकंड रुकें। फिर उसे बंद कर दें। इससे फोन दोबारा टावर पकड़ लेता है।"
          }
        },
        {
          question: {
            en: "Step 3: Check your SIM recharge balance",
            ta: "படி 3: உங்கள் சிம் கார்டு ரீசார்ஜ் காலாவதியாகிவிட்டதா எனப் பார்க்கவும்",
            hi: "तीसरा कदम: चेक करें कि कहीं सिम का रिचार्ज खत्म तो नहीं हो गया"
          },
          visual: "💳",
          instruction: {
            en: "Dial *121# (Airtel) or open MyJio/Vi app to see if your 1.5GB daily data limit was fully used up by videos today.",
            ta: "*121# டயல் செய்து உங்கள் தினசரி 1.5GB டேட்டா தீர்ந்துவிட்டதா என சரிபார்க்கவும்.",
            hi: "जांचें कि क्या आज का 1.5GB डेटा वीडियो देखने में पहले ही खत्म हो गया है।"
          }
        }
      ]
    },
    {
      id: "doc_battery",
      icon: "🔋",
      title: {
        en: "Battery Drains Too Fast",
        ta: "பேட்டரி மிக வேகமாக குறைகிறது",
        hi: "बैटरी बहुत जल्दी खत्म होती है"
      },
      steps: [
        {
          question: {
            en: "Step 1: Lower screen brightness",
            ta: "படி 1: திரை வெளிச்சத்தை சற்று குறைக்கவும்",
            hi: "पहला कदम: स्क्रीन की ब्राइटनेस कम करें"
          },
          visual: "☀️",
          instruction: {
            en: "The bright screen uses 60% of your battery. Pull down top bar and slide the sun slider left to save 4 extra hours.",
            ta: "திரை வெளிச்சம் 60% பேட்டரியைப் பயன்படுத்துகிறது. சூரியன் ஸ்லைடரை இடதுபுறம் நகர்த்தவும்.",
            hi: "स्क्रीन सबसे ज्यादा बैटरी खाती है। सूरज वाले स्लाइडर को थोड़ा बाईं तरफ रखें।"
          }
        },
        {
          question: {
            en: "Step 2: Turn OFF Location / GPS when not traveling",
            ta: "படி 2: பயணம் செய்யாத போது GPS லொகேஷனை அணைக்கவும்",
            hi: "दूसरा कदम: बिना जरूरत के जीपीएस (लोकेशन) बंद रखें"
          },
          visual: "📍",
          instruction: {
            en: "Swipe down and turn off the Location map pin icon. GPS constantly searches for satellites and heats up your battery.",
            ta: "மேலிருந்து கீழே இழுத்து Location ஐகானை அணைக்கவும்.",
            hi: "लोकेशन वाले निशान को बंद कर दें। यह लगातार उपग्रह से जुड़ने में बैटरी खर्च करता है।"
          }
        }
      ]
    },
    {
      id: "doc_sound",
      icon: "🔊",
      title: {
        en: "No Sound or Cannot Hear Caller",
        ta: "ஒலி கேட்கவில்லை / அழைப்பாளர் பேச்சு கேட்கவில்லை",
        hi: "आवाज नहीं आ रही / सुनाई नहीं दे रहा"
      },
      steps: [
        {
          question: {
            en: "Step 1: Check Side Volume Buttons",
            ta: "படி 1: பக்கவாட்டு ஒலி பொத்தான்களை அழுத்தவும்",
            hi: "पहला कदम: साइड वाले वॉल्यूम बटन दबाएं"
          },
          visual: "🔉",
          instruction: {
            en: "Press the UPPER side volume button multiple times until the blue sound bar is at maximum level.",
            ta: "மேல் பக்கவாட்டு ஒலி பொத்தானை அழுத்தி ஒலியை முழு அளவிற்கு உயர்த்தவும்.",
            hi: "फोन के साइड में ऊपर वाला बटन 4-5 बार दबाकर आवाज पूरी तेज करें।"
          }
        },
        {
          question: {
            en: "Step 2: Check if 'Silent' or 'Do Not Disturb' is ON",
            ta: "படி 2: 'சைலண்ட்' அல்லது 'டூ நாட் டிஸ்டர்ப்' இயக்கப்பட்டுள்ளதா எனப் பார்க்கவும்",
            hi: "दूसरा कदम: देखें कि फोन साइलेंट पर तो नहीं लगा है"
          },
          visual: "🔕",
          instruction: {
            en: "Swipe down from top. Look for a bell with a slash 🔕 or crescent moon 🌙. Tap it to return to normal Ringing mode.",
            ta: "கோடிட்ட மணி சின்னம் 🔕 உள்ளதா எனப் பார்த்து இயல்பு நிலைக்கு மாற்றவும்.",
            hi: "घंटी पर कट का निशान 🔕 या चांद 🌙 दिखे तो उसे दबाकर सामान्य रिंगटोन पर लाएं।"
          }
        }
      ]
    },
    {
      id: "doc_slow",
      icon: "📱",
      title: {
        en: "Phone is Slow or Freezing",
        ta: "போன் மெதுவாக இயங்குகிறது அல்லது ஹேங் ஆகிறது",
        hi: "फोन धीमा चल रहा है या हैंग हो रहा है"
      },
      steps: [
        {
          question: {
            en: "Step 1: The Magic Fix — Restart Your Phone!",
            ta: "படி 1: சிறந்த தீர்வு — போனை ரீஸ்டார்ட் செய்யுங்கள்!",
            hi: "पहला कदम: जादुई उपाय — फोन को रीस्टार्ट (बंद करके चालू) करें!"
          },
          visual: "🔄",
          instruction: {
            en: "Press and hold the power button for 4 seconds. Tap 'Restart' (Green icon). This clears clogged memory like washing your face in the morning.",
            ta: "பவர் பொத்தானை 4 வினாடிகள் அழுத்திப் பிடித்து 'Restart' என்பதைத் தொடவும்.",
            hi: "पावर बटन को 4 सेकंड दबाकर रखें और 'रीस्टार्ट' चुनें। इससे रुका हुआ फोन फिर तेज हो जाता है।"
          }
        },
        {
          question: {
            en: "Step 2: Close All Open Apps",
            ta: "படி 2: திறந்திருக்கும் அனைத்து செயலிகளையும் மூடவும்",
            hi: "दूसरा कदम: पीछे खुली सारी ऐप बंद करें"
          },
          visual: "⏹️",
          instruction: {
            en: "Tap the square or 3 lines button at bottom of screen. Tap 'Clear All' or 'Close All'.",
            ta: "கீழே உள்ள சதுர பொத்தானைத் தொட்டு 'Clear All' என்பதைத் தொடவும்.",
            hi: "नीचे चौकोर या तीन लाइनों वाला बटन दबाकर 'Clear All' दबा दें।"
          }
        }
      ]
    },
    {
      id: "doc_storage",
      icon: "💾",
      title: {
        en: "Storage Full / Cannot Download",
        ta: "சேமிப்பகம் நிரம்பிவிட்டது (Storage Full)",
        hi: "मेमोरी फुल हो गई (Storage Full)"
      },
      steps: [
        {
          question: {
            en: "Step 1: Clean WhatsApp Shared Videos",
            ta: "படி 1: வாட்ஸ்அப் பகிரப்பட்ட வீடியோக்களை நீக்கவும்",
            hi: "पहला कदम: वॉट्सऐप के फालतू वीडियो साफ करें"
          },
          visual: "🎬",
          instruction: {
            en: "Open WhatsApp > 3 dots > Settings > Storage and Data > Manage Storage. Delete large forwarded movie clips over 5MB.",
            ta: "வாட்ஸ்அப் > அமைப்புகள் > Storage and Data சென்று பெரிய வீடியோக்களை நீக்கவும்.",
            hi: "वॉट्सऐप सेटिंग्स में 'स्टोरेज एंड डेटा' में जाकर 5MB से बड़े पुराने वीडियो हटा दें।"
          }
        },
        {
          question: {
            en: "Step 2: Delete Unused Apps",
            ta: "படி 2: பயன்படுத்தாத விளையாட்டு மற்றும் செயலிகளை நீக்கவும்",
            hi: "दूसरा कदम: बिना काम के खेल और ऐप हटाएं"
          },
          visual: "🗑️",
          instruction: {
            en: "Long press on any game or app you don't use. Tap 'Uninstall'.",
            ta: "தேவையில்லாத செயலியை அழுத்திப் பிடித்து 'Uninstall' என்பதைத் தொடவும்.",
            hi: "जिस गेम या ऐप को इस्तेमाल न करते हों, उस पर उंगली दबाकर रखें और 'Uninstall' दबाएं।"
          }
        }
      ]
    },
    {
      id: "doc_calls",
      icon: "📞",
      title: {
        en: "Cannot Make or Receive Calls",
        ta: "அழைப்புகள் செய்ய அல்லது பெற முடியவில்லை",
        hi: "फोन कॉल नहीं लग रहा है"
      },
      steps: [
        {
          question: {
            en: "Step 1: Check SIM signal bars in corner",
            ta: "படி 1: மூலையில் உள்ள சிம் சிக்னல் கோடுகளை சரிபார்க்கவும்",
            hi: "पहला कदम: स्क्रीन के कोने में टावर की डंडियां देखें"
          },
          visual: "📶",
          instruction: {
            en: "If you see a circle with a slash 🚫, your SIM is not registered on the tower. Step outside your house into open air.",
            ta: "🚫 சின்னம் தெரிந்தால், வீட்டை விட்டு வெளியே திறந்தவெளிக்கு வரவும்.",
            hi: "अगर 🚫 निशान दिख रहा है तो पक्के मकान से बाहर खुले मैदान में आकर देखें।"
          }
        }
      ]
    },
    {
      id: "doc_lock",
      icon: "🔐",
      title: {
        en: "Forgot Screen Lock PIN",
        ta: "திரை பூட்டு பின் மறந்துவிட்டது",
        hi: "स्क्रीन लॉक का पिन भूल गए"
      },
      steps: [
        {
          question: {
            en: "Important Safety Warning",
            ta: "முக்கிய பாதுகாப்பு எச்சரிக்கை",
            hi: "जरूरी सुरक्षा सलाह"
          },
          visual: "⚠️",
          instruction: {
            en: "Do NOT give your phone to roadside strangers claiming to crack your PIN. Visit your official phone brand authorized service center with your original bill and Aadhaar card.",
            ta: "தெருவோர நபர்களிடம் போனை கொடுக்காதீர்கள். அசல் ரசீதுடன் அங்கீகரிக்கப்பட்ட சேவை மையத்தை அணுகவும்.",
            hi: "सड़क किनारे किसी अनजान को फोन अनलॉक करने के लिए न दें। असली बिल लेकर अधिकृत सर्विस सेंटर जाएं।"
          }
        }
      ]
    }
  ];

  return {
    ISSUES
  };
})();
