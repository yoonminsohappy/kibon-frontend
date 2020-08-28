import React, { Component } from "react";
import {
  valDay,
  valPassword,
  valpasswordCheck,
  valPhone,
  valEmail,
} from "../../Utils";
import JoinTable from "./Component/JoinTable";
import RulBox from "./Component/RulBox";
import Joinbox from "./Component/Joinbox";
import API from "../../config";
import DefaultNav from "../../Components/DefaultNav/DefaultNav";
import Footer from "../../Components/Footer/Footer";
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
      genderValue: "남자",
      phoneValue: "",
      emailValue: "",
      errorBoxDay: true,
      errorBoxPassword: true,
      errorBoxPasswordCheck: true,
      errorBoxPhone: true,
      errorBoxEmail: true,
    };
  }

  handleAllChecked = () => {
    const { allChecked } = this.state;
    this.setState({
      allChecked: !allChecked,
      checked0: !allChecked,
      checked1: !allChecked,
      checked2: !allChecked,
    });
  };

  handleChecked = (index) => {
    this.setState(
      {
        [`checked${index}`]: !this.state[`checked${index}`],
      },
      () => {
        this.setState({
          allChecked:
            this.state.checked0 && this.state.checked1 && this.state.checked2,
        });
      }
    );
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    const table = {
      nameValue: value,
      birthDayValue: ["errorBoxDay", valDay(value)],
      passwordValue: ["errorBoxPassword", valPassword(value)],
      userIdValue: value,
      passwordCheckValue: [
        "errorBoxPasswordCheck",
        valpasswordCheck(this.state.passwordValue, value),
      ],
      genderValue: value,
      phoneValue: ["errorBoxPhone", valPhone(value)],
      emailValue: ["errorBoxEmail", valEmail(value)],
    };

    this.setState({
      [name]: value,
      [table[name][0]]: table[name][1],
    });
  };

  locationEvent = () => {
    const {
      nameValue,
      birthDayValue,
      userIdValue,
      passwordValue,
      phoneValue,
      emailValue,
      allChecked,
    } = this.state;
    if (
      nameValue &&
      birthDayValue &&
      userIdValue &&
      passwordValue &&
      phoneValue &&
      emailValue &&
      allChecked
    ) {
      fetch(`${API}/user/signup`, {
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
          if (response.message === "SUCCESS") {
            localStorage.setItem("name", response.name);
            this.props.history.push("/sign-up/join-complete");
          } else {
            alert("회원가입에 실패하였습니다! 입력창을 확인해주세요.");
          }
        });
    } else {
      alert("필수입력창에 내용을 채워주세요.");
    }
  };

  render() {
    return (
      <>
        <DefaultNav />
        <main className="Agree">
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
                  <RulBox
                    contents={el.content}
                    key={index}
                    checked={this.state[el.name]}
                    onClick={() => this.handleChecked(index)}
                  />
                );
              })}
              <Joinbox
                handleChange={this.handleChange}
                totalData={this.state}
              />
              <div className="submitBox">
                <button className="joinSubmit" onClick={this.locationEvent}>
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

const titleText = [
  { content: "이용약관 동의", name: "checked0" },
  { content: "개인정보 수집 및 이용 동의", name: "checked1" },
  { content: "광고성 정보 수신 동의", name: "checked2" },
];

export default Agree;
