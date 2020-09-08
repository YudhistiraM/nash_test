import React, {Component} from 'react';
import './dashboard.css';
import { Container, Form, Col, Pagination } from 'react-bootstrap';
import TableEvent from '../tableEvent/tableEvent.js'
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Dashboard extends Component {
    componentDidMount() {
        this.props.actions.loadData();
    }

    render() {
        const { data, actions } = this.props
        return (
            <Container>
                <Form>
                    <Form.Row>
                        <Col sm={4}>
                            <Form.Control placeholder="Search..." />
                        </Col>
                    </Form.Row>
                </Form><br />
                <TableEvent data={data} />
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