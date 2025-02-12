// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CustomerList = () => {
//   const dummyData = [
//     { id: 1, name: "Nishant More", address: "Pune ", phone: "7845883973" },
//     { id: 2, name: "Sarika Patil", address: "Mumbai", phone: "9876542103" },
//     { id: 3, name: "Unnati Kale", address: "Nashik", phone: "9761234567" },
//     { id: 4, name: "Varun Gade", address: "Kolhapur", phone: "9848881234" },
//     { id: 5, name: "Vivek Patil", address: "Aurangabad", phone: "7499988858" },
//   ];

//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">All Customers</h1>
//       <div className="text-center mb-3">
//         <Link to="/admin" className="btn btn-primary">
//           Back to Dashboard
//         </Link>
//       </div>
//       <div className="table-responsive d-flex justify-content-center">
//         <table
//           className="table table-bordered w-75"
//           style={{ border: "1px solid black", borderCollapse: "collapse" }}
//         >
//           <thead className="thead-dark">
//             <tr>
//               <th style={{ border: "3px solid black" }}>Name</th>
//               <th style={{ border: "3px solid black" }}>Address</th>
//               <th style={{ border: "3px solid black" }}>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dummyData.map((customer) => (
//               <tr key={customer.id}>
//                 <td style={{ border: "3px solid black" }}>{customer.name}</td>
//                 <td style={{ border: "3px solid black" }}>
//                   {customer.address}
//                 </td>
//                 <td style={{ border: "3px solid black" }}>{customer.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CustomerList;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Nishant More", address: "Pune", phone: "7845883973" },
    { id: 2, name: "Sarika Patil", address: "Mumbai", phone: "9876542103" },
    { id: 3, name: "Unnati Kale", address: "Nashik", phone: "9761234567" },
    { id: 4, name: "Varun Gade", address: "Kolhapur", phone: "9848881234" },
    { id: 5, name: "Vivek Patil", address: "Aurangabad", phone: "7499988858" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleEdit = (id) => {
    const customer = customers.find((c) => c.id === id);
    if (customer) {
      setEditedCustomer(customer);
      setEditingId(id);
    }
  };

  const handleChange = (e) => {
    setEditedCustomer({ ...editedCustomer, [e.target.name]: e.target.value });
  };

  const handleSave = (id) => {
    setCustomers(customers.map((c) => (c.id === id ? editedCustomer : c)));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">All Customers</h1>
      <div className="text-center mb-3">
        <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
      </div>
      <div className="table-responsive d-flex justify-content-center">
        <table className="table table-bordered w-75">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                {editingId === customer.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editedCustomer.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="address"
                        value={editedCustomer.address}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="phone"
                        value={editedCustomer.phone}
                        onChange={handleChange}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phone}</td>
                  </>
                )}
                <td>
                  {editingId === customer.id ? (
                    <button
                      className="btn btn-success btn-sm me-2"
                      onClick={() => handleSave(customer.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(customer.id)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
