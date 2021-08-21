import React, { useEffect } from "react";
import "../css/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <article className="Skills">
      <div className="Skills_Container">
        <div className="Skills_Title">
          <div data-aos="zoom-in" className="Skills_Title_Text">
            Skills
          </div>
        </div>
        <div className="Skills_List">
          <div className="Skills_Item">
            <div className="Skills_Name">HTML5</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/html-5--v1.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">CSS3</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/css3.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">JavaScript</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/javascript--v2.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">React</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/officel/130/000000/react.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">TypeScript</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/typescript.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">Redux</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/redux.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">Sass</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/sass.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">GitHub</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/ios-glyphs/130/000000/github.png"
            />
          </div>
          <div className="Skills_Item">
            <div className="Skills_Name">Git</div>
            <img
              alt="Skills Menu"
              src="https://img.icons8.com/color/130/000000/git.png"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
