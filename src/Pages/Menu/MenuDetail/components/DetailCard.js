import React, { Component } from "react";
import "./DetailCard.scss";

class DetailCard extends Component {
  render() {
    return (
      <div className="DetailCard">
        <div className="DetailContainer">
          <span className="headText">Product Detail</span>
          <span className="menuName">메뉴 특징</span>
          <span className="underBar" />
          <img
            alt="productImage"
            className="productImage"
            src="/Images/product_detail.png"
          />
          <span className="introText">
            삼복 더위 이기는 영양 가득 최고의 보양 한 그릇
          </span>
          <span className="menuText">삼계전복죽</span>
          <span className="explanation">
            푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
            <br />
            국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로 깊고
            진한 진짜 보양식을 만나보세요.
          </span>
        </div>
      </div>
    );
  }
}

export default DetailCard;
