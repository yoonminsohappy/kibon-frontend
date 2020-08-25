import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JoinTable from "./Component/JoinTable";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <main className="signUp">
        <JoinTable state="signUp" />
        <div className="stepInner">
          <div className="innerText">
            <h3>
              쉽고 간편한 본아이에프 회원가입
              <span className="textPoint"> :-)</span>
            </h3>
            <span className="innerSpan">
              지금 회원 가입하신 후 본아이에프의 다양한 서비스를 만나보세요.
              <br />
              반드시 회원님 명의로 된 휴대폰, 아이핀으로 본인인증을
              진행해주세요.
            </span>
          </div>
          <div className="innerSelect">
            <div className="phone">
              <Link to="/sign-up/join-agree">
                <button className="phoneBtn">휴대폰 본인인증</button>
              </Link>
            </div>
            <div className="ipin">
              <Link to="/sign-up/join-agree">
                <button className="ipinBtn">아아핀 인증</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
=======

class SignUp extends Component {
  render() {
    return <div></div>;
>>>>>>> master
  }
}

export default SignUp;
