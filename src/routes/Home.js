import React, { useEffect } from "react";
import { FaGithub, FaBlog } from "react-icons/fa";
import "../css/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Home_Container">
      <h1 data-aos="zoom-out" data-aos-duration={1500} className="Home_Name">
        KIM YONG HO
      </h1>
      <p data-aos="zoom-out" data-aos-duration={1000} className="Home_Career">
        Front-end Web Developer
      </p>
      <div className="Home_Btns">
        <a
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={200}
          href="https://github.com/Yongho5580"
          target="_blank"
          rel="noreferrer"
          className="Home_Btn"
        >
          <FaGithub />
          &nbsp;Github
        </a>
        <a
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-delay={300}
          href="https://velog.io/@drata313"
          target="_blank"
          rel="noreferrer"
          className="Home_Btn"
        >
          <FaBlog />
          &nbsp;Blog
        </a>
      </div>
    </div>
  );
};

export default Home;
