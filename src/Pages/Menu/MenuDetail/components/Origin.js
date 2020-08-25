import React, { Component } from "react";
import "./Origin.scss";

class Origin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  closeOrigin = () => {
    if (this.props.originClass === "activeOrigin") {
      this.props.closeOriginProps();
    }
  };

  render() {
    return (
      <div className={this.props.originClass}>
        <div className="originContainer">
          <div className="headContainer">
            <div className="Head">원산지 정보</div>
            <div className="classPopContainer">
              <div 
              onClick={this.closeOrigin} 
              className="closePop"></div>
            </div>
          </div>
          <div className="originInfoContainer">
            <img
              alt="originInformation"
              className="originInfo"
              src={this.props.originClass}
              // "/Images/pop_origin.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Origin;
