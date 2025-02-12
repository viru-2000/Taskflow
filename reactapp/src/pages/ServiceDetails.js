// import React from "react";
// import { useParams } from "react-router-dom";
// import "../assets/styles/SD.css";

// import serviceDetailsData from "../data/serviceDetailsData"
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const ServiceDetails = () => {
//   const { taskId } = useParams(); // Get taskId from the URL

//   // Find the matching service data
//   const service = serviceDetailsData.find((item) => item.id === taskId);

//   if (!service) {
//     return <h1>Task Not Found</h1>; // Handle invalid taskId
//   }

//   return (
//     <div>
//       {/* Banner Section */}
//       <Header/>
//       <header
//         style={{
//           backgroundImage: `url(${service.banner.backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           color: "#fff", // Ensure text is visible on the background
//           padding: "50px",
//           textAlign: "center",
//         }}
//       >
//         {/* Content Wrapper with White Background */}
//         <div
//           style={{
//             backgroundColor: "white", // White background for the content
//             padding: "30px", // Add padding for the content
//             borderRadius: "10px", // Optional: rounded corners
//             boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: shadow effect
//             maxWidth: "800px", // Optional: control width of the content
//             margin: "0 auto", // Center the content horizontally
//           }}
//         >
//           <h1>{service.banner.heading}</h1>
//           <p>{service.banner.description}</p>
//           <button>{service.banner.buttonText}</button>
//         </div>
//       </header>

//       {/* Service Info Section */}
//       <section>
//         <h2>{service.serviceInfo.heading}</h2>
//         {service.serviceInfo.description.map((text, index) => (
//           <p key={index}>{text}</p>
//         ))}
//       </section>

//       {/* How It Works Section */}
//       <section>
//         <h2>{service.howItWorks[0].heading}</h2>
//         <div style={{ display: "flex", gap: "20px" }}>
//           {service.howItWorks.slice(1).map((step, index) => (
//             <div key={index} style={{ textAlign: "center" }}>
//               <img
//                 src={step.image}
//                 alt={step.alt}
//                 style={{ width: "100px", height: "100px" }}
//               />
//               <h3>{step.heading}</h3>
//               <p>{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQs Section */}
//       <section>
//         <h2>FAQs</h2>
//         {service.faq.map((item, index) => (
//           <div key={index}>
//             <h3>{item.question}</h3>
//             <p>{item.answer}</p>
//           </div>
//         ))}
//       </section>
//       <Footer/>
//     </div>

//   );
// };

// export default ServiceDetails;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/SD.css";

import serviceDetailsData from "../data/serviceDetailsData";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const ServiceDetails = () => {
  const { taskId } = useParams(); // Get taskId from the URL
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Find the matching service data
  const service = serviceDetailsData.find((item) => item.id === taskId);

  if (!service) {
    return <h1>Task Not Found</h1>; // Handle invalid taskId
  }

  // Function to handle button click and navigate to booking page
  const handleBookingClick = () => {
    navigate("/booking"); // Navigate to the booking page (adjust the path if needed)
  };

  return (
    <div>
      {/* Banner Section */}
      {/* <Header /> */}
      <header
        style={{
          backgroundImage: `url(${service.banner.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff", // Ensure text is visible on the background
          padding: "50px",
          textAlign: "center",
        }}
      >
        {/* Content Wrapper with White Background */}
        <div
          style={{
            backgroundColor: "white", // White background for the content
            padding: "30px", // Add padding for the content
            borderRadius: "10px", // Optional: rounded corners
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: shadow effect
            maxWidth: "800px", // Optional: control width of the content
            margin: "0 auto", // Center the content horizontally
          }}
        >
          <h1>{service.banner.heading}</h1>
          <p>{service.banner.description}</p>
          <button onClick={handleBookingClick}>{service.banner.buttonText}</button>
        </div>
      </header>

      {/* Service Info Section */}
      <section>
        <h2>{service.serviceInfo.heading}</h2>
        {service.serviceInfo.description.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </section>

      {/* How It Works Section */}
      <section>
        <h2>{service.howItWorks[0].heading}</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {service.howItWorks.slice(1).map((step, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <img
                src={step.image}
                alt={step.alt}
                style={{ width: "100px", height: "100px" }}
              />
              <h3>{step.heading}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section>
        <h2>FAQs</h2>
        {service.faq.map((item, index) => (
          <div key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
     
    </div>
  );
};

export default ServiceDetails;
