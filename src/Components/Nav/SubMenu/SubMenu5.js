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
            <li>창업안내</li>
            <li>창업상담</li>
            <li>창업 설명회</li>
            <li>성공 스토리</li>
            <li>추천상권</li>
            <li>창업소식</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SubMenu4;
