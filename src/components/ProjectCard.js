import React from "react";
import "./ProjectCard.css";


function ProjectCard({ imgSrc, heading, description, projectLink }) {
  return (
    <div
      className="card projectCard"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="900"
    >
      <img src={imgSrc} alt="project_image" />
      <p>{heading}</p>
      <a href={projectLink}>
        <h4>{description}</h4>
      </a>
    </div>
  );
}

export default ProjectCard;
