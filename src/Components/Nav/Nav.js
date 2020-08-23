import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import SubMenu1 from './SubMenu/SubMenu1';
import SubMenu2 from './SubMenu/SubMenu2';
import SubMenu3 from './SubMenu/SubMenu3';
import SubMenu4 from "./SubMenu/SubMenu4";
import SubMenu5 from "./SubMenu/SubMenu5";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1,
      display: "none",
      show: false,
      scrollPos: 0
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
    console.log(this.state.show)
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
                    <Link to="#" id="testing" onMouseEnter={() => this.mouseOver(idx)} top={scrollPos}>
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
        <div>{obj[activeTab]}</div>
      </div>
    );
  }
}

export default Nav;

const obj = {
  0: <SubMenu1 />,
  1: <SubMenu2 />,
  2: <SubMenu2 />,
  3: <SubMenu2 />,
  4: <SubMenu2 />,
  5: <SubMenu3 />,
  6: <SubMenu4 />,
  7: <SubMenu5 />,
};

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