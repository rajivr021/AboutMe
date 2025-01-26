import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if the user is on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    // Scroll animation for footer items
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleEmojiClick = () => {
    if (isMobile) {
      setIsHovered((prev) => !prev);
    }
  };

  return (
    <div
      ref={footerRef}
      style={{
        background: "linear-gradient(135deg, #1f4037, #99f2c8)",
        color: "#fff",
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* "Thank You" Section */}
      <h2
        className="footer-item"
        style={{
          fontSize: "4rem",
          fontFamily: "cursive",
          fontWeight: "bold",
          textTransform: "uppercase",
          marginBottom: "-2rem",
        }}
      >
        Thank You
      </h2>

      {/* Smiley Face Section */}
      <div
        className="smiley-face"
        onMouseEnter={() => !isMobile && setIsHovered(true)} // Set hover state for non-mobile devices
        onMouseLeave={() => !isMobile && setIsHovered(false)} // Reset hover state for non-mobile devices
        onClick={handleEmojiClick} // Toggle hover effect on mobile devices
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "8px solid transparent",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          animation: "borderAnimation 2s infinite linear",
          transform: "scale(0.7)",
          cursor: "pointer",
        }}
      >
        {/* Left Eye */}
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "black",
            borderRadius: "50%",
            position: "absolute",
            top: "50px",
            left: "50px",
            transition: "transform 0.3s",
            transform: isHovered ? "scaleY(1.5)" : "scaleY(1)", // Apply hover effect
          }}
        ></div>

        {/* Right Eye */}
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor: "black",
            borderRadius: "50%",
            position: "absolute",
            top: "50px",
            right: "50px",
            transition: "transform 0.3s",
            transform: isHovered ? "scaleY(1.5)" : "scaleY(1)", // Apply hover effect
          }}
        ></div>

        {/* Mouth */}
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "50px",
            borderBottom: "8px solid black",
            borderRadius: "0 0 50px 50px",
            bottom: "20px", // Adjusted for proper alignment
            left: "27%",
            top: "49%",
            transform: "translateX(-50%)", // Keep the mouth centered
            transition: "transform 0.3s",
            transform: isHovered ? "scaleY(1.4)" : "scaleY(1)", // Apply hover effect
          }}
        ></div>
      </div>

      {/* Contact Details */}
      <div className="footer-contact">
        {/* Phone Icon with Call Link */}
        <FaPhone
          className="icon"
          onClick={() => (window.location.href = "tel:+917903427452")}
        />

        {/* LinkedIn Icon */}
        <FaLinkedin
          className="icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/rajiv-kumar-574292212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              "_blank"
            )
          }
        />

        {/* Gmail Icon with Mailto Link */}
        <FaEnvelope
          className="icon"
          onClick={() =>
            (window.location.href = "mailto:rajivr021@gmail.com?subject=&body=")
          }
        />
      </div>

      {/* Hover Effects */}
      <style>{`
        .icon:hover {
          color: #ffd700;
          transform: scale(1.2);
        }
        .footer-item span:hover {
          color: #ffd700;
        }
        @keyframes borderAnimation {
          0% {
            border-color: transparent;
          }
          50% {
            border-color: #45ba9324;
          }
          100% {
            border-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
