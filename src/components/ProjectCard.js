import React from "react";
import "./ProjectCard.css";

function ProjectCard({ imgSrc ,heading,description}) {
  return (
    <div className="card projectCard">
      <img src={imgSrc} alt="project_image" />
      <p>{heading}</p>
      <h4>{description}</h4>
    </div>
  );
}

export default ProjectCard;
