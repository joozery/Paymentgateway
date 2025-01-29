import { useState } from "react";
import QRCode from "react-qr-code";
import generatePayload from "promptpay-qr"; // ใช้ไลบรารีที่ถูกต้อง
import "./PromptPayQR.css";

export default function PromptPayQR() {
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const phoneNumber = "0838346686"; // ใส่เบอร์ PromptPay จริงของคุณ
  const predefinedAmounts = [100, 150, 200, 250, 300, 350, 400, 450, 500, 1000, 2000, 3000];

  return (
    <div className="container">
      {!showQR ? (
        <div className="modal">
          <div className="modal-header">
            <h2>สแกน QRCode ฝาก</h2>
            <button className="close-button" onClick={() => setShowQR(false)}>×</button>
          </div>
          <p>กรุณากรอกจำนวนเงินที่ต้องการฝาก</p>
          <input
            type="number"
            placeholder="จำนวนเงิน (บาท)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
          />
          <div className="amount-buttons">
            {predefinedAmounts.map((amt) => (
              <button key={amt} className="amount-button" onClick={() => setAmount(amt)}>
                {amt.toLocaleString()}
              </button>
            ))}
          </div>
          <button className="generate-button" onClick={() => setShowQR(true)}>
            สร้าง QRCode
          </button>
        </div>
      ) : (
        <div className="qr-page">
          <h2 className="qr-title">PromptPay พร้อมเพย์</h2>
          <p className="qr-amount">THB {amount}</p>
          <QRCode 
            value={generatePayload(phoneNumber, { amount: parseFloat(amount) || 0 })} 
            size={250} 
            className="qr-code" 
          />
          <button className="download-button">ดาวน์โหลด QR Code</button>
          <p className="qr-instructions">รหัส QR นี้สามารถใช้ได้เพียงครั้งเดียวเท่านั้น</p>
        </div>
      )}
    </div>
  );
}
