import React, { useState } from "react";
import "../assets/styles/SidebarFilters.css"; // Make sure to import the CSS file

const SidebarFilters = ({ radius, onRadiusChange }) => {
  return (
    <div className="bg-light p-4 border rounded shadow-sm sidebar-filters">
      <h4 className="text-primary">Filters</h4>

      {/* Radius Filter */}
      <div className="mb-3">
        <h6>Radius</h6>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownRadius"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {/* Display "Select Radius" if no radius is selected */}
            {radius ? `${radius} km` : "Select Radius"}
          </button>
          <ul className="dropdown-menu rounded-3 p-2" aria-labelledby="dropdownRadius">
            <li>
              <label>
                <input
                  type="radio"
                  value={5}
                  checked={radius === 5}
                  onChange={() => onRadiusChange(5)}
                  className="me-2"
                />
                5 km
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value={10}
                  checked={radius === 10}
                  onChange={() => onRadiusChange(10)}
                  className="me-2"
                />
                10 km
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  value={15}
                  checked={radius === 15}
                  onChange={() => onRadiusChange(15)}
                  className="me-2"
                />
                15 km
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarFilters;
