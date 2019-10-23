import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./table1.css";
export default class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "hello",
      remaining: [],
      used: [],
      allowance: [],
      message: "",data:[]
    };
  }
  componentDidMount() {
    const data = require("../src/data/data.json");
    this.setState({data:data})
  }
  render() {
    return (
      <div>
        <div className="table-responsive top">
          <div className="heading">Balance Status</div>
          <Table className="table" responsive>
            <tr className="head-tab">
              <th>Type</th>
              <th>
                <span id="remaining-hide">Remaining</span>
              </th>
              <th id="hide">Used</th>
              <th id="hide1">Allowance</th>
              <th></th>
            </tr>
              {this.state.data&&this.state.data.map(leave=>{
                return (
                  <tr>
                    <td className="header">{leave.type}</td>
                    <td className="count">{leave.remaining}</td>
                    <td className="used-leave">{leave.used}</td>
                    <td className="allow">{leave.allowance}</td>
                    <td className="msg">{leave.message}</td>
                  </tr>
                );
              })}
          </Table>
        </div>
      </div>
    );
  }
}
