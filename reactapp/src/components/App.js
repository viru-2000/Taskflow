// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import NavbarBecomeTasker from "../components/NavbarBecomeTasker"; // Navbar for Become Tasker page
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // Get the current route location
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname === "/become-tasker" ? (
        <NavbarBecomeTasker />
      ) : (
        <Navbar />
      )}

      <main>
        <AppRoutes /> {/* Main route rendering */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
