import React, { useState } from 'react';
import { 
  FiHome, FiCreditCard, FiBarChart2, FiSettings, FiBookOpen, 
  FiGlobe, FiUser, FiFileText, FiDatabase, FiBriefcase, FiShield
} from 'react-icons/fi'; // เพิ่มไอคอนใหม่
import './Sidebar.css';
import logo from '/src/assets/Recurring4.png';


const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const handleMenuClick = (menuName) => {
    setActive(menuName);
  };

  return (
    <div className="sidebar">
      {/* ✅ แสดงเฉพาะโลโก้ */}
      <div className="logo">
        <img src={logo} alt="Autopay Logo" className="logo-img" />
      </div>
      <ul className="menu">
        <li className={`menu-item ${active === "Dashboard" ? "active" : ""}`} onClick={() => handleMenuClick("Dashboard")}>
          <FiHome className="icon" />
          <span>Dashboard</span>
        </li>
        <li className={`menu-item ${active === "Statements" ? "active" : ""}`} onClick={() => handleMenuClick("Statements")}>
          <FiFileText className="icon" />
          <span>Statements</span>
        </li>
        <li className={`menu-item ${active === "AssetCenter" ? "active" : ""}`} onClick={() => handleMenuClick("AssetCenter")}>
          <FiDatabase className="icon" />
          <span>Asset Center</span>
        </li>
        <li className={`menu-item ${active === "BankStatement" ? "active" : ""}`} onClick={() => handleMenuClick("BankStatement")}>
          <FiBriefcase className="icon" />
          <span>Bank Statement</span>
        </li>
        <li className={`menu-item ${active === "Transactions" ? "active" : ""}`} onClick={() => handleMenuClick("Transactions")}>
          <FiCreditCard className="icon" />
          <span>Transactions</span>
        </li>
        <li className={`menu-item ${active === "Reports" ? "active" : ""}`} onClick={() => handleMenuClick("Reports")}>
          <FiBarChart2 className="icon" />
          <span>Reports</span>
        </li>
        <li className={`menu-item ${active === "APIDocumentation" ? "active" : ""}`} onClick={() => handleMenuClick("APIDocumentation")}>
          <FiGlobe className="icon" />
          <span>API Documentation</span>
        </li>
        <li className={`menu-item ${active === "UserGuide" ? "active" : ""}`} onClick={() => handleMenuClick("UserGuide")}>
          <FiBookOpen className="icon" />
          <span>User Guide</span>
        </li>
        <li className={`menu-item ${active === "UserProfile" ? "active" : ""}`} onClick={() => handleMenuClick("UserProfile")}>
          <FiUser className="icon" />
          <span>User Profile</span>
        </li>

        {/* เมนูใหม่ */}
        <li className={`menu-item ${active === "SafetyCenter" ? "active" : ""}`} onClick={() => handleMenuClick("SafetyCenter")}>
          <FiShield className="icon" />
          <span>Safety Center</span>
        </li>
        <li className={`menu-item ${active === "Settings" ? "active" : ""}`} onClick={() => handleMenuClick("Settings")}>
          <FiSettings className="icon" />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
