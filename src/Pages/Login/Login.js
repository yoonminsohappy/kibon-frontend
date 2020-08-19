import React, { Component } from "react";
import MemberForm from "./MemberForm";
import NoMemberForm from "./NoMemberForm";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ismemberShip: true,
      memberOn: true,
      memberOff: false,
    };
  }

  hanbleChangeMember = () => {
    this.setState({
      ismemberShip: true,
      memberOn: true,
      memberOff: false,
    });
  };

  hanbleChangeNoMember = () => {
    alert(
      "비로그인 시 본아이에프의 회원 혜택(쿠폰, 이벤트 혜택)을 받으실 수 없습니다. 회원가입 하시고 본아이에프 혜택을 놓치지 마세요."
    );
    this.setState({
      ismemberShip: false,
      memberOn: false,
      memberOff: true,
    });
  };

  render() {
    console.log(this.state.ismemberShip);
    return (
      <main className="login">
        <h2 className="title">로그인</h2>
        <div className="loginWrap">
          <div className="menu">
            <span
              className={
                this.state.memberOn == true && this.state.memberOff == false
                  ? "memberOn"
                  : "member"
              }
              onClick={this.hanbleChangeMember}
            >
              회원 로그인
            </span>
            <span
              className={
                this.state.memberOn == false && this.state.memberOff == true
                  ? "noMemberOn"
                  : "noMember"
              }
              onClick={this.hanbleChangeNoMember}
            >
              비회원 로그인
            </span>
          </div>
          <div>
            {this.state.ismemberShip ? <MemberForm /> : <NoMemberForm />}
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
