import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import url from "../../../config";
import "./BasketFeeds.scss";

class BasketFeeds extends Component {
  constructor() {
    super();

    this.state = {
      num: 0,
      // delete: false,
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.setState({ num: this.props.quantity });
    console.log(this.props.match);
  };

  patch = (number) => {
    const token = localStorage.getItem("token");
    fetch(url + "/order/cart", {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: this.props.product_id,
        delta: number,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  minus = () => {
    if (this.state.num > 1) {
      this.setState({
        num: this.state.num - 1,
      });
    } else return;
  };
  plus = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };

  delete = () => {
    const token = localStorage.getItem("token");
    fetch(`${url}/order/cart`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: this.props.product_id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  render() {
    const {
      checkboxEach,
      checkboxEachChecked,
      image,
      name,
      price,
      id,
    } = this.props;

    return (
      <tr className="BasketFeeds">
        <td className="checkboxContainer">
          <div
            className={checkboxEach ? "checkboxWrapChecked" : "checkboxWrap"}
            onClick={checkboxEachChecked}
          >
            <input className="checkbox" type="checkbox"></input>
            <span className="checkboxCustom"></span>
          </div>
        </td>
        <td className="infoContainer">
          <div className="infoWrap">
            <img className="mockImg" src={image} alt="item_image" />
            <div className="infoTextWrap">
              <div
                className="productName"
                onClick={() => this.props.history.push(`detail/${id}`)}
              >
                {name}
              </div>
            </div>
          </div>
        </td>
        <td className="qtyContainer">
          <div className="qtyBox">
            <input
              className="qtyInput"
              type="number"
              value={this.state.num}
            ></input>
            <button className="qtySubtract" onClick={() => this.minus()}>
              -
            </button>
            <button
              className="qtyAdd"
              onClick={() => (this.plus(), this.patch())}
            >
              +
            </button>
          </div>
        </td>
        <td className="priceContainer">
          <span className="price">
            <span className="num">
              {(price * this.state.num).toLocaleString()}
            </span>{" "}
            원
          </span>
        </td>
        {/* {Number(this.state.num * 10000).toLocaleString()} */}
        <td className="funcContainer">
          <div className="btnGroup">
            <button className="remove" onClick={this.delete}>
              취소
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default withRouter(BasketFeeds);
