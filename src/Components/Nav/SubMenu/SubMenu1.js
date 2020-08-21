import React, { Component } from "react";
import './SubMenu.scss';

class SubMenu1 extends Component {
  state = {  }
  render() { 
    return (
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
    );
  }
}
 
export default SubMenu1;