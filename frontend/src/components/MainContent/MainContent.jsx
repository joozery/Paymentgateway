import React, { useState } from "react";
import "./MainContent.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaArrowUp, FaArrowDown, FaWallet, FaMoneyBillWave, FaBell } from "react-icons/fa";

// ลงทะเบียน Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("weekly");

  const data = {
    labels: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
    datasets: [
      {
        label: "รายรับ",
        data: [3000, 5000, 7000, 4000, 8000, 6000, 9000],
        borderColor: "#2ecc71",
        backgroundColor: "rgba(46, 204, 113, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "#2ecc71",
      },
      {
        label: "รายจ่าย",
        data: [2000, 3000, 4000, 3000, 5000, 4000, 6000],
        borderColor: "#e74c3c",
        backgroundColor: "rgba(231, 76, 60, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "#e74c3c",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: { size: 14, family: "Prompt" },
          color: "#34495e",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(204, 204, 204, 0.2)" },
      },
      x: { grid: { color: "rgba(204, 204, 204, 0.2)" } },
    },
  };

  return (
    <div className="main-content" style={{ fontFamily: "Prompt, sans-serif" }}>
      {/* ส่วนข้อมูลสรุป */}
      <div className="summary-section">
        <div className="summary-card">
          <h4><FaMoneyBillWave className="icon" /> ยอดฝากวันนี้ (THB)</h4>
          <p className="summary-amount">
            ฿245,000 <FaArrowUp className="icon-up" />
          </p>
        </div>
        <div className="summary-card">
          <h4><FaWallet className="icon" /> ยอดถอนวันนี้ (THB)</h4>
          <p className="summary-amount">
            ฿182,000 <FaArrowDown className="icon-down" />
          </p>
        </div>
        <div className="summary-card">
          <h4><FaMoneyBillWave className="icon" /> จำนวนรายการฝากวันนี้</h4>
          <p className="summary-amount">฿1,000,000</p>
        </div>
        <div className="summary-card">
          <h4><FaWallet className="icon" /> จำนวนรายการถอนวันนี้</h4>
          <p className="summary-amount">฿1,000,000</p>
        </div>
      </div>

      {/* การ์ดยอดเงิน */}
      <div className="balance-section">
        <div className="balance-card">
          <h3>ยอดเงินคงเหลือ</h3>
          <p className="balance-amount">฿673,412.66</p>
          <div className="card-details">
            <span>ใช้ได้ถึง: 08/21</span>
            <span>ผู้ถือบัตร: ธนพร ศรีใจดี</span>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div className="wallet-card">
          <p className="wallet-balance">
            <FaWallet /> ฿824,571.93
          </p>
          <p className="wallet-note">+0.8% จากสัปดาห์ที่ผ่านมา</p>
          <div className="wallet-buttons">
            <button className="btn send-btn">ส่งใบแจ้งหนี้</button>
            <button className="btn transfer-btn">โอนเงิน</button>
          </div>
        </div>
      </div>

      {/* กราฟพร้อมแท็บ */}
      <div className="graph-section">
        <div className="tabs">
          <button
            className={activeTab === "weekly" ? "active-tab" : ""}
            onClick={() => setActiveTab("weekly")}
          >
            รายสัปดาห์
          </button>
          <button
            className={activeTab === "monthly" ? "active-tab" : ""}
            onClick={() => setActiveTab("monthly")}
          >
            รายเดือน
          </button>
          <button
            className={activeTab === "yearly" ? "active-tab" : ""}
            onClick={() => setActiveTab("yearly")}
          >
            รายปี
          </button>
        </div>
        <h2>สรุปรายสัปดาห์</h2>
        <div className="graph">
          <Line data={data} options={options} />
        </div>
      </div>

      

      {/* การแจ้งเตือน */}
      <div className="notification-section">
        <h3>
          การแจ้งเตือน <FaBell />
        </h3>
        <ul className="notifications">
          <li>ยอดเงินของคุณเพิ่มขึ้น 5%</li>
          <li>มีใบแจ้งหนี้ที่ยังไม่ได้ชำระ</li>
        </ul>
      </div>
    </div>
  );
};

export default MainContent;
