import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import './table1.css';
import Rows from '../src/rows'
export default class Table1 extends Component {
  render() {
    return (
      <div>
        <div className="table-responsive top">
          <div className="heading">Balance Status</div>
          {/* <Table>
            <Rows></Rows>
          </Table> */}
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
                <tr className="bor">
                  <td className="header">Paid Leaves</td>
                  <td className="count" id="remaining-paid-leaves">
                    19 <br />
                  </td>
                  <td className="used-leave" id="used-leave-paid">
                    1
                  </td>
                  <td className="allow" id="allow-leave-paid">
                    20
                  </td>
                  <td className="msg">Last used in March</td>
                </tr>
                <tr>
                  <td className="header">Sick Leaves</td>
                  <td className="count" id="remaining-paid-sick-leaves">
                    5 <br />
                  </td>
                  <td className="used-leave" id="used-leave-sick">
                    7
                  </td>
                  <td className="allow" id="allow-leave-sick">
                    12
                  </td>
                  <td className="msg">Last used in August</td>
                </tr>
                <tr>
                  <td className="header">
                    Carried over from last year <br />
                    <span className="year">
                      Recommended to utilise for vacations
                    </span>
                  </td>

                  <td className="count" id="remaining-paid-carried-leaves">
                    2 <br />
                  </td>
                  <td className="used-leave" id="used-leave-carried">
                    4
                  </td>
                  <td className="allow" id="allow-leave-carried">
                    6
                  </td>
                  <td className="msg">Recently used this month</td>
                </tr>
                <tr>
                  <td className="header1">Maternity Leaves</td>
                  <td className="count1" id="Maternity">
                    0
                  </td>
                  <td className="count1 hide" id="Maternity-used">
                    0
                  </td>
                  <td className="count1 hide1">0</td>
                  <td className="count1 hide3">-</td>
                </tr>
                <tr>
                  <td className="header1">Paternity Leaves</td>
                  <td className="count1" id="Paternity">
                    0
                  </td>
                  <td className="count1 hide" id="Paternity-used">
                    0
                  </td>
                  <td className="count1 hide1">0</td>
                  <td className="count1 hide3">-</td>
                </tr>
                <tr>
                  <td className="header1">Caregiver Leaves</td>
                  <td className="count1" id="Caregiver">
                    0
                  </td>
                  <td className="count1 hide" id="Caregiver-used">
                    0
                  </td>
                  <td className="count1 hide1">0</td>
                  <td className="count1 hide3">-</td>
                </tr>
        </Table>
        </div>
      </div>
    );
  }
}
