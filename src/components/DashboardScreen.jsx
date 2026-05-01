import './DashboardScreen.css';
import engBanner from '../assets/eng_banner.png';
import hindiBanner from '../assets/hindi_banner.png';
import tamBanner from '../assets/tam_banner.png';
import logo from '../assets/app_logo.png';
import { Scale, Languages, Sparkles, HelpCircle, MessageSquare, Mic, Lightbulb, ClipboardList, Users, Handshake } from 'lucide-react';

const bannerByLanguage = {
  en: engBanner,
  hi: hindiBanner,
  ta: tamBanner,
};

const contentByLanguage = {
  en: {
    guideBadge: 'Your Trustworthy Legal Guide',
    heroTitle: 'AI Legal Help for Every Indian',
    heroDescription:
      'Navigate the complexities of Indian law with clarity and confidence. Get instant, easy-to-understand legal guidance in English.',
    primaryAction: 'Start Chat',
    secondaryAction: 'Try Demo',
    visualTitle: 'Justice for All',
    sectionTitle: 'Designed for Empathetic Clarity',
    sectionSubtitle: 'Breaking down barriers to legal understanding.',
    featureCards: [
      {
        icon: <Languages className="w-6 h-6" />,
        title: 'Multilingual Support',
        body: 'Interact seamlessly in English, Hindi, Tamil, and other regional languages without losing context.',
      },
      {
        icon: <Mic className="w-6 h-6" />,
        title: 'Voice Interaction',
        body: 'Speak your queries directly. A conversational experience that removes the need for typing.',
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'Simple Explanations',
        body: 'Complex Indian legal sections and legal jargon translated into straightforward, everyday language.',
      },
    ],
    practicalTitle: 'Practical Legal Assistance',
    practicalSubtitle:
      'Explore common scenarios where NyayaSetu provides immediate, structured guidance.',
    practicalItems: [
      {
        icon: <ClipboardList className="w-6 h-6" />,
        title: 'FIR Filing Guidance',
        body: 'Understand the required documents, the jurisdiction, and step-by-step procedures to correctly file a First Information Report.',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'Accessing Legal Aid',
        body: 'Find resources and eligibility criteria for free or subsidized legal representation under the National Legal Services Authority.',
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: 'Tenant Rights & Disputes',
        body: 'Get clarity on rental agreements, eviction laws, and your rights regarding security deposits and property maintenance.',
      },
    ],
    exploreLabel: 'Explore Flow',
  },
  hi: {
    guideBadge: 'आपका भरोसेमंद कानूनी मार्गदर्शक',
    heroTitle: 'हर भारतीय के लिए एआई कानूनी सहायता',
    heroDescription:
      'भारतीय कानून की जटिलताओं को स्पष्टता और आत्मविश्वास के साथ समझें। हिंदी में तुरंत, आसान और समझने योग्य कानूनी मार्गदर्शन प्राप्त करें।',
    primaryAction: 'चैट शुरू करें',
    secondaryAction: 'डेमो देखें',
    visualTitle: 'सभी के लिए न्याय',
    sectionTitle: 'सहानुभूतिपूर्ण स्पष्टता के लिए डिज़ाइन',
    sectionSubtitle: 'कानूनी समझ में आने वाली बाधाओं को सरल बनाना।',
    featureCards: [
      {
        icon: <Languages className="w-6 h-6" />,
        title: 'बहुभाषी सहायता',
        body: 'अंग्रेज़ी, हिंदी, तमिल और अन्य भाषाओं में बिना संदर्भ खोए सहज बातचीत करें।',
      },
      {
        icon: <Mic className="w-6 h-6" />,
        title: 'आवाज़ आधारित संवाद',
        body: 'अपने प्रश्न बोलकर पूछें। ऐसा अनुभव जो टाइपिंग की आवश्यकता को कम करता है।',
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'सरल व्याख्याएँ',
        body: 'कठिन कानूनी शब्दों और धाराओं को आसान, रोज़मर्रा की भाषा में समझाया गया है।',
      },
    ],
    practicalTitle: 'व्यावहारिक कानूनी सहायता',
    practicalSubtitle: 'सामान्य स्थितियाँ देखें जहाँ NyayaSetu तुरंत और व्यवस्थित मार्गदर्शन देता है।',
    practicalItems: [
      {
        icon: <ClipboardList className="w-6 h-6" />,
        title: 'एफआईआर दर्ज करने की मार्गदर्शिका',
        body: 'एफआईआर दर्ज करने के लिए आवश्यक दस्तावेज़, अधिकार क्षेत्र और चरणबद्ध प्रक्रिया समझें।',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'कानूनी सहायता प्राप्त करना',
        body: 'मुफ़्त या रियायती कानूनी सहायता के लिए संसाधन और पात्रता मानदंड जानें।',
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: 'किरायेदार अधिकार और विवाद',
        body: 'किराया समझौते, बेदखली कानून और जमा राशि से जुड़े अपने अधिकारों को स्पष्ट रूप से समझें।',
      },
    ],
    exploreLabel: 'विस्तार देखें',
  },
  ta: {
    guideBadge: 'உங்கள் நம்பகமான சட்ட வழிகாட்டி',
    heroTitle: 'ஒவ்வொரு இந்தியருக்கும் AI மூலம் சட்ட உதவி',
    heroDescription:
      'இந்திய சட்டத்தின் சிக்கல்களை தெளிவாகவும் நம்பிக்கையுடனும் புரிந்துகொள்ளுங்கள். தமிழில் உடனடி, எளிமையான சட்ட வழிகாட்டலை பெறுங்கள்.',
    primaryAction: 'உரையாடல் தொடங்கு',
    secondaryAction: 'டெமோ பார்க்க',
    visualTitle: 'அனைவருக்கும் நீதி',
    sectionTitle: 'புரிதலுடன் கூடிய தெளிவுக்காக வடிவமைப்பு',
    sectionSubtitle: 'சட்டத்தை புரிந்துகொள்ளும் தடைகளை எளிதாக்குகிறது.',
    featureCards: [
      {
        icon: <Languages className="w-6 h-6" />,
        title: 'பலமொழி ஆதரம்',
        body: 'ஆங்கிலம், இந்தி, தமிழ் மற்றும் பிற மொழிகளில் அர்த்தம் மாறாமல் எளிதாக தொடர்புகொள்ளுங்கள்.',
      },
      {
        icon: <Mic className="w-6 h-6" />,
        title: 'குரல் தொடர்பு',
        body: 'உங்கள் கேள்விகளை நேரடியாகப் சொல்லுங்கள். தட்டச்சு தேவையை குறைக்கும் உரையாடல் அனுபவம்.',
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: 'எளிய விளக்கங்கள்',
        body: 'சிக்கலான சட்ட சொற்கள் மற்றும் பிரிவுகள் அனைவரும் புரியும் மொழியில் எளிமைப்படுத்தப்படுகின்றன.',
      },
    ],
    practicalTitle: 'நடைமுறை சட்ட உதவி',
    practicalSubtitle: 'NyayaSetu உடனடி மற்றும் கட்டமைக்கப்பட்ட வழிகாட்டலை வழங்கும் பொதுவான சூழல்களை பாருங்கள்.',
    practicalItems: [
      {
        icon: <ClipboardList className="w-6 h-6" />,
        title: 'எஃப்ஐஆர் பதிவு வழிகாட்டி',
        body: 'எஃப்ஐஆர் பதிவு செய்ய தேவையான ஆவணங்கள், அதிகார வரம்பு மற்றும் படிப்படியான செயல்முறைகளை அறிந்து கொள்ளுங்கள்.',
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: 'சட்ட உதவி பெறுவது',
        body: 'இலவசம் அல்லது குறைந்த செலவிலான சட்ட உதவிக்கான தகுதி மற்றும் ஆதாரங்களை அறியுங்கள்.',
      },
      {
        icon: <Handshake className="w-6 h-6" />,
        title: 'வாடகையாளர் உரிமைகள் மற்றும் தகராறுகள்',
        body: 'வாடகை ஒப்பந்தங்கள், வெளியேற்ற சட்டங்கள் மற்றும் டெபாசிட் தொடர்பான உங்கள் உரிமைகளை தெளிவாகப் புரிந்துகொள்ளுங்கள்.',
      },
    ],
    exploreLabel: 'மேலும் பார்க்க',
  },
};

