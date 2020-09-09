import React, { Component } from 'react';
import './addForm.css';
import { Container, Form, Col, Row, Card, Button, Modal } from 'react-bootstrap';
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class AddForm extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            title: '',
            location: '',
            participants: '',
            date: '',
            note: '',
            showModal: false
        }
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value })
    }

    handleParticipantsChange(e) {
        this.setState({ participants: e.target.value })
    }

    handleDateChange(e) {
        this.setState({ date: e.target.value })
    }

    handleNoteChange(e) {
        this.setState({ note: e.target.value })
    }

    handleClosedModal(e) {
        this.setState({ showModal: false })
    }

    handleSubmit(e) {
        e.preventDefault();
        const newData = {
            id: Date.now(),
            title: this.state.title,
            location: this.state.location,
            participants: this.state.participants,
            date: this.state.date,
            note: this.state.note,
            img: null
        };
        this.props.actions.saveData(newData)
        this.setState({ title: '', location: '', participants: '', date: '', note: '' })
        this.setState({ showModal: true })
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text>+ Add Event</Card.Text>
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Row>
                                        <Col style={{ marginBottom: '10px' }} sm={6}>
                                            <Form.Control
                                                placeholder="Title"
                                                value={this.state.title}
                                                onChange={this.handleTitleChange.bind(this)}
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </Col>
                                        <Col style={{ marginBottom: '10px' }} sm={6}>
                                            <Form.Control
                                                placeholder="Location"
                                                value={this.state.location}
                                                onChange={this.handleLocationChange.bind(this)}
                                                required
                                            />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col style={{ marginBottom: '10px' }} sm={6}>
                                            <Form.Control
                                                placeholder="Participant"
                                                value={this.state.participants}
                                                onChange={this.handleParticipantsChange.bind(this)}
                                                required
                                            />
                                            <p style={{ fontSize: '12px' }}><i>*Format names (name1, name2, name3,...)</i></p>
                                        </Col>
                                        <Col style={{ marginBottom: '10px' }} sm={6}>
                                            <Form.Control
                                                type="date"
                                                placeholder="Date"
                                                value={this.state.date}
                                                onChange={this.handleDateChange.bind(this)}
                                                required
                                            />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col style={{ marginBottom: '10px' }}>
                                            <Form.Control
                                                as="textarea"
                                                rows="3"
                                                placeholder="Note"
                                                value={this.state.note}
                                                onChange={this.handleNoteChange.bind(this)}
                                                required
                                            />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col style={{ marginBottom: '10px' }}>
                                            <Form.File />
                                        </Col>
                                    </Form.Row>
                                    <Form.Row style={{ marginBottom: '10px' }}>
                                        <Col></Col>
                                        <Col>
                                            <Button
                                                type="submit"
                                                variant="primary"
                                                block
                                            >Save</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6}><img style={{ width: '100%' }} src={require('../../images/meeting.png')} alt="Meeting" /></Col>
                </Row>
                <Modal show={this.state.showModal}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>New data has been save successfully</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClosedModal.bind(this)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddForm)
