import "./Login.css";
import logo from "../../assets/app_logo.png";
import { ArrowLeftCircle, Mail, KeyRound, ArrowRight } from "lucide-react";
import { useState } from "react";

const TEXT = {
  en: {
    title: "Login with OTP",
    step1: "Enter your email or phone",
    step2: "Enter OTP sent to your device",

    contactLabel: "Email or Phone",
    contactPlaceholder: "Enter email or phone",

    getOtp: "Get OTP",
    sending: "Sending...",

    otpLabel: "Enter OTP",
    otpPlaceholder: "Enter OTP",
    verifyOtp: "Verify OTP",
    verifying: "Verifying...",

    backToLogin: "Back to Login",
    signIn: "Sign In",

    errContact: "Enter email or phone",
    errOtp: "Invalid OTP",
  },

  hi: {
    title: "OTP से लॉगिन करें",
    step1: "अपना ईमेल या फ़ोन दर्ज करें",
    step2: "अपने डिवाइस पर भेजा गया OTP दर्ज करें",

    contactLabel: "ईमेल या फ़ोन",
    contactPlaceholder: "ईमेल या फ़ोन दर्ज करें",

    getOtp: "OTP प्राप्त करें",
    sending: "भेजा जा रहा है...",

    otpLabel: "OTP दर्ज करें",
    otpPlaceholder: "OTP दर्ज करें",
    verifyOtp: "OTP सत्यापित करें",
    verifying: "सत्यापित हो रहा है...",

    backToLogin: "लॉगिन पर वापस जाएं",
    signIn: "लॉग इन करें",

    errContact: "ईमेल या फ़ोन दर्ज करें",
    errOtp: "अमान्य OTP",
  },

  ta: {
    title: "OTP மூலம் உள்நுழை",
    step1: "உங்கள் மின்னஞ்சல் அல்லது கைபேசி எண்ணை உள்ளிடவும்",
    step2: "உங்கள் சாதனத்திற்கு அனுப்பிய OTP-ஐ உள்ளிடவும்",

    contactLabel: "மின்னஞ்சல் அல்லது கைபேசி",
    contactPlaceholder: "மின்னஞ்சல் அல்லது கைபேசி உள்ளிடவும்",

    getOtp: "OTP பெற",
    sending: "அனுப்புகிறது...",

    otpLabel: "OTP உள்ளிடவும்",
    otpPlaceholder: "OTP உள்ளிடவும்",
    verifyOtp: "OTP சரிபார்",
    verifying: "சரிபார்க்கிறது...",

    backToLogin: "லாகினுக்கு திரும்ப",
    signIn: "உள்நுழை",

    errContact: "மின்னஞ்சல் அல்லது கைபேசி உள்ளிடவும்",
    errOtp: "தவறான OTP",
  },
};

export default function LoginWithOTP({ setShowOTP, setShowLogin, setIsLoggedIn }) {
  const [step, setStep] = useState(1);

  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const lang = localStorage.getItem("lang") || "en";
  const t = TEXT[lang];

  const handleSendOtp = () => {
    if (!contact) return setError(t.errContact);

    setError("");
    setLoading(true);

    setTimeout(() => {
      const fakeOtp = "1234";
      console.log("OTP sent:", fakeOtp);
      setGeneratedOtp(fakeOtp);
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp !== generatedOtp) {
      return setError(t.errOtp);
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      console.log("OTP verified");
      setLoading(false);
      setShowOTP(false);
      setIsLoggedIn(true);
      setShowLogin(false);
    }, 1000);
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div
            className="back-btn chat-back-btn"
            onClick={() => setShowOTP(false)}
          >
            <ArrowLeftCircle />
        </div>

        <div className="brand-badge">
          <img src={logo} alt="NyayaSetu Logo" />
        </div>

        <h1>{t.title}</h1>
        <p className="login-subtitle">
          {step === 1 && t.step1}
          {step === 2 && t.step2}
        </p>

        {step === 1 && (
          <>
            <label>{t.contactLabel}</label>
            <div className="input-group">
              <Mail className="input-icon" size={18} />
              <input
                type="text"
                placeholder={t.contactPlaceholder}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleSendOtp}>
              {loading ? t.sending : t.getOtp} <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>{t.otpLabel}</label>
            <div className="input-group">
              <KeyRound className="input-icon" size={18} />
              <input
                type="text"
                placeholder={t.otpPlaceholder}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleVerifyOtp}>
              {loading ? t.verifying : t.verifyOtp} <ArrowRight size={18} />
            </button>
          </>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "0.8rem" }}>
            {error}
          </p>
        )}

        <p className="login-footer">
          {t.backToLogin}{" "}
          <span onClick={() => setShowOTP(false)}>{t.signIn}</span>
        </p>

      </div>
    </div>
  );
}