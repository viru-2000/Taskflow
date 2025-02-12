import React, { useState } from "react";
import { Table, Button, Form, Container, Row, Col, Card, InputGroup } from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Link } from "react-router-dom";

// Sample transaction data
const initialTransactions = [
  { id: 1, user: "Vaibhav Gurav", amount: "50,000 rs.", method: "Credit Card", status: "Success", date: "2025-02-01" },
  { id: 2, user: "Viraj Rasal", amount: "20,000 rs.", method: "PayPal", status: "Pending", date: "2025-02-02" },
  { id: 3, user: "Shweta Padwal", amount: "25,000 rs.", method: "UPI", status: "Success", date: "2025-02-03" },
  { id: 4, user: "Nilanjan Patil", amount: "1000 rs.", method: "Debit Card", status: "Failed", date: "2025-02-04" },
];

const BillingPayments = () => {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter transactions based on status
  const filteredTransactions = transactions.filter(
    (transaction) =>
      (filter === "All" || transaction.status === filter) &&
      transaction.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to generate PDF report
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Billing & Payments Report", 14, 15);

    // Table headers
    const tableColumn = ["User", "Amount", "Method", "Status", "Date"];
    const tableRows = [];

    // Table data
    filteredTransactions.forEach((tx) => {
      tableRows.push([tx.user, tx.amount, tx.method, tx.status, tx.date]);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });

    doc.save("Billing_Payments_Report.pdf");
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">💳 Billing & Payments</h2>

      {/* Filters and Actions */}
      <Row className="mb-3">
        <Col md={4}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="🔍 Search by user..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select onChange={(e) => setFilter(e.target.value)}>
            <option value="All">📌 All Transactions</option>
            <option value="Success">✅ Successful</option>
            <option value="Pending">⏳ Pending</option>
            <option value="Failed">❌ Failed</option>
          </Form.Select>
        </Col>
        <Col md={4} className="text-end">
          <Button variant="primary" onClick={generatePDF}>📥 Download Report</Button>
        </Col>
      </Row>

      {/* Transactions Table */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((tx, index) => (
                <tr key={tx.id}>
                  <td>{index + 1}</td>
                  <td>{tx.user}</td>
                  <td>{tx.amount}</td>
                  <td>{tx.method}</td>
                  <td>
                    <span
                      className={
                        tx.status === "Success"
                          ? "text-success"
                          : tx.status === "Pending"
                          ? "text-warning"
                          : "text-danger"
                      }
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td>{tx.date}</td>
                </tr>
              ))}
            </tbody>
           
          </Table>
          <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BillingPayments;
