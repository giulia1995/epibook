import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LiaSwatchbookSolid } from "react-icons/lia";


const MyNav = ({ setSearchQuery }) => (
  <Navbar
    expand="lg"
    className="bg-body-tertiary mb-3"
    bg="dark"
    data-bs-theme="dark"
  >
    <Container>
      <Navbar.Brand className="fw-bold" href="#"><LiaSwatchbookSolid className="fs-2 mx-2" />EpiBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className="navbar-brand text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/">About</Link>
          <Link className="nav-link text-white" to="/">Browse</Link>
          
      
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
