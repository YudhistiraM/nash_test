import React, { Component } from 'react';
import './participantsTable.css';

export default class ParticipantsTable extends Component {

    render() {
        const { data } = this.props
        let filterData = data
        let participantList = filterData.map((data, index) => {
            return (
                <li>{data}</li>
            )
        })
        return (
            <ul>
                {participantList}
            </ul>
        );
    }
}