import React, { Component } from "react";
import "./SubMenu.scss";

class SubMenu2 extends Component {
  state = {};
  render() {
    return (
      <div className="subMainContainer">
        <div className="downin"></div>
        <div className="subIFMenu">
          <ul style={{ display: this.state.display }}>
            <li>브랜드소개</li>
            <li>메뉴소개</li>
            <li>매장찾기</li>
            <li>이벤트</li>
            <li>주문하기</li>
            <li>창업</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenu2;
