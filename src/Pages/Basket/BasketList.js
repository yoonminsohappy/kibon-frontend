import React, { Component } from "react";

class BasketList extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
    };
  }

  minus = () => {
    if (this.state.num > 0) {
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
  render() {
    return (
      <tbody>
        <tr>
          <td className="al">
            <div className="goodsPhoto">
              <p className="goodsThumb">
                <img
                  src="https://files.bonif.co.kr/upload/cmdt/BF101_pic_4BpzCLaw.jpg"
                  alt="goods"
                />
              </p>
              <p className="goodsTxt">
                [본죽&amp;비빔밥cafe] 해물김치해장죽&nbsp; / (대)포장용기
              </p>
            </div>
          </td>
          <td>
            <div onClick={this.minus} className="btnLeft"></div>
            {this.state.num} 개
            <div onClick={this.plus} className="btnRight"></div>
          </td>
          <td className="ar">
            <span className="spoqa">
              {Number(this.state.num * 10000).toLocaleString()}
            </span>{" "}
            원
          </td>
        </tr>
      </tbody>
    );
  }
}

export default BasketList;
