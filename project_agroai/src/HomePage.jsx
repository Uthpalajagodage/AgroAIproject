import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import BackgroundImage from "./assets/background.jpg"; // Ensure the correct path

const HomePage = () => {
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
      <NavBar />

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
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
