import React, { useEffect } from "react";
import "../css/AboutMe.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <article className="AboutMe" id="aboutme">
      <div className="AboutMe_Container">
        <div className="AboutMe_Title">
          <div
            data-aos-delay={100}
            data-aos-duration="1000"
            data-aos="fade-up"
            className="AboutMe_Text"
          >
            <Link className="AboutMe_Link" to="/more"></Link>
          </div>
        </div>
        <div className="AboutMe_Content">
          <div className="AboutMe_Content_Texts">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={200}
              className="AboutMe_Content_Text"
            >
              안녕하세요.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration="1500"
              className="AboutMe_Content_Text"
            >
              프론트엔드 개발자 김용호입니다.
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={350}
              data-aos-duration="1700"
              className="AboutMe_Content_Text"
            >
              이해하는 과정을 즐기며 지속가능한 발전을 목표로 하고 있습니다.
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutMe;
