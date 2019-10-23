import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import "../CSS/cards.css";
import pp from "../img/pp.jpg";
import Notificationcard from './Notificationcard';

export default class Card1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: pp
    };
  }

  render() {
    return (
      <div>
        <div className="notifications">Notifications</div>
        <Card className="custom-card1">
          <Card.Body>
            <img
              src={this.state.img}
              alt="manager-pic"
              className="manager-pic"
            />
            <div className="displayFlex pl-2">
              <div className="manager">
                Your manager has approved your leave
                             </div>
              <div id="msg1">Enjoy</div>
            </div>
          </Card.Body>
          <Card.Footer>
            <Message-icon></Message-icon>
            <span className="chat-with-mg">
              Chat with manager
                           </span>
          </Card.Footer>
        </Card>
        <Notificationcard img={pp} heading="Leave Bot" tip="Tip" message="You can utilise the carried over leaves from last year for your recently applied leave...." />
        <Notificationcard img={pp} heading2="Leave Bot" message="Upcoming long holidays from Oct 14 to Oct 16" />
      </div>
    );
  }
}
