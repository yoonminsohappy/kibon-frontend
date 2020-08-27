import React, { Component } from "react";
import MenuFooter from "../MenuFooter";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch(`http://10.58.0.78:8000/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.html,
        });
      });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`http://10.58.0.78:8000/products/${this.props.match.params.id}`)
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
      <div className="MenuDetail">
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.data,
          }}
        ></div>
        <MenuFooter />
      </div>
    );
  }
}
export default MenuDetail;
