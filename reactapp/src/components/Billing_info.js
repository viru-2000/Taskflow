import React, { useState } from "react";
import '../assets/styles/Billing_info.css';

const Billing_info = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleInputChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleSave = () => {
    console.log("Card number saved:", cardNumber);
  };

  const handleCancel = () => {
    setCardNumber("");
    console.log("Edit cancelled");
  };

  return (
    <div className="billing-container">
      <h2 className="billing-title">Edit Billing Info</h2>
      <div className="input-container">
        <input
          type="text"
          className="card-input"
          placeholder="Card number"
          value={cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="billing-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
      <p className="billing-note">
        Payment method will update for all tasks, including the ones currently
        open.
      </p>
    </div>
  );
};

export default Billing_info;
