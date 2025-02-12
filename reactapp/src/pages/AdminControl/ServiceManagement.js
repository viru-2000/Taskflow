import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Modal,
  Container,
  Row,
  Col,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample initial service data
const initialServices = [
  {
    id: 1,
    name: "Plumbing",
    category: "Home Repair",
    price: 50,
    status: "Active",
  },
  {
    id: 2,
    name: "Electrician",
    category: "Home Repair",
    price: 70,
    status: "Active",
  },
  {
    id: 3,
    name: "Car Cleaning",
    category: "Auto Care",
    price: 30,
    status: "Inactive",
  },
];

const ServiceManagement = () => {
  const [services, setServices] = useState(initialServices);
  const [showModal, setShowModal] = useState(false);
  const [editService, setEditService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle service activation/deactivation
  const toggleStatus = (id) => {
    setServices((prevServices) =>
      prevServices.map((service) =>
        service.id === id
          ? {
              ...service,
              status: service.status === "Active" ? "Inactive" : "Active",
            }
          : service
      )
    );
  };

  // Handle opening and closing of modal
  const handleModalOpen = (service = null) => {
    setEditService(service);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setEditService(null);
    setShowModal(false);
  };

  // Handle service form submission (edit or add)
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newService = {
      id: editService ? editService.id : services.length + 1,
      name: formData.get("name"),
      category: formData.get("category"),
      price: parseFloat(formData.get("price")),
      status: formData.get("status"),
    };

    if (editService) {
      // Update existing service
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === editService.id ? newService : service
        )
      );
    } else {
      // Add new service
      setServices((prevServices) => [...prevServices, newService]);
    }

    handleModalClose();
  };

  // Filter services based on search term
  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">🛠️ Service Management</h2>
      <Link to="/admin" className="btn btn-primary">
        Back to Dashboard
      </Link>
      {/* Search and Add Service */}
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="🔍 Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={5} className="text-end">
          <Button variant="success" onClick={() => handleModalOpen()}>
            ➕ Add New Service
          </Button>
        </Col>
      </Row>

      {/* Service Table */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Service Name</th>
                <th>Category</th>
                <th>Price (Rs.)</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.map((service, index) => (
                <tr key={service.id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>Rs. {service.price}</td>
                  <td>
                    <span
                      className={
                        service.status === "Active"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {service.status}
                    </span>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="primary"
                      className="me-2"
                      onClick={() => handleModalOpen(service)}
                    >
                      ✏️ Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => toggleStatus(service.id)}
                    >
                      {service.status === "Active"
                        ? "🚫 Deactivate"
                        : "✅ Activate"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding/Editing Services */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {editService ? "Edit Service" : "Add New Service"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={editService?.name || ""}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                defaultValue={editService?.category || ""}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (Rs.)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                defaultValue={editService?.price || ""}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                defaultValue={editService?.status || "Active"}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              {editService ? "Update Service" : "Add Service"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ServiceManagement;
