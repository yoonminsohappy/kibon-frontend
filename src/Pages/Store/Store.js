import React, { Component } from "react";
import "./Store.scss";
import TitleSection from "../../Components/TitleSection/TitleSection";
import StoreItems from "./StoreItems/StoreItems";
import SearchLocate from "./StoreSearch/SearchLocate";
import SearchKeyword from "./StoreSearch/SearchKeyword";
import Nav from "../../Components/Nav/Nav";

class Store extends Component {
  state = {
    showLocate: true,
    showKeyword: false,
    isLeftCorrect: true,
    isRightCorrect: false,
  };

  clickLeftTab = () => {
    this.setState({
      showLocate: true,
      showKeyword: false,
    });
  };
  clickRightTab = () => {
    this.setState({
      showKeyword: true,
      showLocate: false,
    });
  };

  changeLeftUnderbar = () => {
    this.setState({
      isLeftCorrect: true,
      isRightCorrect: false,
    });
  };
  changeRightUnderbar = () => {
    this.setState({
      isLeftCorrect: false,
      isRightCorrect: true,
    });
  };

  clickLeftTab = () => {
    this.setState({
      showLocate: true,
      showKeyword: false,
    });
  };

  changeLeftUnderbar = () => {
    this.setState({
      isLeftCorrect: true,
      isRightCorrect: false,
    });
  };

  inputEmpty = () => {
    this.setState({
      empty: "",
    });
  };

  render() {
    return (
      <>
      <Nav/>
      <div className="Store">
        <TitleSection
          img={"/Images/sub_visual_bonrice.jpg"}
          title={"매장 찾기"}
        />
        <div className="subContents">
          <div className="brandMapBox">
            <div className="storeRegistBox">
              <div className="storeMapBlock">
                <div id="map"></div>
              </div>
              <div className="storeRegistBlock">
                <div className="popTab">
                  <button
                    className={this.state.isLeftCorrect ? "searchLocation" : ""}
                    onClick={() => {
                      this.clickLeftTab();
                      this.changeLeftUnderbar();
                    }}
                  >
                    지역검색
                  </button>
                  <button
                    className={this.state.isRightCorrect ? "searchKeyword" : ""}
                    onClick={() => {
                      this.clickRightTab();
                      this.changeRightUnderbar();
                    }}
                  >
                    키워드 검색
                  </button>
                </div>
                <div className="addSearchTab">
                  {this.state.showLocate ? <SearchLocate /> : null}
                  {this.state.showKeyword ? <SearchKeyword /> : null}
                </div>
                <div className="storeCheckBox">
                  <form name="form" id="form" method="post">
                    <input
                      type="checkbox"
                      id="takeoutYn"
                      name="takeoutYn"
                      value="Y"
                    />
                    <label className="checkLabel">포장</label>
                    <input
                      type="checkbox"
                      id="deliveryYn"
                      name="deliveryYn"
                      value="Y"
                    />
                    <label className="checkLabel">배달</label>
                    <input
                      type="checkbox"
                      id="parkingYn"
                      name="parkingYn"
                      value="Y"
                    />
                    <label className="checkLabel">주차</label>
                    <input
                      type="checkbox"
                      id="reservationYn"
                      name="reservationYn"
                      value="Y"
                    />
                    <label className="checkLabel">예약</label>
                  </form>
                </div>
                <div className="registStoreBox">
                  <ul className="myStoreList" id="myStoreList">
                    {stores.map((el, idx) => {
                      return (
                        <StoreItems
                          key={idx}
                          name={el.name}
                          title={el.title}
                          details={el.details}
                          details2={el.details2}
                          details3={el.details3}
                          details4={el.details4}
                        />
                      );
                    })}
                    <div className="scrollElement scrollY scrollVisible"></div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const stores = [
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
  {
    name: "본죽&비빔밥cafe",
    title: "본 죽&비빔밥 종각역점",
    details: "서울특별시 종로구 종로 73 (종로2가)",
    details2: "영업시간 : 평일 09:30~21:30 주말/공휴일 09:30~21:30",
    details3: "매장서비스 : 포장, 예약",
    details4: "02-730-6388",
  },
];

export default Store;
