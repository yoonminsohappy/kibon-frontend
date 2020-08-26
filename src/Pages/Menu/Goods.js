import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

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
    console.log(this.props);
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
              onClick={this.handleHeartClick}
              className={
                this.state.isClicked
                  ? "goods-opt-selectbox-fill"
                  : "goods-opt-selectbox"
              }
              style={{ display: this.state.isHovering }}
            >
              <Link to="/" className="btn-zzim full">
                MY메뉴
              </Link>
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
