import React from "react";
import "../App.css";
import "../CSS/test.scss";
import { Row, Col } from "react-bootstrap";
import pp from "../img/pp.jpg";
import Card1 from "../Components/cards";
import Table1 from "../Components/table1";
import Table2 from "../Components/table2";
import { Provider, themes, Button } from "@stardust-ui/react";
import {
  TeamsThemeContext,
  getContext,
  ThemeStyle
} from "msteams-ui-components-react";
import * as microsoftTeams from "@microsoft/teams-js";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    // this.openApply = this.openApply.bind(this);
    this.state = {
      name: "Chris Naidoos",
      designation: "UX Designer",
      day: 12,
      month: 9,
      theme: "",
      themeStyle: ThemeStyle.teams
    };
  }
  componentDidMount() {
    microsoftTeams.initialize();
    let theme;
    microsoftTeams.getContext(context => {
      theme = context.theme || "";
      this.updateTheme(theme);
    });
    this.setState({
      // setting set state for given keys above like theme,name,designation.
      // theme: "contrast",
      // name: "Chris",
      // designation: "UX "
    });

    microsoftTeams.registerOnThemeChangeHandler(theme => {
      this.updateTheme(theme);
      this.setState(
        {
          theme: theme
        },
        () => {
          this.forceUpdate();
        }
      );
    });
  }

  setThemeComponent = () => {
    if (this.state.theme === "dark") {
      return (
        <Provider theme={themes.teamsDark}>
          <div className="darkContainer">{this.getAppDom()}</div>
        </Provider>
      );
    } else if (this.state.theme === "contrast") {
      return (
        <Provider theme={themes.teamsHighContrast}>
          <div className="highContrastContainer">{this.getAppDom()}</div>
        </Provider>
      );
    } else {
      return (
        <Provider theme={themes.teams}>
          <div className="defaultContainer">{this.getAppDom()}</div>
        </Provider>
      );
    }
  };

  updateTheme = theme => {
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
  };

  getAppDom = () => {
    const context = getContext({
      baseFontSize: 10,
      style: this.state.themeStyle
    });

    function submitHandler(err) {
      debugger;
      console.log(err);
    }
    function openApply() {
      debugger;
      let taskInfo = {
        url: null,
        height: null,
        width: null,
        card: null,
        fallbackUrl: null
      };

      taskInfo.url = "https://5683d281.ngrok.io/applyleaves";
      taskInfo.height = "medium";
      taskInfo.width = "medium";
      taskInfo.fallbackUrl = taskInfo.url;
      microsoftTeams.tasks.startTask(taskInfo, submitHandler);
    }
    microsoftTeams.initialize();
    /*submitHandler = (err,result) => {
     console.log(result.action);   

     if(result.action=='applyLeave'){
       let taskInfo = {
         url:null,
         height:null,
         width:null,
         fallbackurl:null
       };

       taskInfo.url=
     }
       /* if(result.action == 'applyLeave'){

      }*/

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
                <Button
                  className="custom-btn"
                  onClick={openApply}
                  type="button"
                  primary
                >
                  Apply Leave
                </Button>
              </div>
              <Card1 />
            </Col>
            <Col lg="9" md="9">
              <Table1 />
              <Table2 />
            </Col>
          </Row>
        </Container-fluid>
      </TeamsThemeContext.Provider>
    );
  };

  render() {
    return <div>{this.setThemeComponent()}</div>;
  }
}
