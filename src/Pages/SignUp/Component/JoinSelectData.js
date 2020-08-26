import React, { Component } from "react";
import "./Joinbox.scss";

class JoinSelectData extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}

export default JoinSelectData;
