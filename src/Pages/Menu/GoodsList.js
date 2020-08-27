import React, { Component } from "react";
import Goods from "./Goods";
import { Link } from "react-router-dom";
import urlBasket from "../../configBasket";

class GoodsList extends Component {
  state = {
    showUnderBar: true,
    hideUnderBar: false,
    activeTab: 0,
    goods: {},
    num: 1,
  };

  handleTabClick = (e, id) => {
    e.preventDefault();
    this.setState({ activeTab: id });
    this.props.tab(id);
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
                    onClick={(e) => this.handleTabClick(e, idx)}
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
              {this.state.activeTab === 0
                ? this.props.all.map((el, idx) => {
                    return (
                      <Goods
                        key={idx}
                        id={el.ID}
                        name={el.name}
                        price={el.price}
                        category={el.category}
                        img={el.image}
                        best={el.best}
                        new={el.new}
                      />
                    );
                  })
                : this.props.menu.map((el, idx) => {
                    return (
                      <Goods
                        key={idx}
                        id={el.ID}
                        name={el.name}
                        price={el.price}
                        category={el.category}
                        img={el.image}
                        best={el.best}
                        new={el.new}
                      />
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
