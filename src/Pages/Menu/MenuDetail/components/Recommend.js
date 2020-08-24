import React, { Component } from "react";
import "./Recommend.scss";

export class Recommend extends Component {
  render() {
    return (
      <div className="Recommend">
        <div className="recommendSection">
          <div className="recommendIntroBox">
            <span className="recommendIntro">이럴 때 추천</span>
            <span className="underBar"></span>
            <div className="recommendText">
              <span className="recommendMenu">이 메뉴는 이럴 때</span>
              <span className="recommend">추천해요!</span>
            </div>
          </div>
          <div className="eachRecommendBox">
            <div className="eachRecommend">
              <div className="recommendForHealth">
                <img
                  alt="foodimage"
                  className="forHealthImg"
                  src="/Images/recommend1.png"
                />
                <span className="forHealth">#보양</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutHealth">
                  유난히 몸이 무겁고 기력이 부족한 날이 있죠.
                  <br />
                  마음까지 든든한 온기와 활력을 전해줘요.
                </span>
              </div>
              <div className="sideBarContainer">
                <hr className="sideBar" />
              </div>

              <div className="recommendForBreakfast">
                <img
                  alt="breakfastImage"
                  className="forBreakfastImg"
                  src="/Images/recommend2.png"
                />
                <span className="forBreakfast">#아침식사</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutBreakfast">
                  입 안이 껄끄러운 피곤하고 바쁜 아침,
                  <br /> 자극적이지 않고 먹기도 편해요.
                </span>
              </div>
              <div className="sideBarContainer">
                <hr className="sideBar" />
              </div>

              <div className="recommendForPresent">
                <img
                  alt="presentImage"
                  className="forPresentImg"
                  src="/Images/recommend3.png"
                />
                <span className="forPresent">#선물</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutPresent1">
                  내 소중한 사람의 건강까지 생각하는,
                  <br />
                  따뜻한 마음을 온전히 담아 특별해요.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
