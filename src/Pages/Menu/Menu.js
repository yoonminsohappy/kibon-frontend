import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";

class Menu extends Component {
  constructor() {
    super();

    console.log("constructor");
    this.state = {
      isCategoryClicked: false,
      data: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("http://localhost:3000/data/menu.json")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("API 호출 끝났다!");
        this.setState({ data: res.data });
      });
  }

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    console.log("render");
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        <GoodsList /> <MenuFooter />
      </div>
    );
  }
}

export default Menu;
