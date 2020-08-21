import React, { Component } from "react";
import "./Modal.scss";

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <div className="headContainer">
          <div className="Head">원산지 정보</div>
          <div className="classPopContainer">
            <div className="closePop"></div>
          </div>
        </div>
        <div className="originInfoContainer">
          <img
            alt="originInformation"
            className="originInfo"
            src="/Images/pop_origin.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
