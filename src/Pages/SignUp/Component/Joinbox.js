import React, { Component } from "react";
import JoinUserData from "./JoinUserData";
import JoinLoginData from "./JoinLoginData";
import JoinOderData from "./JoinOderData";
import JoinSelectData from "./JoinSelectData";
import "./Joinbox.scss";


class Joinbox extends Component {
  render() {
    const {
      handleChange,
      totalData
    } = this.props;
    return (
      <div className="Joinbox">
        <tbody>
          <JoinUserData handleChange={handleChange} nameValue={totalData.nameValue} birthDayValue={totalData.birthDayValue} errorBoxDay={totalData.errorBoxDay}/>
          <JoinLoginData handleChange={handleChange} userIdValue={totalData.userIdValue} passwordValue={totalData.passwordValue} passwordCheckValue={totalData.passwordCheckValue} errorBoxPassword={totalData.errorBoxPassword} errorBoxPasswordCheck={totalData.errorBoxPasswordCheck} />
          <JoinOderData handleChange={handleChange} genderValue={totalData.genderValue} phoneValue={totalData.phoneValue} emailValue={totalData.emailValue} errorBoxPhone={totalData.errorBoxPhone} errorBoxEmail={totalData.errorBoxEmail}/>
          <JoinSelectData />
        </tbody>
      </div>
    );
  }
}

export default Joinbox;
