import React, { useState } from "react";
import { Table, Button, Modal, Form, Container, Row, Col, Card, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// Sample initial provider data
const initialProviders = [
  { id: 1, name: "John Doe", mobile: "9876543210", services: "Plumbing, Electrician", status: "Active" },
  { id: 2, name: "Alice Smith", mobile: "8765432109", services: "Car Cleaning, Housekeeping", status: "Active" },
  { id: 3, name: "Mike Johnson", mobile: "7654321098", services: "Carpentry, Painting", status: "Inactive" },
];

const ServiceProviders = () => {
  const [providers, setProviders] = useState(initialProviders);
  const [showModal, setShowModal] = useState(false);
  const [editProvider, setEditProvider] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Open modal for adding or editing provider
  const handleModalOpen = (provider = null) => {
    setEditProvider(provider);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setEditProvider(null);
    setShowModal(false);
  };

  // Handle form submission for adding/editing a provider
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newProvider = {
      id: editProvider ? editProvider.id : providers.length + 1,
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      services: formData.get("services"),
      status: formData.get("status"),
    };

    if (editProvider) {
      // Update provider
      setProviders((prevProviders) => prevProviders.map((p) => (p.id === editProvider.id ? newProvider : p)));
    } else {
      // Add new provider
      setProviders((prevProviders) => [...prevProviders, newProvider]);
    }

    handleModalClose();
  };

  // Delete provider
  const deleteProvider = (id) => {
    setProviders(providers.filter((provider) => provider.id !== id));
  };

  // Filter providers based on search term
  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">👨‍🔧 Service Providers</h2>
      <Link to="/admin" className="btn btn-primary">
          Back to Dashboard
        </Link>
      {/* Search and Add Provider */}
      <Row className="mb-3">
        <Col md={6}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="🔍 Search providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="success" onClick={() => handleModalOpen()}>➕ Add Provider</Button>
        </Col>
      </Row>

      {/* Providers Table */}
      <Card className="shadow-sm">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Services</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProviders.map((provider, index) => (
                <tr key={provider.id}>
                  <td>{index + 1}</td>
                  <td>{provider.name}</td>
                  <td>{provider.mobile}</td>
                  <td>{provider.services}</td>
                  <td>
                    <span className={provider.status === "Active" ? "text-success" : "text-danger"}>
                      {provider.status}
                    </span>
                  </td>
                  <td>
                    <Button size="sm" variant="primary" className="me-2" onClick={() => handleModalOpen(provider)}>✏️ Edit</Button>
                    <Button size="sm" variant="danger" className="me-2" onClick={() => deleteProvider(provider.id)}>🗑️ Delete</Button>
                    <Button size="sm" variant="success" href={`tel:${provider.mobile}`}>📞 Contact</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal for Adding/Editing Providers */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editProvider ? "Edit Provider" : "Add New Provider"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" defaultValue={editProvider?.name || ""} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" name="mobile" defaultValue={editProvider?.mobile || ""} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Services Provided</Form.Label>
              <Form.Control type="text" name="services" defaultValue={editProvider?.services || ""} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select name="status" defaultValue={editProvider?.status || "Active"}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              {editProvider ? "Update Provider" : "Add Provider"}
            </Button>

            <div className="text-center mb-3">

      </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ServiceProviders;
