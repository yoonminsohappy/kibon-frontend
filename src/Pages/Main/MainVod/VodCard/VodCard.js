import React, { Component } from "react";
import "./VodCard.scss";

class VodCard extends Component {
  state = {};
  render() {
    return (
      <div className="VodCard">
        <img
          className="card"
          src={`/Images/main_vod${this.props.property}.png`}
        />
        <div className="playButton" />
      </div>
    );
  }
}

export default VodCard;
