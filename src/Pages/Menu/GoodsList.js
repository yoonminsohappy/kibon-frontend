import React, { Component } from "react";
// import Category from "./Category/Category";
import Goods from "./Goods";
import { Link } from "react-router-dom";

class GoodsList extends Component {
  state = {
    categoryBar: 1,
  };

  handleClick = (id) => {
    this.setState({
      categoryBar: id,
    });
  };
  render() {
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
              <li
                name="all"
                className={this.state.categoryBar ? "on" : "off"}
                onClick={this.handleClick}
              >
                모든메뉴
              </li>
              <li onClick={this.handleClick}>보양죽</li>
              <li onClick={this.handleClick}>영양죽</li>
              <li onClick={this.handleClick}>별미죽</li>
              <li onClick={this.handleClick}>전통죽</li>
              <li onClick={this.handleClick}>곁들임/음료</li>
              <li onClick={this.handleClick}>간편식</li>
            </div>
          </div>
          <div className="menuMapList">
            <ul className="menuList">
              {this.props.goods &&
                this.props.goods.map((el, idx) => {
                  return (
                    <Link to={`/menu/${idx}`} key={idx}>
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
