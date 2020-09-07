import React from 'react';
import './addForm.css';
import { Container, Form, Col, Row, Card, Button } from 'react-bootstrap';

function AddForm() {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>+ Add Event</Card.Text>
                            <Form>
                                <Form.Row style={{ marginBottom: '10px' }}>
                                    <Col>
                                        <Form.Control placeholder="Title" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Location" />
                                    </Col>
                                </Form.Row>
                                <Form.Row style={{ marginBottom: '10px' }}>
                                    <Col>
                                        <Form.Control placeholder="Participant" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Date" />
                                    </Col>
                                </Form.Row>
                                <Form.Row style={{ marginBottom: '10px' }}>
                                    <Col>
                                        <Form.Control as="textarea" rows="3" placeholder="Note" />
                                    </Col>
                                </Form.Row>
                                <Form.Row style={{ marginBottom: '10px' }}>
                                    <Col>
                                        <Form.File />
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
                <Col><img style={{ width: '100%' }} src={require('../../images/meeting.png')} /></Col>
            </Row>
        </Container>
    );
}

export default AddForm;