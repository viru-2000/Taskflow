import React from 'react';
import "../assets/styles/AccountBalance.css";

function AccountBalance() {
    return (
        <div className='form-component'>
            <h2>Account Balance</h2>
            <div className='balance-details'>
                <p>Balance: $0.00</p>
            </div>
        </div>
    );
}

export default AccountBalance;
