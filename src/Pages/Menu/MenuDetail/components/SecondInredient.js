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
              {/* <span className="ingre2Text">국내산 닭고기</span> */}
            </div>
            <span className="underLine"></span>
            <span className="ingre2Detail">
              {this.props.detail}
              {/* 푹 고아 부드럽고 진한 국내산 닭고기는 <br />
              깊은 맛의 비결입니다.
              <br />
              특히 단백질이 풍부한 닭 가슴살 부위를 사용해
              <br />
              느끼한 기름기는 걷어내고 담백함과 고소함을 더했습니다.
              <br />
              속 깊은 곳까지 편안히,
              <br />
              포근하고 따뜻한 맛을 즐겨보세요. */}
            </span>
          </div>
          <img alt="ingredient2" class="ingre2Image" src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default SecondInredient;
