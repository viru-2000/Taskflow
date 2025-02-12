// import React, { useState } from "react";
// import "../assets/styles/GetTenLink.css"; // CSS

// import Navbar from "../components/Navbar";
// // import Header from "../components/Header"; // Add Header at the top

// export default function GetTenDollars() {
//   const [email, setEmail] = useState("");
//   const referralLink = "https://www.taskrabbit.com/s/edo11";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(referralLink);
//     alert("Referral link copied to clipboard!");
//   };

//   const handleSendInvite = () => {
//     if (email.trim()) {
//       alert(`Invite sent to: ${email}`);
//       setEmail("");
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   return (
//     <>

//       <Navbar/>

//       <div className="get-ten-container">
//         <div className="get-ten-card">
//           <h2 className="get-ten-title">Help Your Friends, Get ₹10</h2>
//           <p className="get-ten-description">
//             Refer a friend to 1Click. They get ₹50 off their first task. You
//             get ₹10 off when they complete it.
//           </p>

//           {/* Email Input Section */}
//           <div className="get-ten-input-container">
//             <input
//               type="email"
//               placeholder="Enter email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="get-ten-input"
//             />
//             <button onClick={handleSendInvite} className="get-ten-button">
//               Send Invite
//             </button>
//           </div>

//           {/* Referral Link Section */}
//           <div className="get-ten-link-container">
//             <input
//               type="text"
//               value={referralLink}
//               readOnly
//               className="get-ten-link-input"
//             />

//             <button onClick={handleCopy} className="get-ten-copy-button">
//               Copy Link
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// //======================================

import React, { useState } from "react";
import "../assets/styles/GetTenLink.css"; // CSS

// import Navbar from "../components/Navbar";
// import Header from "../components/Header"; // Add Header at the top

export default function GetTenDollars() {
  const [email, setEmail] = useState("");
  const referralLink = "https://www.koalafabs.com/";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied to clipboard!");
  };

  const handleSendInvite = () => {
    if (email.trim()) {
      alert(`Invite sent to: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <>
      {/* <Navbar/> */}

      <div className="get-ten-container">
        <div className="get-ten-card">
          <h2 className="get-ten-title">Help Your Friends, Get ₹100</h2>
          <p className="get-ten-description">
            Refer a friend to Task Flow. They get ₹50 off their first task. You
            get ₹100 off when they complete it.
          </p>

          {/* Email Input Section */}
          <div className="get-ten-input-container">
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="get-ten-input"
            />
            <button onClick={handleSendInvite} className="get-ten-button">
              Send Invite
            </button>
          </div>

          {/* Referral Link Section */}
          <div className="get-ten-link-container">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="get-ten-link-input"
            />

            <button onClick={handleCopy} className="get-ten-copy-button">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
