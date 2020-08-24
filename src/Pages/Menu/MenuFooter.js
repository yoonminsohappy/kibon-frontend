import React, { Component } from "react";
import "./MenuFooter.scss";
import { Link } from "react-router-dom";

class MenuFooter extends Component {
  render() {
    return (
      <div className="btnBrandOrder">
        <Link to="/" className="block">
          지금 바로 주문하기
        </Link>
      </div>
    );
  }
}

export default MenuFooter;