function DashboardScreen({ 
  selectedLanguage, 
  onSelectLanguage, 
  setShowChat, 
  isLoggedIn,
  setShowLogin,
  setShowDashboard 
}) {
  const content = contentByLanguage[selectedLanguage] ?? contentByLanguage.en;
  const selectedBanner = bannerByLanguage[selectedLanguage] ?? engBanner;

  const handleClick = (type) => {
    if(type === 'primary') {
      if(isLoggedIn) {
        setShowDashboard(false);
        setShowChat(true);
      } else {
        setShowDashboard(false);
        setShowLogin(true);
      }
    } else {
        setShowDashboard(false);
        setShowChat(true);
    }
  }

  return (
    <main className="dashboard-screen">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">
          <div className="dashboard-brand-mark">
            <img src={logo} alt="NyayaSetu AI" />
          </div>

          <div className="dashboard-brand-name">
            <h2>NyayaSetu AI</h2>
          </div>

          <div className="dashboard-brand-actions">
            <span className="icon"><Languages size={19} onClick={() => onSelectLanguage(null)} /></span>
          </div>
        </div>
      </aside>

      <section className="dashboard-content">
        <div className="hero-card">
          <div className="hero-split">
            <div className="hero-left">
              <span className="badge">
                <Scale size={16} /> {content.guideBadge}
              </span>

              <h1>{content.heroTitle}</h1>

              <p>{content.heroDescription}</p>

              <div className="actions">
                <button
                  className="primary"
                  onClick={() => handleClick('primary')}
                >
                  <MessageSquare size={19} /> {content.primaryAction}
                </button>

                {!isLoggedIn ? 
                (
                  <button
                    className="secondary"
                    onClick={() => handleClick('secondary')}
                  >
                    <Sparkles size={19} /> {content.secondaryAction}
                  </button>
                ) : null
                }
              </div>
            </div>

            <div className="hero-right">
              <img src={selectedBanner} alt={content.visualTitle} />
            </div>
          </div>
        </div>

        <section className="feature-section-card">
          <div className="feature-header">
            <h2>{content.sectionTitle}</h2>
            <p>{content.sectionSubtitle}</p>
          </div>

          <div className="dashboard-feature-grid">
            {content.featureCards.map((card) => (
              <article key={card.title} className="dashboard-feature-card">
                <div className="dashboard-feature-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
        </div>
        </section>

        <section className="practical-section-card">
          <div className="practical-header">
            <h2>{content.practicalTitle}</h2>
            <p>{content.practicalSubtitle}</p>
          </div>

          <div className="dashboard-practical-list">
            {content.practicalItems.map((item) => (
              <article key={item.title} className="dashboard-practical-card">
                <div className="dashboard-practical-icon">{item.icon}</div>

                <div className="dashboard-practical-copy">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>

                <button className="dashboard-explore-button" type="button">
                  {content.exploreLabel}
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default DashboardScreen;