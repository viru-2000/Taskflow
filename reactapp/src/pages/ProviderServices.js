import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for collapse functionality
import { Link } from "react-router-dom";
import axios from "axios";

const ProviderServices = () => {
 
    
  
  const [description, setDescription] = useState("");
  const[service, setService] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/services', {
        service,
        description
      });

      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

 

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-8">
        <h1 className="text-center">Service Request Form</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              ServiceName
            </label>
            <input
              type="text"
              id="name"
              name="service"
              className="form-control"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            />
          </div>

          {/* Shop Name */}
          <div className="mb-3">
            <label htmlFor="shopName" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="shopName"
              name="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
          <div className="text-center mb-3">
            <Link to="/admin" className="btn btn-primary">
              Back to Dashboard
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProviderServices;
