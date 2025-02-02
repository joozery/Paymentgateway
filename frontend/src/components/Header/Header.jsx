import React, { useState } from "react";
import { FaUserCircle, FaGlobe } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [lang, setLang] = useState("TH"); // เก็บสถานะภาษา
  const [isMenuOpen, setIsMenuOpen] = useState(false); // เปิด-ปิดเมนู

  const toggleLanguage = () => {
    setLang(lang === "TH" ? "EN" : "TH");
  };

  return (
    <div className="header">
      <div className="user-info">
        <span>Welcome, Admin</span>
        <FaUserCircle className="user-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>

      {/* เมนูที่แสดงเมื่อคลิกที่ไอคอน */}
      {isMenuOpen && (
        <div className="dropdown-menu">
          <button className="lang-btn" onClick={toggleLanguage}>
            <FaGlobe className="lang-icon" /> {lang === "TH" ? "ภาษาไทย" : "English"}
          </button>
          <button className="logout-btn">ออกจากระบบ</button>
        </div>
      )}
    </div>
  );
};

export default Header;
