import React from "react";
import "./Home.css";
import informal from "../images/informal.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WebIcon from "@mui/icons-material/Web";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import ProjectCard from "../components/ProjectCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="main__div">
      <div className="intro__section_main">
        <div className="grid__holder ">
          <div className="name__grid card">
            <div className="name__grid_upperSide">
              <AccountCircleOutlinedIcon
                style={{ color: "#FF014F", fontSize: "40px" }}
              />
              <h1>
                Hi, I'm <span style={{ color: "#FF014F" }}>Nandakumar</span>
              </h1>
              <p>Front end developer,B-tech graduate, Tech enthusiast</p>
            </div>
            <div className="name__grid_lowerSide">
              <div className="name__grid_lowerSide_items">
                <WebIcon style={{ color: "#FF014F" }} />
                <p>Web Designer & Developer</p>
              </div>
              <div className="name__grid_lowerSide_items">
                <MailIcon style={{ color: "#FF014F" }} />
                <p>nandakumar.p.r1999@gmail.com</p>
              </div>
              <div className="name__grid_lowerSide_items">
                <FaPhoneAlt style={{ color: "#FF014F" }} />
                <p>+91-8086558072</p>
              </div>
              <div className="name__grid_lowerSide_items">
                <PlaceIcon style={{ color: "#FF014F" }} />
                <p>Kozhikode, Kerala</p>
              </div>
            </div>
            <h6>Connect with me</h6>
            <div className="socialMedia">
              <Tooltip sx={{ color: "success.main" }} title="Instagram" arrow>
                <div className="icon__card">
                  <InstagramIcon />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="Linkedin" arrow>
                <div className="icon__card">
                  <LinkedInIcon />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="Github" arrow>
                <div className="icon__card">
                  <GitHubIcon />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="image__grid card">
            <img src={informal} alt="profile_pic" />
          </div>
          <div className="skill__grid card">
            <h5>Skills</h5>
            <div className="skill_grid_items">
              <Tooltip sx={{ color: "success.main" }} title="ReactJS" arrow>
                <div className="icon__card">
                  <FaReact style={{ color: "#61DBFB", fontSize: "25px" }} />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="JavaScript" arrow>
                <div className="icon__card">
                  <SiJavascript
                    style={{ color: "#F0DB4F", fontSize: "25px" }}
                  />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="HTML" arrow>
                <div className="icon__card">
                  <FaHtml5 style={{ color: "#E34C26", fontSize: "25px" }} />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="CSS" arrow>
                <div className="icon__card">
                  <FaCss3Alt style={{ color: "#E31B5F", fontSize: "25px" }} />
                </div>
              </Tooltip>
              <Tooltip sx={{ color: "success.main" }} title="Python" arrow>
                <div className="icon__card">
                  <FaPython style={{ color: "#8AC847", fontSize: "25px" }} />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio" id="portfolio">
        <h1>My Projects</h1>
        <div className="projects__cardHolder">
          <ProjectCard imgSrc="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg" />
          <ProjectCard imgSrc="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-03.jpg" />
          <ProjectCard imgSrc="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg" />
          <ProjectCard imgSrc="https://nandakumar47.github.io/portfolio/static/media/simons.55363cb5.PNG" />
          <ProjectCard imgSrc="https://nandakumar47.github.io/portfolio/static/media/todo.40bc6cc8.PNG" />
          <ProjectCard imgSrc="https://nandakumar47.github.io/portfolio/static/media/notes.adbfda47.PNG" />
        </div>
      </div>
      <div className="contact">
        <h1>Contact Me</h1>
        <Contact />
      </div>
      {/* <hr /> */}
      <Footer />
    </div>
  );
}

export default Home;
