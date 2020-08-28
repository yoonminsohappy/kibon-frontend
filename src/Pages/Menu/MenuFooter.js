import React, { Component } from "react";
import "./MenuFooter.scss";
import { Link } from "react-router-dom";

class MenuFooter extends Component {
  state = {
    windowHeight: 0,
    isFooter: false,
    scrollPos: 0,
    noFix: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.checkBottom();
    });
  }

  checkBottom = () => {
    const scrollnow = window.scrollY;
    const root = document.getElementById("root");
    const bodyheight = root.clientHeight;
    const realHeight = bodyheight - window.innerHeight - 250;
    if (scrollnow > realHeight) {
      this.setState({ noFix: true });
    } else {
      this.setState({ noFix: false });
    }
  };

  render() {
    console.log(this.state.scrollPos);
    const { windowHeight, isFooter } = this.state;
    const { scrollPos } = this.props;
    // this.footer && console.log(this.footer.getBoundingClientRect());
    return (
      <div
        className={`${
          !this.state.noFix ? "btnBrandOrder" : "btnBrandOrderFix"
        }`}
      >
        <Link
          to={window.localStorage.token ? "/basket" : "/login"}
          className="orderText"
        >
          지금 바로 주문하기
        </Link>
      </div>
    );
  }
}

export default MenuFooter;
