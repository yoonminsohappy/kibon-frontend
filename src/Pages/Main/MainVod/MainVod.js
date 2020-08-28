import React, { Component } from "react";
import VodCard from "./VodCard/VodCard";
import "./MainVod.scss";

class MainVod extends Component {
  state = {
    properties: INDEX,
    property: INDEX[0],
  };

  nextProperty = () => {
    const newIndex = this.state.property + 1;
    this.setState({
      property: this.state.properties[newIndex],
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property - 1;
    if (this.state.property === 0) {
      this.setState({ property: 2 });
    } else {
      this.setState({
        property: this.state.properties[newIndex],
      });
    }
  };

  render() {
    const { properties, property } = this.state;
    console.log(property);
    return (
      <div className="MainVod">
        <span>Bon Start</span>
        <p>맛있는 도전, 성공 스토리</p>

        <div className="cards-slider">
          <div
            className="cards-slider-wrapper"
            style={{
              transform: `translateX(-${property * 20}%)`,
            }}
          >
            {properties.map((image) => {
              return <VodCard key={image} property={image} />;
            })}
          </div>
        </div>
        <button className="button leftButton" onClick={this.prevProperty}>
          ←
        </button>

        <button
          className="button rightButton"
          onClick={this.nextProperty}
          disabled={property === properties.length - 1}
        >
          →
        </button>
        <div className="interviewText">
          {INTERVIEW.map((v) => {
            return (
              <div>
                <h2>{v.title[0]}</h2>
                <p>{v.interview[0]}</p>
              </div>
            );
          })}
          {/* <h2>[본죽]수유점</h2>
          <p>
            체계적인 본사의 교육과 지원시스템으로 외식업에 대한 두려움을
            극복하고 창업에 성공했어요!
          </p> */}
        </div>
        <button className="goInfo">창업안내 바로가기</button>
      </div>
    );
  }
}

export default MainVod;

const INDEX = [0, 1, 2, 0, 1, 2];
const INTERVIEW = [
  {
    title: [
      "[본죽]수유점",
      "[본도시락]신논현점",
      "[본죽&비빔밥cafe]시흥사거리점",
    ],
    interview: [
      `체계적인 본사의 교육과 지원시스템으로 외식업에 대한 두려움을 극복하고 창업에 성공했어요!`,
      "고객을 직접 찾아가고 유치할 수 있는 배달서비스의 큰 매력과 가능성을 보고 본도시락 창업을 결정했어요!",
      "본죽의 메뉴에 비빔밥과 뚝배기 메뉴를 더해 더 다양한 고객층에게 사랑을 받을 수 있어 본죽&비빔밥cafe 전환을 결정했죠!",
    ],
  },
];
