import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './cardEvent.css';
import Participants from '../participants/participants.js'

export default class CardEvent extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { data } = this.props;
        return (
            <Card style={{ maxWidth: '350px', margin: '15px auto' }}>
                <Card.Img variant="top" src={require('../../images/meeting.png')} />
                <Card.Body>
                    <Card.Text><img src={require('../../images/pin.png')} /> <strong>{data.location}</strong></Card.Text>
                    <Card.Title style={{ fontSize: '30px' }}>{data.title}</Card.Title>
                    <Card.Text>{data.date}</Card.Text>
                    <hr />
                    <Participants data={data.participants} />
                    <hr />
                    <Card.Text style={{ margin: '0' }}><strong>Note:</strong></Card.Text>
                    <Card.Text>{data.note}</Card.Text>
                </Card.Body>
            </Card >
        );
    }
}