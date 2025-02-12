import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../assets/styles/Account.css";
import UserLogo from "../assets/Images/UserLogo.gif";

export default function Account() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear user session data (e.g., remove token from localStorage)
    localStorage.removeItem("userToken"); // Replace with your auth logic

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="account-component">
      {/* Sidebar */}
      <div className="account-sidebar">
        <img src={UserLogo} alt="Admin" /> User Dashbord
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="password">Password</Link>
            </li>
            <li>
              <Link to="notifications">Notifications</Link>
            </li>
            <li>
              <Link to="billing-info">Billing Info</Link>
            </li>
            <li>
              <Link to="cancel-task">Cancel a Task</Link>
            </li>
            <li>
              <Link to="transactions">Transactions</Link>
            </li>
            <li>
              <Link to="deactivate">Delete Account</Link>
            </li>
            <li>
              <Link to="userfeedback">User Feedback</Link>
            </li>
          </ul>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>{" "}
        </nav>
      </div>

      {/* Content Area for Nested Routes */}
      <div className="account-content">
        <Outlet /> {/* Nested routes will be rendered here */}
      </div>
    </div>
  );
}
