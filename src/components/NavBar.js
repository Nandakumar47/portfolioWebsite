import React, { useRef } from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Avatar } from "@mui/material";
import profilePic from "../images/profile.jpg";

function NavBar({ homeHeight, contactHeight, projectHeight }) {
  const navBarHeight = useRef();
  function scrollWindow(height, val) {
    window.scrollTo(
      0,
      height.current.offsetTop - navBarHeight.current.offsetHeight * val
    );
  }
  return (
    <Navbar
      style={{ backgroundColor: "#ecf0f3", padding: "15px 0" }}
      expand="lg"
      sticky="top"
      ref={navBarHeight}
    >
      <Container fluid className="contain">
        <Navbar.Brand
          onClick={() => {
            scrollWindow(homeHeight, 2);
          }}
          style={{ color: "#435465", fontWeight: "700", fontSize: "1.8rem" }}
        >
          <div className="navbar__icon_name">
            <Avatar alt="profileImage" src={profilePic} />
            <h3>Nandakumar PR</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ textAlign: "center", fontSize: "1rem" }}
          >
            <Nav.Link
              className="nav__item"
              onClick={() => {
                scrollWindow(homeHeight, 2);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav__item"
              onClick={() => {
                scrollWindow(projectHeight, 1);
              }}
            >
              Projects
            </Nav.Link>{" "}
            <Nav.Link
              className="nav__item"
              onClick={() => {
                scrollWindow(contactHeight, 1);
              }}
            >
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
