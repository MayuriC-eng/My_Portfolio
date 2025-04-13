import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    "Alert Drowsy Driver": "This is an OpenCV-based Python project for alerting the drowsy driver.",
    "Call Centre": "A website that shows how a call centre works using a queuing method."
  };

  return (
    <div className="projectBox">
      <img src={projectPhoto} alt={projectName} />
      <h2>{projectName}</h2>
      <p>{desc[projectName]}</p>
      <div className="icons">
        <a href="#"><FaGithub /></a>
        <a href="#"><CgFileDocument /></a>
      </div>
    </div>
  );
};

export default ProjectBox;
