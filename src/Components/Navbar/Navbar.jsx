import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ContactBook</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link
              to="/"
              style={{
                color: "grey",
                margin: "10px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/AddStudent"
              style={{
                color: "grey",
                margin: "10px",
                textDecoration: "none",
              }}
            >
              Add contact
            </Link>
            <Link
              to="/StudentList"
              style={{
                color: "grey",
                margin: "10px",
                textDecoration: "none",
              }}
            >
              Contact List
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarCustom;
