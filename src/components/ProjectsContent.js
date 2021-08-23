import React, { useEffect } from "react";
import "../css/ProjectsContent.css";
import Weconomy from "../images/weconomy.gif";
import YourTravel from "../images/your-travel.gif";
import Ywitter from "../images/ywitter.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsContent = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Projects_Content">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={800}
        data-aos-delay={300}
        className="Projects_Content1"
      >
        <div className="Projects_Info">
          <div className="Projects_Info_Title">WECONOMY</div>
          <div className="Projects_Info_Desc">
            <span>지인들과 함께 작성 및 공유 가능한 가계부 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            Front-end: React, Redux, TypeScript, SCSS <br />
            Back-end: NodeJs, Express, GraphQL, Sequelize <br /> Deploy: AWS(S3,
            CloudFront, Route53, EC2, Load Balancer)
            <br />
            Role: Front-end
          </div>
          <div className="Projects_Info_Links">
            <a
              className="Projects_Link"
              href="http://www.senchbro.com/mainpage"
              rel="noreferrer"
              target="_blank"
            >
              WEBSITE
            </a>
            <a
              className="Projects_Link"
              href="https://github.com/codestates/Wecomony-client/wiki"
              rel="noreferrer"
              target="_blank"
            >
              GITHUB
            </a>
            <a
              className="Projects_Link"
              href="https://velog.io/@drata313/%ED%8C%8C%EC%9D%B4%EB%84%90-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-Weconomy"
              rel="noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Weconomy} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={800}
        data-aos-delay={300}
        className="Projects_Content2"
      >
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Ywitter</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>유저들과 자유로운 소통이 가능한 SNS 토이 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, Redux, TypeScript, SCSS <br />
              Back-end: Firebase Authentication, Firebase DB, Firebase Storage{" "}
              <br /> Deploy: Github Pages
              <br />
              Role: Full-Stack
            </span>
          </div>
          <div className="Projects_Info_Links">
            <a
              className="Projects_Link"
              href="https://yongho5580.github.io/Ywitter/#/"
              rel="noreferrer"
              target="_blank"
            >
              WEBSITE
            </a>
            <a
              className="Projects_Link"
              href="https://github.com/Yongho5580/Ywitter"
              rel="noreferrer"
              target="_blank"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Ywitter} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={800}
        data-aos-delay={300}
        className="Projects_Content3"
      >
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Your Travel</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>각국의 여행지를 간단 명료하게 볼 수 있는 웹 사이트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: Gatsby, React, SCSS <br />
              Back-end: GraphQL <br /> Deploy: Github Pages
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links">
            <a
              className="Projects_Link"
              href="https://yongho5580.github.io/Your-Travel-Deploy/"
              rel="noreferrer"
              target="_blank"
            >
              WEBSITE
            </a>
            <a
              className="Projects_Link"
              href="https://github.com/Yongho5580/Your-Travel-Deploy"
              rel="noreferrer"
              target="_blank"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={YourTravel} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration={800}
        data-aos-delay={300}
        className="Projects_Content4"
      >
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Portfolio</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>포트폴리오 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, React-Router, SCSS <br />
              Deploy: Github Pages
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links">
            <a
              className="Projects_Link"
              href="http://www.senchbro.com/mainpage"
              rel="noreferrer"
              target="_blank"
            >
              WEBSITE
            </a>
            <a
              className="Projects_Link"
              href="https://github.com/codestates/Wecomony-client/wiki"
              rel="noreferrer"
              target="_blank"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Weconomy} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
