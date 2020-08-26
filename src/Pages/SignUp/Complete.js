import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JoinTable from "./Component/JoinTable";
import "./Complete.scss";

class Complete extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    this.setState({
      username:localStorage.getItem("name")
    })  
  }
  
  render() {
    return (
      <div className="Complete">
        <JoinTable state="complete" />
        <div className="stepInner">
          <div className="innerText">
            <h3>
              회원가입 완료
              <span className="textPoint"> :-)</span>
            </h3>
          </div>
          <div className="completeBox">
            <p>
              <strong>{this.state.username}</strong> 고객님,
              <br />
              본아이에프 회원이 되신 것을 환영합니다.
            </p>
          </div>
          <div className="btnBox">
            <Link to="/login">
              <button className="loginBtn btn">로그인</button>
            </Link>
            <Link to="/">
              <button className="mainBtn btn">메인으로 이동</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Complete;
