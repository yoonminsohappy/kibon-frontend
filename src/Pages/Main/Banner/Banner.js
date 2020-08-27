import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Banner.scss";

const params = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="BannerImageSize">
          <Slider {...params} style={{ overflow: "hidden" }}>
            <div>
              <img alt="2000원 할인 사진" src="./Images/banner1.png" />
            </div>
            <div>
              <img alt="바싹한 어워드 사진" src="./Images/banner2.png" />
            </div>
            <div>
              <img alt="기프트 카드" src="./Images/banner3.png" />
            </div>
            <div>
              <img alt="가맹점 수수료" src="./Images/banner4.png" />
            </div>
            <div>
              <img alt="바싹 불고기와 오징어" src="./Images/banner5.png" />
            </div>
            <div>
              <img alt="전복낙지활력설" src="./Images/banner6.png" />
            </div>
          </Slider>
        </div>
        <div className="mainOrderBox">
          {MAIN_ORDER_CONTENTS.map((v) => {
            return (
              <div className="selectCard">
                <Link to="#">
                  <dl>
                    <div className="orderText">
                      <dt>{v.title}</dt>
                      <dd>{v.mainContent}</dd>
                    </div>
                    <div className="arrowImage"></div>
                  </dl>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const MAIN_ORDER_CONTENTS = [
  {
    title: "주문하기",
    mainContent: "간편한 결제와 신속한 배달",
  },
  {
    title: "선물하기",
    mainContent: "본으로 전하는 따뜻한 마음",
  },
  {
    title: "단체주문",
    mainContent: "02-6908-6377 (200개 이상 주문 시)",
  },
];

export default Banner;
