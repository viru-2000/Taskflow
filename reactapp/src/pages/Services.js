import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/service.css";
import serviceData from "../data/serviceData";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      {/* Placeholder for header space with "Our Services" text */}
      <div
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          backgroundColor: "#f8f9fa",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        Our Services
      </div>
      <div className="serviceline"></div>
      <section className="services-section">
        <h2>Your Task, Our Priority</h2>
        <div className="service-category">
          {serviceData.map((service, index) => (
            <div className="service-card" key={index}>
              {/* Service Image */}
              <img src={service.image} alt={service.alt} />

              {/* Service Title */}
              <h3>
                <Link
                  to={`/title-service/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {service.title}
                </Link>
              </h3>

              {/* Service Description */}
              <p>{service.description}</p>
              <hr />

              {/* List of Service Tasks */}
              <ul>
                {service.tasks.map((task) => (
                  <li key={task.taskId}>
                    <Link
                      to={`/service-details/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${task.taskId}`}
                    >
                      {task.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
