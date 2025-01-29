import React, { useEffect } from "react";
import "./PaymentSuccessPopup.css";

export default function PaymentSuccessPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Popup จะปิดอัตโนมัติใน 3 วินาที
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>ชำระเงินเรียบร้อย</h2>
        <p>ขอบคุณสำหรับการชำระเงิน</p>
      </div>
    </div>
  );
}
