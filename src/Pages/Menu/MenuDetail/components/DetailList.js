import React, { Component } from "react";
import DetailCard from "./DetailCard";
import "./DetailList.scss";

class DetailList extends Component {
  render() {
    return (
      <div className="DetailList">
        <DetailCard />
      </div>
    );
  }
}

export default DetailList;
