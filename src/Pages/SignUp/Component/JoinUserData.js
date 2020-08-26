import React, { Component } from 'react';
import './Joinbox.scss';

class JoinUserData extends Component {
  render() {
    const {
      handleChange,
      errorBoxDay,
      nameValue,
      birthDayValue,
    } = this.props;
    return (
      <>
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
                className={errorBoxDay ? "alretText" : "alretText alretDisplay"}
              >
                형식이 일치하지 않습니다.
              </span>
            </td>
          </tr>
      </>
    );
  }
}

export default JoinUserData;