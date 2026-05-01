import "./Login.css";
import logo from "../../assets/app_logo.png";
import { UserRound, Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Signup({ setShowSignUp }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Implement sign-up logic here (e.g., form validation, API call)
    console.log("Sign Up Details:", { fullName, email, password, confirmPassword });
    setShowSignUp(false); // Close the sign-up form after handling sign-up
  }

  return (
    <div className="login-screen">
      <div className="login-card">

        <div className="brand-badge">
          <img src={logo} alt="NyayaSetu Logo" />
        </div>

        <h1>Create Account</h1>
        <p className="login-subtitle">Join NyayaSetu AI</p>

        <label>Full Name</label>
        <div className="input-group">
          <UserRound className="input-icon" size={18} />
          <input
            type="text"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <label>Email</label>
        <div className="input-group">
          <Mail className="input-icon" size={18} />
          <input 
            type="email" placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label>Password</label>
        <div className="input-group">
          <LockKeyhole className="input-icon" size={18} />
          <input 
            type="password" 
            placeholder="Create password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label>Confirm Password</label>
        <div className="input-group">
          <LockKeyhole className="input-icon" size={18} />
          <input 
            type="password" 
            placeholder="Confirm password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="login-primary" onClick={handleSignUp}>
          Create Account <ArrowRight size={18} />
        </button>

        <p className="login-footer">
          Already have an account? <span onClick={() => setShowSignUp(false)}>Sign In</span>
        </p>

      </div>
    </div>
  );
}