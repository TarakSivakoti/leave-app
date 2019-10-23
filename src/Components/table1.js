import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../CSS/table1.css";
const axios = require("axios").default;
export default class Table1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // type: "hello",
      // remaining: [],
      // used: [],
      // allowance: [],
      // message: "",
      data: []
    };
  }
  componentDidMount() {
    // const data = require("../src/data/data.json");
    // this.setState({ data: data })
    // axios.get('https://reqres.in/api/users?page=2')
    let _this = this;
    axios
      .get("/data.json")
      .then(function(response) {
        // handle success
        // console.log(response.data);
        _this.setState({ data: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }
  render() {
    return (
      <div>
        <div className="table-responsive top">
          <div className="heading">Balance Status</div>
          <Table className="table" responsive>
            <tbody>
              <tr className="head-tab">
                <th>Type</th>
                <th>
                  <span id="remaining-hide">Remaining</span>
                </th>
                <th id="hide">Used</th>
                <th id="hide1">Allowance</th>
                <th></th>
              </tr>
              {this.state.data &&
                this.state.data.map(leave => {
                  return (
                    <tr>
                      <td className="header" key={leave.type}>
                        {leave.type}
                      </td>
                      <td className="count" key={leave.remaining}>
                        {leave.remaining}
                      </td>
                      <td className="used-leave" key={leave.used}>
                        {leave.used}
                      </td>
                      <td className="allow" key={leave.allowance}>
                        {leave.allowance}
                      </td>
                      <td className="msg" key={leave.message}>
                        {leave.message}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
