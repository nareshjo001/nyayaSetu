import "./Login.css";
import logo from "../../assets/app_logo.png";
import { ArrowLeftCircle, UserRound, Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { useState } from "react";

const TEXT = {
  en: {
    title: "Create Account",
    subtitle: "Join NyayaSetu AI",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your name",
    email: "Email",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Create password",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm password",
    createAccount: "Create Account",
    already: "Already have an account?",
    signIn: "Sign In",
  },

  hi: {
    title: "खाता बनाएं",
    subtitle: "न्यायसेतु AI से जुड़ें",
    fullName: "पूरा नाम",
    fullNamePlaceholder: "अपना नाम दर्ज करें",
    email: "ईमेल",
    emailPlaceholder: "अपना ईमेल दर्ज करें",
    password: "पासवर्ड",
    passwordPlaceholder: "पासवर्ड बनाएं",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    confirmPasswordPlaceholder: "पासवर्ड दोबारा दर्ज करें",
    createAccount: "खाता बनाएं",
    already: "पहले से खाता है?",
    signIn: "लॉग इन करें",
  },

  ta: {
    title: "கணக்கு உருவாக்கு",
    subtitle: "நியாயசேது AI-இல் சேருங்கள்",
    fullName: "முழுப் பெயர்",
    fullNamePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
    email: "மின்னஞ்சல்",
    emailPlaceholder: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
    password: "கடவுச்சொல்",
    passwordPlaceholder: "கடவுச்சொல் உருவாக்கவும்",
    confirmPassword: "கடவுச்சொல் உறுதி",
    confirmPasswordPlaceholder: "மீண்டும் உள்ளிடவும்",
    createAccount: "கணக்கு உருவாக்கு",
    already: "ஏற்கனவே கணக்கு உள்ளதா?",
    signIn: "உள்நுழை",
  },
};

export default function Signup({ setShowSignUp }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const lang = localStorage.getItem("lang") || "en";
  const t = TEXT[lang];

  const handleSignUp = () => {
    // Implement sign-up logic here (e.g., form validation, API call)
    console.log("Sign Up Details:", { fullName, email, password, confirmPassword });
    setShowSignUp(false); // Close the sign-up form after handling sign-up
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div
            className="back-btn chat-back-btn"
            onClick={() => setShowSignUp(false)}
          >
            <ArrowLeftCircle />
        </div>
        <div className="brand-badge">
          <img src={logo} alt="NyayaSetu Logo" />
        </div>

        <h1>{t.title}</h1>
        <p className="login-subtitle">{t.subtitle}</p>

        <label>{t.fullName}</label>
        <div className="input-group">
          <UserRound className="input-icon" size={18} />
          <input
            type="text"
            placeholder={t.fullNamePlaceholder}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <label>{t.email}</label>
        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input 
            type="email" placeholder={t.emailPlaceholder} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label>{t.password}</label>
        <div className="input-group">
          <LockKeyhole className="input-icon" size={18} />
          <input 
            type="password" 
            placeholder={t.passwordPlaceholder} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button className="login-primary" onClick={handleSignUp}>
          {t.createAccount} <ArrowRight size={18} />
        </button>

        <p className="login-footer">
          {t.already} <span onClick={() => setShowSignUp(false)}>{t.signIn}</span>
        </p>

      </div>
    </div>
  );
}