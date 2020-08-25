import React, { Component } from "react";
import "./Basket.scss";
import "../../Components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import "../../Styles/common.scss";
import BasketList from "./BasketList";

class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <div className="orderPopWrap">
          <div className="orderPopTop">
            <div className="innerWrapIn">
              <h3>일반주문</h3>
              <Link to="/" class="closeFullPop">
                닫기
              </Link>
            </div>
          </div>
          <div className="joinStepBox order">
            <ol>
              <li className="current">
                <span>장바구니</span>
              </li>
              <li>
                <span>결제완료</span>
              </li>
            </ol>
          </div>
          <div className="orderPayItems">
            <div className="tableWrap">
              <table className="tableList">
                <thead>
                  <tr>
                    <th>주문메뉴</th>
                    <th>수량</th>
                    <th>가격</th>
                  </tr>
                </thead>
                {baskets.map((el, idx) => {
                  return <BasketList />;
                })}
              </table>
              <div className="totalSection">
                <div className="totalTitle">총 금액</div>
                <div className="totalGoodsPrice">
                  <span>상품가</span>
                  <span>0원</span>
                </div>
                <div className="totalPrice">
                  <span>합계</span>
                  <span>0원</span>
                </div>
                <div className="payBtn">결제하기</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const baskets = [
  {
    image: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_4BpzCLaw.jpg",
    name: "[본죽&amp;비빔밥cafe] 해물김치해장죽&nbsp; / (대)포장용기",
  },
  {
    image: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_4BpzCLaw.jpg",
    name: "[본죽&amp;비빔밥cafe] 해물김치해장죽&nbsp; / (대)포장용기",
  },
  {
    image: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_4BpzCLaw.jpg",
    name: "[본죽&amp;비빔밥cafe] 해물김치해장죽&nbsp; / (대)포장용기",
  },
];

export default Basket;
