import React, { Component } from "react";
// import MenuFooter from "../MenuFooter";
// import Introduction from "../MenuDetail/components/Introduction";
// import DetailList from "./components/DetailList";
// import Recommend from "../MenuDetail/components/Recommend";
// import IngredientList from "./components/IngredientList";
import "./MenuDetail.scss";
class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // num: props.match.params.id,
    };
  }
  componentDidMount = () => {
    fetch(`http://10.58.4.214:8000/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.html,
        });
      });
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://10.58.4.214:8000/products/${this.props.match.params.id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            data: res.html,
          });
        });
    }
  };
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: this.state.data,
        }}
      ></div>
    );
  }
}
export default MenuDetail;
