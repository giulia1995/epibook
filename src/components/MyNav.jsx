import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

const MyNav = ({ setSearchQuery }) => (
  <Navbar
    expand="lg"
    className="bg-body-tertiary mb-3"
    bg="dark"
    data-bs-theme="dark"
  >
    <Container fluid>
      <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
        <Form.Control
          style={{ width: "20%" }}
          type="search"
          placeholder="Cerca un libro"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
