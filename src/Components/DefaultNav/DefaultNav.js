import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu/SubMenu";
import Search from "./Search/Search";
import "./DefaultNav.scss";

class DefaultNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1,
      isDisplay: false,
      hidden: true,
      scrollPos: 0,
      underLine: "",
      isSearch: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      hidden: document.body.getBoundingClientRect().top === 0,
    });
  };

  tabActiveHandler = (idx) => {
    this.setState({ activeTab: idx });
  };

  mouseLeave = () => {
    this.setState({ activeTab: -1 });
  };

  isSearch = () => {
    this.setState((prevState) => ({ isSearch: !prevState.isSearch }));
  };

  render() {
    const { hidden, activeTab, scrollPos, isSearch } = this.state;
    return (
      <div className="Nav" onMouseLeave={() => this.tabActiveHandler(-1)}>
        <nav className="mainNav">
          <div className="navHr"></div>
          <div className="nav box"></div>
          <Link to="/">
            <img
              alt="본죽로고이미지"
              className="mainLogoImg"
              src="/Images/logo_gnb.png"
            />
          </Link>
          <div className="mainCategory">
            <ul>
              {MENU_NAME_ARR.map((str, idx) => {
                return (
                  <li>
                    <Link
                      to="#"
                      onMouseEnter={() => this.tabActiveHandler(idx)}
                      top={scrollPos}
                    >
                      {str}
                      <div
                        className={activeTab === idx ? "activeUnderLine" : ""}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mainUtil">
            <Link to="#">주문</Link>
            <div>|</div>
            <Link to="#">로그인</Link>
            <div className="logout">|</div>
            <Link to="#" className="logout">
              로그아웃
            </Link>
            <Link to="#" className="searchImg" onClick={this.isSearch} />
            <Link to="#" className="menuImg" />
          </div>
        </nav>
        <div>
          <SubMenu submenu={SUB_MENU_TABLE[activeTab]} hover={activeTab} />
        </div>
        <Search isSearch={isSearch} />
      </div>
    );
  }
}

export default DefaultNav;

const MENU_NAME_ARR = [
  "본아이에프",
  "본죽",
  "본죽&비빔밥cafe",
  "본도시락",
  "본설",
  "베이비본죽",
  "본몰",
  "창업안내",
];

const SUB_MENU_TABLE = [
  ["회사소개", "경영이념", "소식보기", "사회공헌", "인재채용", "윤리경영"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "본푸드랩 소개", "주문하기"],
  ["브랜드 소개", "상품 소개", "쇼핑혜택", "주문하기", "대량주문"],
  ["창업안내", "창업상담", "창업 설명회", "성공스토리", "추천상권", "창업소식"],
];
