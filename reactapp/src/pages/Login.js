import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "USER",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        email: userData.email,
        password: userData.password,
      });
      toast.success("✅ Login successful!", { position: "top-right" });
      navigate("/userhome"); // Redirect to dashboard
    } catch (error) {
      setError("Invalid email or password");
      toast.error("❌ Invalid credentials!",  { position: "top-right" });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", userData);
      toast.success("✅ Signup successful! Please log in.", { position: "top-right" });
      setCurrentForm("login");
      setUserData({ name: "", email: "", phone: "", password: "", role: "USER" }); // Reset form
    } catch (error) {
      setError("Registration failed");
      toast.error("❌ Signup failed!", { position: "top-right" });
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        {currentForm === "login" ? (
          <form onSubmit={handleLogin}>
            <h2 className="text-center mb-3">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <input type="email" className="form-control" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <p className="mt-3 text-center">
              Don't have an account? <span onClick={() => setCurrentForm("signup")} className="text-primary" style={{ cursor: "pointer" }}>Sign Up</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            <h2 className="text-center mb-3">Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
              <input type="text" className="form-control" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" name="password" placeholder="Password" value={userData.password} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <select className="form-control" name="role" value={userData.role} onChange={handleChange}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">Sign Up</button>
            <p className="mt-3 text-center">
              Already have an account? <span onClick={() => setCurrentForm("login")} className="text-primary" style={{ cursor: "pointer" }}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
