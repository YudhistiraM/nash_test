import React, { Component } from 'react';
import './dashboard.css';
import { Container, Form, Col, Pagination, Button } from 'react-bootstrap';
import TableEvent from '../tableEvent/tableEvent.js'
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            key: '',
            events: []
        }
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    handleKeyChange(e) {
        this.setState({ key: e.target.value })
    }

    getData(data) {
        return data.filter(arr =>
            arr.title.toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.location.toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.participants.toString().toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.date.toLowerCase().includes(this.state.key.toLowerCase()))
    }

    render() {
        const { data, actions } = this.props
        return (
            <Container>
                <Form>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                value={this.state.key}
                                onChange={this.handleKeyChange.bind(this)}
                                className="mb-2"
                                placeholder="Search..."
                            />
                        </Col>
                    </Form.Row>
                </Form><br />
                <TableEvent data={this.getData(data)} />
                <Pagination style={{ margin: '0 auto', width: 'fit-content' }}>
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)