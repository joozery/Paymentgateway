import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import generatePayload from "promptpay-qr"; // ใช้ไลบรารีที่ถูกต้อง
import "./PromptPayQR.css";
import PaymentSuccessPopup from "./PaymentSuccessPopup";

export default function PromptPayQR() {
  const [amount, setAmount] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [countdown, setCountdown] = useState(300); // ตั้งเวลา 5 นาที (300 วินาที)
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const phoneNumber = "0838346686"; // ใส่เบอร์ PromptPay จริงของคุณ
  const predefinedAmounts = [100, 150, 200, 250, 300, 350, 400, 450, 500, 1000, 2000, 3000];

  useEffect(() => {
    if (showQR && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [showQR, countdown]);

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setTimeout(() => {
      setPaymentSuccess(false);
      setShowQR(false);
      setAmount("");
      setCountdown(300);
    }, 3000);
  };

  return (
    <div className="container">
      {paymentSuccess && <PaymentSuccessPopup onClose={() => setPaymentSuccess(false)} />}
      {!showQR ? (
        <div className="modal">
          <div className="modal-header" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <h2>สแกน QRCode ฝาก</h2>
          </div>
          <p>กรุณากรอกจำนวนเงินที่ต้องการฝาก</p>
          <input
            type="number"
            placeholder="จำนวนเงิน (บาท)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            style={{ width: "90%", maxWidth: "300px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
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
          <p className="qr-timer">QR Code จะหมดอายุใน {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, "0")} นาที</p>
          <button className="download-button">ดาวน์โหลด QR Code</button>
          <button className="payment-button" onClick={handlePaymentSuccess}>ชำระเงินเสร็จสิ้น</button>
          <p className="qr-instructions">รหัส QR นี้สามารถใช้ได้เพียงครั้งเดียวเท่านั้น</p>
        </div>
      )}
    </div>
  );
}