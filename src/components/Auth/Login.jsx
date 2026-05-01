import "./Login.css";
import logo from "../../assets/app_logo.png";
import { KeyRound, UserRoundIcon, LockKeyhole, ArrowRight } from 'lucide-react';
import { useState } from "react";
import Signup from "./SignUp";
import Forgot from "./Forgot"; 
import LoginWithOTP from "./LoginWithOTP";

export default function Login({ setShowLogin, setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showSignUp, setShowSignUp] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const handleLogin = () => {
    console.log("Login:", { email, password });
    setIsLoggedIn(true);
    setShowLogin(false); 
  };

  const handleOtpLogin = () => {
    setShowOTP(true);
  };

  if (showForgot) {
    return (
      <Forgot
        setShowForgot={setShowForgot}
      />
    );
  }

  if (showSignUp) {
    return (
      <Signup
        setShowSignUp={setShowSignUp}
      />
    );
  }

  if (showOTP) {
    return (
      <LoginWithOTP
        setShowOTP={setShowOTP}
        setShowLogin={setShowLogin}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }

  return (
    <div className="login-screen">
      <div className="login-card">

        <div className="brand-badge">
          <img src={logo} alt="NyayaSetu Logo" />
        </div>

        <h1>NyayaSetu AI</h1>
        <p className="login-subtitle">Trustworthy Legal Guide</p>

        <label>Email or Phone Number</label>
        <div className="input-group">
          <UserRoundIcon className="input-icon" size={18} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-header">
          <label>Password</label>

          <span
            className="forgot"
            onClick={() => setShowForgot(true)}
          >
            Forgot?
          </span>
        </div>

        <div className="input-group">
          <LockKeyhole className="input-icon" size={18} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-primary" onClick={handleLogin}>
          Sign In <ArrowRight size={18} />
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button className="login-secondary" onClick={handleOtpLogin}>
          Login with OTP <KeyRound size={18} />
        </button>

        <p className="login-footer">
          New to NyayaSetu ?
          <span onClick={() => setShowSignUp(true)}>
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}