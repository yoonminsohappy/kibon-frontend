import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainVision.scss";

class MainVision extends Component {
  state = {  }
  render() { 
    return (
      <div className="MainVision">
        <h2>
          <span>BonVision</span>
          <p>행복한 삶을 창조하는 그룹</p>
        </h2>
        <div className="greenContentBox">
          <div>
            <p>
              모두가 협력하여 선을 이룬다 <br />
              성공보다는 <strong>사명</strong>, 경쟁보다는 <strong>협력</strong>
              , 빨리보다는 <strong>멀리</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
 
export default MainVision;