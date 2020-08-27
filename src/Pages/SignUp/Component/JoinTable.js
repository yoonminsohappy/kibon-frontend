import React, { Component } from "react";
import "./JoinTable.scss";

const pageState = {
  signUp: ["step", "none", "none"],
  agree: ["stepSuccess", "step", "none"],
  complete: ["stepSuccess", "stepSuccess", "step"],
};

class JoinTable extends Component {
  render() {
    return (
      <div className="JoinTable">
        <h2 className="title">회원가입</h2>
        <div className="joinStepBox">
          <ol>
            <li className={pageState[this.props.state][0]}>
              <strong>STEP 01</strong>
              <span>실명인증</span>
            </li>
            <li className={pageState[this.props.state][1]}>
              <strong>STEP 02</strong>
              <span>약관동의 및 개인정보 입력</span>
            </li>
            <li className={pageState[this.props.state][2]}>
              <strong>STEP 03</strong>
              <span>가입완료</span>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default JoinTable;
