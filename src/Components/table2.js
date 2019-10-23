import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import "../CSS/table2.css";
const axios = require('axios').default;
export default class Table2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leavereports: []
    };
  }
  componentDidMount() {
    let _this = this;
    axios.get('/data.json')
      .then(function (response) {
        _this.setState({ leavereports: response.data })
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }
  render() {
    return (
      <div>
        <div className="table-responsive top1">
          <div className="heading">Leave report</div>
          <Table className="table">
            <tbody>
              {this.state.leavereports && this.state.leavereports.map(report => {
                if (report && report.hasOwnProperty('leaveReport')) {
                  return (
                    <tr className="head-tab">
                      <td className="leave_report_col1">{report.leaveReport && report.leaveReport.dates} <br />
                        <span className="leave-type">PL</span>
                        <span className="dot"></span>
                        <span className="reason-type">
                          {report.leaveReport && report.leaveReport.reason}
                        </span>
                        <span className="right-chev"></span>
                      </td>
                      <td className="leave_report_col2">{report.leaveReport && report.leaveReport.days}</td>
                      <td className={report.leaveReport.approvalstatus.toLowerCase()}>{report.leaveReport && report.leaveReport.approvalstatus}</td>
                      {report.leaveReport.approvalstatus.toLowerCase() === "pending" ? <td className="pencil"></td> : <td></td>}
                      {report.leaveReport.approvalstatus.toLowerCase() === "pending" ? <td className="delete"></td> : <td></td>}
                    </tr>
                  )
                };
                return "";
              })}
              <tr>
                <td id="load-more">Load More</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
