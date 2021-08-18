import React from "react";
import "../css/ProjectsContent.css";
import Weconomy from "../images/weconomy.gif";
import YourTravel from "../images/your-travel.gif";
import Ywitter from "../images/ywitter.gif";

const ProjectsContent = () => {
  return (
    <div className="Projects_Content">
      <div className="Projects_Content1">
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Weconomy</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>지인들과 함께 작성 및 공유 가능한 가계부 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, Redux, TypeScript, SCSS <br />
              Back-end: NodeJs, Express, GraphQL, Sequelize <br /> Deploy:
              AWS(S3, CloudFront, Route53, EC2, Load Balancer)
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links"></div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Weconomy} />
        </div>
      </div>
      <div className="Projects_Content2">
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Ywitter</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>지인들과 함께 작성 및 공유 가능한 가계부 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, Redux, TypeScript, SCSS <br />
              Back-end: NodeJs, Express, GraphQL, Sequelize <br /> Deploy:
              AWS(S3, CloudFront, Route53, EC2, Load Balancer)
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links"></div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Ywitter} />
        </div>
      </div>
      <div className="Projects_Content3">
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Your Travel</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>지인들과 함께 작성 및 공유 가능한 가계부 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, Redux, TypeScript, SCSS <br />
              Back-end: NodeJs, Express, GraphQL, Sequelize <br /> Deploy:
              AWS(S3, CloudFront, Route53, EC2, Load Balancer)
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links"></div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={YourTravel} />
        </div>
      </div>
      <div className="Projects_Content4">
        <div className="Projects_Info">
          <div className="Projects_Info_Title">
            <span>Portfolio</span>
          </div>
          <div className="Projects_Info_Desc">
            <span>지인들과 함께 작성 및 공유 가능한 가계부 프로젝트</span>
          </div>
          <div className="Projects_Info_Role">
            <span>
              Front-end: React, Redux, TypeScript, SCSS <br />
              Back-end: NodeJs, Express, GraphQL, Sequelize <br /> Deploy:
              AWS(S3, CloudFront, Route53, EC2, Load Balancer)
              <br />
              Role: Front-end
            </span>
          </div>
          <div className="Projects_Info_Links"></div>
        </div>
        <div className="Projects_Img">
          <img alt="Weconomy Project" src={Weconomy} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
