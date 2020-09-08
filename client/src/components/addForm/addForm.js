import React from 'react';
import './addForm.css';
import { Container, Form, Col, Row, Card, Button } from 'react-bootstrap';

function AddForm() {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Card>
                        <Card.Body>
                            <Card.Text>+ Add Event</Card.Text>
                            <Form>
                                <Form.Row>
                                    <Col style={{ marginBottom: '10px' }} sm={6}>
                                        <Form.Control placeholder="Title" />
                                    </Col>
                                    <Col style={{ marginBottom: '10px' }} sm={6}>
                                        <Form.Control placeholder="Location" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginBottom: '10px' }} sm={6}>
                                        <Form.Control placeholder="Participant" />
                                    </Col>
                                    <Col style={{ marginBottom: '10px' }} sm={6}>
                                        <Form.Control placeholder="Date" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col style={{ marginBottom: '10px' }}>
                                        <Form.Control as="textarea" rows="3" placeholder="Note" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.File style={{ marginBottom: '10px' }} />
                                    </Col>
                                </Form.Row>
                                <Form.Row style={{ marginBottom: '10px' }}>
                                    <Col></Col>
                                    <Col>
                                        <Button variant="primary" block>Save</Button>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6}><img style={{ width: '100%' }} src={require('../../images/meeting.png')} alt="Meeting" /></Col>
            </Row>
        </Container>
    );
}

export default AddForm;