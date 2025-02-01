import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TomatoBackground from "./assets/uploadbackground.jpg";
import UploadIcon from "./assets/cloud-computing.png";
import Logo from "./assets/logo2.png"; // Ensure the correct path to your logo

const ImageUploadPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    const maxSize = 4 * 1024 * 1024; // 4 MB

    if (!validTypes.includes(selectedFile.type)) {
      setError("Please upload a valid image file (JPEG, PNG, or WEBP).");
      setFile(null);
      return;
    }

    if (selectedFile.size > maxSize) {
      setError("File size exceeds 4 MB. Please upload a smaller file.");
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file before uploading.");
      return;
    }

    alert(`File "${file.name}" uploaded successfully!`);
    setFile(null);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundImage: `url(${TomatoBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            onClick={() => navigate("/login")} // Navigate to login page
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
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
            width: "90%",
            maxWidth: "500px",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#2e7d32" }}>
            File Upload
          </h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            Maximum File Size 4 MB
          </p>

          <div
            style={{
              border: "2px dashed #2e7d32",
              borderRadius: "10px",
              padding: "30px",
              backgroundColor: "#f9f9f9",
              marginBottom: "20px",
            }}
          >
            <img
              src={UploadIcon}
              alt="Upload Icon"
              style={{ width: "50px", marginBottom: "10px" }}
            />
            <p style={{ color: "#555" }}>Drop Your File Here</p>
            <p style={{ color: "#555" }}>Or</p>
            <input
              type="file"
              accept="image/jpeg, image/png, image/webp"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "#2e7d32",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Browse
            </label>
          </div>

          {file && (
            <p style={{ color: "#2e7d32" }}>Selected File: {file.name}</p>
          )}

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button
            onClick={handleUpload}
            style={{
              marginTop: "20px",
              padding: "12px 20px",
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#4F9A53")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2e7d32")}
          >
            Upload
          </button>
        </div>
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

export default ImageUploadPage;
