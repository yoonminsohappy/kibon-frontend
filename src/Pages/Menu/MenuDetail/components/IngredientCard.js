import React, { Component } from "react";
import "./IngredientCard.scss";

class IngredientCard extends Component {
  render() {
    return (
      <div className="IngredientCard">
        <div className="ingredientCardContainer">
          <img
            alt="ingredientImage"
            class="ingredientImage"
            src={this.props.image}
          />
          <div className="contentContainer">
            <div className="head">
              <span className="point">{this.props.point}</span>
              <span className="name">{this.props.name}</span>
            </div>
            <span className="underLine"></span>
            <span className="detailText">{this.props.text}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default IngredientCard;
