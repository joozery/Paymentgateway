import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import './Dashboard.css'; // ถ้ามีไฟล์ CSS สำหรับ Dashboard

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-area">
                <Header />
                <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;
