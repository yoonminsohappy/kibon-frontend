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
            // "/Images/product_detail.png"
          />
          <span className="introText">
            {this.props.introText}
            {/* 삼복 더위 이기는 영양 가득 최고의 보양 한 그릇 */}
          </span>
          <span className="menuText">{/* 삼계전복죽 */}</span>
          <span className="explanation">
            {this.props.detailText}
            {/* 푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
            <br />
            국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로 깊고
            진한 진짜 보양식을 만나보세요. */}
          </span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
