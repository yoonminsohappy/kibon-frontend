import React, { Component } from "react";
import "./FirstIngredient.scss";

class FirstIngredient extends Component {
  render() {
    return (
      <div className="FirstIngredient">
        <div className="ingredient1">
          <img
            alt="ingredient1"
            class="ingre1Image"
            src={this.props.image}
            // "/Images/ingre1.png"
          />
          <div className="ingreContents1">
            <div className="contentsHead">
              <span className="taurinAndVitamin">
                {this.props.point}
                {/* 타우린과 비타민 */}
              </span>
              {/* <span className="ingre1Text">전복</span> */}
            </div>
            <span className="underLine"></span>
            <span className="ingre1Detail">
              {this.props.detail}
              {/* 피로회복과 면역력 강화에 좋은
              <br />
              타우린과 비타민 B군이 풍부한 전복.
              <br />
              바다의 산삼이라고 불릴 만큼 건강 식재료로 유명합니다.
              <br />
              바다의 향까지 그대로 품어 풍미까지 가득한 한 그릇.
              <br />
              풍부한 맛과 향을 푹 우려내었습니다. */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstIngredient;
