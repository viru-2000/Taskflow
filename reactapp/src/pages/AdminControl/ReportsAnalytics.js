import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { Button, Container, Row, Col, Card, Spinner } from "react-bootstrap"; // Bootstrap components
import { Link } from "react-router-dom";

// Function to simulate fetching report data from an API
const fetchReportData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        revenue: 50000,
        users: 1200,
        vendors: 45,
        feedbackScore: 4.3,
        monthlyRevenue: [
          { month: "Jan", revenue: 4000 },
          { month: "Feb", revenue: 4200 },
          { month: "Mar", revenue: 4600 },
          { month: "Apr", revenue: 4800 },
          { month: "May", revenue: 5000 },
        ],
        vendorPerformance: [
          { vendor: "A", rating: 4.5 },
          { vendor: "B", rating: 4.0 },
          { vendor: "C", rating: 3.8 },
          { vendor: "D", rating: 4.2 },
          { vendor: "E", rating: 4.7 },
        ],
      });
    }, 1000);
  });
};

const ReportsAnalytics = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch report data when the component mounts
  useEffect(() => {
    fetchReportData().then((data) => {
      setReport(data);
      setLoading(false);
    });
  }, []);

  // Function to download report as JSON file
  const downloadReport = () => {
    const fileData = JSON.stringify(report, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Create a hidden link and trigger a download
    const a = document.createElement("a");
    a.href = url;
    a.download = "report.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">📊 Reports & Analytics</h2>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading reports...</p>
        </div>
      ) : (
        <>
          {/* Download Report Button */}
          <div className="text-end mb-3">
            <Button variant="success" onClick={downloadReport}>
              📥 Download Report
            </Button>
          </div>

          {/* Key Metrics Section */}
          <Row className="mb-4">
            <Col md={3}>
              <Card className="shadow-sm text-center">
                <Card.Body>
                  <h5 className="text-primary">Total Revenue</h5>
                  <h4 className="text-primary">Rs {report.revenue}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm text-center">
                <Card.Body>
                  <h5 className="text-success">Total Users</h5>
                  <h4 className="text-success">{report.users}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm text-center">
                <Card.Body>
                  <h5 className="text-danger">Total Vendors</h5>
                  <h4 className="text-danger">{report.vendors}</h4>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="shadow-sm text-center">
                <Card.Body>
                  <h5 className="text-warning">Avg. Feedback Score</h5>
                  <h4 className="text-warning">{report.feedbackScore} / 5</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Monthly Revenue Growth Chart */}
          <Card className="shadow-sm p-3 mb-4">
            <h5 className="mb-3 text-primary">📈 Monthly Revenue Growth</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={report.monthlyRevenue}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#007bff"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Vendor Performance Chart */}
          <Card className="shadow-sm p-3">
            <h5 className="mb-3 text-success">🏆 Vendor Performance Ratings</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={report.vendorPerformance}>
                <XAxis dataKey="vendor" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating" fill="#28a745" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}
      <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
    </Container>
  );
};

export default ReportsAnalytics;
