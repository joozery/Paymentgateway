import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PromptPayQR from "./PromptPayQR";
import LoginDashboard from "./LoginDashboard";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route สำหรับหน้า Login (เป็นหน้าหลัก) */}
        <Route path="/" element={<LoginDashboard />} />

        {/* Route สำหรับหน้า Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Route สำหรับหน้า PromptPay */}
        <Route
          path="/promptpay"
          element={
            <div>
              <h1>ระบบชำระเงิน QR PromptPay</h1>
              <PromptPayQR />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
