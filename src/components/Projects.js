import React, { useEffect } from "react";
import "../css/Projects.css";
import ProjectsContent from "../components/ProjectsContent";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Projects">
      <div className="Projects_Container">
        <div className="Projects_Title">
          <div data-aos="zoom-in" className="Projects_Text">
            PROJECTS
          </div>
        </div>
        <div className="Projects_Contents">
          <ProjectsContent />
        </div>
      </div>
    </div>
  );
};

export default Projects;
