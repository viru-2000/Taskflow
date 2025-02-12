import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const { login, user, isAdmin, isVendor } = useAuth();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [currentForm, setCurrentForm] = useState("options");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (isAdmin()) {
        navigate("/admin");
      } else if (isVendor()) {
        navigate("/vendor-dashboard");
      } else {
        navigate("/userhome");
      }
    }
  }, [user, isAdmin, isVendor, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setError("");
      toast.success("Login successful!", { autoClose: 2000 });
      setTimeout(() => {
        navigate(
          storedUser.role === "admin"
            ? "/admin"
            : storedUser.role === "vendor"
            ? "/vendor-dashboard"
            : "/userhome"
        );
      }, 2000);
    } else {
      setError("Invalid credentials!");
      toast.error("Invalid credentials!", { autoClose: 2000 });
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      toast.error("Please select a role", { autoClose: 2000 });
      return;
    }
    const newUser = { fullName, phoneNumber, email, password, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    toast.success("Signup successful! Please log in.", { autoClose: 2000 });
    setTimeout(() => setCurrentForm("login"), 2000);
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
          <form onSubmit={handleSubmit}>
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
