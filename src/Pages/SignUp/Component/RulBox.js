import React, { Component } from "react";
import "./RulBox.scss";

// handleChecked = (e) => {
  //   this.setState({
  //     ...this.state,
  //     [e.target.name]: !this.state[e.target.name],
  //   });


class RulBox extends Component {
  render() {
    return (
      <div className="RuleBox">
        <input
          name="firstChecked"
          className="check"
          type="checkbox"
        />
        <label className="ruleText" for="check">
    <span className="textPoint">[필수]</span>{this.props.contents}
        </label>
      </div>
    );
  }
}

export default RulBox;
