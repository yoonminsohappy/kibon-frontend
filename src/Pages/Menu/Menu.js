import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";
import urlMenu from "../../configMenu";
import urlBasket from "../../configBasket";
import DefaultNav from "../../Components/DefaultNav/DefaultNav";
import Footer from "../../Components/Footer/Footer";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      all: [],
      num: 1,
      scrollPos: 0,
      show: true,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    fetch(`${urlMenu}/products?category=${this.state.num}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          all: res.data,
          num: this.state.num + 1,
        })
      );
  };

  componentDidUpdate = () => {
    if (this.state.num < 7) {
      console.log("컴디업");
      fetch(`${urlMenu}/products?category=${this.state.num}`)
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

  getData = () => {
    const token = localStorage.getItem("token");
    console.log("getData 실행");
    fetch(urlBasket + "/order/cart", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          itemsArr: res.items,
          emptyFeed: true,
        })
      );
  };

  whichTab = (idx) => {
    if (idx > 0 && idx < 7) {
      fetch(`${urlMenu}/products?category=${idx}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            menu: res.data,
          });
        });
    }
  };

  handleScroll = () => {
    this.setState({
      scrollPos: window.scrollY,
      // show: document.body.getBoundingClientRect().top < -530,
    });
  };

  render() {
    console.log(document.body.clientHeight);
    const { scrollPos } = this.state;
    return (
      <>
        <DefaultNav />
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
          <MenuFooter scrollPos={scrollPos} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Menu;
