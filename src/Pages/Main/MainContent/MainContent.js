import React, { Component } from "react";
import "./MainContent.scss"

class MainContent extends Component {
  state = {
    scrollPos: 0,
    show: true
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top < -530,
    });
  };

  render() {
    const {scrollPos} = this.state;
    const firstHeight = scrollPos < -159;
    const secondHeight = scrollPos < -777;
    const thirdHeight = scrollPos < -1295;
    const fourthHeight = scrollPos < -1961;


    return (
      <div className="MainContent">
        <div className="left">
          <div className="mainContentCardContainer">
            <div className="mainContentArticle">
              <div className="brownBox"></div>
              <img
                class="soupImage"
                alt="본과 함께하는 일상 첫번째 사진"
                src="./Images/maincontent0.png"
              />
              <div className={firstHeight ? "leftCardActive" : ""} />
              <div className={firstHeight ? "mainContentText" : ""}>
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

        <div className="right">
          <div className="mainContentCardContainer">
            <div className="mainContentArticle">
              <div className={secondHeight ? "rightCardActive" : ""} />
              <div className="mainContentText">
                <span>본죽&비빔밥cafe</span>
                <p className="textTitle">
                  한식으로 함께 <br /> 한 곳에서 함께
                </p>
                <hr />
                <p className="mainText">
                  다채로운 한식을 만나는 새로운 공간. <br />
                  본죽만의 시그니처 별미 요리죽, <br />
                  죽의 새로운 경험으로 초대합니다.
                </p>
                <button>자세히 보기</button>
              </div>
              <img className="bonCafeImage" src="./Images/maincontent1.png" />
            </div>
          </div>
        </div>

        <div className="left">
          <div className="mainContentCardContainer">
            <div className="mainContentArticle">
              <div className={thirdHeight ? "leftCardActive" : ""} />
              <img className="bonLunchBoxImage" src="./Images/maincontent2.png" />
              <div className={thirdHeight ? "leftCardActive" : ""}></div>
              <div
                className={thirdHeight ? "mainContentText" : ""}
                style={{ display: thirdHeight ? "block" : "none" }}
              >
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

        <div className="right">
          <div className="mainContentCardContainer">
            <div className="mainContentArticle">
              <div className={fourthHeight ? "rightCardActive" : ""} />
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
              <img className="bonSulImage" src="./Images/maincontent3.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MainContent;
