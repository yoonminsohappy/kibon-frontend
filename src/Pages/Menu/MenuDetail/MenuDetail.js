import React, { Component } from "react";
import MenuFooter from "../MenuFooter";
import Introduction from "../MenuDetail/components/Introduction";
import DetailList from "./components/DetailList";
// import FirstIngredient from "./components/IngredientCard";
// import SecondInredient from "./components/SecondInredient";
// import ThirdIngredient from "./components/ThirdIngredient";
import Recommend from "../MenuDetail/components/Recommend";
import "./MenuDetail.scss";
import IngredientList from "./components/IngredientList";

class MenuDetail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //     num: props.match.params.id,
  //   };
  // }

  // componentDidMount = () => {
  //   // console.log("props :", this.props);
  //   fetch(`http://10.58.5.219:8000/product/detail/${this.state.num}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: [res],
  //         num: this.state.num + 1,
  //       });
  //     });
  // };

  render() {
    return (
      <div className="MenuDetail">
        <Introduction />
        <DetailList />
        <div className="aboutIngredients">
          <span className="ingreText">식재료 이야기</span>
          <span className="ingreUnderBar"></span>
        </div>
        <IngredientList />
        <Recommend />
        <MenuFooter />
      </div>
    );
  }
}
export default MenuDetail;
