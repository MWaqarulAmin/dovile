import { Link } from "react-router-dom";
import "./Header.css";
import dovile from "../images/dovile.svg";

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="header">
      <Container className="container">
        <Navbar.Brand className="d-flex align-items-center logoContainer">
          <img src={dovile} alt="Logo" className="mr-3 logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleExpanded} className="toggleButton" />
        <Navbar.Collapse id="navbar">
          <Nav
            className="ml-auto text-right text-lg-right"
            id="nav"
            activeKey="/"
            onSelect={() => setExpanded(false)}
          >
            <Link id="link" to="/">
              HOME
            </Link>
            <Link id="link" to="/services">
              SERVICES
            </Link>
            <Link id="link" to="/about">
              ABOUT ME
            </Link>
            <Link id="link" to="/contact">
              CONTACT
            </Link>
            <Link id="link" to="/blog">
              BLOG
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
