import React from "react";
import "./App.css";
import './test.scss';
import { Row, Col } from "react-bootstrap";
import pp from "../src/img/pp.jpg";
import Card1 from "./cards";
import Table1 from "./table1";
import Table2 from "./table2";
import {Provider,themes, Button } from "@stardust-ui/react";
import { TeamsThemeContext, getContext, ThemeStyle } from 'msteams-ui-components-react';
import * as microsoftTeams from "@microsoft/teams-js";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Chris Naidoos",
      designation: "UX Designer",
      day:12,
      month:9,
      theme: "dark",
      themeStyle: ThemeStyle.teams
    };
  }
   componentDidMount() {
    microsoftTeams.initialize();
    microsoftTeams.getContext((context) => {
      let theme = context.theme || "";
      this.updateTheme(theme);
      this.setState({
        theme: theme
      });
    });

    microsoftTeams.registerOnThemeChangeHandler((theme) => {
      this.updateTheme(theme);
      this.setState({
        theme: theme,
      }, () => {
        this.forceUpdate();
      });
    });
  }

   setThemeComponent = () => {
    if (this.state.theme === "dark") {
      return (
        <Provider theme={themes.teamsDark}>
          <div className="darkContainer">
            {this.getAppDom()}
          </div>
        </Provider>
      );
    }
    else if (this.state.theme === "contrast") {
      return (
        <Provider theme={themes.teamsHighContrast}>
          <div className="highContrastContainer">
            {this.getAppDom()}
          </div>
        </Provider>
      );
    } else {
      return (
        <Provider theme={themes.teams}>
          <div className="defaultContainer">
            {this.getAppDom()}
          </div>
        </Provider>
      );
    }
  }

   updateTheme = (theme) => {
    if (theme === "dark") {
      this.setState({
        themeStyle: ThemeStyle.Dark
      });
    } else if (theme === "contrast") {
      this.setState({
        themeStyle: ThemeStyle.HighContrast
      });
    } else {
      this.setState({
        themeStyle: ThemeStyle.Light
      });
    }
  }

   getAppDom = () => {
    const context = getContext({
      baseFontSize: 10,
      style: this.state.themeStyle
    });
  
    return (
      <TeamsThemeContext.Provider value={context}>
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
      </TeamsThemeContext.Provider>
    );
  }

  render() {
    return (
      <div>
        {this.setThemeComponent()}
      </div>
    );
  }
}


export default Container;