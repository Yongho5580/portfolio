import React from "react";
import "../css/Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_name">Portfolio</div>
        <div className="navbar_menus">
          <div className="navbar_menu">About Me</div>
          <div className="navbar_menu">Skills</div>
          <div className="navbar_menu">Projects</div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
