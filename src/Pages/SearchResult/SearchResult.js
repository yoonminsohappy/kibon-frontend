import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import DefaultNav from "../../Components/DefaultNav/DefaultNav";
import GoodsList from "./GoodsList";
import API from "../../config";
import "./SearchResult.scss";

class SearchResult extends Component {
  state = {
    menuList: [],
  };

  componentDidMount() {
    fetch(`${API}/products?search=${this.props.match.params.text}`)
      .then((res) => res.json())
      .then((res) => this.setState({ menuList: res.data }));

    console.log("컨디마:", this.state.menuList);
  }

  render() {
    const { menuList } = this.state;
    return (
      <>
        <DefaultNav />
        <div className="SearchResult">
          <h2>
            <strong>'{this.props.match.params.text}'</strong>
            검색결과
          </h2>
          <div className="boundary"></div>
          <div className="innerContents">
            <div className="popularList">
              <h3>본 인기메뉴</h3>
              {POPULAR_MENU.map((v) => {
                return (
                  <Link to="#" key={v}>
                    {v}
                  </Link>
                );
              })}
            </div>
            <GoodsList all={menuList} />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default SearchResult;

const POPULAR_MENU = [
  "해물김치해장죽",
  "쇠고기야채죽",
  "광양식바싹불고기 반상",
  "백설",
  "바싹불고기오징어 한상",
];
