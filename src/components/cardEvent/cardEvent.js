import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './cardEvent.css';

function CardEvent() {
    return (
        <Card style={{ maxWidth: '350px', margin: '15px auto' }}>
            <Card.Img variant="top" src={require('../../images/meeting.png')} />
            <Card.Body>
                <Card.Text><img src={require('../../images/pin.png')} /> <strong>PASANGAN TIMUR, JAKARTA</strong></Card.Text>
                <Card.Title style={{fontSize: '30px'}}>Meeting With CEO</Card.Title>
                <Card.Text>17 Agustus 2020</Card.Text>
                <hr />
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <Card.Text style={{margin: '0 auto'}}><img src={require('../../images/person.png')} /> Rio Jandi</Card.Text>
                    <Card.Text style={{margin: '0 auto'}}><img src={require('../../images/person.png')} /> Rio Jandi</Card.Text>
                    <Card.Text style={{margin: '0 auto'}}><img src={require('../../images/person.png')} /> Rio Jandi</Card.Text>
                </div>
                <hr />
                <Card.Text style={{ margin: '0' }}><strong>Note:</strong></Card.Text>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardEvent;