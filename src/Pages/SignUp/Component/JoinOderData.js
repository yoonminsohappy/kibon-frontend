import React, { Component } from "react";
import "./Joinbox.scss";

class JoinOderData extends Component {
  render() {
    const {
      handleChange,
      genderValue,
      phoneValue,
      emailValue,
      errorBoxPhone,
      errorBoxEmail,
    } = this.props;
    return (
      <>
        <tr>
          <th>
            성별
            <span className="necessary" title="필수입력">
              •
            </span>
          </th>
          <td>
            <select
              className="genderCheck"
              name="genderValue"
              onChange={handleChange}
            >
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
              onChange={handleChange}
            />
            <span
              className={errorBoxPhone ? "alretText" : "alretText alretDisplay"}
            >
              유효한 번호가 아닙니다.
            </span>
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
              onChange={handleChange}
            />
            <span
              className={errorBoxEmail ? "alretText" : "alretText alretDisplay"}
            >
              유효한 이메일이 아닙니다.
            </span>
          </td>
        </tr>
      </>
    );
  }
}

export default JoinOderData;
