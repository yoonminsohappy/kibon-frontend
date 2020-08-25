import React, { Component } from "react";
import "./ThirdIngredient.scss";

class ThirdIngredient extends Component {
  render() {
    return (
      <div className="ThirdIngredient">
        <div className="ingredient3">
          <img alt="ingredient3" class="ingre3Image" src={this.props.image} />
          <div className="ingreContents3">
            <div className="contentsHead">
              <span className="vitality">{this.props.point}</span>
              {/* <span className="ingre3Text">수삼, 대추 </span> */}
            </div>
            <span className="underLine" />
            <span className="ingre3Detail">{this.props.detail}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdIngredient;
