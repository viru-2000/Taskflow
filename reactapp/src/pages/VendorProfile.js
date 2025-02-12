import React, { useState } from "react";
import "../assets/styles/VendorProfile.css";

const VendorProfile = () => {
  const [vendor, setVendor] = useState({
    name: "Bhujbal",
    email: "Bhujbal@gmail.com",
    phone: "9874563210",
    location: "Nashik",
    expertise: "Virtual Assistance, Office",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setVendor({ ...vendor, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated!");
  };

  return (
    <div className="vendor-container">
      <h1 className="vendor-title">Vendor Profile</h1>
      <div className="vendor-details">
        <div className="vendor-avatar">
  
          <div className="avatar-placeholder"></div>
        </div>
        <div className="vendor-info">
          {!isEditing ? (
            <>
              <p>
                <strong>👤 Name:</strong> {vendor.name}
              </p>
              <p>
                <strong>✉️ Email:</strong> {vendor.email}
              </p>
              <p>
                <strong>📞 Phone:</strong> {vendor.phone}
              </p>
              <p>
                <strong>📍 Location:</strong> {vendor.location}
              </p>
              <p>
                <strong>🛠️ Expertise:</strong> {vendor.expertise}
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>👤 Name:</strong>{" "}
                <input
                  type="text"
                  name="name"
                  value={vendor.name}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>✉️ Email:</strong>{" "}
                <input
                  type="email"
                  name="email"
                  value={vendor.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>📞 Phone:</strong>{" "}
                <input
                  type="text"
                  name="phone"
                  value={vendor.phone}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>📍 Location:</strong>{" "}
                <input
                  type="text"
                  name="location"
                  value={vendor.location}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>🛠️ Expertise:</strong>{" "}
                <input
                  type="text"
                  name="expertise"
                  value={vendor.expertise}
                  onChange={handleChange}
                />
              </p>
            </>
          )}
        </div>
      </div>
      {!isEditing ? (
        <button className="edit-button" onClick={toggleEdit}>
          Edit Profile
        </button>
      ) : (
        <button className="edit-button" onClick={handleSave}>
          Save Changes
        </button>
      )}
    </div>
  );
};

export default VendorProfile;
