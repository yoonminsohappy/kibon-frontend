import React, { Component } from "react";
import "./FirstIngredient.scss";

class FirstIngredient extends Component {
  render() {
    return (
      <div className="FirstIngredient">
        <div className="ingredient1">
          <img alt="ingredient1" class="ingre1Image" src={this.props.image} />
          <div className="ingreContents1">
            <div className="contentsHead">
              <span className="taurinAndVitamin">{this.props.point}</span>
              <span className="ingre1Text">전복</span>
            </div>
            <span className="underLine"></span>
            <span className="ingre1Detail">{this.props.detail}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstIngredient;
