// import React from "react";

// export default function Orders() {
//   const orders = [
//     { id: 1, service: "Plumbing", status: "Pending", customer: "John Doe" },
//     { id: 2, service: "Salon Appointment", status: "Completed", customer: "Jane Smith" },
//     { id: 3, service: "Electrical Repair", status: "Pending", customer: "Michael Johnson" },
//   ];

//   return (
//     <div>
//       <h2>Your Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Service</th>
//             <th>Status</th>
//             <th>Customer</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.service}</td>
//               <td>{order.status}</td>
//               <td>{order.customer}</td>
//               <td>
//                 <button>View Details</button>
//                 {order.status === "Pending" && <button>Mark as Completed</button>}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import '../assets/styles/Order.css'

export default function Orders() {
  const orders = [
    { id: 1, service: "Plumbing", status: "Pending", customer: "John Doe" },
    { id: 2, service: "Salon Appointment", status: "Completed", customer: "Jane Smith" },
    { id: 3, service: "Electrical Repair", status: "Pending", customer: "Michael Johnson" },
  ];

  return (
    <div className="orders-container">
      <h2>Your Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Service</th>
            <th>Status</th>
            <th>Customer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.service}</td>
              <td>{order.status}</td>
              <td>{order.customer}</td>
              <td>
                <button>View Details</button>
                {order.status === "Pending" && <button>Mark as Completed</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
