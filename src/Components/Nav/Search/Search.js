import React, { Component } from "react";
import {Link, withRouter} from "react-router-dom";
import './Search.scss';

class Search extends Component {
  state = { 
    searchText : ""
  }

  searchText = (e) =>{
    this.setState({searchText: e.target.value})
  }

  render() { 
    console.log(this.state.searchText)
    return (
      <div className={this.props.isSearch ? "Search" : "searchBarOut"}>
        <div className="searchBarIn">
          <div className="container">
            <div className="searchForm">
              <Link to="">브랜드 전체</Link>
              <input className="searchText" onChange={this.searchText}></input>
              <img
                src="./Images/btn_search.png"
                onClick={() =>
                  this.props.history.push(`/${this.state.searchText}`)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default withRouter (Search);
