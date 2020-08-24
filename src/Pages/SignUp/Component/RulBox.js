import React, { Component } from "react";
import "./RulBox.scss";
 
class RulBox extends Component {

  render() {
    const { contents , checked, onClick } = this.props;
    return (
      <div className="RuleBox">
        <label className="ruleText">
        <input
          className="check"
          type="checkbox"
          checked={checked}
          onClick={onClick} 
          name={checked}
        />
         <span className="textPoint">[필수]</span>{contents}
        </label>
      </div>
    );
  }
}

export default RulBox;
