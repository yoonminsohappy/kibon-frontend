import React, { Component } from "react";
import Goods from "./../Goods";

class Category4 extends Component {
  render() {
    return (
      <ul className="menuList">
        {this.props.imgSrc &&
          this.props.imgSrc.map((el, idx) => {
            return (
              <Goods
                key={idx}
                id={el.id}
                name={el.name}
                price={el.price}
                img={el.image}
                best={el.best}
                new={el.new}
              />
            );
          })}
      </ul>
    );
  }
}

export default Category4;
