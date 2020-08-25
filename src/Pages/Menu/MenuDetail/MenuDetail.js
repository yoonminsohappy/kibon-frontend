import React, { Component } from "react";
import MenuFooter from "../MenuFooter";
import Introduction from "../MenuDetail/components/Introduction";
import ProductDetail from "./components/ProductDetail";
import FirstIngredient from "./components/FirstIngredient";
import SecondInredient from "./components/SecondInredient";
import ThirdIngredient from "./components/ThirdIngredient";
import Recommend from "../MenuDetail/components/Recommend";
import "./MenuDetail.scss";

class MenuDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      num: props.match.params.id,
    };
  }

  componentDidMount = () => {
    // console.log("props :", this.props);
    fetch(`http://10.58.5.219:8000/product/detail/${this.state.num}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: [res],
          num: this.state.num + 1,
        });
      });
  };

  // const allTextList = this.state.data.product.detail[0].text_list;
  // console.log(allTextList);
  //  allTextList.split("\n").map( el => {return <span>{el}<br /></span>});

  render() {
    return (
      <div className="MenuDetail">
        {this.state.data[0] &&
          this.state.data.map((product, idx) => {
            const { name, price, image_list, text_list } = product.detail[0];

            return (
              <>
                <Introduction
                  key={idx}
                  name={name}
                  price={parseInt(price)}
                  image1={image_list[0]}
                  image2={image_list[1]}
                  introText={text_list[0]}
                  introSummary={text_list[1]}
                />
                <ProductDetail
                  productDetail={text_list[2]}
                  productDetailKor={text_list[3]}
                  detailImage={image_list[2]}
                  introText={text_list[4]}
                  detailText={text_list[5]}
                />
                <div className="aboutIngredients">
                  <span className="ingreText">{text_list[6]}</span>
                  <span className="ingreUnderBar" />

                  <FirstIngredient
                    image={image_list[4]}
                    point={text_list[7]
                    // name={text_list[]}
                    detail={text_list[8]}
                  />

                  <SecondInredient
                    image={image_list[5]}
                    point={text_list[9]}
                    detail={text_list[10]}
                  />

                  <ThirdIngredient
                    image={image_list[6]}
                    point={text_list[11]}
                    detail={text_list[12]}
                  />
                </div>
                <Recommend
                  title={text_list[14]}
                  subTitle={text_list[15]}
                  firstTagImage={image_list[7]}
                  secondTagImage={image_list[8]}
                  thirdTagImage={image_list[9]}
                  firstTag={text_list[16]}
                  secondTag={text_list[18]}
                  thirdTag={text_list[20]}
                  firstTagText={text_list[17]}
                  secondTagText={text_list[19]}
                  thirdTagText={text_list[21]}
                />
                ;
              </>
            );
          })}

        <MenuFooter />
      </div>
    );
  }
}
export default MenuDetail;
