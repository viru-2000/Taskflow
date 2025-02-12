import React from 'react';
import "../assets/styles/Password.css";

function Password() {
    return (
        <div className='form-component'>
            <h2>Change Password</h2>
            <form>
                <label>New Password:</label>
                <input type='password' />
                <br/><br/>
                <button type='submit'>Update</button>
            </form>
        </div>
    );
}

export default Password;
