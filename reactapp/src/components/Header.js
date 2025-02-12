// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/js/bootstrap.js";
// import "../assets/styles/Logo.css";
// import "../assets/styles/HeaderNavButton.css";
// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const dropdownRef = useRef(null); // Ref for dropdown
//   const navigate = useNavigate();

//   // Function to update login and admin states
//   const updateLoginStates = () => {
//     const userName = localStorage.getItem("userName");
//     const adminStatus = localStorage.getItem("isAdminLoggedIn") === "true";
//     setIsLoggedIn(!!userName || adminStatus); // Set logged-in state
//     setIsAdmin(adminStatus); // Set admin state
//   };

//   // Initial state update on component mount
//   useEffect(() => {
//     updateLoginStates();
//   }, []);

//   // Listen for changes in localStorage
//   useEffect(() => {
//     const handleStorageChange = () => {
//       updateLoginStates();
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setDropdownOpen((prev) => !prev);
//   };

//   // Close dropdown if clicked outside
//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("userName");
//     localStorage.removeItem("isAdminLoggedIn");
//     updateLoginStates();
//     navigate("/"); // Redirect to home page
//     setDropdownOpen(false);
//   };

//   return (
//     <header className="bg-light py-3 shadow-sm">
//       <div className="container d-flex justify-content-between align-items-center">
//         {/* Logo/Title */}
//         <Link className="logo-link" to="/">
//           <h1 className="h2 logo-link"> Task-Flow Services</h1>
//         </Link>

//         {/* Navigation Buttons */}
//         <div className="d-flex">
//           {/* Conditionally render buttons based on login state */}
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login" className="me-5 button-50" role="button">
//                 Sign Up / Log In
//               </Link>
//               <Link to="/become-tasker" className="button-50 me-5">
//                 Become a Tasker
//               </Link>
//             </>
//           ) : (
//             <div className="user-icon-container" ref={dropdownRef}>
//               <span className="icon" onClick={toggleDropdown}>
//                 👤
//               </span>
//               {isDropdownOpen && (
//                 <div className="dropdown-menu">
//                   <button onClick={handleLogout}>Logout</button>
//                   {isAdmin && (
//                     <>
//                       <button onClick={() => navigate("/admin-dashboard")}>
//                         Admin Dashboard
//                       </button>
//                       <button onClick={() => navigate("/manage-users")}>
//                         Manage Users
//                       </button>
//                       <button onClick={() => navigate("/manage-content")}>
//                         Manage Content
//                       </button>
//                       <button onClick={() => navigate("/handle-feedback")}>
//                         Handle Feedback
//                       </button>
//                     </>
//                   )}
//                 </div>
//               )}
//             </div>
//           )}

//           <Link to="/services" className="button-50">
//             Services
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "../assets/styles/Logo.css";
import "../assets/styles/HeaderNavButton.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown
  const navigate = useNavigate();

  // Function to update login state
  const updateLoginState = () => {
    const userName = localStorage.getItem("userName");
    setIsLoggedIn(!!userName); // Set logged-in state
  };

  // Initial state update on component mount
  useEffect(() => {
    updateLoginState();
  }, []);

  // Listen for changes in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      updateLoginState();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("userName");
    updateLoginState();
    navigate("/"); // Redirect to home page
    setDropdownOpen(false);
  };

  return (
    <header className="bg-light py-3 shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo/Title */}
        <Link className="logo-link" to="/">
          <h1 className="h2 logo-link"> Task-Flow Services</h1>
        </Link>

        {/* Navigation */}
        <div className="d-flex">
          {/* Show Sign Up / Log In only if user is NOT logged in */}
          {!isLoggedIn ? (
            <Link to="/login" className="button-50 me-5" role="button">
              Sign Up / Log In
            </Link>
          ) : (
            <div className="user-icon-container" ref={dropdownRef}>
              <span className="icon" onClick={toggleDropdown}>
                👤
              </span>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
