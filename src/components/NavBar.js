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
            <Nav.Link href="#action1" className="nav__item">
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className="nav__item">
              About
            </Nav.Link>{" "}
            <Nav.Link href="#action3" className="nav__item">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar expand="lg">
    //   <Navbar.Brand href="#home">Nandakumar</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className=" ml-auto navLinks" variant="light">
    //       <Nav.Link href="/portfolio">Home</Nav.Link>
    //       <Nav.Link href="/portfolio/#/education">Education</Nav.Link>
    //       <Nav.Link href="/portfolio/#/project">Projects</Nav.Link>
    //       <Nav.Link href="/portfolio/#/contact">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default NavBar;
