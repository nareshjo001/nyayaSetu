import "./Login.css";
import logo from "../../assets/app_logo.png";
import { ArrowLeftCircle, Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { useState } from "react";

const TEXT = {
  en: {
    title: "Reset Password",
    step1: "Enter your email or phone",
    step2: "Enter OTP sent to your device",
    step3: "Set your new password",

    contactLabel: "Email or Phone",
    contactPlaceholder: "Enter email or phone",

    sendOtp: "Send OTP",
    sending: "Sending...",

    otpLabel: "Enter OTP",
    otpPlaceholder: "Enter OTP",
    verifyOtp: "Verify OTP",

    newPassword: "New Password",
    newPasswordPlaceholder: "New password",

    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm password",

    updatePassword: "Update Password",
    updating: "Updating...",

    backToLogin: "Back to Login",
    signIn: "Sign In",

    errContact: "Enter email or phone",
    errOtp: "Invalid OTP",
    errPassword: "Passwords do not match",
  },

  hi: {
    title: "पासवर्ड रीसेट करें",
    step1: "अपना ईमेल या फ़ोन दर्ज करें",
    step2: "अपने डिवाइस पर भेजा गया OTP दर्ज करें",
    step3: "अपना नया पासवर्ड सेट करें",

    contactLabel: "ईमेल या फ़ोन",
    contactPlaceholder: "ईमेल या फ़ोन दर्ज करें",

    sendOtp: "OTP भेजें",
    sending: "भेजा जा रहा है...",

    otpLabel: "OTP दर्ज करें",
    otpPlaceholder: "OTP दर्ज करें",
    verifyOtp: "OTP सत्यापित करें",

    newPassword: "नया पासवर्ड",
    newPasswordPlaceholder: "नया पासवर्ड",

    confirmPassword: "पासवर्ड की पुष्टि करें",
    confirmPasswordPlaceholder: "दोबारा दर्ज करें",

    updatePassword: "पासवर्ड अपडेट करें",
    updating: "अपडेट हो रहा है...",

    backToLogin: "लॉगिन पर वापस जाएं",
    signIn: "लॉग इन करें",

    errContact: "ईमेल या फ़ोन दर्ज करें",
    errOtp: "अमान्य OTP",
    errPassword: "पासवर्ड मेल नहीं खाते",
  },

  ta: {
    title: "கடவுச்சொல்லை மீட்டமை",
    step1: "உங்கள் மின்னஞ்சல் அல்லது கைபேசி எண்ணை உள்ளிடவும்",
    step2: "உங்கள் சாதனத்திற்கு அனுப்பிய OTP-ஐ உள்ளிடவும்",
    step3: "புதிய கடவுச்சொல்லை அமைக்கவும்",

    contactLabel: "மின்னஞ்சல் அல்லது கைபேசி",
    contactPlaceholder: "மின்னஞ்சல் அல்லது கைபேசி உள்ளிடவும்",

    sendOtp: "OTP அனுப்பு",
    sending: "அனுப்புகிறது...",

    otpLabel: "OTP உள்ளிடவும்",
    otpPlaceholder: "OTP உள்ளிடவும்",
    verifyOtp: "OTP சரிபார்",

    newPassword: "புதிய கடவுச்சொல்",
    newPasswordPlaceholder: "புதிய கடவுச்சொல்",

    confirmPassword: "கடவுச்சொல் உறுதி",
    confirmPasswordPlaceholder: "மீண்டும் உள்ளிடவும்",

    updatePassword: "கடவுச்சொல் புதுப்பிக்க",
    updating: "புதுப்பிக்கப்படுகிறது...",

    backToLogin: "லாகினுக்கு திரும்ப",
    signIn: "உள்நுழை",

    errContact: "மின்னஞ்சல் அல்லது கைபேசி உள்ளிடவும்",
    errOtp: "தவறான OTP",
    errPassword: "கடவுச்சொற்கள் பொருந்தவில்லை",
  },
};

export default function ForgotPassword({ setShowForgot }) {
  const [step, setStep] = useState(1);

  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    setStep(3);
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      return setError(t.errPassword);
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      console.log("Password updated");
      setLoading(false);
      setShowForgot(false);
    }, 1000);
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div
            className="back-btn chat-back-btn"
            onClick={() => setShowForgot(false)}
          >
            <ArrowLeftCircle />
        </div>
        
        <div className="brand-badge">
          <img src={logo} alt="logo" />
        </div>

        <h1>{t.title}</h1>
        <p className="login-subtitle">
          {step === 1 && t.step1}
          {step === 2 && t.step2}
          {step === 3 && t.step3}
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
              {loading ? t.sending : t.sendOtp} <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>{t.otpLabel}</label>
            <div className="input-group">
              <input
                type="text"
                placeholder={t.otpPlaceholder}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleVerifyOtp}>
              {t.verifyOtp} <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label>{t.newPassword}</label>
            <div className="input-group">
              <LockKeyhole className="input-icon" size={18} />
              <input
                type="password"
                placeholder={t.newPasswordPlaceholder}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <label>{t.confirmPassword}</label>
            <div className="input-group">
              <LockKeyhole className="input-icon" size={18} />
              <input
                type="password"
                placeholder={t.confirmPasswordPlaceholder}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleResetPassword}>
              {loading ? t.updating : t.updatePassword}{" "}
              <ArrowRight size={18} />
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
          <span onClick={() => setShowForgot(false)}>{t.signIn}</span>
        </p>

      </div>
    </div>
  );
}