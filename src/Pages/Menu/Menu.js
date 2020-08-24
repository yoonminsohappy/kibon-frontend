import React, { Component } from "react";
import GoodsList from "./GoodsList";
import MenuFooter from "./MenuFooter";
import "./Menu.scss";
import "../../Styles/common.scss";
import "../../Components/TitleSection/TitleSection";
import TitleSection from "../../Components/TitleSection/TitleSection";
import url from "../../Config";

class Menu extends Component {
  constructor() {
    super();
    console.log("생성자");
    this.state = {
      data: [],
      num: 1,
    };
  }

  componentDidMount = () => {
    fetch(url + "/product/category/" + this.state.num)
      .then((res) => res.json())
      .then((json) =>
        this.setState({ data: json.products, num: this.state.num + 1 })
      );
    console.log("컴디마1");
  };

  componentDidUpdate = () => {
    fetch(url + "/product/category/" + this.state.num)
      .then((res) => res.json())
      .then((json) => {
        if (this.state.num < 4) {
          this.setState({
            data: json.products,
            num: this.state.num + 1,
          });
        }
      });
    console.log("컴디마2");
  };

  handleClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    // console.log("렌더");
    console.log(this.state.data);
    // console.log(typeof this.state.data);
    return (
      <div className="Menu">
        <TitleSection
          title={"메뉴소개"}
          img={"/Images/sub_visual_bonjuk.jpg"}
        />
        {/* {this.state.data &&
          this.state.data.map((el, idx) => {
            return <GoodsList key={idx} data={el} />;
          })} */}
        <GoodsList data={this.state.data} />
        <MenuFooter />
      </div>
    );
  }
}

export default Menu;
