import React, { Component } from "react";
import "./MenuDetail.scss";
import Article1 from "../MenuDetail/components/Article1";
import Article2 from "../MenuDetail/components/Article2";
import Article3 from "../MenuDetail/components/Article3";
import Article4 from "../MenuDetail/components/Article4";
import Article5 from "../MenuDetail/components/Article5";
import MenuFooter from "../MenuFooter";

class MenuDetail extends Component {
  render() {
    return (
      <div className="MenuDetail">
        <Article1 />
        <Article2 />
        <div className="aboutIngredients">
          <span className="ingreText">식재료 이야기</span>
          <span className="ingreUnderBar"></span>
          <Article3 />
          <Article4 />
          <div className="ingredient3">
            <img
              alt="ingredient3"
              class="ingre3Image"
              src="/Images/ingre3.png"
            />
            <div className="ingreContents3">
              <div className="contentsHead">
                <span className="vitality">지친 몸에 활력을</span>
                <span className="ingre3Text">수삼, 대추</span>
              </div>
              <span className="underLine"></span>
              <span className="ingre3Detail">
                원기 보강 대표 한약재, 국내산 수삼 한 뿌리가 통째로!
                <br />
                대추와 함께 풍부한 영양을 더했습니다.
                <br />
                활력과 입맛을 돋우는 영양식 재료의 탁월한 궁합으로
                <br />
                활기찬 하루를 맞이해보세요.
                <br />
                지치는 삼복더위에도 으슬으슬 힘 빠지는 매서운 추위에도
                <br />
                든든한 온기를 전합니다.
              </span>
            </div>
          </div>
          <Article5 />
        </div>
        <MenuFooter />
      </div>
    );
  }
}
export default MenuDetail;
