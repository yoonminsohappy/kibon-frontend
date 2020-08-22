import React, { Component } from "react";
import Goods from "./../Goods";

class Category1 extends Component {
  render() {
    // console.log(this.props.imgSrc);

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

export default Category1;
