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
    console.log("props :", this.props);
    fetch(`http://10.58.5.219:8000/product/detail/${this.state.num}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: [res],
          num: this.state.num + 1,
        });
      });
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   // console.log(this.state.data);
  //   const { num, data } = this.state;
  //   fetch(`http://10.58.5.219:8000/product/detail/${num}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       if (num < 38) {
  //         this.setState({
  //           data: [...data, res],
  //           num: num + 1,
  //         });
  //       }
  //     });
  // };

  render() {
    // console.log(this.state.data);
    return (
      <div className="MenuDetail">
        {this.state.data[0] &&
          this.state.data.map((product, idx) => {
            const { name, price, image_list, text_list } = product.detail[0];
            // console.log(image_list);
            return (
              <>
                <Introduction
                  key={idx}
                  name={name}
                  price={price}
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
                  <span className="ingreText">식재료 이야기</span>
                  {/* {text_list[6]} */}
                  <span className="ingreUnderBar" />

                  <FirstIngredient
                    image={image_list[4]}
                    point={text_list[7]}
                    detail={text_list[8]}
                  />

                  <SecondInredient
                    image={image_list[5]}
                    point={text_list[9]}
                    // detail={text_list[10]}
                  />

                  <ThirdIngredient
                    image={image_list[6]}
                    point={text_list[10]}
                    detail={text_list[11]}
                  />
                </div>
              </>
            );
          })}

        {/* {this.state.data &&
          this.state.data.map((product, idx) => {
            return <ProductDetail />;
          })} */}

        {/* <div className="aboutIngredients">
          <span className="ingreText">식재료 이야기</span>
          <span className="ingreUnderBar" /> */}

        {/* {this.state.data &&
            this.state.data.map((product, idx) => {
              return <FirstIngredient />;
            })}

          {this.state.data &&
            this.state.data.map((product, idx) => {
              return <SecondInredient />;
            })}

          {this.state.data &&
            this.state.data.map((product, idx) => {
              return <ThirdIngredient />;
            })}
        </div>
        {this.state.data &&
          this.state.data.map((product, idx) => {
            return <Recommend />;
          })} */}

        <MenuFooter />
      </div>
    );
  }
}
export default MenuDetail;
