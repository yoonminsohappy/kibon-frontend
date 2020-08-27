import React, { Component } from "react";
import "./TitleSection.scss";

class TitleSection extends Component {
  render() {
    return (
      <div className="TitleSection">
        <div className="contentWrap">
          <div
            className="contentWrapVisual"
            style={{ backgroundImage: `url(${this.props.img})` }}
          >
            <div className="innerWrapIn">
              <h2 className="contentTitle">{this.props.title}</h2>
            </div>
          </div>
          <div className="totalTabBox">
            <div className="innerWrapin"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleSection;
