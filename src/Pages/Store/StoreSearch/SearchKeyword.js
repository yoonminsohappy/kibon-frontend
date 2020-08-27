import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchKeyword extends Component {
  state = {
    placeholder: "지하철역 또는 지역명으로 검색해주세요.",
  };
  render() {
    return (
      <div className="addStore">
        <div className="addStoreInput">
          <input
            type="text"
            name="schKey"
            id="schKey"
            placeholder={this.state.placeholder}
            onFocus={() => this.setState({ placeholder: "" })}
          />
          <Link to="/" className="search">
            <img alt="storeSearch" src="/Images/btn_store_search.png"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchKeyword;
