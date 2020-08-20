import React, { Component} from "react";
import Swiper from 'react-id-swiper'
import "swiper/swiper.scss";
import './Banner.scss';

 const params = {
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   autoplay:{
     delay: 2500,
     disableOnInteraction: false,
   },
   spaceBetween: 0,
   slidesPerView: 1,
   loop: true,
 };


class Banner extends Component {
  state = {  }
  render() { 
    return (
      <div className="Banner">
      <Swiper {...params}>
        <div><img src="./Images/banner1.png"></img></div>
        <div><img src="./Images/banner2.png"></img></div>
        <div><img src="./Images/banner3.png"></img></div>
        <div><img src="./Images/banner4.png"></img></div>
        <div><img src="./Images/banner5.png"></img></div>
        <div><img src="./Images/banner6.png"></img></div>
      </Swiper>
      </div>
    );
  }
}
 
export default Banner;
