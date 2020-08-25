import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";
import url from "../../Config";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      num: 1,
    };
  }

  componentDidMount = () => {
    let arr = [];
    fetch(`${url}/products?category=${this.state.num}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          menu: res.data.concat(res.data),
          num: this.state.num + 1,
        })
      );
    arr.concat(this.state.menu);
    console.log(arr);
  };

  whichTab = (idx) => {
    if (idx > 0 && idx < 5) {
      fetch(`http://10.58.1.118:8000/products?category=${idx}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            menu: res.data,
          });
        });
    }
  };

  render() {
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        <GoodsList menu={this.state.menu} tab={this.whichTab} />
        <MenuFooter />
      </div>
    );
  }
}

export default Menu;
