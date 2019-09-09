import React, { Component } from 'react'

export default class Rows extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHeader: [
                "Type",
                "Remaining",
                "Used",
                "Allow",
                "Message"
            ],
            tableBody: [
                {
                    "content": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"
                    ]
                },
                {
                    "content": [
                        "a",
                        "b",
                        "c",
                        "d",
                        "e"
                    ]
                }
            ]
        };
    }

    render() {
        let items = this.state.tableHeader.map((item, key) =>

            <th>{item}</th>


        );

        let body = this.state.tableBody.map((item, key) =>
            <tr>
                {item.content.map((contentItem, key) =>
                    <td> {contentItem}</td>
                )}
            </tr>
        );
        return (
            <tbody>
                {items}
                {body}
            </tbody>
        );
    }
}
