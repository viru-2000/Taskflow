import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/vendordash.css";  // You can create a separate VendorDashboard.css if needed

export default function VendorDashboard() {
  return (
    <div className="vendor-dashboard-container">
      {/* Sidebar */}
      <div className="vendor-dashboard-sidebar">
        <h2>Vendor Dashboard</h2>
        <nav>
          <ul>
          <li>
              <Link to="profile">Profile</Link>
            </li>
            <li>
              <Link to="overview">Overview</Link>
            </li>
            <li>
              <Link to="orders">Orders</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>

          </ul>
        </nav>
      </div>

      {/* Content Area for Nested Routes */}
      <div className="vendor-dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}
