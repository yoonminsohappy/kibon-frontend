import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JoinTable from "./Component/JoinTable";
import RulBox from "./Component/RulBox";
import "./Agree.scss";

class Agree extends Component {
  constructor() {
    super();

    this.state = {
      allChecked: false,
      firstChecked: false,
      secondChecked: false,
      thirdChecked: false,
      nameValue: "",
      birthdayValue: "",
      userIdValue:"",
      passwordValue:"",
      passwordCheckValue:"",
      genderValue:"",
      phoneValue:"",
      emailValue:"",
    };
  }

  handleAllChecked = () => {
    this.setState({
      allChecked: !this.state.allChecked,
      firstChecked: !this.state.allChecked,
      secondChecked: !this.state.allChecked,
      thirdChecked: !this.state.allChecked,
    });
  };

  thisChecked = () => {
    this.setState({
      allChecked:this.state.firstChecked &&
      this.state.secondChecked &&
      this.state.thirdChecked
        ? true
        : false
    })
  }

  // handleChange = (e) => {
  //   let nextState = {};
  //   nextState[e.target.name] = e.target.value;
  //   this.setState(nextState);
  // }


  handleName = (e) =>{
    this.setState({nameValue:e.target.value});
  };

  handleBirthday = (e) =>{
    this.setState({birthdayValue:e.target.value});
  };

  handleUserId = (e) =>{
    this.setState({userIdValue:e.target.value});
  };

  handlePassword = (e) =>{
    this.setState({passwordValue:e.target.value});
  };

  handlePasswordCheck = (e) =>{
    if({passwordValue:e.target.value} == {passwordCheckValue:e.target.value})
    this.setState({passwordCheckValue:e.target.value});
  };

  handleGender = (e) =>{
    this.setState({genderValue:e.target.value});
  };

  handlePhone = (e) =>{
    this.setState({phoneValue:e.target.value});
  };

  handlEmail = (e) =>{
    this.setState({emailValue:e.target.value});
  
  };


  locationEvent = () => {
    fetch("http://10.58.3.101:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.nameValue,
        birthdate: this.state.birthdayValue,
        identifier: this.state.userIdValue,
        password: this.state.passwordValue,
        gender: this.state.genderValue,
        phone_number: this.state.phoneValue,
        email: this.state.emailValue,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };

  render() {
    // let dispaly = if(this.state.emailValue){
    //   return "none";
    // }else if(this.state.emailValue && ){

    // }

    // }
    // this.state.emailValue.includes('@') ? "inline-block" : "none"
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
              <input
                className="check"
                type="checkbox"
                onClick={this.handleAllChecked}
              />
              <label className="agreeAll" for="check_all">
                전체약관에 모두 동의합니다.
              </label>
            </div>
            {menus.map((el,index) => {
              return <RulBox contents={el.content} key={index} />;
            })}
            <div className="joinbox">
              <tbody>
                <tr>
                  <th>
                    이름
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input className="textInput" type="text" name="nameValue" onChange={this.handleChange}/>
                  </td>
                </tr>
                <tr>
                  <th>
                    생년월일
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input
                      className="textInput"
                      type="text"
                      placeholder="YYYY-MM-DD 형식으로 입력"
                      name="birthdayValue"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    아이디
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <div className="idBox">
                      <input className="userId" 
                      type="text" 
                      name="userIdValue"
                      onChange={this.handleChange}/>
                      <button class="checkBtn">중복확인</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    비밀번호
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input
                      className="textInput"
                      type="text"
                      placeholder="8~16자 영문, 대소문자, 숫자, 특수문자 사용가능"
                      name="passwordValue"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    비밀번호 확인
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input
                      className="textInput"
                      type="text"
                      placeholder="8~16자 영문, 대소문자, 숫자, 특수문자 사용가능"
                      name="passwordCheckValue"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    성별
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <select className="genderCheck" name="genderValue" onChange={this.handleChange}>
                      <option value="남자">남자</option>
                      <option value="여자">여자</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>
                    휴대폰
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input
                      className="textInput"
                      name="phone"
                      type="text"
                      placeholder="'-'없이 11자 입력"
                      name="phoneValue"
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    이메일
                    <span className="necessary" title="필수입력">
                      •
                    </span>
                  </th>
                  <td>
                    <input
                      className="textInput"
                      type="text"
                      placeholder="'@' 포함하여 입력"
                      name="emailValue"
                      onChange={this.handlEmail}
                    />
                    <span class="alretText" id="alretEmail">
                    유효한 이메일이 아닙니다.
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>
                    개인정보
                    <br />
                    유효기간 선택
                  </th>
                  <td>
                    <div className="agreeOption">
                      <input className="radio" type="radio" checked="checked" />
                      <label className="radioLabla">1년</label>
                      <input className="radio" type="radio" />
                      <label className="radioLabla">3년</label>
                      <input className="radio" type="radio" />
                      <label className="radioLabla">5년</label>
                      <p className="comment">
                        설정하신 기간동안 로그인/주문 등의 서비스 이용이 없을
                        시, 휴면계정으로 처리되어 각종 이벤트/쿠폰혜택을
                        받아보실 수 없습니다.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>정보 수신동의</th>
                  <td>
                    <div className="agreeOption">
                      <p>
                        <input className="check" type="checkbox" />
                        <label className="smsLabla">
                          [선택] 이메일/전달 DM등을 통한 제품 및 이벤트
                          정보수신에 동의합니다.
                        </label>
                      </p>
                      <p>
                        <input className="check" type="checkbox" />
                        <label className="smsLabla">
                          [선택] 이메일/전달 DM등을 통한 제품 및 이벤트
                          정보수신에 동의합니다.
                        </label>
                      </p>
                      <p className="comment">
                        정보수신 미 동의 시 이벤트 / 할인쿠폰 / 신제품 등의
                        안내를 받으실 수 없습니다.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>추천인 ID</th>
                  <td>
                    <input className="recomId" type="text" />
                  </td>
                </tr>
              </tbody>
            </div>
            <div className="submitBox">
              {/* <Link to="/sign-up/join-complete"> */}
                <button className="joinSubmit" onClick={this.locationEvent}>회원가입</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const menus = [
  {content: "이용약관 동의"}, 
  {content: "개인정보 수집 및 이용 동의"}, 
  {content:"광고성 정보 수신 동의"},
  ];

export default Agree;
