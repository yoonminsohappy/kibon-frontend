import React, { Component } from "react";
import "./Menu.scss";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "../../Styles/common.scss";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isCategoryClicked: false,
    };
  }

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    return (
      <div className="Menu">
        <GoodsList /> <MenuFooter />
      </div>
    );
  }
}

export default Menu;
