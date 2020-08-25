import React, { Component } from "react";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  render() {
    return (
      <div className="productDetail">
        <div className="productDetailContainer">
          <span className="headText">{this.props.productDetail}</span>
          <span className="menuName">{this.props.productDetailKor}</span>
          <span className="underBar" />
          <img
            alt="productImage"
            className="productImage"
            src={this.props.detailImage}
          />
          <span className="introText">
            {this.props.introText}
          </span>
          <span className="menuText">{/* 삼계전복죽 */}</span>
          <span className="explanation">
            {this.props.detailText}
          </span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
