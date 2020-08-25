import React, { Component } from "react";
import "./SecondInredient.scss";

class SecondInredient extends Component {
  render() {
    return (
      <div className="SecondInredient">
        <div className="ingredient2">
          <div className="ingreContents2">
            <div className="contentsHead">
              <span className="soft">{this.props.point}</span>
            </div>
            <span className="underLine"></span>
            <span className="ingre2Detail">{this.props.detail}</span>
          </div>
          <img alt="ingredient2" class="ingre2Image" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default SecondInredient;
