import React, { Component } from "react";
import './SubMenu.scss';

class SubMenu extends Component {
  state = {
    
   }

  render() { 
    console.log(this.props.hover)

    return (
      <div className="SubMainContainer">
        <div className="downin"></div>
        <div className="subIFMenu">
          <ul>
            {this.props.submenu && this.props.submenu.map((v=>{
            return (
                <li>{v}</li>
            );
          }))}          
          </ul>
        </div>
      </div>
    );
  }
}
 
export default SubMenu;

