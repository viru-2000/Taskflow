import React from "react";
import { Link, useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { formData, selectedServices, vendor } = location.state || {};

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10 p-4 shadow rounded bg-light">
          <h1 className="text-center mb-4" style={{ color: "#28a745" }}>
            Booking Confirmation
          </h1>
          <h4>Booking Details:</h4>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Phone:</strong> {formData.phone}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>Booking Date:</strong> {formData.bookingDate}
          </p>

          <h4>Selected Services:</h4>
          <pre>{selectedServices}</pre>

          <h4>Vendor Details:</h4>
          {vendor ? (
            <>
              <p>
                <strong>Vendor Name:</strong> {vendor.name}
              </p>
              <p>
                <strong>Rating:</strong> {vendor.rating} ⭐
              </p>
              <p>
                <strong>Hourly Rate:</strong> {vendor.hourlyRate}
              </p>
              <p>
                <strong>Tasks Completed:</strong> {vendor.tasksCompleted}
              </p>
              <p>
                <strong>Distance:</strong> {vendor.distance} km
              </p>
            </>
          ) : (
            <p>No vendor selected.</p>
          )}

          {/* Google Map */}
          <div className="col-md-3 ">
            <h6 className="mb-10 mt-10">Our Location</h6>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8062.563812507751!2d73.84506268081226!3d20.041490400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddea68870d56c7%3A0xdcdd72fe89fc2e94!2sMET%20Bhujbal%20Knowledge%20City!5e1!3m2!1sen!2sin!4v1735503182422!5m2!1sen!2sin"
                width="600"
                height="350"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <button>
            <Link to="/payment" className="me-5 button-50" role="button">
              Payment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
