import React from "react";
import "../css/Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_name">
          <Link
            activeClass="active"
            className="test2"
            to="home"
            spy={true}
            smooth={true}
            duration={800}
          >
            Portfolio
          </Link>
        </div>
        <div className="navbar_menus">
          <div className="navbar_menu">
            <Link
              activeClass="active"
              className="test1"
              to="aboutme"
              spy={true}
              smooth={true}
              duration={800}
            >
              About Me
            </Link>
          </div>
          <div className="navbar_menu">
            <Link
              activeClass="active"
              className="test1"
              to="skills"
              spy={true}
              smooth={true}
              duration={800}
            >
              Skills
            </Link>
          </div>
          <div className="navbar_menu">
            <Link
              activeClass="active"
              className="test1"
              to="projects"
              spy={true}
              smooth={true}
              duration={800}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
