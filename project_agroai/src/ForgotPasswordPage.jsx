import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "./assets/forgetpassword.jpg"; // Replace with your image path

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Password reset link sent to your email!");
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent background
          padding: "40px 60px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#2e7d32",
            marginBottom: "20px",
          }}
        >
          Forgot Password
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#4f4f4f",
            marginBottom: "30px",
          }}
        >
          Enter your email to receive a password reset link.
        </p>

        <form onSubmit={handleResetPassword}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 15px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
          </div>
          {error && (
            <p style={{ color: "red", fontSize: "14px", marginBottom: "20px" }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#64AF67",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4F9A53")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#64AF67")}
          >
            Reset Password
          </button>
        </form>

        <p
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "#4f4f4f",
          }}
        >
          Remember your password?{" "}
          <span
            style={{
              color: "#2e7d32",
              fontWeight: "bold",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
