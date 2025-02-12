import React, { useState } from "react";
import "../assets/styles/UserFeedback.css";
import { Link } from "react-router-dom";
const Userfeedback = ({ userId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the feedback data
    const feedbackData = {
      userId,
      rating,
      comment,
      date: new Date().toISOString(),
    };

    // Simulate an API call to submit feedback
    try {
      // Here, replace with a real API request to store the feedback
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
      setSuccessMessage("Feedback submitted successfully!");
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting feedback", error);
    }
  };

  return (
    <div className="user-feedback-form">
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="text-center mb-3">
        <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default Userfeedback;
