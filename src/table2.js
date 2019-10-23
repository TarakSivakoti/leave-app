import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import "./table2.css";

export default class Table2 extends Component {
    render() {
        return (
          <div>
            <div className="table-responsive top1">
              <div className="heading">Leave report</div>
              <Table className="table">
                <tr className="head-tab">
                  <td className="leave_report_col1">
                    Thu, Sep 13 - Mon, Sep 17, 2018 <br />
                    <span className="leave-type">PL</span>
                    <span className="dot"></span>
                    <span className="reason-type">
                      I am visiting home over the weekend. Will be available...
                    </span>
                    <span className="right-chev"></span>
                  </td>
                  <td className="leave_report_col2">2 days OFF</td>
                  <td id="approval">Pending</td>
                  <td className="pencil"></td>
                  <td className="delete"></td>
                </tr>
                <tr>
                  <td className="leave_report_col1">
                    Wed, Aug 1, 2018 <br />
                    <span className="leave-type">SL</span>
                    <span className="dot"></span>
                    <span className="reason-type">Sickness</span>
                  </td>
                  <td className="leave_report_col2">1 day OFF</td>
                  <td className="approval1">Approved</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="leave_report_col1">
                    Mon, May 4-Thu, May 7, 2018 <br />
                    <span className="leave-type">SL</span>
                    <span className="dot"></span>
                    <span className="reason-type">Sickness</span>
                  </td>
                  <td className="leave_report_col2">4 days OFF</td>
                  <td className="approval1">Approved</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td className="leave_report_col1">
                    Fri, Apr 7-Mon, Apr 10, 2018 <br />
                    <span className="leave-type">PL</span>
                    <span className="dot"></span>
                    <span className="reason-type">Vacation</span>
                  </td>
                  <td className="leave_report_col2">2 days OFF</td>
                  <td id="approval2">Declined</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td id="load-more">Load More</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </Table>
            </div>
          </div>
        );
    }
}
