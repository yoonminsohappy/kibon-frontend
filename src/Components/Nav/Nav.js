import React, { Component } from 'react';
import './Nav.scss';
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : "none"


    };
  }

  mouseOver=()=>{
    this.setState({display: "flex"})
  }

  mouseLeave=()=>{
    this.setState({display: "none"})
  }



  render() {
    const SUBMENUCONTENTS = SUB_MENU_CONTENTS;


    return (
      <div className="Nav">
        <nav className="mainNav">
          <img
            alt="본죽로고이미지"
            className="mainLogoImg"
            src="/Images/logo_gnb.png"
          ></img>

          <div className="mainCategory">
            <ul>
              <li>
                <Link
                  to="#"
                  onMouseEnter={this.mouseOver}
                  onMouseLeave={this.mouseLeave}
                >
                  본아이에프
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onMouseEnter={this.mouseOver}
                  onMouseLeave={this.mouseLeave}
                >
                  본죽
                </Link>
              </li>
              <li>
                <Link to="#">본죽&비빔밥cafe</Link>
              </li>
              <li>
                <Link to="#">본도시락</Link>
              </li>
              <li>
                <Link to="#">본설</Link>
              </li>
              <li>
                <Link to="#">베이비본죽</Link>
              </li>
              <li>
                <Link to="#">본몰</Link>
              </li>
              <li>
                <Link to="#">창업안내</Link>
              </li>
            </ul>
          </div>

          <div className="mainUtil">
            <Link to="#">주문</Link>
            <div>|</div>
            <Link to="#">마이페이지</Link>
            <div>|</div>
            <Link to="#">로그아웃</Link>
            <Link to="#" className="searchImg"></Link>
            <Link to="#" className="menuImg"></Link>
          </div>
        </nav>

        <div className="subMainContainer">
          <div className="subIFMenu">
            <ul style={{ display: this.state.display }}>
              <li>회사소개</li>
              <li>경영이념</li>
              <li>소식보기</li>
              <li>사회공헌</li>
              <li>인재채용</li>
              <li>윤리경영</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;

const SUB_MENU_CONTENTS ={
  "1":{
      "content1" : "회사소개",
      "content2" : "경영이념",                 
  },
  "2":{
    "content1" : 2
  },
  "3":{
    "content1" : 3
  },
  "4":{
    "content1" : 4
  }

}