import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import "./cards.css";
import pp from "../src/img/pp.jpg";

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
                       <Card className="custom-card2">
                         <Card.Body>
                           <img
                             src={this.state.img}
                             alt="manager-pic"
                             className="manager-pic"
                           />
                           <div className="displayFlex pl-2">
                             <div className="leave-bot">Leave Bot</div>
                             <div id="tip">Tip</div>
                           </div>
                           <div class="content">
                             <div class="box"></div>
                             You can utilise the carried over leaves from last
                             year for your recently applied leave....
                           </div>
                         </Card.Body>
                       </Card>
                       <Card className="custom-card3">
                         <Card.Body>
                           <img
                             src={this.state.img}
                             alt="manager-pic"
                             className="manager-pic"
                           />
                           <div className="displayFlex pl-2 leave-bot2">
                             <div className="leave-bot">Leave Bot</div>
                           </div>
                           <div class="content">
                             <div class="box"></div>
                             Upcoming long holidays from <span>
                               Oct 14
                             </span> to <span>Oct 16</span>
                           </div>
                         </Card.Body>
                       </Card>
                     </div>
                   );
                 }
               }
