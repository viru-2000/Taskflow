import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [currentForm, setCurrentForm] = useState("options");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      navigate("/userhome"); // Redirect to homepage if already logged in
    }
  }, [navigate]);

  // **🔹 Handle Login**
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token); 
      localStorage.setItem("userRole", response.data.role); 

      toast.success("Login successful!", { autoClose: 2000 });

      setTimeout(() => {
        navigate(
          response.data.role === "ADMIN"
            ? "/admin"
            : response.data.role === "VENDOR"
            ? "/vendor-dashboard"
            : "/userhome"
        );
      }, 2000);
    } catch (error) {
      setError("Invalid credentials!");
      toast.error("Invalid credentials!", { autoClose: 2000 });
    }
  };

  // **🔹 Handle Signup**
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      toast.error("Please select a role", { autoClose: 2000 });
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/users/register", {
        fullName,
        phoneNumber,
        email,
        password,
        role,
      });
    
      toast.success("Signup successful! Please log in.", { autoClose: 2000 });
      setTimeout(() => setCurrentForm("login"), 2000);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Signup failed! Try again.");
      toast.error(error.response?.data?.message || "Signup failed! Try again.", { autoClose: 2000 });
    }
};  
  return (
    <div className="container mt-5">
      <ToastContainer />
      {currentForm === "options" && (
        <div className="text-center">
          <button className="btn btn-primary m-2" onClick={() => setCurrentForm("signup")}>Sign up</button>
          <button className="btn btn-success m-2" onClick={() => setCurrentForm("login")}>Log in</button>
          <button className="btn btn-warning m-2" onClick={() => setCurrentForm("vendorLogin")}>Vendor Login</button>
        </div>
      )}
      
      {currentForm === "login" && (
        <div className="card p-4 shadow w-50 mx-auto">
          <h2 className="text-center">Log in</h2>
          <form onSubmit={handleLogin}>
            <input type="email" className="form-control my-2" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="btn btn-primary w-100">Login</button>
            {error && <div className="text-danger mt-2">{error}</div>}
          </form>
        </div>
      )}

      {currentForm === "signup" && (
        <div className="card p-4 shadow w-50 mx-auto">
          <h2 className="text-center">Sign up</h2>
          <form onSubmit={handleSignUp}>
            <input type="text" className="form-control my-2" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <input type="tel" className="form-control my-2" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <input type="email" className="form-control my-2" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <h3 className="mt-3">Select Role:</h3>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="user" checked={role === "user"} onChange={(e) => setRole(e.target.value)} />
              <label className="form-check-label">User</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="vendor" checked={role === "vendor"} onChange={(e) => setRole(e.target.value)} />
              <label className="form-check-label">Vendor</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="admin" checked={role === "admin"} onChange={(e) => setRole(e.target.value)} />
              <label className="form-check-label">Admin</label>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">Create account</button>
            {error && <div className="text-danger mt-2">{error}</div>}
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
