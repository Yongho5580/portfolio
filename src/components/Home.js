import React from "react";
import { FaGithub, FaBlog } from "react-icons/fa";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="Home_Container">
      <h1 className="Home_Name">KIM YONG HO</h1>
      <p className="Home_Career">Front-end Web Developer</p>
      <div className="Home_Btns">
        <a
          href="https://github.com/Yongho5580"
          target="_blank"
          className="Home_Btn"
        >
          <FaGithub />
          Github
        </a>
        <a
          href="https://velog.io/@drata313"
          target="_blank"
          className="Home_Btn"
        >
          <FaBlog />
          Blog
        </a>
      </div>
    </div>
  );
};

export default Home;
