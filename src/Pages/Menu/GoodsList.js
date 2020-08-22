import React, { Component } from "react";
import Category1 from "./Category/Category1";
import Category2 from "./Category/Category2";
import Category3 from "./Category/Category3";
import Category4 from "./Category/Category4";
import Category5 from "./Category/Category5";
import Category6 from "./Category/Category6";
import Category7 from "./Category/Category7";

class GoodsList extends Component {
  state = {
    activeTab: 1,
    categoryBar: 1,
  };

  handleClick = (id) => {
    this.setState({ activeTab: id, categoryBar: id });
  };
  render() {
    const obj = {
      1: <Category1 />,
      2: <Category2 />,
      3: <Category3 />,
      4: <Category4 />,
      5: <Category5 />,
      6: <Category6 />,
      7: <Category7 />,
    };
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
              <li
                className={this.state.categoryBar ? "on" : "off"}
                onClick={() => this.handleClick(1)}
              >
                모든메뉴
              </li>
              <li onClick={() => this.handleClick(2)}>보양죽</li>
              <li onClick={() => this.handleClick(3)}>영양죽</li>
              <li onClick={() => this.handleClick(4)}>별미죽</li>
              <li onClick={() => this.handleClick(5)}>전통죽</li>
              <li onClick={() => this.handleClick(6)}>곁들임/음료</li>
              <li onClick={() => this.handleClick(7)}>간편식</li>
            </div>
          </div>
          <div className="menuMapList">
            <ul className="menuList">{obj[this.state.activeTab]}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsList;
