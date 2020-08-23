import React, { Component } from "react";
import MemberForm from "./MemberForm";
import NoMemberForm from "./NoMemberForm";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ismemberShip: true,
      isMember: true,
    };
  }

  handleChange = (e) => {
    if(e ===  "changeMember"){
      this.setState({
        ismemberShip: true,
        isMember: true,
      });
    }else{
      alert(
        "비로그인 시 본아이에프의 회원 혜택(쿠폰, 이벤트 혜택)을 받으실 수 없습니다. 회원가입 하시고 본아이에프 혜택을 놓치지 마세요."
      );
      this.setState({
        ismemberShip: false,
        isMember: false,
      });
    }
  };


  render() {
    const { ismemberShip, isMember } = this.state
    return (
      <main className="login">
        <h2 className="title">로그인</h2>
        <div className="loginWrap">
          <div className="menu">
            <span
              className={
                isMember
                  ? "memberOn memberBtn"
                  : "member memberBtn"
              }
              name="changeMember"
              onClick={()=>this.handleChange("changeMember")}
            >
              회원 로그인
            </span>
            <span
              className={
                !isMember
                  ? "memberOn memberBtn"
                  : "member memberBtn"
              }
              name="changeNoMember"
              onClick={this.handleChange}
            >
              비회원 로그인
            </span>
          </div>
          <div>
            {ismemberShip ? <MemberForm /> : <NoMemberForm />}
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
