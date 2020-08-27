<<<<<<< HEAD
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import urlBasket from "../../configBasket"


class Goods extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: "none",
      isClicked: false,
      itemsArr: [],
      emptyFeed: false,
    };
  }

  getData = () => {
    const token = localStorage.getItem("token");
    console.log("getData 함수");
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

  post = () => {
    console.log("포스트 함수")
    const token = localStorage.getItem("token");
    fetch(`${urlBasket}/order/cart`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: JSON.product_id,
      }),
    }).then((res) => res.json()).then((res) => console.log("res: ", res));
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
    // console.log(this.props);
    // console.log(this.props.category);
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
              onClick={()=> {this.handleHeartClick(); this.post()}}
              className={
                this.state.isClicked
                  ? "goods-opt-selectbox-fill"
                  : "goods-opt-selectbox"
              }
              style={{ display: this.state.isHovering }}
            >
              <span className="btn-zzim full">
                장바구니 담기
              </span>
            </div>
          </div>
          <div className="goods-name">
            <p className="name">{this.props.name}</p>
            <p className="price">
              <span>{`${this.props.price}`}</span> 원
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Goods);
=======
import React, { Component } from "react";

class Goods extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: "none",
      isClicked: false,
    };
  }

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
    // console.log(this.props.category);
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
              <a href="/#">
                <img
                  alt="goodsDetail"
                  src={this.props.img}
                  className="goods-detail-view"
                />
              </a>
            </p>
            <div
              onClick={this.handleHeartClick}
              className={
                this.state.isClicked
                  ? "goods-opt-selectbox-fill"
                  : "goods-opt-selectbox"
              }
              style={{ display: this.state.isHovering }}
            >
              <a href="#cartWrap" data-idx="7" className="btn-zzim full">
                MY메뉴
              </a>
            </div>
          </div>
          <div className="goods-name">
            <p className="name">{this.props.name}</p>
            <p className="price">
              <span>{`${this.props.price}`}</span> 원
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default Goods;
>>>>>>> 22aeae413ec06a05010f1267c8d8daf462214004
