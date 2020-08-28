import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id="yeheum" ref={(ref) => (this.footer = ref)}>
        <div className="position">
          <div className="utilBox">
            <div className="utilInnerBox">
              <dl>
                <dt className="image"></dt>
                <dt className="phoneNumberInfoText">
                  본오더(온라인 주문)전용 콜센터
                </dt>
                <dd className="footerBar">|</dd>
                <dd className="phoneNumber">1668-3944</dd>
                <dt className="phoneIcon"></dt>
                <dt className="mainNumberText">대표번호</dt>
                <dd className="footerBar">|</dd>
                <dd className="phoneNumber">1644-6288</dd>

                <dt className="lampIcon"></dt>
                <dt className="foundedNumberText">창업문의</dt>
                <dd className="footerBar">|</dd>
                <dd className="phoneNumber">1668-3007</dd>
              </dl>
              <div className="familySite">
                <Link to="#familysite">FAMILY SITE</Link>
              </div>
            </div>
          </div>
          <div className="footerContents">
            <div className="footerSns">
              <div className="snsIn">
                <div className="icon insta" />
              </div>
              <div className="snsIn">
                <div className="icon youtube" />
              </div>
              <div className="snsIn">
                <div className="icon facebook" />
              </div>
              <div className="snsIn">
                <div className="icon blog" />
              </div>
            </div>
            <ul className="linkList">
              <li>
                <Link to="#">이용약관</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="#">개인정보처리방침</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="#">이메일 무단수집거부</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="#">법적고지</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="#">협력업체 모집</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="#">고객센터</Link>
              </li>
            </ul>
            <p className="companyInfo">
              <span>본아이에프(주)</span>
              <span>
                서울특별시 영등포구 선유로165 (양평동3가, 와이파이센터)6층
              </span>
              <span>대표자명: 김철호, 이진희</span>
              <span>사업자등록번호 101-86-07256</span>
              <span>통신판매신고번호:2019-1230호</span>
            </p>
            <p className="copyright">
              COPYRIGHT 2018 BONIF CO.LTD.ALL RIGHT RESERVED.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
