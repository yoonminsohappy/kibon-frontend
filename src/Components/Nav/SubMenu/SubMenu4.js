import React, { Component } from "react";
import "./SubMenu.scss";

class SubMenu4 extends Component {
  state = {};
  render() {
    return (
      <div className="subMainContainer">
        <div className="downin"></div>
        <div className="subIFMenu">
          <ul style={{ display: this.state.display }}>
            <li>브랜드 소개</li>
            <li>상품 소개</li>
            <li>쇼핑혜택</li>
            <li>주문하기</li>
            <li>대량주문</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenu4;
