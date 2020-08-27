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
          이전
        </button>

        <button
          className="button rightButton"
          onClick={this.nextProperty}
          disabled={property === properties.length - 1}
        >
          다음
        </button>
        <div className="interviewText"></div>
      </div>
    );
  }
}

export default MainVod;

const INDEX = [0, 1, 2, 0, 1, 2];
const INTERVIEW = [
  {
    title: "[본죽]수유점",
    interview:
      "체계적인 본사의 교육과 지원시스템으로 외식업에 대한 두려움을 극복하고 창업에 성공했어요!",
  },
];
