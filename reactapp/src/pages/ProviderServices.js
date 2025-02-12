import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS for collapse functionality
import { Link } from "react-router-dom";

const ProviderServices = () => {
  const services = {
    "Featured Tasks": [
      "Furniture Assembly",
      "Home Repairs",
      "Help Moving",
      "Heavy Lifting",
      "Home Cleaning",
      "Painting",
    ],
    // Handyman: [
    //   "Door, Cabinet & Furniture Repair",
    //   "Appliance Installation & Repairs",
    //   "Furniture Assembly",
    //   "TV Mounting",
    //   "Electrical Help",
    //   "Plumbing",
    //   "Painting",
    // ],
    // "Moving Services": [
    //   "Help Moving",
    //   "Track Assisted Help Moving",
    //   "Packing Services & Help",
    //   "Heavy Lifting",
    //   "Local Movers",
    //   "Full Service Help Moving",
    // ],
    // "Furniture Assembly": [
    //   "Desk Assembly",
    //   "Dresser Assembly",
    //   "Bed Assembly",
    //   "Bookshelf Assembly",
    //   "Wardrobe Assembly",
    // ],
    // Cleaning: [
    //   "House Cleaning Services",
    //   "Deep Cleaning",
    //   "Disinfecting Services",
    //   "One Time Cleaning Services",
    //   "Laundry Help",
    // ],
    // "Holiday Help": [
    //   "Gift Wrapping Services",
    //   "Holiday Decorating",
    //   "Party Cleaning",
    // ],
    // "Personal Assistant": [
    //   "Personal Assistant",
    //   "Organization",
    //   "Organize Home",
    //   "Interior Design Service",
    //   "Virtual Assistant",
    //   "Dog Walking",
    // ],
    // "Virtual Tasks": [
    //   "Virtual Assistant",
    //   "Organization",
    //   "Data Entry",
    //   "Computer Help",
    // ],
    // "Office Services": [
    //   "Office Cleaning",
    //   "Office Movers",
    //   "Office Supply & Snack Delivery",
    //   "Office Setup & Organization",
    //   "Office Interior Design",
    //   "Office Mounting Service",
    // ],
  };

  const [selectedSubServices, setSelectedSubServices] = useState({});
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Shop Name: ${shopName}\nShop Address: ${shopAddress}\nName: ${name}\nMobile No: ${mobileNo}\nSelected Sub Services: ${Object.keys(
        selectedSubServices
      )
        .map(
          (mainService) =>
            `${mainService}: ${selectedSubServices[mainService].join(", ")}`
        )
        .join("\n")}`
    );
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-8">
        <h1 className="text-center">Service Request Form</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Shop Name */}
          <div className="mb-3">
            <label htmlFor="shopName" className="form-label">
              Shop Name
            </label>
            <input
              type="text"
              id="shopName"
              name="shopName"
              className="form-control"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>

          {/* Shop Address */}
          <div className="mb-3">
            <label htmlFor="shopAddress" className="form-label">
              Shop Address
            </label>
            <input
              type="text"
              id="shopAddress"
              name="shopAddress"
              className="form-control"
              value={shopAddress}
              onChange={(e) => setShopAddress(e.target.value)}
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              className="form-control"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>

          {/* Accordion for services */}
          <div className="accordion" id="serviceAccordion">
            {Object.keys(services).map((service, index) => (
              <div className="accordion-item" key={service}>
                <h2 className="accordion-header" id={`heading-${index}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse-${index}`}
                  >
                    {service}
                  </button>
                </h2>
                <div
                  id={`collapse-${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading-${index}`}
                  data-bs-parent="#serviceAccordion"
                >
                  <div className="accordion-body">
                    {services[service].map((subService) => (
                      <div className="form-check" key={subService}>
                        <input
                          type="checkbox"
                          id={subService}
                          value={subService}
                          className="form-check-input"
                          onChange={(e) => handleSubServiceChange(service, e)}
                          checked={
                            selectedSubServices[service]?.includes(
                              subService
                            ) || false
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor={subService}
                        >
                          {subService}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
