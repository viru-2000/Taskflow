import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation
import UserFeedback from "../components/UserFeedback"; // Import the User Feedback component
import "../assets/styles/admin.css";
import Userfeedback from "../components/UserFeedback";
import AdminLogo from "../assets/Images/AdminLogo.gif";

const AdminPanel = () => {
  const services = [
    "Furniture Assembly",
    "Home Repairs",
    "Help Moving",
    "Heavy Lifting",
    "Home Cleaning",
    "Painting",
  ];

  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear user session data (e.g., remove token from localStorage)
    localStorage.removeItem("userToken"); // Replace with your auth logic

    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <img src={AdminLogo} alt="Admin" /> ADMIN
        <ul>
          <li>
            <Link to="/providerservices">Provider Services</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/providers">Providers</Link>
          </li>
          <li>
            <Link to="/userfeedbacktoadmin">User Feedback</Link>{" "}
          </li>
          <li>
            <Link to="/reportsanalytics">Reports Analytics</Link>{" "}
          </li>
          <li>
            <Link to="/servicemanagement">Service Managements</Link>{" "}
          </li>
          <li>
            <Link to="/billingpayments">Billing Payments</Link>{" "}
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>{" "}
        {/* Logout Button */}
      </nav>

      <main className="dashboard-content">
        <header className="header">
          <h1>Dashboard Summary</h1>
        </header>
        <section className="cards">
          {[
            { title: "Total Revenue", value: "500 Rs.", color: "blue" },
            { title: "Complete Orders", value: "2 Orders", color: "green" },
            { title: "Cancelled Orders", value: "0", color: "red" },
            { title: "Total Orders", value: "2", color: "yellow" },
          ].map((card, index) => (
            <div key={index} className={`card ${card.color}`}>
              <h3>{card.title}</h3>
              <p>{card.value}</p>
            </div>
          ))}
        </section>

        <section className="services">
          <h2>Total Order of Services</h2>
          <div className="service-grid">
            {services.map((service, index) => (
              <div key={index} className="service">
                {service} <p>20</p>
                {/* Add link to navigate to customer list page */}
                <Link to="/admin/customers">View All Customers</Link>
              </div>
            ))}
          </div>
        </section>

        
      </main>
    </div>
  );
};

export default AdminPanel;
