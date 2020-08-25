import React, { Component } from "react";
import "./Recommend.scss";

export class Recommend extends Component {
  render() {
    return (
      <div className="Recommend">
        <div className="recommendSection">
          <div className="recommendIntroBox">
            <span className="recommendIntro">{this.props.title}</span>
            <span className="underBar"></span>
            <div className="recommendText">
              <span className="recommendMenu">{this.props.subTitle}</span>
            </div>
          </div>
          <div className="eachRecommendBox">
            <div className="eachRecommend">
              <div className="recommendForHealth">
                <img
                  alt="foodimage"
                  className="forHealthImg"
                  src={this.props.firstTagImage}
                />
                <span className="forHealth">{this.props.firstTag}</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutHealth">{this.props.firstTagText}</span>
              </div>
              <div className="sideBarContainer">
                <hr className="sideBar" />
              </div>

              <div className="recommendForBreakfast">
                <img
                  alt="breakfastImage"
                  className="forBreakfastImg"
                  src={this.props.secondTagImage}
                />
                <span className="forBreakfast">{this.props.secondTag}</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutBreakfast">
                  {this.props.secondTagText}
                </span>
              </div>
              <div className="sideBarContainer">
                <hr className="sideBar" />
              </div>

              <div className="recommendForPresent">
                <img
                  alt="presentImage"
                  className="forPresentImg"
                  src={this.props.thirdTagImage}
                />
                <span className="forPresent"> {this.props.thirdTag}</span>
                <span className="recommendUnderBar"></span>
                <span className="aboutPresent1">{this.props.thirdTagText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recommend;
