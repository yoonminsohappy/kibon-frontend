import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import url from "../../../configBasket";
import "./BasketFeeds.scss";

class BasketFeeds extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      // delete: false,
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    // this.setState({ num: this.props.quantity });
    // console.log(this.props.match);
  };

  patchData = (which) => {
    // console.log(this.props.product_id);
    // console.log("number >>> ");
    const token = localStorage.getItem("token");
    console.log("patchData 실행");
    fetch(`${url}/order/cart`, {
      method: "PATCH",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id: this.props.product_id,
        changed_quantity: which,
      }),
    }).then((res) => {
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  deleteData = (product_id) => {
    const token = localStorage.getItem("token");
    console.log("deleteData 실행");
    fetch(`${url}/order/cart`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        product_id,
      }),
    }).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        this.props.handleData();
      }
    });
  };

  render() {
    // console.log(this.props.quantity);
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
              value={this.props.quantity}
            ></input>
            <button
              className="qtySubtract"
              onClick={() => {
                // this.minus(this.props.id);
                this.props.minus(this.props.id);
              }}
            >
              -
            </button>
            <button
              className="qtyAdd"
              onClick={() => {
                // this.plus(this.props.id);
                this.props.plus(this.props.id);
              }}
            >
              +
            </button>
          </div>
        </td>
        <td className="priceContainer">
          <span className="price">
            <span className="num">
              {Number(this.props.price * this.props.quantity).toLocaleString()}
            </span>
            원
          </span>
        </td>
        <td className="funcContainer">
          <div className="btnGroup">
            <button
              className="remove"
              onClick={() => this.deleteData(this.props.id)}
            >
              취소
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default withRouter(BasketFeeds);
