import React, { Component } from "react";
import MenuFooter from "../MenuFooter";
import "./MenuDetail.scss";
import Nav from "../../../Components/Nav/Nav";
import DefaultNav from "../../../Components/DefaultNav/DefaultNav";
import Footer from "../../../Components/Footer/Footer";
import API from "../../../config";

class MenuDetail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch(`${API}/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.html,
        });
      });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      fetch(`${API}/products/${this.props.match.params.id}`)
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
      <>
        <DefaultNav />
        <div className="MenuDetail">
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.data,
            }}
          ></div>
          <MenuFooter />
        </div>
        <Footer />
      </>
    );
  }
}
export default MenuDetail;
