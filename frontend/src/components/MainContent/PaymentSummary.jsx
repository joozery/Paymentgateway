import React from 'react';
import './PaymentSummary.css';

const PaymentSummary = () => {
    return (
        <div className="payment-summary">
            <div className="payment-card">
                <h4>Total Transactions</h4>
                <p>$5,120</p>
            </div>
            <div className="payment-card">
                <h4>Pending Payments</h4>
                <p>$300</p>
            </div>
            <div className="payment-card">
                <h4>Successful Payments</h4>
                <p>$4,820</p>
            </div>
        </div>
    );
};

export default PaymentSummary;
