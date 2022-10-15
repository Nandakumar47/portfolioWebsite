import React from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@mui/material";
import profilePic from "../images/profile.jpg";

function NavBar() {
  return (
    <Navbar
      style={{ backgroundColor: "#ecf0f3", padding: "15px 0" }}
      expand="lg"
      sticky="top"
    >
      <Container fluid className="contain">
        <Navbar.Brand
          href="#"
          style={{ color: "#435465", fontWeight: "700", fontSize: "1.8rem" }}
        >
          <div className="navbar__icon_name">
            <Avatar alt="profileImage" src={profilePic} />
            <h3 >Nandakumar PR</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ textAlign: "center", fontSize: "1rem" }}
          >
            <Nav.Link href="#" className="nav__item">
              Home
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav__item">
              Projects
            </Nav.Link>{" "}
            <Nav.Link href="#contact" className="nav__item">
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
