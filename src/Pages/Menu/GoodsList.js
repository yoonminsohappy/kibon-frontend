<<<<<<< HEAD
import React, { Component } from "react";
import Goods from "./Goods";
import { Link } from "react-router-dom";

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

  // post = () => {
  //   console.log("포스트 함수")
  //   const token = localStorage.getItem("token");
  //   fetch(`${url}/order/cart`, {
  //     method: "POST",
  //     headers: {
  //       Authorization: token,
  //     },
  //     body: JSON.stringify({
  //       cart_id: cart_id,
  //     }),
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       this.props.handleData();
  //     }
  //   });
  // };

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
=======
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
    this.setState({
      activeTab: id,
      categoryBar: id,
    });
  };
  render() {
    console.log(this.state.categoryData);
    const obj = {
      1: <Category1 src={this.props.data} />,
      2: <Category2 src={this.props.data} />,
      3: <Category3 src={this.props.data} />,
      4: <Category4 src={this.props.data} />,
      5: <Category5 src={this.props.data} />,
      6: <Category6 src={this.props.data} />,
      7: <Category7 src={this.props.data} />,
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
                name="all"
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
>>>>>>> 22aeae413ec06a05010f1267c8d8daf462214004
