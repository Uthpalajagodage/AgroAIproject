import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/logo.png"; // Replace with your logo path

const Navbar = () => {
  const navigate = useNavigate();

  return (
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
        onClick={() => navigate("/")} // Navigate to home
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
  );
};

export default Navbar;
