import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";
import url from "../../config";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      all: [],
      num: 1,
    };
  }

  componentDidMount = () => {
    console.log("컴디마");
    fetch(`${url}/products?category=${this.state.num}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          all: res.data,
          num: this.state.num + 1,
        })
      );
  };

  componentDidUpdate = () => {
    if (this.state.num < 5) {
      console.log("컴디업");
      fetch(`${url}/products?category=${this.state.num}`)
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            menu: res.data,
            all: this.state.all.concat(res.data),
            num: this.state.num + 1,
          })
        );
    }
  };

  whichTab = (idx) => {
    if (idx > 0 && idx < 5) {
      fetch(`${url}/products?category=${idx}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            menu: res.data,
          });
        });
    }
  };

  render() {
    console.log("렌더");
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        <GoodsList
          all={this.state.all}
          menu={this.state.menu}
          tab={this.whichTab}
        />
        <MenuFooter />
      </div>
    );
  }
}

export default Menu;
