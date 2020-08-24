import React, { Component } from "react";
import "./MemberForm.scss";

class memberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: "",
      passwordValue: "",
    };
  }

  handleIdEvent = (e) => {
    this.setState({ idValue: e.target.value });
  };

  handlePasswordEvent = (e) => {
    this.setState({ passwordValue: e.target.value });
  };

  locationEvent = () => {
    fetch("http://10.58.3.101:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        identifier: this.state.idValue,
        password: this.state.passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  render() {
    return (
      <div className="MemberForm">
        <div className="formBox">
          <input
            className="inputBox"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={this.handleIdEvent}
            name="idValue"
          />
          <input
            type="password"
            className="inputBox"
            placeholder="비밀번호를 입력해주세요."
            onChange={this.handlePasswordEvent}
            name="passwordValue"
          />
          <div className="checkBox">
            <label><input className="check"type="checkBox" />아이디 저장</label>
          </div>
          <button className="loginBtn" type="button" onClick={this.locationEvent}> 
            로그인
          </button>
        </div>
        <div className="orText">
          <span>or</span>
        </div>
        <div className="otherBox">
          <div className="social">
            <div className="socialBoxKakao">
              <p className="kakao">카카오톡 로그인</p>
            </div>
            <div className="socialBoxNaver">
              <p className="naver">네이버 로그인</p>
            </div>
          </div>
          <div className="find">
            <span>아이디/비밀번호 찾기</span>
            <span className="lineBefore">회원가입</span>
          </div>
        </div>
      </div>
    );
  }
}

export default memberForm;
