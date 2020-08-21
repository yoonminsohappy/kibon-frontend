import React, { Component } from "react";
import "./Article1.scss";

class Article1 extends Component {
  render() {
    return (
      <div className="Article1">
        <div className="detailContainer">
          <div className="infoContainer">
            <img alt="menu" className="menu" src="/Images/menu.png" />
            <div className="wholeContainer">
              <p className="name">삼계전복죽</p>
              <p className="intro">
                삼복 더위 이기는 영양 가득 최고의 보양 한 그릇
              </p>
              <div className="priceContainer">
                <strong className="price">15,000</strong>
                <span className="unit">원</span>
              </div>
              <div className="btnContainer">
                <div className="btn">
                  <button className="myMenu" type="button">
                    <div className="likeIcon" alt="like-icon" />
                    MY메뉴
                  </button>
                  <button className="origin" type="button">
                    원산지정보
                  </button>
                </div>
              </div>
              <div className="bar"></div>
              <p className="summary1">
                푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
              </p>
              <p className="summary2">
                국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로
              </p>
              <p className="summary3"> 깊고 진한 진짜 보양식을 만나보세요.</p>

              <div className="previewImage">
                <img
                  alt="subimage1"
                  className="subImage1"
                  src="/Images/menu.png"
                />
                <img
                  alt="subimage2"
                  className="subImage2"
                  src="/Images/menu_subimage.png"
                />
              </div>
            </div>
            <div className="shareContainer">
              <div className="fbContainer">
                <div alt="facebookIcon" className="facebook"></div>
              </div>
              <div className="linkContainer">
                <div alt="linkIcon" className="link"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article1;
