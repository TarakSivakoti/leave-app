import React from "react";
import "../css/container.css";
import { Row, Col } from "react-bootstrap";
import pp from "../src/img/pp.jpg";
import Card1 from "..//components/cards";
import Table1 from "..//components/table1";
import Table2 from "..//components/table2";
import { Button } from "@stardust-ui/react";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Chris Naidoos",
      designation: "UX Designer",
      day:12,
      month:9
    };
  }
  render() {
    return (
      <Container-fluid>
        <Row>
          <Col lg="3" md="3" className="col-br">
            <Profile-pic className="row">
              <img src={pp} alt="img" className="thumbnail" />
            </Profile-pic>
            <Profile-info className="row">
              <div className="name">{this.state.name}</div>
              <div className="designation">{this.state.designation}</div>
              <div className="leaveStatus">{this.state.leaveStatus}</div>
            </Profile-info>
            <Leave-count className="row">
              <span className="day">{this.state.day}</span> days OFF in &nbsp;
              <span className="month">{this.state.month}</span> months
            </Leave-count>
            <div className="row">
              <Button className="custom-btn" type="button" primary>
                Apply Leave
              </Button>
            </div>
            <Card1 />
          </Col>
          <Col lg="9" md="9">
            <Table1/>
            <Table2/>
          </Col>
        </Row>
      </Container-fluid>
    );
  }
}

export default Container;