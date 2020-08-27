import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./StoreItems.scss";

class StoreItems extends Component {
  render() {
    const { name, title, details, details2, details3, details4 } = this.props;
    return (
      <li>
        <span className="storeNm">{name}</span>
        <span className="storeArea">
          <Link to="/">{title}</Link>
        </span>
        <span className="storeArea"></span>
        <p>
          {details}
          <br />
          <span className="spoqa">{details2}</span>
          <br />
          {details3}
          <br />
          <span className="spoqa">{details4}</span>
        </p>
        <div className="storeBtns">
          <Link to="/" className="btns btnBorder small ">
            상세보기
          </Link>
          <Link to="/" className="btns btnDark small disabled">
            준비중
          </Link>
        </div>
        <Link to="/" className="zzim house">
          찜
        </Link>
      </li>
    );
  }
}

export default StoreItems;
