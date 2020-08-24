import React, { Component } from "react";
import Goods from "./../Goods";

class Category2 extends Component {
  render() {
    console.log(this.props.src);
    // console.log(this.props.category);
    return (
      <ul className="menuList">
        {this.props.src &&
          this.props.src.map((el, idx) => {
            return (
              <Goods
                key={idx}
                id={el.id}
                name={el.name}
                price={el.price}
                category={el.category}
                img={el.image}
                best={el.best}
                new={el.new}
              />
            );
          })}
      </ul>
    );
  }
}

// const goods = [
//   {
//     id: 3,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_ufLAl9wS.jpg",
//     name: "전복죽",
//     price: "11,000",
//     best: "BEST",
//   },
//   {
//     id: 4,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_ufLAl9wS.jpg",
//     name: "진전복중",
//     price: "15,000",
//   },
//   {
//     id: 5,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_ywpBSwEl.jpg",
//     name: "특전복죽",
//     price: "19,000",
//   },
//   {
//     id: 6,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_bfkWY0zs.jpg",
//     name: "트러플전복죽",
//     price: "16,000",
//     new: "NEW",
//   },
//   {
//     id: 7,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "냉이바지락죽",
//     price: "12,000",
//     best: "BEST",
//     new: "NEW",
//   },
//   {
//     id: 8,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "쇠고기야채죽",
//     price: "12,000",
//     best: "BEST",
//   },
//   {
//     id: 9,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 10,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//     best: "BEST",
//   },
//   {
//     id: 11,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//     best: "BEST",
//   },
//   {
//     id: 12,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//     best: "BEST",
//   },
//   {
//     id: 13,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 14,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 15,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 16,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 17,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
//   {
//     id: 18,
//     imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
//     name: "전복죽",
//     price: "12,000",
//   },
// ];

export default Category2;
