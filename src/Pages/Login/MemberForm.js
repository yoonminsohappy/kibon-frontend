import React from "react";
import { withRouter } from "react-router-dom";
import API from "../../config";
import "./MemberForm.scss";

class MmberForm extends React.Component {
  constructor() {
    super();
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
    fetch(`${API}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        identifier: this.state.idValue,
        password: this.state.passwordValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("token", response.token);
          this.props.history.push("/");
        } else {
          alert("아이디와 비밀번호를 확인해주세요");
        }
      });
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
            <label>
              <input className="check" type="checkBox" />
              아이디 저장
            </label>
          </div>
          <button
            className="loginBtn"
            type="button"
            onClick={this.locationEvent}
          >
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

export default withRouter(MmberForm);
