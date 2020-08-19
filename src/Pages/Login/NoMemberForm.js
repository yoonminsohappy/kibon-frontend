import React, { Component } from "react";
import "./NoMemberForm.scss";

class NoMemberForm extends Component {
  render() {
    return (
      <div className="NoMemberForm">
        <div className="titleBox">
          <h3 className="minititle">비회원 주문 시 본오더 혜택 적용 불가</h3>
          <p>
            회원가입을 하시면
            <br />
            본아이에프의 회원 혜택과 이벤트에 참여하실 수 있습니다.
            <br />
            회원가입 하시고 다양한 혜택을 놓치지 마세요!
            <span className="signUpBtn">회원가입</span>
          </p>
        </div>
        <div className="joinRule">
          <div className="ruletext">
            <input type="checkbox" className="check" />
            <label for="idCheck">비회원 이용약관 동의</label>
          </div>
        </div>
        <div className="inputBox">
          <input
            type="text"
            className="inputtext"
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div className="inputBox inputPhone">
          <ul>
            <li>
              <select id="mobile1" className="inputnums">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
            </li>
            <li>
              <input className="phoneNumber" type="text" />
            </li>
            <li>
              <input className="phoneNumber" type="text" />
            </li>
          </ul>
          <button className="sendBtn">인증번호 발송</button>
        </div>
        <div className="inputBox inputName">
          <input className="userName" type="text" />
          <button className="checkBtn">확인</button>
        </div>
        <button className="submit">확인</button>
      </div>
    );
  }
}

export default NoMemberForm;
