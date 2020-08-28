import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import urlBasket from "../../configBasket";

class Goods extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: "none",
      isClicked: false,
      itemsArr: [],
      postArr: [],
      num: 0,
      emptyFeed: false,
    };
  }

  getData = () => {
    const token = localStorage.getItem("token");
    fetch(urlBasket + "/order/cart", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          itemsArr: res.items,
          emptyFeed: true,
        })
      );
  };

  postData = (product_id, total_price) => {
    console.log(product_id, total_price);
    const token = localStorage.getItem("token");
    fetch(`${urlBasket}/order/cart`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id,
        total_price: Math.floor(total_price),
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        // this.setState({
        //   postArr: res,
        // })
        console.log(res)
      );
  };

  handleMouseOver = () => {
    this.setState({ isHovering: "block" });
  };

  handleMouseLeave = () => {
    this.setState({ isHovering: "none" });
  };

  handleHeartClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    return (
      <li>
        <div
          className="goods-block"
          onMouseEnter={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        >
          <div className="goods-icon">
            <em className={this.props.best ? "best" : "new"}>
              {this.props.best ? "best" : "" || this.props.new ? "new" : ""}
            </em>
          </div>
          <div className="goods-thumb">
            <p>
              <img
                onClick={() => {
                  this.props.history.push(`/menu/menu-detail/${this.props.id}`);
                }}
                alt="goodsDetail"
                src={this.props.img}
                className="goods-detail-view"
              />
            </p>
            <div
              onClick={() => {
                this.handleHeartClick();
                this.postData(this.props.id, this.props.price);
              }}
              className={
                this.state.isClicked
                  ? "goods-opt-selectbox-fill"
                  : "goods-opt-selectbox"
              }
              style={{ display: this.state.isHovering }}
            >
              <span className="btn-zzim full">장바구니 담기</span>
            </div>
          </div>
          <div className="goods-name">
            <p className="name">{this.props.name}</p>
            <p className="price">
              <span>{`${Math.floor(this.props.price)}`}</span> 원
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Goods);
