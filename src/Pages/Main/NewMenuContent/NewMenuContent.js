import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./NewMenuContent.scss";

class NewMenuContent extends Component {
  state = {
    index : "0"
  }

  handleImage =(idx)=>{
    this.setState({index: idx });
  }



  render() { 
    const {index} = this.state;

    return (
      <div class="NewMenuContent">
        <h2>
          <span>Bon New Menu</span>
          <p>건강한 맛,신메뉴 추천</p>
        </h2>
        <div className="contentBox">
          <div className="textContentBox">
            <div className="textZoom">
              <div className="textBox">
                <span>{menuText[index].title}</span>
                <p className="title">{menuText[index].subtitle}</p>
                <p className="text">{menuText[index].text}</p>
                <button>자세히 보기</button>
                <div className="menuList">
                  {menuText.map((v, idx) => {
                    return (
                      <Link to="#" onClick={() => this.handleImage(idx)}>
                        <div className="imgBorder"><img className={`border${idx}`} src={`/Images/foodmenu${idx}.png`}></img></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <img className="newBigImage" src={`/Images/food${index}.png`}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default NewMenuContent;

const menuText = [
  {
    id: "0",
    title: "본도시락",
    subtitle: "바싹불고기제육 한상",
    text: "누구도 거부할 수 없는 고기,고기 조합!",
  },
  {
    id: "1",
    title: "본도시락",
    subtitle: "바싹불고기오징어 한상",
    text: "매콤하고 쫄깃한 오징어 볶음과 달큰한 바싹 불고기의 최고의 궁합",
  },
  {
    id: "2",
    title: "본설",
    subtitle: "전복낙지활력설",
    text: "불끈! 힘이 필요한 순간 생각나는 매콤한 별미설렁탕",
  },
];
