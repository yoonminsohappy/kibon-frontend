import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchLocate extends Component {
  state = {
    placeholder: "매장명",
  };
  render() {
    return (
      <div className="addStore">
        <div className="addStoreInput">
          <select name="sido" id="sido">
            <option value="">시/도</option>
            <option value="서울특별시">서울특별시</option>
            <option value="부산광역시">부산광역시</option>
            <option value="대구광역시">대구광역시</option>
            <option value="인천광역시">인천광역시</option>
            <option value="광주광역시">광주광역시</option>
            <option value="대전광역시">대전광역시</option>
            <option value="울산광역시">울산광역시</option>
            <option value="경기도">경기도</option>
            <option value="강원도">강원도</option>
            <option value="충청북도">충청북도</option>
            <option value="충청남도">충청남도</option>
            <option value="전라북도">전라북도</option>
            <option value="전라남도">전라남도</option>
            <option value="경상북도">경상북도</option>
            <option value="경상남도">경상남도</option>
            <option value="제주특별자치도">제주특별자치도</option>
            <option value="세종특별자치시">세종특별자치시</option>
          </select>
          <select name="gugun" id="gugun">
            <option value="">시/군/구</option>
            <option value="강남구">강남구</option>
            <option value="강동구">강동구</option>
            <option value="강북구">강북구</option>
            <option value="강서구">강서구</option>
            <option value="관악구">관악구</option>
            <option value="광진구">광진구</option>
            <option value="구로구">구로구</option>
            <option value="금천구">금천구</option>
            <option value="노원구">노원구</option>
            <option value="도봉구">도봉구</option>
            <option value="동대문구">동대문구</option>
            <option value="동작구">동작구</option>
            <option value="마포구">마포구</option>
            <option value="서대문구">서대문구</option>
            <option value="서초구">서초구</option>
            <option value="성동구">성동구</option>
            <option value="성북구">성북구</option>
            <option value="송파구">송파구</option>
            <option value="양천구">양천구</option>
            <option value="영등포구">영등포구</option>
            <option value="용산구">용산구</option>
            <option value="은평구">은평구</option>
            <option value="종로구">종로구</option>
            <option value="중구">중구</option>
            <option value="중랑구">중랑구</option>
          </select>
          <input
            type="text"
            name="strNm"
            id="strNm"
            placeholder={this.state.placeholder}
            onFocus={() => this.setState({ placeholder: "" })}
          ></input>
          <Link to="/" className="search">
            <img alt="storeSearch" src="/Images/btn_store_search.png"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchLocate;
