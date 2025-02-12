import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";

const ServiceRequest = () => {
  const services = {
    "Featured Tasks": [
      "Furniture Assembly",
      "Home Repairs",
      "Help Moving",
      "Heavy Lifting",
      "Home Cleaning",
      "Painting",
    ],
    Handyman: [
      "Door, Cabinet & Furniture Repair",
      "Appliance Installation & Repairs",
      "Furniture Assembly",
      "TV Mounting",
      "Electrical Help",
      "Plumbing",
      "Painting",
    ],
    "Moving Services": [
      "Help Moving",
      "Track Assisted Help Moving",
      "Packing Services & Help",
      "Heavy Lifting",
      "Local Movers",
      "Full Service Help Moving",
    ],
    "Furniture Assembly": [
      "Desk Assembly",
      "Dresser Assembly",
      "Bed Assembly",
      "Bookshelf Assembly",
      "Wardrobe Assembly",
    ],
    Cleaning: [
      "House Cleaning Services",
      "Deep Cleaning",
      "Disinfecting Services",
      "One Time Cleaning Services",
      "Laundry Help",
    ],
    "Holiday Help": [
      "Gift Wrapping Services",
      "Holiday Decorating",
      "Party Cleaning",
    ],
    "Personal Assistant": [
      "Personal Assistant",
      "Organization",
      "Organize Home",
      "Interior Design Service",
      "Virtual Assistant",
      "Dog Walking",
    ],
    "Virtual Tasks": [
      "Virtual Assistant",
      "Organization",
      "Data Entry",
      "Computer Help",
    ],
    "Office Services": [
      "Office Cleaning",
      "Office Movers",
      "Office Supply & Snack Delivery",
      "Office Setup & Organization",
      "Office Interior Design",
      "Office Mounting Service",
    ],
  };

  const [selectedSubServices, setSelectedSubServices] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    bookingDate: "",
  });

  const navigate = useNavigate();

  const handleSubServiceChange = (mainService, event) => {
    const { value, checked } = event.target;
    setSelectedSubServices((prev) => {
      const updatedSubServices = prev[mainService] || [];
      if (checked) {
        return {
          ...prev,
          [mainService]: [...updatedSubServices, value],
        };
      } else {
        return {
          ...prev,
          [mainService]: updatedSubServices.filter(
            (subService) => subService !== value
          ),
        };
      }
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedServices = Object.keys(selectedSubServices)
      .map(
        (mainService) =>
          `${mainService}: ${selectedSubServices[mainService].join(", ")}`
      )
      .join("\n");

    // Navigate to the confirmation page with state
    navigate("/confirmation", {
      state: {
        formData,
        selectedServices,
      },
    });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 p-4 shadow rounded bg-light">
          <h1 className="text-center mb-4" style={{ color: "#007bff" }}>
            Add a Service
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="date"
                  name="bookingDate"
                  className="form-control"
                  value={formData.bookingDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="row my-4">
              {Object.keys(services).map((service) => (
                <div className="col-md-4 " key={service}>
                  <div className="bg-light border-primary p-3 border rounded shadow-sm ">
                    <h5 className="text-primary">{service}</h5>
                    {services[service].map((subService) => (
                      <div className="form-check" key={subService}>
                        <input
                          type="checkbox"
                          id={subService}
                          value={subService}
                          className="form-check-input"
                          onChange={(e) => handleSubServiceChange(service, e)}
                        />
                        <label
                          htmlFor={subService}
                          className="form-check-label"
                        >
                          {subService}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Add Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;