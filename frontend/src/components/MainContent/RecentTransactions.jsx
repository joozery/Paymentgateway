import React from 'react';
import './RecentTransactions.css';

const RecentTransactions = () => {
    return (
        <div className="transaction-details">
            <h4>Recent Transactions</h4>
            <ul>
                <li><span>Transaction #1234</span> - $1200</li>
                <li><span>Transaction #5678</span> - $800</li>
                <li><span>Transaction #9101</span> - $1500</li>
            </ul>
        </div>
    );
};

export default RecentTransactions;
