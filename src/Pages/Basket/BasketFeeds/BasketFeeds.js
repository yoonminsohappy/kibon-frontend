import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import url from "../../../configBasket";
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

  plus = (number) => {
    this.patchData(number);
    this.setState({ num: this.state.num + number });
  };

  minus = (number) => {
    console.log(number);
    this.patchData(number);
    if (this.state.num === 1) {
      return;
    } else if (this.state.num > 1) {
      this.setState({ num: this.state.num + number });
    }
  };

  patchData = (number) => {
    // const token = localStorage.getItem("token");
    console.log("patchData 실행");
    fetch(url + "/order/cart", {
      method: "PATCH",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGlmaWVyIjoiaGo4ODUzIn0.cr4C6pb_2iCz2Pty08WV5S9McGKbk1MY1zoqe6xF0Ms",
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

  deleteData = () => {
    // const token = localStorage.getItem("token");
    console.log("deleteData 실행");
    fetch(`${url}/order/cart`, {
      method: "DELETE",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGlmaWVyIjoiaGo4ODUzIn0.cr4C6pb_2iCz2Pty08WV5S9McGKbk1MY1zoqe6xF0Ms",
      },
      body: JSON.stringify({
        product_id: 2,
      }),
    }).then((res) => {
      console.log(res);
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
              value={this.props.quantity}
            ></input>
            <button
              className="qtySubtract"
              onClick={() => {
                this.minus();
                this.patchData();
              }}
            >
              -
            </button>
            <button
              className="qtyAdd"
              onClick={() => {
                this.plus();
                this.patchData();
              }}
            >
              +
            </button>
          </div>
        </td>
        <td className="priceContainer">
          <span className="price">
            <span className="num">{this.props.price.toLocaleString()}</span> 원
          </span>
        </td>
        <td className="funcContainer">
          <div className="btnGroup">
            <button className="remove" onClick={() => this.deleteData()}>
              취소
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default withRouter(BasketFeeds);
