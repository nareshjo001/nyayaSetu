import "./Login.css";
import logo from "../../assets/app_logo.png";
import { Mail, LockKeyhole, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ForgotPassword({ setShowForgot }) {
  const [step, setStep] = useState(1);

  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    setStep(3);
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
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

        <div className="brand-badge">
          <img src={logo} alt="logo" />
        </div>

        <h1>Reset Password</h1>
        <p className="login-subtitle">
          {step === 1 && "Enter your email or phone"}
          {step === 2 && "Enter OTP sent to your device"}
          {step === 3 && "Set your new password"}
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
              {loading ? "Sending..." : "Send OTP"} <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Enter OTP</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button className="login-primary" onClick={handleVerifyOtp}>
              Verify OTP <ArrowRight size={18} />
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <label>New Password</label>
            <div className="input-group">
              <LockKeyhole className="input-icon" size={18} />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

            <button className="login-primary" onClick={handleResetPassword}>
              {loading ? "Updating..." : "Update Password"}{" "}
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
          Back to Login{" "}
          <span onClick={() => setShowForgot(false)}>Sign In</span>
        </p>

      </div>
    </div>
  );
}