import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footerPosition">
          <div className="footerUtilBox">
            <div className="footerUtilInnerBox">
              <dl>
                <dt className="footerImage"></dt>
                <dt className="footerPhoneNumberInfoText">
                  본오더(온라인 주문)전용 콜센터
                </dt>
                <dd className="footerBar">|</dd>
                <dd className="footerPhoneNumber">1668-3944</dd>

                <dt className="footerImage1"></dt>
                <dt className="mainNumberText">대표번호</dt>
                <dd className="footerBar">|</dd>
                <dd className="footerPhoneNumber">1644-6288</dd>

                <dt className="footerImage2"></dt>
                <dt className="footerFoundedNumberText">창업문의</dt>
                <dd className="footerBar">|</dd>
                <dd className="footerPhoneNumber">1668-3007</dd>
              </dl>
              <div className="familySite">
                <a href="#familysite">FAMILY SITE</a>
              </div>
            </div>
          </div>
          <div className="footerContents">
            <div className="footerSns">
              <div className="snsIn">
                <div className="insta"></div>
              </div>
              <div className="snsIn">
                <div className="youtube"></div>
              </div>
              <div className="snsIn">
                <div className="facebook"></div>
              </div>
              <div className="snsIn">
                <div className="blog"></div>
              </div>
            </div>
            <ul className="footerLinkList">
              <li><a href="#">이용약관</a></li>
              <li>|</li>
              <li><a href="#">개인정보처리방침</a></li>
              <li>|</li>
              <li><a href="#">이메일 무단수집거부</a></li>
              <li>|</li>
              <li><a href="#">법적고지</a></li>
              <li>|</li>
              <li><a href="#">협력업체 모집</a></li>
              <li>|</li>
              <li><a href="#">고객센터</a></li>
            </ul>
            <p className="companyInfo">
              <span>본아이에프(주)</span>
              <span>서울특별시 영등포구 선유로165 (양평동3가, 와이파이센터)6층</span>
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