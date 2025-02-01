import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "./assets/login.jpg"; // Ensure the correct path to your image
import Logo from "./assets/logo2.png"; // Ensure the correct path to your logo

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    navigate("/upload"); // Navigate to the Upload Page
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#DAF0DD",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <img
          src={Logo}
          alt="AgroAI Logo"
          style={{
            height: "50px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")} // Navigate to the home page
        />
        <nav style={{ display: "flex", gap: "20px" }}>
          <a
            href="#features"
            style={{
              color: "#0D160CFF",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Features
          </a>
          <a
            href="#about"
            style={{
              color: "#0D160CFF",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            About
          </a>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "8px 16px",
              backgroundColor: "#2e7d32",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4F9A53")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2e7d32")}
          >
            Login
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Section with Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            backgroundColor: "#EAF6E3",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "#2e7d32",
                marginBottom: "10px",
              }}
            >
              Hello again!
            </h1>
            <p style={{ color: "#4f4f4f", marginBottom: "30px" }}>
              Log in to continue to AgroAI.
            </p>
          </div>

          <form
            style={{
              width: "100%",
              maxWidth: "400px",
              textAlign: "left",
            }}
            onSubmit={handleLogin}
          >
            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4f4f4f",
                marginBottom: "5px",
                display: "block",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            />

            <label
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#4f4f4f",
                marginBottom: "5px",
                display: "block",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                marginBottom: "20px",
                fontSize: "16px",
              }}
            />

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
                backgroundColor: "#2e7d32",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#4F9A53")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#2e7d32")}
            >
              Login
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              fontSize: "14px",
              color: "#4f4f4f",
            }}
          >
            Don't have an account?{" "}
            <span
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
          <p
            style={{
              fontSize: "14px",
              color: "#4f4f4f",
              marginTop: "10px",
            }}
          >
            <span
              style={{
                color: "#2e7d32",
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </p>
        </div>

        {/* Right Section with Image */}
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "rgba(46, 125, 50, 0.9)",
          color: "#FFFFFF",
          fontSize: "14px",
        }}
      >
        © 2025 AgroAI. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
