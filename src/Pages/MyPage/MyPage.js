import React, { Component } from 'react';
import './MyPage.scss';

class MyPage extends Component {
  render() {
    return (
      <>
        <div className="myPageContainer">
         <div className="myPage">마이페이지</div>
         <div className="myPageBottomBar"></div>
        </div>   
        <div className="myPageInfoContainer">
         <div className="myPageInfo">
          <div className="userContainer">
           <img alt="user" src="/Images/user_mypage.png" />
           <div className="user">위코드 님</div>
          </div>
          <div className="giftCardContainer">
           <div></div>
          </div>
          <div className="couponContainer">
           <div></div>
          </div>
          <div className="questionContainer">
           <div></div>
          </div>
         </div>
        </div>
      
      <ul>
        <li>주문조회</li>
        <li>마이본
          <ul>
            <li>MY매장/MY메뉴</li>
            <li>쿠폰관리</li>
            <li>모바일 메뉴 교환권 관리</li>
            <li>기프트카드 관리</li>
          </ul>
        </li>
        <li>문의내역</li>
        <li>개인정보 관리
          <ul>
            <li>개인정보 수정</li>
            <li>회원탈퇴</li>
          </ul>
        </li>

      </ul>

      
        
      </>
    );
  }
}

export default MyPage;