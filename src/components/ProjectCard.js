import React from "react";
import "./ProjectCard.css";

function ProjectCard({ imgSrc, heading, description, projectLink }) {
  return (
    <div
      className="card projectCard"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="900"
      onClick={() => {
        window.open(projectLink, "_blank");
      }}
    >
      <img src={imgSrc} alt="project_image" />
      <p>{heading}</p>
      <h4>{description}</h4>
    </div>
  );
}

export default ProjectCard;
