// src/components/Overview.js
import React from "react";
import '../assets/styles/Overview.css'

export default function Overview() {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <p>Welcome to your dashboard! Here’s a quick overview of your recent activity.</p>
      <div>
        <h3>Pending Tasks</h3>
        <p>You have 3 pending service requests.</p>
      </div>
      <div>
        <h3>Completed Tasks</h3>
        <p>You have completed 10 tasks this week.</p>
      </div>
      <div>
        <h3>Ratings & Reviews</h3>
        <p>Your average rating is 4.5 stars.</p>
      </div>
    </div>
  );
}
