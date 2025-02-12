import React, { useState } from "react";
import "../assets/styles/PaymentUI.css";

const PaymentUI = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePaymentSelection = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <p>Choose your preferred payment method to proceed:</p>

      {/* Payment Methods Section */}
      <div className="payment-methods">
        <div
          className={`payment-method ${selectedMethod === "card" ? "selected" : ""}`}
          onClick={() => handlePaymentSelection("card")}
        >
          <img src="/images/visa.png" alt="Visa" />
          <img src="/images/mastercard.png" alt="Mastercard" />
          <img src="/images/rupay.png" alt="RuPay" />
          <span>Credit/Debit Card</span>
        </div>
        <div
          className={`payment-method ${selectedMethod === "upi" ? "selected" : ""}`}
          onClick={() => handlePaymentSelection("upi")}
        >
          <img src="/images/upi.png" alt="UPI" />
          <span>UPI Payment</span>
        </div>
        <div
          className={`payment-method ${selectedMethod === "wallet" ? "selected" : ""}`}
          onClick={() => handlePaymentSelection("wallet")}
        >
          <img src="/images/paypal.png" alt="PayPal" />
          <img src="/images/google-pay.png" alt="Google Pay" />
          <span>Wallets</span>
        </div>
        <div
          className={`payment-method ${selectedMethod === "netbanking" ? "selected" : ""}`}
          onClick={() => handlePaymentSelection("netbanking")}
        >
          <img src="/images/net-banking.png" alt="Net Banking" />
          <span>Net Banking</span>
        </div>
        {/* <div
          className={`payment-method ${selectedMethod === "bnpl" ? "selected" : ""}`}
          onClick={() => handlePaymentSelection("bnpl")}
        >
          <img src="/images/pay-later.png" alt="BNPL" />
          <span>Buy Now, Pay Later</span>
        </div> */}
      </div>

      {/* Payment Details Section */}
      <div className="payment-details">
        {selectedMethod === "card" && (
          <div>
            <h3>Enter Card Details</h3>
            <input type="text" placeholder="Cardholder Name" />
            <input type="number" placeholder="Card Number" />
            <div className="expiry-cvv">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVV" />
            </div>
            <button>Pay Now</button>
          </div>
        )}
        {selectedMethod === "upi" && (
          <div>
            <h3>Enter UPI ID</h3>
            <input type="text" placeholder="e.g., user@upi" />
            <button>Proceed</button>
          </div>
        )}
        {selectedMethod === "wallet" && (
          <div>
            <h3>Select Wallet</h3>
            <button>PayPal</button>
            <button>Google Pay</button>
            <button>Apple Pay</button>
          </div>
        )}
        {selectedMethod === "netbanking" && (
          <div>
            <h3>Select Your Bank</h3>
            <select>
              <option value="sbi">State Bank of India</option>
              <option value="hdfc">HDFC Bank</option>
              <option value="icici">ICICI Bank</option>
            </select>
            <button>Proceed</button>
          </div>
        )}
        {selectedMethod === "bnpl" && (
          <div>
            <h3>Buy Now, Pay Later</h3>
            <p>Get instant credit approval for your purchase.</p>
            <button>Apply</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentUI;
