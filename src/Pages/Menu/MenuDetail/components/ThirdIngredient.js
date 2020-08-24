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
            <span className="ingre3Detail">
              {this.props.detail}
              {/* 원기 보강 대표 한약재, 국내산 수삼 한 뿌리가 통째로!
              <br />
              대추와 함께 풍부한 영양을 더했습니다.
              <br />
              활력과 입맛을 돋우는 영양식 재료의 탁월한 궁합으로
              <br />
              활기찬 하루를 맞이해보세요.
              <br />
              지치는 삼복더위에도 으슬으슬 힘 빠지는 매서운 추위에도
              <br />
              든든한 온기를 전합니다. */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdIngredient;
