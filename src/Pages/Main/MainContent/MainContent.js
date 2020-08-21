import React, { Component } from "react";
import "./MainContent.scss"

class MainContent extends Component {
  state = {

  }
  render() { 
    return (
      <div className="MainContent">
        <div className="mainContentContainer">
          <div className="mainContentArticle">
            <img src="./Images/maincontent1.png"></img>
            <div className="mainContentText">
              <span>본죽</span>
              <p className="textTitle">
                죽이 요리가 되는 <br /> 선물같은 시간
              </p>
              <hr />
              <p className="mainText">
                프리미엄 토핑을 만나 죽이 요리가 되다! <br />
                본죽만의 시그니처 별미 요리죽, <br />
                죽의 새로운 경험으로 초대합니다.
              </p>
              <button>자세히 보기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MainContent;