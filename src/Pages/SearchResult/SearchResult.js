import React, { Component } from "react";
import {Link} from "react-router-dom";
import Nav from "../../Components/Nav/Nav"
import Footer from "../../Components/Footer/Footer"
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
      <div className="SearchResult">
        <div className="topBox" />
        <Nav />
        <h2>
          <strong>'{this.props.match.params.text}'</strong>
          검색결과
        </h2>
        <div className="boundary"></div>
        <div className="innerContents">
          <div className="popularList">
            <h3>본 인기메뉴</h3>
            {POPULAR_MENU.map((v)=>{
              return(
              <Link to="#" key={v}>{v}</Link>
              )
            })}

          </div>
        </div>
        {this.state.menuList &&
          this.state.menuList.map((v, idx) => {
            return (
              <div style={{ textAlign: "center" }}>
                {v.name}, {parseInt(v.price)}
              </div>
            );
          })}
        {/* <Footer /> */}
      </div>
    );
  }
}
 
export default SearchResult

const POPULAR_MENU=[
  "해물김치해장죽", "쇠고기야채죽", "광양식바싹불고기 반상", "백설", "바싹불고기오징어 한상"
]