import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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
      alert("Login successful!");
      const userRole = storedUser.role;
      navigate(
        userRole === "admin"
          ? "/admin"
          : userRole === "vendor"
          ? "/vendor-dashboard"
          : "/userhome"
      );
    } else {
      setError("Invalid credentials!");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!role) {
      setError("Please select a role");
      return;
    }
    const newUser = { fullName, phoneNumber, email, password, role };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Signup successful! Please log in.");
    setCurrentForm("login");
  };

  const handleRoleSelection = (e) => {
    setRole(e.target.value);
  };

  const showForm = (form) => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setError("");
    setRole("");
    setCurrentForm(form);
  };

  return (
    <div style={styles.wrapper}>
      {currentForm === "options" && (
        <div style={styles.loginContainer}>
        
          <button
            style={styles.buttonPrimary}
            onClick={() => showForm("signup")}
          >
            Sign up
          </button>
          <button
            style={styles.buttonSecondary}
            onClick={() => showForm("login")}
          >
            Log in
          </button>
          <button
            style={styles.buttonSecondary}
            onClick={() => showForm("vendorLogin")}
          >
            Vendor Login
          </button>
        </div>
      )}

      {currentForm === "login" && (
        <div style={styles.loginContainer}>
          <h2>Log in</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.buttonPrimary}>
              Login
            </button>
            {error && <div style={styles.errorMessage}>{error}</div>}
            <p style={styles.switchText}>
              New user?{" "}
              <span onClick={() => showForm("signup")} style={styles.link}>
                Create an account
              </span>
            </p>
          </form>
        </div>
      )}

      {currentForm === "signup" && (
        <div style={styles.loginContainer}>
          <h2>Sign up</h2>
          <br />
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={styles.input}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />

            <h3 style={styles.roleHeader}>Select Role:</h3>
            <div style={styles.radioContainer}>
              <label>
                <input
                  type="radio"
                  value="user"
                  checked={role === "user"}
                  onChange={handleRoleSelection}
                />{" "}
                User
              </label>
              <label>
                <input
                  type="radio"
                  value="vendor"
                  checked={role === "vendor"}
                  onChange={handleRoleSelection}
                />{" "}
                Vendor
              </label>
              
              <label>
                <input
                  type="radio"
                  value="admin"
                  checked={role === "admin"}
                  onChange={handleRoleSelection}
                />{" "}
                Admin
              </label>
            </div>
            <br />

            <button type="submit" style={styles.buttonPrimary}>
              Create account
            </button>
            {error && <div style={styles.errorMessage}>{error}</div>}
          </form>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background:
      "url('https://source.unsplash.com/1600x900/?technology,services') no-repeat center center fixed",
    backgroundSize: "cover",
    backdropFilter: "blur(8px)",
  },
  loginContainer: {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "40px",
    borderRadius: "16px",
    width: "400px",
    textAlign: "center",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
    border: "3px solid rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "2px solid #ccc",
    marginBottom: "15px",
    background: "#f9f9f9",
    transition: "all 0.3s ease-in-out",
  },
  buttonPrimary: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    border: "none",
    color: "white",
    fontSize: "1.1rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
  },
  buttonSecondary: {
    width: "100%",
    padding: "12px",
    background: "transparent",
    border: "2px solid #007bff",
    color: "#007bff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
  errorMessage: {
    color: "#e74c3c",
    marginTop: "10px",
  },
  switchText: {
    marginTop: "10px",
  },
  link: {
    color: "#007bff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  radioContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "10px",
  },
};

export default Login;
