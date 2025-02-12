import React from 'react';
import "../assets/styles/DeactivateAccount.css";

function DeactivateAccount() {
    return (
        <div className='form-component'>
            <h2>Delete Account</h2>
            <p>Once you've deleted your account, you will no longer be able to log in to the OneClick site or apps. This action cannot be undone.</p>
            <button className='deactivate-button'>Delete</button>
        </div>
    );
}

export default DeactivateAccount;
