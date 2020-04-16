import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand as={Link} to="/">
          <h3 style={{ fontWeight: "bold", color: "white", marginRight: 25 }}>
            Personal-Blogs
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              <h5
                style={{ color: "white", marginRight: 25, fontWeight: "500" }}
              >
                Blog List
              </h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/create">
              <h5 style={{ color: "white", fontWeight: "500" }}>
                Create New Blog
              </h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
