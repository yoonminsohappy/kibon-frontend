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
    console.log("생성자");
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch("http://10.58.3.99:8000/product/product")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
    console.log("컴디마");
  };

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    console.log("렌더");
    // console.log(this.state.data);
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        <GoodsList imgData={this.state.data.products} /> <MenuFooter />
      </div>
    );
  }
}

export default Menu;
