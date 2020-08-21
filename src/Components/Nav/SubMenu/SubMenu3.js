import React, { Component } from "react";
import "./SubMenu.scss";

class SubMenu3 extends Component {
  state = {};
  render() {
    return (
      <div className="subMainContainer">
        <div className="subIFMenu">
          <ul style={{ display: this.state.display }}>
            <li>브랜드소개</li>
            <li>메뉴소개</li>
            <li>본푸드랩 소개</li>
            <li>주문하기</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenu3;
