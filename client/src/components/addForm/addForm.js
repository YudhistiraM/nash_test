import React, { Component } from 'react';
import './addForm.css';
import { Container, Form, Col, Row, Card, Button, Modal, Alert } from 'react-bootstrap';
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
            file: null,
            showModal: false,
            showNoteAlert: false
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

    handleImgChange(e) {
        this.setState({ file: e.target.files[0] })
    }

    handleClosedModal(e) {
        this.setState({ showModal: false })
    }

    noteCharacterValidate() {
        this.setState({ showNoteAlert: this.state.note.length <= 50 })
        return this.state.note.length <= 50
    }

    handleSubmit(e) {
        e.preventDefault()
        if (!this.noteCharacterValidate()) {
            let formData = new FormData()
            formData.append("id", Date.now())
            formData.append("title", this.state.title)
            formData.append("location", this.state.location)
            formData.append("participants", this.state.participants)
            formData.append("date", this.state.date);
            formData.append("note", this.state.note);
            formData.append("img", this.state.file);
            this.props.actions.saveData(formData)
            this.setState({ title: '', location: '', participants: '', date: '', note: '' })
            this.setState({ showModal: true })
        }
    }


    render() {
        let noteAlert = this.state.showNoteAlert ? [
            <Alert
                key="1"
                style={{ height: '30px', padding: '5px', fontSize: '12px' }}
                variant="danger"
            >
                <strong>Note</strong> should be more than 50 character !
            </Alert>
        ] : [];
        return (
            <Container>
                <Row>
                    <Col sm={6} style={{ padding: '0, 15px' }}>
                        <Card style={{ height: '100%' }}>
                            <Card.Body>
                                <Card.Text>+ Add Event {this.state.img}</Card.Text>
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
                                                style={{ marginBottom: '5px' }}
                                                as="textarea"
                                                rows="3"
                                                placeholder="Note"
                                                value={this.state.note}
                                                onChange={this.handleNoteChange.bind(this)}
                                                required
                                            />
                                            {noteAlert}
                                        </Col>
                                    </Form.Row>
                                    <Form.Row>
                                        <Col style={{ marginBottom: '10px' }}>
                                            <Form.File
                                                name="img"
                                                onChange={this.handleImgChange.bind(this)}
                                                required
                                            />
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
                    <Col sm={6}><img style={{ width: '100%', height: '100%' }} src={require('../../images/meeting.png')} alt="Meeting" /></Col>
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
