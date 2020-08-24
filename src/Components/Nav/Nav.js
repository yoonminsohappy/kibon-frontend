import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import SubMenu from './SubMenu/SubMenu';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1,
      display: "none",
      show: false,
      scrollPos: 0,
    };
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = () =>{
    console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top === 0
    });
  }

  mouseOver=(idx)=>{
    this.setState({activeTab: idx}) 
  }

  mouseLeave=()=>{
    this.setState({activeTab: -1})
  }

  render() {
    const {show, activeTab, scrollPos} = this.state;
    return (
      <div className="Nav">
        <nav className="mainNav">
          <div className="navHr"></div>
          <div className={show ? "inactive" : "box"}></div>
          <img
            alt="본죽로고이미지"
            className="mainLogoImg"
            src="/Images/logo_gnb.png"
          ></img>
          <div className="mainCategory">
            <ul>
              {arr.map((str, idx) => {
                return (
                  <li>
                    <Link
                      to="#"
                      id="testing"
                      onMouseEnter={() => this.mouseOver(idx)}
                      top={scrollPos}
                    >
                      {str}
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
            <div style={{ display: "none" }}>|</div>
            <Link to="#" style={{ display: "none" }}>
              로그아웃
            </Link>
            <Link to="#" className="searchImg"></Link>
            <Link to="#" className="menuImg"></Link>
          </div>
        </nav>
        <div>
          <SubMenu submenu={SUB_MENU[activeTab]} hover={activeTab} />
        </div>
      </div>
    );
  }
}

export default Nav;

const arr = [
  "본아이에프",
  "본죽",
  "본죽&비빔밥cafe",
  "본도시락",
  "본설",
  "베이비본죽",
  "본몰",
  "창업안내",
];

const SUB_MENU = [
  ["회사소개", "경영이념", "소식보기", "사회공헌", "인재채용", "윤리경영"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "매장 찾기", "이벤트", "주문하기", "창업"],
  ["브랜드 소개", "메뉴 소개", "본푸드랩 소개", "주문하기"],
  ["브랜드 소개", "상품 소개", "쇼핑혜택", "주문하기", "대량주문"],
  ["창업안내", "창업상담", "창업 설명회", "성공스토리", "추천상권", "창업소식"]
];