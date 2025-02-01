import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "./assets/background.jpg"; // Ensure the correct path to your background image.
import Logo from "./assets/logo.png"; // Ensure the correct path to your logo.

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
        {/* Logo */}
        <img
          src={Logo}
          alt="AgroAI Logo"
          style={{
            height: "50px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")} // Optional: navigate to home on logo click
        />
        {/* Navigation Links */}
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
            onClick={handleGetStarted}
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

      {/* Hero Section */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          textAlign: "center",
          marginBottom: "80px",
          color: "#2e7d32",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Healthy Crops, Better Yields
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            maxWidth: "600px",
            margin: "0 auto",
            color: "#666B67FF",
          }}
        >
          AgroAI leverages advanced machine learning to detect tomato leaf diseases and provide actionable remedies,
          ensuring healthier crops and higher yields.
        </p>
        <button
          style={{
            padding: "15px 30px",
            backgroundColor: "#64AF67",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            marginTop: "20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#4F9A53")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#64AF67")}
          onClick={handleGetStarted} // Navigate to login page
        >
          Get Started
        </button>
      </section>

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

export default HomePage;
