import React, { Component } from "react";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  render() {
    return (
      <>
        <div className="detailContainer">
          <div className="infoContainer">
            <img alt="menu" className="menu" src="/Images/menu.png" />
            <div className="wholeContainer">
              <p className="name">삼계전복죽</p>
              <p className="intro">
                삼복 더위 이기는 영양 가득 최고의 보양 한 그릇
              </p>
              <div className="priceContainer">
                <strong className="price">15,000</strong>
                <span className="unit">원</span>
              </div>

              <div className="btnContainer">
                <div className="btn">
                  <button className="myMenu" type="button">
                    <div className="likeIcon" alt="like-icon" />
                    MY메뉴
                  </button>
                  <button className="origin" type="button">
                    원산지정보
                  </button>
                </div>
              </div>

              <div className="bar"></div>
              <p className="summary">
                푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
                <br />
                국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로
                <br />
                깊고 진한 진짜 보양식을 만나보세요.
              </p>

              <div className="previewImage">
                <img
                  alt="subimage1"
                  className="subImage1"
                  src="/Images/menu.png"
                />
                <img
                  alt="subimage2"
                  className="subImage2"
                  src="/Images/menu_subimage.png"
                />
              </div>
            </div>

            <div className="shareContainer">
              <div className="fbContainer">
                <div alt="facebookIcon" className="facebook"></div>
              </div>
              <div className="linkContainer">
                <div alt="linkIcon" className="link"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="productDetail">
          <span className="headText">Product Detail</span>
          <span className="menuText">메뉴 특징</span>
          <span className="underBar"></span>
          <img
            alt="productImage"
            className="productImage"
            src="/Images/product_detail.png"
          />
          <span className="introText">
            삼복 더위 이기는 영양 가득 최고의 보양 한 그릇
          </span>
          <span className="menuText">삼계전복죽</span>
          <span className="explanation">
            푹 고아 부드럽고 진한 닭고기에 전복까지 더해진 최고의 보양식!
            <br />
            국내산 수삼 한 뿌리까지 통째로 들어간 완벽한 영양 한 그릇으로 깊고
            진한 진짜 보양식을 만나보세요.
          </span>
        </div>

        <div className="aboutIngredients">
          <span className="ingreText">식재료 이야기</span>
          <span className="ingreUnderBar"></span>

          <div className="ingredient1">
            <img
              alt="ingredient1"
              class="ingre1Image"
              src="/Images/ingre1.png"
            />
            <div className="ingreContents1">
              <div className="contentsHead">
                <span className="taurinAndVitamin">타우린과 비타민</span>
                <span className="ingre1Text">전복</span>
              </div>
              <span className="underLine"></span>
              <span className="ingre1Detail">
                피로회복과 면역력 강화에 좋은
                <br />
                타우린과 비타민 B군이 풍부한 전복.
                <br />
                바다의 산삼이라고 불릴 만큼 건강 식재료로 유명합니다.
                <br />
                바다의 향까지 그대로 품어 풍미까지 가득한 한 그릇.
                <br />
                풍부한 맛과 향을 푹 우려내었습니다.
              </span>
            </div>
          </div>

          <div className="ingredient2">
            <div className="ingreContents2">
              <div className="contentsHead">
                <span className="soft">부드러운</span>
                <span className="ingre2Text">국내산 닭고기</span>
              </div>
              <span className="underLine"></span>
              <span className="ingre2Detail">
                푹 고아 부드럽고 진한 국내산 닭고기는 <br />
                깊은 맛의 비결입니다.
                <br />
                특히 단백질이 풍부한 닭 가슴살 부위를 사용해
                <br />
                느끼한 기름기는 걷어내고 담백함과 고소함을 더했습니다.
                <br />
                속 깊은 곳까지 편안히,
                <br />
                포근하고 따뜻한 맛을 즐겨보세요.
              </span>
            </div>
            <img
              alt="ingredient2"
              class="ingre2Image"
              src="/Images/ingre2.png"
            />
          </div>

          <div className="ingredient3">
            <img
              alt="ingredient3"
              class="ingre3Image"
              src="/Images/ingre3.png"
            />
            <div className="ingreContents3">
              <div className="contentsHead">
                <span className="taurinAndVitamin">지친 몸에 활력을</span>
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
          <div className="recommendSection">
            <div className="recommendIntro">
              <span className="recommendText">이럴 때 추천</span>
              <span className="underBar"></span>
              <span>이 메뉴는 이럴 때 추천해요!</span>
            </div>
            {/* <div className="eachRecommendBox">
              <img alt="recommend1" src="/Images/recommend1.png" />
            </div> */}
          </div>
        </div>
      </>
    );
  }
}
export default MenuDetail;
