import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="contentWrap">
          <div className="contentWrapVisual">
            <div className="innerWrapIn">
              <div className="tabRow">
                <a href="/#">
                  <li>모든메뉴</li>
                </a>
                <a href="/#">
                  <li>보양죽</li>
                </a>
                <a href="/#">
                  <li>영양죽</li>
                </a>
                <a href="/#">
                  <li>별미죽</li>
                </a>
                <a href="/#">
                  <li>전통죽</li>
                </a>
                <a href="/#">
                  <li>곁들임/음료</li>
                </a>
                <a href="/#">
                  <li>간편식</li>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
