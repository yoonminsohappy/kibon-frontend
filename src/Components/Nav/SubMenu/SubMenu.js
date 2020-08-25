import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './SubMenu.scss';

class SubMenu extends Component {

  render() { 
    console.log(this.props.hover )

    return (
      <div className="SubMenu">
        <div className={this.props.hover >= 0 ? "downin" : ""}></div>
        <div className="subIFMenu">
          <ul>
            {this.props.submenu && this.props.submenu.map((v=>{
            return (
                <li><Link to="#">{v}</Link></li>
            );
          }))}          
          </ul>
        </div>
      </div>
    );
  }
}
 
export default SubMenu;

