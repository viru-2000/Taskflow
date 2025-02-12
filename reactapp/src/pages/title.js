// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "../assets/styles/title.css";
// import titleserviceData from "../data/titleserviceData";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const TaskCard = ({ task }) => (
//   <div key={task.taskId} className="task-card">
//     <div className="task-card-image">
//       <img src={task.image} alt={task.alt} />
//     </div>
//     <div className="task-card-content">
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <button type="button" className="task-submit-btn">Book Now</button>
//     </div>
//   </div>
// );

// const Titleservice = () => {
//   const { id } = useParams();
//   const [category, setCategory] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const foundCategory = titleserviceData.find(
//       (cat) => cat.id.toLowerCase() === id.toLowerCase()
//     );
//     setCategory(foundCategory);
//     setLoading(false);
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (

//     <div className="title-service-page">
//       <Header/>
//       {category ? (
        
//         <>
        
//           {/* Header Section */}
//           <header className="category-header">
//             <div className="header-image">
//               <img src={category.headerImage} alt={`${category.title} banner`} />
//             </div>
//             <div className="header-content">
//               <h1>{category.title}</h1>
//               <p>{category.description}</p>
//             </div>
//           </header>
        


//           {/* Main Task List Section */}
//           <section className="task-list">
//             <h2>Available Services</h2>
//             <div className="task-cards-container">
//               {category.tasks.length ? (
//                 category.tasks.map((task) => <TaskCard key={task.taskId} task={task} />)
//               ) : (
//                 <p>No tasks available for this category.</p>
//               )}
//             </div>
//           </section>
//         </>
//       ) : (
//         <p>Category not found.</p>
//       )}
//       <Footer/>
//     </div>
//   );
// };

// export default Titleservice;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/styles/title.css";
import titleserviceData from "../data/titleserviceData";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking`); // Navigate to the booking page with task ID
  };

  return (
    <div key={task.taskId} className="task-card">
      <div className="task-card-image">
        <img src={task.image} alt={task.alt} />
      </div>
      <div className="task-card-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <button
          type="button"
          className="task-submit-btn"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

const Titleservice = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCategory = titleserviceData.find(
      (cat) => cat.id.toLowerCase() === id.toLowerCase()
    );
    setCategory(foundCategory);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="title-service-page">
      {/* <Header /> */}
      {category ? (
        <>
          {/* Header Section */}
          <header className="category-header  banner-color">
            {/* <div className="header-image">
              <img src={category.headerImage} alt={`${category.title} banner`} />
            </div> */}
            <div className="header-content ">
              <h1>{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </header>

          {/* Main Task List Section */}
          <section className="task-list">
            <h2>Available Services</h2>
            <div className="task-cards-container">
              {category.tasks.length ? (
                category.tasks.map((task) => <TaskCard key={task.taskId} task={task} />)
              ) : (
                <p>No tasks available for this category.</p>
              )}
            </div>
          </section>
        </>
      ) : (
        <p>Category not found.</p>
      )}
      {/* <Footer /> */}
    </div>
  );
};

export default Titleservice;
