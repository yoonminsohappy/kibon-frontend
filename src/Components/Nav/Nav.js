import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';
import SubMenu1 from './SubMenu/SubMenu1';
import SubMenu2 from './SubMenu/SubMenu2';
import SubMenu3 from './SubMenu/SubMenu3';
import SubMenu4 from "./SubMenu/SubMenu4";
import SubMenu5 from "./SubMenu/SubMenu5";


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

const arr = ["본아이에프", "본죽", "본죽&비빔밥cafe","본도시락","본설","베이비본죽","본몰","창업안내"];



class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: -1,
      display: "none"
    };
  }

  mouseOver=(id)=>{
    this.setState({activeTab: id})
    this.setState({display:"block"})
  }

  mouseLeave=()=>{
    this.setState({display: "none"})
  }

  render() {
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
              {arr.map((str,idx)=>{
                return(
                <li><Link to="#" onMouseEnter={()=>this.mouseOver(idx)}>{str}</Link></li>
                )
              })}
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
        <div>
          {obj[this.state.activeTab]}
        </div>
      </div>
    );
  }
}

export default Nav;