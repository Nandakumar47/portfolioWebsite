import React from "react";
import "./ProjectCard.css";

function ProjectCard({ imgSrc }) {
  return (
    <div className="card projectCard">
      <img src={imgSrc} alt="project_image" />
      <p>Web design</p>
      <h3>Design and Technology</h3>
    </div>
  );
}

export default ProjectCard;
