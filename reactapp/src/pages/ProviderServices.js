import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import axios from "axios";

const ProviderServices = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [subCategory, setSubCategory] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/services/all");
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleServiceSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/services", {
        name,
        description,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Service submission failed:", error.message);
    }
  };

  const handleSubCategorySubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/subcategories/add", {
        subCategory,
        serviceId: selectedService,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Subcategory submission failed:", error.message);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-8">
        <h1 className="text-center">Service Request Form</h1>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Service Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="text-center mt-4">
            <button onClick={handleServiceSubmit} type="button" className="btn btn-success">Submit</button>
          </div>
        </form>

        <h2 className="text-center mt-5">Add Subcategory</h2>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="service" className="form-label">Select Service</label>
            <select
              id="service"
              className="form-control"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>{service.name}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="subCategory" className="form-label">Subcategory Name</label>
            <input
              type="text"
              id="subCategory"
              className="form-control"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            />
          </div>

          <div className="text-center mt-4">
            <button onClick={handleSubCategorySubmit} type="button" className="btn btn-success">Add Subcategory</button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/admin" className="btn btn-primary">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default ProviderServices;
