import React, { Component } from "react";
import { Link } from "react-router-dom";

class DonationNews extends Component {

  state = {
    index: 0,
    onMouseHover: false
  };

  handlePlus = () => {
    if (this.state.index >= 2) {
      return;
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  handdleMinor = () => {
    if (this.state.index <= 0) {
      return;
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  mouseHover=()=>{
    this.setState({onMouseHover:true});
  }

  mouseLeave =()=>{
    this.setState({onMouseHover:false});
  }

  render() {
    console.log(this.state.onMouseHover);
    const { index, onMouseHover } = this.state;
    const {data} = this.props;
    return (
      <div
        className="newsBox"
        // onMouseEnter={this.mouseHover}
        // onMouseLeave={this.mouseLeave}
      >
        <div className="top" />
        <div className="right1" />
        <div className="bottom" />
        <div className="left1" />
        <h3>{data.title}</h3>
        <Link to="#" className="title">
          •••
        </Link>
        <div className="activeBox">
          <Link to="#" className="subTitle">
            {data.subTitle[index]}
          </Link>
          <span className="date">{data.date[index]}</span>
          <div className="left" onClick={this.handdleMinor}>
            <div className="leftButton" />
          </div>
          <div className="right" onClick={this.handlePlus}>
            <div className="rightButton" />
          </div>
        </div>
      </div>
    );
  }
}

 
export default DonationNews;