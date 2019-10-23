import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import "../CSS/cards.css";

export default class Notificationcard extends Component {
    render() {
        return (
            <Card className="custom-card2">
                <Card.Body>
                    <img
                        src={this.props.img}
                        alt="manager-pic"
                        className="manager-pic"
                    />
                    <div className="displayFlex pl-2">
                        <div className="leave-bot">{this.props.heading}</div>
                        <div id="tip">{this.props.tip}</div>
                    </div>
                    <div className="displayFlex pl-2 leave-bot2">
                        <div className="leave-bot">{this.props.heading2}</div>
                    </div>
                    <div className="content">
                        <div className="box"></div>
                        {this.props.message}
                    </div>
                </Card.Body>
            </Card>
        )
    }
}
