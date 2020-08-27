import React, { Component } from "react";
import "./Joinbox.scss";

class JoinLoginData extends Component {
  render() {
    const {
      handleChange,
      userIdValue,
      passwordValue,
      passwordCheckValue,
      errorBoxPassword,
      errorBoxPasswordCheck,
    } = this.props;
    return (
      <>
        <tr>
          <th>
            아이디
            <span className="necessary" title="필수입력">
              •
            </span>
          </th>
          <td>
            <div className="idBox">
              <input
                className="userId"
                type="text"
                name="userIdValue"
                onChange={handleChange}
              />
              <button className="checkBtn">중복확인</button>
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
              type="password"
              placeholder="8~16자 영문, 대소문자, 숫자, 특수문자 사용가능"
              name="passwordValue"
              onChange={handleChange}
            />
            <span
              className={
                errorBoxPassword ? "alretText" : "alretText alretDisplay"
              }
            >
              비밀번호 형식이 일치하지 않습니다.
            </span>
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
              type="password"
              placeholder="8~16자 영문, 대소문자, 숫자, 특수문자 사용가능"
              name="passwordCheckValue"
              onChange={handleChange}
            />
            <span
              className={
                errorBoxPasswordCheck ? "alretText" : "alretText alretDisplay"
              }
            >
              비밀번호가 일치하지 않습니다.
            </span>
          </td>
        </tr>
      </>
    );
  }
}

export default JoinLoginData;
