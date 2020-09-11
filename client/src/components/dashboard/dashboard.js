import React, { Component } from 'react';
import './dashboard.css';
import { Container, Form, Col } from 'react-bootstrap';
import TableEvent from '../tableEvent/tableEvent.js'
import Paginate from '../paginate/paginate.js'
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Dashboard extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            key: '',
            events: [],
            currentPage: 1,
            numbersOfPage: 0
        }
    }

    componentDidMount() {
        this.props.actions.loadData();
    }

    handleKeyChange(e) {
        this.setState({ key: e.target.value })
        this.setState({ currentPage: 1 })
    }

    getFilterData(data) {
        return data.filter(arr =>
            arr.title.toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.location.toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.participants.toString().toLowerCase().includes(this.state.key.toLowerCase()) ||
            arr.date.toLowerCase().includes(this.state.key.toLowerCase()))
    }

    getDataBasedOnPage(data) {
        let result = this.getFilterData(data).slice(5 * (this.state.currentPage - 1))
        if (result.length < 5) {
            return result
        } else {
            return result.slice(0, 5)
        }
    }

    getNumbersOfPage(data) {
        return Array.from(Array(Math.ceil(this.getFilterData(data).length / 5)).keys())
    }

    handleChangePage(page) {
        this.setState({ currentPage: page });
    }

    render() {
        const { data } = this.props
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
                <div style={{ width: '100%', overflowX: 'scroll' }}>
                    <TableEvent data={this.getDataBasedOnPage(data)} currentPage={this.state.currentPage} />
                </div>
                <Paginate numbersOfPage={this.getNumbersOfPage(data)} onChangePage={this.handleChangePage.bind(this)} />
                <br /><br /><br />
            </Container >
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