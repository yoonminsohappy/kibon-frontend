import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Search.scss";

class Search extends Component {
  state = {
    searchText: "",
  };

  searchText = (e) => {
    this.setState({ searchText: e.target.value });
  };

  refresh = (e) => {
    this.props.history.push(`/${this.state.searchText}`);
    e(window.location.reload());
  };

  render() {
    console.log(this.state.searchText);
    return (
      <div className={this.props.isSearch ? "Search" : "searchBarOut"}>
        <div className="searchBarIn">
          <div className="container">
            <div className="searchForm">
              <Link to="">브랜드 전체</Link>
              <input
                type="text"
                className="searchText"
                placeholder="해장"
                onChange={this.searchText}
              ></input>
              <img src="./Images/btn_search.png" onClick={this.refresh} />
            </div>
            <div className="keywordBox">
              <div className="todayBlock">
                <dl>
                  <dt>오늘의 키워드</dt>
                  <dd>
                    <Link to="#" className="sharp strong">
                      선물
                    </Link>
                    <Link to="#" className="sharp">
                      해장
                    </Link>
                    <Link to="#" className="sharp">
                      원기회복
                    </Link>
                    <Link to="#" className="sharp strong">
                      보양식
                    </Link>
                    <Link to="#" className="sharp">
                      다이어트
                    </Link>
                    <Link to="#" className="sharp">
                      술안주
                    </Link>
                  </dd>
                </dl>
              </div>
              <div className="keyWord">
                <dl>
                  <dt>본 인기메뉴</dt>
                  <dd>
                    <Link to="#" className="sharp strong">
                      해물김치해장죽
                    </Link>
                    <Link to="#" className="sharp">
                      쇠고기야채죽
                    </Link>
                    <Link to="#" className="sharp">
                      광양식바싹불고기 반상
                    </Link>
                    <Link to="#" className="sharp strong">
                      백설
                    </Link>
                    <Link to="#" className="sharp">
                      바싹불고기오징어 한상
                    </Link>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
