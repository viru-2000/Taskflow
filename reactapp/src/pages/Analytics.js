import React from "react";
import "../assets/styles/Analytics.css";

export default function Analytics() {
  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Total Revenue</h3>
          <p> 150 Rs this month</p>
        </div>
        <div className="analytics-card">
          <h3>Completed Tasks</h3>
          <p>2 tasks completed this month</p>
        </div>
        <div className="analytics-card">
          <h3>Customer Ratings</h3>
          <p>4.7 stars (Based on 25 reviews)</p>
        </div>
        <div className="analytics-card">
          <h3>Top Performing Services</h3>
          <ul>
            <li>Plumbing - 20 tasks</li>
            <li>Cleaning - 15 tasks</li>
            <li>Virtual Assistance - 5 tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
