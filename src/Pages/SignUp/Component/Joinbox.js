import React, { Component } from "react";
import "./Joinbox.scss";

class Joinbox extends Component {
  render() {
    const {
      handleChange,
      totalData: {
        errorBoxDay,
        nameValue,
        birthDayValue,
        userIdValue,
        passwordValue,
        passwordCheckValue,
        genderValue,
        phoneValue,
        emailValue,
        errorBoxPasswordCheck,
        errorBoxPhone,
        errorBoxEmail,
      },
    } = this.props;
    return (
      <div className="Joinbox">
        <tbody>
          <tr>
            <th>
              이름
              <span className="necessary" title="필수입력">
                •
              </span>
            </th>
            <td>
              <input
                className="textInput"
                type="text"
                name="nameValue"
                onChange={handleChange}
              />
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
                name="birthDayValue"
                onChange={handleChange}
              />
              <span
                className="alretText"
                style={{
                  display: errorBoxDay ? "none" : "inline-block",
                }}
              >
                형식이 일치하지 않습니다.
              </span>
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
                className="alretText"
                style={{
                  display: errorBoxPasswordCheck
                    ? "none"
                    : "inline-block",
                }}
              >
                비밀번호가 일치하지 않습니다.
              </span>
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
                className="alretText"
                style={{
                  display: errorBoxPhone ? "none" : "inline-block",
                }}
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
                className="alretText"
                style={{
                  display: errorBoxEmail ? "none" : "inline-block",
                }}
              >
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
                  설정하신 기간동안 로그인/주문 등의 서비스 이용이 없을 시,
                  휴면계정으로 처리되어 각종 이벤트/쿠폰혜택을 받아보실 수
                  없습니다.
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
                    [선택] 이메일/전달 DM등을 통한 제품 및 이벤트 정보수신에
                    동의합니다.
                  </label>
                </p>
                <p>
                  <input className="check" type="checkbox" />
                  <label className="smsLabla">
                    [선택] 이메일/전달 DM등을 통한 제품 및 이벤트 정보수신에
                    동의합니다.
                  </label>
                </p>
                <p className="comment">
                  정보수신 미 동의 시 이벤트 / 할인쿠폰 / 신제품 등의 안내를
                  받으실 수 없습니다.
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
    );
  }
}

export default Joinbox;
