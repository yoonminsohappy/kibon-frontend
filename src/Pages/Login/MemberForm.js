import React, { Component } from "react";
import './MemberForm.scss';

class memberForm extends Component {
  render() {
    return (
      <div class="memberForm">
        <div class="formBox">
          <input
            className="inputBox"
            type="text"
            placeholder="아이디를 입력해주세요."
          />
          <input
            type="text"
            className="inputBox"
            placeholder="비밀번호를 입력해주세요."
          />

          <div className="checkBox">
            <input className="check" type="checkBox" />
            <label for="idCheck">아이디 저장</label>
          </div>

          <button className="submit" type="button">
            로그인
          </button>
        </div>

        <div className="orText">
          <span>or</span>
        </div>

        <div className="otherBox">
          <div className="social">
            <div className="socialBox">
              <span className="kakao">카카오톡 로그인</span>
            </div>

            <div className="socialBox2">
              <span className="naver">네이버 로그인</span>
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
