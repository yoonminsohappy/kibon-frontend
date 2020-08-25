import React, { Component } from "react";
import "./Basket.scss";
import "../../Components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import "../../Styles/common.scss";

class Basket extends Component {
  render() {
    return (
      <div className="Basket">
        <div className="orderPopWrap">
          <div className="orderPopTop">
            <div className="innerWrapIn">
              <h3>일반주문</h3>
              <Link to="/" class="closeFullPop">
                닫기
              </Link>
            </div>
          </div>
          <div className="joinStepBox order">
            <ol>
              <li className="current">
                <span>장바구니</span>
              </li>
              <li>
                <span>결제완료</span>
              </li>
            </ol>
          </div>
          <div className="orderPayItems">
            <div className="tableWrap">
              <table className="tableList">
                <thead>
                  <tr>
                    {/* <tr> */}
                    <th>주문메뉴</th>
                    {/* </tr> */}
                    {/* <tr> */}
                    <th>수량</th>
                    {/* </tr> */}
                    {/* <tr> */}
                    <th>가격</th>
                    {/* </tr> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="al">
                      <div className="goodsPhoto">
                        <p className="goodsThumb">
                          <img src="" alt="goods" />
                        </p>
                        <p className="goodsTxt">
                          "[본죽&amp;비빔밥cafe]" 해물김치해장죽 &nbsp; /
                          "(대)"포장용기
                        </p>
                      </div>
                    </td>
                    <td>1개</td>
                    <td className="ar">
                      <span className="spoqa">10,000</span>원
                    </td>
                  </tr>
                  <tr>
                    <td className="al">
                      <div className="goodsPhoto">
                        <p className="goodsThumb">
                          <img src="" alt="goods" />
                        </p>
                        <p className="goodsTxt">
                          "[본죽&amp;비빔밥cafe]" 해물김치해장죽 &nbsp; /
                          "(대)"포장용기
                        </p>
                      </div>
                    </td>
                    <td>1개</td>
                    <td className="ar">
                      <span className="spoqa">10,000</span>원
                    </td>
                  </tr>
                  <tr>
                    <td className="al">
                      <div className="goodsPhoto">
                        <p className="goodsThumb">
                          <img src="" alt="goods" />
                        </p>
                        <p className="goodsTxt">
                          "[본죽&amp;비빔밥cafe]" 해물김치해장죽 &nbsp; /
                          "(대)"포장용기
                        </p>
                      </div>
                    </td>
                    <td>1개</td>
                    <td className="ar">
                      <span className="spoqa">10,000</span>원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Basket;
