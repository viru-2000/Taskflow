import React from "react";
import "../assets/styles/Profile.css";
import UserLogo from "../assets/Images/UserLogo1.gif";

const Profile = () => {
  return (
    <div className="account-container">
      <h1 className="account-title">Account</h1>
      <div className="account-details">
        <div className="account-avatar">
          
            <img src={UserLogo} alt="Admin" />
        
        </div>
        <div className="account-info">
          <p>
            <i className="fas fa-user"></i> <strong> Shweta Padwal</strong>
          </p>
          <p>
            <i className="fas fa-envelope"></i> pafenev575@exoular.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 9876543210
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 462315
          </p>
          <p>
            <i className="fas fa-home"></i> Personal and Business Tasks
          </p>
        </div>
      </div>
      <button className="edit-button">Edit</button>
    </div>
  );
};

export default Profile;
