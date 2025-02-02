import { useState } from "react";
import "./LoginDashboard.css"; // ใช้สไตล์จาก LoginDashboard.css

const LoginDashboard = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState("");

  const handleLogin = () => {
    if (!account || !password) {
      alert("Please input Account and Password");
      return;
    }
    console.log("Logging in with", { account, password, googleAuth });
    // เชื่อมต่อ API ได้ที่นี่
  };

  return (
    <div className="login-container">
      {/* ส่วนซ้าย - ฟอร์ม Login */}
      <div className="login-form">
        <h2>Login to your Dashboard</h2>

        <div className="input-container">
          <input
            type="text"
            placeholder="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="input-container auth-container">
          <input
            type="text"
            placeholder="Google Auth"
            value={googleAuth}
            onChange={(e) => setGoogleAuth(e.target.value)}
            className="input-field auth-input"
          />
          <button className="auth-button">Bind Google Auth</button>
        </div>

        <select className="dropdown">
          <option value="en">English</option>
          <option value="th">ไทย</option>
        </select>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>

      {/* ส่วนขวา - โลโก้ */}
      <div className="login-logo">
        <h1>AUTOPAY</h1>
      </div>
    </div>
  );
};

export default LoginDashboard;
