import "./Login.css";
import logo from "../../assets/app_logo.png";
import { Mail, KeyRound, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginWithOTP({ setShowOTP, setShowLogin, setIsLoggedIn }) {
  const [step, setStep] = useState(1);

  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = () => {
    if (!contact) return setError("Enter email or phone");

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
      return setError("Invalid OTP");
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

        <div className="brand-badge">
          <img src={logo} alt="NyayaSetu Logo" />
        </div>

        <h1>Login with OTP</h1>
        <p className="login-subtitle">
          {step === 1 && "Enter your email or phone"}
          {step === 2 && "Enter OTP sent to your device"}
        </p>

        {step === 1 && (
          <>
            <label>Email or Phone</label>
            <div className="input-group">
              <Mail className="input-icon" size={18} />
              <input
                type="text"
                placeholder="Enter email or phone"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleSendOtp}>
              {loading ? "Sending..." : "Get OTP"} <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Enter OTP</label>
            <div className="input-group">
              <KeyRound className="input-icon" size={18} />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleVerifyOtp}>
              {loading ? "Verifying..." : "Verify OTP"} <ArrowRight size={18} />
            </button>
          </>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "10px", fontSize: "0.8rem" }}>
            {error}
          </p>
        )}

        <p className="login-footer">
          Back to Login{" "}
          <span onClick={() => setShowOTP(false)}>Sign In</span>
        </p>

      </div>
    </div>
  );
}