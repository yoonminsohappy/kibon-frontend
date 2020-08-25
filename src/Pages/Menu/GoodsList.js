import React, { Component } from "react";
// import Category from "./Category/Category";
import Goods from "./Goods";
import { Link } from "react-router-dom";

class GoodsList extends Component {
  state = {
    showUnderBar: true,
    hideUnderBar: false,
    activeTab: 0,
  };

  // clickUnderbar = () => {
  //   this.setState(() => ({
  //     showUnderBar: true,
  //   }));
  //   console.log("hi", this.state.showUnderBar);
  //   console.log("hi", this.state.hideUnderBar);
  // };

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };
  render() {
    const arr = [
      "모든메뉴",
      "보양죽",
      "영양죽",
      "별미죽",
      "전통죽",
      "곁들임/음료",
      "간편식",
    ];
    // console.log(this.props.goods);
    return (
      <div className="contentWrap">
        <div className="contentWrapVisual">
          <div className="innerWrapIn">
            <h2 className="contentTitle">{this.props.title}</h2>
          </div>
        </div>
        <div className="subContents">
          <div className="tabBrand">
            <div className="tabRow">
              {arr.map((str, idx) => {
                return (
                  <li
                    key={str}
                    onClick={() => this.handleClick(idx)}
                    className={this.state.activeTab === idx ? "on" : ""}
                  >
                    {str}
                  </li>
                );
              })}
            </div>
          </div>
          <div className="menuMapList">
            <ul className="menuList">
              {this.props.menu1 &&
                this.props.menu1.map((el, idx) => {
                  return (
                    <Link to={`/menu/${idx}`} key={idx}>
                      {this.state.activeTab === idx ? (
                        <Goods
                          key={idx}
                          id={el.id}
                          name={el.name}
                          price={el.price}
                          category={el.category}
                          img={el.image}
                          best={el.best}
                          new={el.new}
                        />
                      ) : null}
                      {/* <Goods
                        key={idx}
                        id={el.id}
                        name={el.name}
                        price={el.price}
                        category={el.category}
                        img={el.image}
                        best={el.best}
                        new={el.new}
                      /> */}
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsList;
