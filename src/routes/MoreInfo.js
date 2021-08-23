import React from "react";
import "../css/MoreInfo.css";
import { useHistory } from "react-router-dom";

const MoreInfo = () => {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <div className="MoreInfo">
      <div className="MoreInfo_Container">
        <div className="MoreInfo_Btn" onClick={onClick}>
          <span className="MoreInfo_Btn_Text">&larr;</span>
        </div>
        <div className="MoreInfo_FirstLine">
          <span>반갑습니다!</span>
          <span>저는 김용호입니다.</span>
        </div>
        <div className="MoreInfo_Infos">
          <div className="MoreInfo_Introduce">
            <div className="MoreInfo_Title">Introduce</div>
            <div className="MoreInfo_Text">
              <span>
                React 중심의 웹 개발을 즐기는 Front-end 개발자 김용호 입니다.
              </span>
              <br />
              <span>
                저는 HTML, CSS, Javascript, React 등을 이용한 Front-end 개발을
                주로 배웠고 이를 바탕으로 개발하고 있습니다.
              </span>
              <br />
              <span>
                끊임없는 배움의 연속에서 즐거움을 찾고 단순히 배운다는 것에
                목표를 두기보다 이해하는 것에 더 높은 목표 가치를 두고 있습니다.
              </span>
              <br />
              <span>
                사람들과 소통하는 것을 좋아하며 비록 소소한 대화라도 개발에는
                중요한 요소라고 생각합니다.
              </span>
              <br />
              <span>
                <span>"Just Do It!"</span>이란 문장은 저의 개발 철학을 잘
                보여주는 문장이라고 생각합니다.
              </span>
            </div>
          </div>
          <div className="MoreInfo_Stacks">
            <div className="MoreInfo_Title">Stacks</div>
            <div className="MoreInfo_Stack">
              <span>프로그래밍 언어:</span>
              <span> JavaScript (ES6), TypeScript, HTML5, CSS3</span>
              <br />
              <span>프레임워크 & 라이브러리:</span>
              <span> React, React-Hooks, Redux, Redux-saga</span>
              <br />
              <span>DB & 서버:</span>
              <span> MySQL</span>
              <br />
              <span>Others:</span>
              <span>Git, Github, Postman, Slack, Notion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
