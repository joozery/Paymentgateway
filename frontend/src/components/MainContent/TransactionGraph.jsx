import React from 'react';
import { Line } from 'react-chartjs-2'; // ใช้ Line Chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './TransactionGraph.css';

// ตั้งค่า Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ข้อมูลสำหรับกราฟ
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            label: 'ยอดที่โอนเข้า',
            data: [1200, 1500, 1800, 1300, 1700, 1600],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        },
    ],
};

const TransactionGraph = () => {
    return (
        <div className="payment-graph">
            <h4>Transaction Trends (Last 6 Months)</h4>
            <Line data={data} />
        </div>
    );
};

export default TransactionGraph;
