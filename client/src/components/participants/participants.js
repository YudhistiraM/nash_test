import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './participants.css';

export default class Participants extends Component {
    render() {
        const { data } = this.props;
        let filterData = data;
        let participantList = filterData.map((data, index) => {
            return (
                <Card.Text key={index} style={{ margin: '0 auto' }}><img src={require('../../images/person.png')} alt="Meeting" />{data}</Card.Text>
            )
        })
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {participantList}
            </div>
        );
    }
}