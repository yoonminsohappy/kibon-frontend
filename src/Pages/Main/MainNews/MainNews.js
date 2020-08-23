import React, { Component } from "react";
import { Link } from "react-router-dom";
import Notice from "./NewsCard/Notice";
import News from "./NewsCard/News";
import "./MainNews.scss";
import DonationNews from "./NewsCard/DonationNews";

class MainNews extends Component {
  state = {  }
  render() { 
    return (
      <div className="MainNews">
        <h2>
          <span>Bon News</span>
          <p>본아이에프의 새로운 소식</p>
        </h2>
        <div className="mainNewsBoxContainer">
          <Notice data={MAIN_NEWS_TEXT[0]}/>
          <News data={MAIN_NEWS_TEXT[1]}/>
          <DonationNews data={MAIN_NEWS_TEXT[2]}/>
        </div>
      </div>
    );
  }
}
 
export default MainNews;

const MAIN_NEWS_TEXT = [
  {
    title: "공지사항",
    subTitle: [
      "[공지]본설 원산지 안내",
      "[공지]본도시락 메뉴별 알레르기 유발물질 정보 안내 (2020년 7월 1일 기준)",
      "[공지]본도시락 원산지 안내 (2020년 7월 1일 기준)",
    ],
    date: ["2020.08.05", "2020.06.29", "2020.06.18"],
  },
  {
    title: "보도자료",
    subTitle: [
      "본그룹,'본 도서 나눔 캠페인'차원 도서 기증 진행",
      "본설렁탕,'브랜드 리더'가맹점 모집",
      "본도시락,1만원 이상 주문 시 전 메뉴 2천원 할인 쿠폰 증정",
    ],
    date: ["2020.08.07", "2020.08.07", "2020.08.07"],
  },
  {
    title: "나눔뉴스",
    subTitle: [
      "임직원 걸음기부와 함께한 보양죽 나눔",
      "2020 어르신 본죽나눔 이야기",
      "본아이에프-본사랑,연세의료원 10년간 10억원 기부",
    ],
    date: ["2020.08.14", "2020.08.07", "2020.05.19"],
  },
];