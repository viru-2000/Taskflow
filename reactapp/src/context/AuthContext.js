// import React, { createContext, useState, useContext } from "react";

// // Create context for authentication
// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null);

//   // Mock credentials for user, admin, and vendor
//   const mockCredentials = {
//     user: {
//       username: "user",
//       email: "user@click.com",
//       password: "user123",
//       role: "user", // User role
//     },
//     admin: {
//       username: "admin",
//       email: "admin@click.com",
//       password: "admin123",
//       role: "admin", // Admin role
//     },
//     vendor: {
//       username: "v",
//       email: "vendor@click.com",
//       password: "v123",
//       role: "vendor", // Vendor role
//     },
//   };

//   // Login function
//   const login = (usernameOrEmail, password) => {
//     const { user: userCreds, admin: adminCreds, vendor: vendorCreds } = mockCredentials;

//     // Check if credentials match user, admin, or vendor
//     if (
//       (usernameOrEmail === userCreds.email || usernameOrEmail === userCreds.username) &&
//       password === userCreds.password
//     ) {
//       setIsAuthenticated(true);
//       setUser({ ...userCreds });
//       localStorage.setItem("user", JSON.stringify({ ...userCreds }));
//       return true;
//     } else if (
//       (usernameOrEmail === adminCreds.email || usernameOrEmail === adminCreds.username) &&
//       password === adminCreds.password
//     ) {
//       setIsAuthenticated(true);
//       setUser({ ...adminCreds });
//       localStorage.setItem("user", JSON.stringify({ ...adminCreds }));
//       return true;
//     } else if (
//       (usernameOrEmail === vendorCreds.email || usernameOrEmail === vendorCreds.username) &&
//       password === vendorCreds.password
//     ) {
//       setIsAuthenticated(true);
//       setUser({ ...vendorCreds });
//       localStorage.setItem("user", JSON.stringify({ ...vendorCreds }));
//       return true;
//     }
//     return false;
//   };

//   // Logout function
//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   // Check if logged-in user is admin
//   const isAdmin = () => user?.role === "admin";

//   // Check if logged-in user is vendor
//   const isVendor = () => user?.role === "vendor";

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isAdmin, isVendor }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// ========================================================

import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isAdmin = () => user && user.role === "admin";
  const isVendor = () => user && user.role === "vendor";

  const login = (usernameOrEmail, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === usernameOrEmail && storedUser.password === password) {
      setUser(storedUser); // Store the logged-in user in state
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isVendor }}>
      {children}
    </AuthContext.Provider>
  );
};
