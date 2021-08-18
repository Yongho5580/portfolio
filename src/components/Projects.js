import React from "react";
import "../css/Projects.css";
import ProjectsContent from "../components/ProjectsContent";
const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects_Container">
        <div className="Projects_Title">
          <div className="Projects_Text">PROJECTS</div>
        </div>
        <div className="Projects_Contents">
          <ProjectsContent />
        </div>
      </div>
    </div>
  );
};

export default Projects;
