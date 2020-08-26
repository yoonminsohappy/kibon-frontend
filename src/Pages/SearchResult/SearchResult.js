import React, { Component } from "react";
import "./SearchResult.scss";

class SearchResult extends Component {
  state = {  
    menuList : []
  }

  componentDidMount(){
    fetch(
      `http://10.58.4.214:8000/products/search?q=${this.props.match.params.text}`
    )
    .then(res => res.json())
    .then(res => this.setState({menuList: res.data}))

    console.log("컨디마:", this.state.menuList)
  }


  render() {
    console.log(this.state.menuList) 
    return (
      <div>
        <div>내 검색어: {this.props.match.params.text}</div>
        {this.state.menuList && this.state.menuList.map((v,idx) => {
          return <div style={{textAlign: "center"}}>{v.name}, {parseInt(v.price)}</div>;
        })}
      </div>
    );
  }
}
 
export default SearchResult
