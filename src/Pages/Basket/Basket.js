import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import BasketFeeds from "./BasketFeeds/BasketFeeds";
import { Link } from "react-router-dom";
import urlBasket from "../../configBasket";
import "./Basket.scss";
import "../../Styles/common.scss";

class Basket extends Component {
  constructor() {
    super();

    this.state = {
      checkbox_all: true,
      checkbox_each: true,
      checked_each: 0,
      itemsArr: [],
      emptyFeed: false,
      total: 0,
    };
  }

  componentDidMount = () => {
    this.getData();
    document.documentElement.scrollTop = 0;
  };

  getData = () => {
    const token = localStorage.getItem("token");
    console.log("getData 실행");
    fetch(urlBasket + "/order/cart", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          itemsArr: res.cart_list,
          emptyFeed: true,
          price_arr: res.cart_list,
        })
      );
    // console.log(res.cart_list.price);
  };

  checkboxAllChecked = () => {
    if (this.state.checkbox_all)
      this.setState({ checkbox_all: false, checkbox_each: false });
    else {
      this.setState({ checkbox_all: true, checkbox_each: true });
    }
  };

  checkboxEachChecked = () => {
    if (this.state.checkbox_each)
      this.setState({ checkbox_each: false, checkbox_all: false });
    else {
      this.setState({ checkbox_each: true, checkbox_all: true });
    }
  };

  // totalPrice = () => {
  //   if ("price" in this.state.price_arr) {
  //     let str = this.state.price_arr.total;
  //     return str.toLocaleString();
  //   }
  // };

  plus = (id) => {
    const selectedObj = this.state.itemsArr.find((el) => el.ID === id);
    console.log("selectedObj.quantity", selectedObj.quantity);
    selectedObj.quantity++;
    const arrCopy = [...this.state.itemsArr];
    console.log("arrCopy", arrCopy);
    arrCopy[id] = selectedObj;
    console.log("arrCopy[id]", arrCopy[id]);
    this.setState({
      itemsArr: arrCopy,
      total: arrCopy.reduce(
        (total, el) => (total += el.quantity * el.price),
        0
      ),
    });
    // console.log(arrCopy);
  };

  minus = (id) => {
    if (this.state.num === 1) {
      alert("1개 이상 선택하셔야 합니다");
    } else if (this.state.num >= 2) {
      this.setState({ num: this.state.num - 1 });
    }
  };

  render() {
    // console.log(this.state.itemsArr);
    const basketFeeds = this.state.itemsArr.map((el, idx) => {
      return (
        <BasketFeeds
          handleData={this.getData}
          product_id={el.ID}
          id={el.ID}
          name={el.name}
          price={el.price}
          image={el.image_url}
          changed_quantity={el.changed_quantity}
          checkboxEach={this.state.checkbox_each}
          checkboxEachChecked={this.checkboxEachChecked}
          key={idx}
          plus={this.plus}
          minus={this.minus}
        />
      );
    });

    const { emptyFeed, checkbox_all } = this.state;

    return (
      <div className="Basket">
        <div>
          <main className="mainContainer">
            <section className="sectionWrap">
              <div className="orderPopTop">
                <div className="innerWrapIn">
                  <h3>일반주문</h3>
                  <Link to="/" className="closeFullPop">
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
              <section>
                <div className="form">
                  <div className="orderTableContainer">
                    <div className="orderTableWrap">
                      <table className="orderTable">
                        <thead>
                          <tr>
                            <th className="tCheck">
                              <div
                                className={
                                  checkbox_all
                                    ? "checkboxWrapChecked"
                                    : "checkboxWrap"
                                }
                                onClick={this.checkboxAllChecked}
                              >
                                <input
                                  className="checkbox"
                                  type="checkbox"
                                ></input>
                                <span className="checkboxCustom"></span>
                              </div>
                            </th>
                            <th className="tInfo">주문메뉴</th>
                            <th className="tQty">수량</th>
                            <th className="tPrice">
                              <div className="tPriceText">가격</div>
                            </th>

                            <th className="tFunc"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            className={
                              emptyFeed ? "emptyBody" : "emptyBodyActive"
                            }
                          >
                            <td colSpan="6">
                              장바구니에 담긴 상품이 없습니다.
                            </td>
                          </tr>
                          {basketFeeds}
                        </tbody>
                      </table>
                      <div className="totalSection">
                        <div className="totalTitle">총 금액</div>
                        <div className="totalGoodsPrice">
                          <span>상품가</span>
                          <span>0원</span>
                        </div>
                        <div className="totalPrice">
                          <span>합계</span>
                          <span>원</span>
                        </div>
                        <div className="payBtn">결제하기</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(Basket);
