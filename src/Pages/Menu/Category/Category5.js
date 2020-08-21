import React, { Component } from "react";
import Goods from "./../Goods";

class Category5 extends Component {
  render() {
    return (
      <ul className="menuList">
        {goods.map((el, idx) => {
          return (
            <Goods
              key={idx}
              id={el.id}
              name={el.name}
              price={el.price}
              src={el.imgSrc}
              best={el.best}
              new={el.new}
            />
          );
        })}
      </ul>
    );
  }
}
const goods = [
  {
    id: 1,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_thum_10000285.jpg",
    name: "잣죽",
    price: "10,000",
  },
  {
    id: 2,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "삼계전복죽",
    price: "15,000",
  },
  {
    id: 3,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "전복죽",
    price: "37,000",
    best: "BEST",
  },
  {
    id: 4,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "진전복중",
    price: "55,000",
  },
  {
    id: 5,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "특전복죽",
    price: "125,700",
  },
  {
    id: 6,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "해물김치해장죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 7,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "냉이바지락죽",
    price: "125,700",
    best: "BEST",
    new: "NEW",
  },
  {
    id: 8,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "쇠고기야채죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 9,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 10,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 11,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 12,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 13,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 14,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 15,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 16,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 17,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 18,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 19,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 20,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 21,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 22,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 23,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 24,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 25,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 26,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 27,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 28,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 29,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 30,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 31,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 32,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 33,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 34,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 35,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 36,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 37,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 38,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 39,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 40,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 41,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 42,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 43,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 44,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 45,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 46,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 47,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 48,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 49,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    best: "BEST",
  },
  {
    id: 50,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 51,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 52,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 53,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 54,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 55,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 56,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 57,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 58,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 59,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 60,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 61,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 62,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 63,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 64,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
  },
  {
    id: 65,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 66,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 67,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 68,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 69,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 70,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 71,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 72,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 73,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 74,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 75,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 76,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 77,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 78,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 79,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 80,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 81,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
  {
    id: 82,
    imgSrc: "https://files.bonif.co.kr/upload/cmdt/BF101_pic_RtJtR825.jpg",
    name: "똥죽",
    price: "125,700",
    new: "NEW",
  },
];
export default Category5;
