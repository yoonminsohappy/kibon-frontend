import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './SubMenu.scss';

class SubMenu extends Component {

  render() {
    const{submenu,hover} = this.props;
    return (
      <div className="SubMenu">
        <div className={hover >= 0 ? "downin" : ""}></div>
        <div className="subIFMenu">
          <ul>
            {submenu && submenu.map((v , idx) =>{
            return (
                <li><Link to="#">{v}
                <div className="subUnderLine"/>
                </Link></li>
            );
          })}          
          </ul>
        </div>
      </div>
    );
  }
}
export default SubMenu;

