import React, { Component } from "react";
import { valDay, valPassword, valpasswordCheck, valPhone, valEmail } from "../../Utils"
import JoinTable from "./Component/JoinTable";
import RulBox from "./Component/RulBox";
import Joinbox from "./Component/Joinbox"
import "./Agree.scss";

class Agree extends Component {
  constructor() {
    super();
    this.state = {
      allChecked: false,
      checked0: false,
      checked1: false,
      checked2: false,
      nameValue: "",
      birthDayValue: "",
      userIdValue: "",
      passwordValue: "",
      passwordCheckValue: "",
      genderValue: "",
      phoneValue: "",
      emailValue: "",
      errorBoxDay: true,
      errorBoxPasswordCheck: true,
      errorBoxPhone: true,
      errorBoxEmail: true,
    };
  }

  handleAllChecked = () => {
    const {allChecked} = this.state;
    this.setState({
      allChecked: !allChecked,
      checked0: !allChecked,
      checked1: !allChecked,
      checked2: !allChecked,
    })

  };

  handleChecked = (index) => {
    this.setState({
      [`checked${index}`]: !this.state[`checked${index}`]
    }, ()=> {
      this.setState({
        allChecked: this.state.checked0 && this.state.checked1 && this.state.checked2
      })
    })
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    if (name === "birthDayValue") {
      this.setState({ errorBoxDay: valDay(value)});
    }

    if (name === "passwordValue") {
      this.setState({ errorBoxPhone: valPassword(value)});
    }

    if (name === "passwordCheckValue") {
      this.setState({ errorBoxPasswordCheck: valpasswordCheck(this.state.passwordValue, value)});
    }

    if (name === "phoneValue") {
      this.setState({ errorBoxPhone: valPhone(value)});
    }

    if (name === "emailValue") {
      this.setState({ errorBoxEmail: valEmail(value)});
    }

    this.setState({[name]: value});
  }

  locationEvent = () => {
    const { nameValue, birthDayValue, userIdValue, passwordValue, phoneValue, emailValue, allChecked} = this.state;
    if (nameValue && birthDayValue && userIdValue && passwordValue && phoneValue && emailValue && allChecked) {
      fetch("http://10.58.1.31:8000/user/signup", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.nameValue,
          birthdate: this.state.birthDayValue,
          identifier: this.state.userIdValue,
          password: this.state.passwordValue,
          gender: this.state.genderValue,
          phone_number: this.state.phoneValue,
          email: this.state.emailValue,
        }),
      })
        .then((response) => response.json())
        .then((response) => { 
          localStorage.setItem("name",response.name);
          this.props.history.push('/sign-up/join-complete');
        });
    } else {
      alert("필수입력창에 내용을 채워주세요.");
    }
  };

  render() {
    return (
      <main className="agree">
        <JoinTable state="agree" />
        <div className="stepInner">
          <div className="innerText">
            <h3>약관동의 및 개인정보 입력</h3>
            <span className="innerSpan">
              회원 가입 시 먼저 이용약관을 읽어보신 후 동의하신 다음 필요한
              정보를 입력하세요.
              <br />각 회원의 신상정보에 대해서는 ‘신용정보의 이용 및 보호에
              관한 법률’에 의거 완벽한 보안을 유지합니다.
            </span>
          </div>
          <div className="joinRuleBox">
            <div className="agreeAllBtn">
              <label className="agreeAll">
                <input
                  className="check"
                  type="checkbox"
                  onClick={this.handleAllChecked}
                  checked={this.state.allChecked}
                />
                전체약관에 모두 동의합니다.
              </label>
            </div>
            {titleText.map((el, index) => {
              return (
                <RulBox contents={el.content} key={index} checked={this.state[el.name]} onClick={()=>this.handleChecked(index)}/>
              );
            })}
            <Joinbox handleChange={this.handleChange} totalData={this.state}/>
            <div className="submitBox">
              <button className="joinSubmit" onClick={this.locationEvent}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const titleText = [
  { content: "이용약관 동의", name: "checked0" },
  { content: "개인정보 수집 및 이용 동의", name: "checked1" },
  { content: "광고성 정보 수신 동의", name: "checked2" },
];

export default Agree;
