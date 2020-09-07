import React from 'react';
import './dashboard.css';
import { Container, Form, Col, Pagination } from 'react-bootstrap';
import TableEvent from '../tableEvent/tableEvent.js'

function Dashboard() {
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Col sm={4}>
                        <Form.Control placeholder="Search..." />
                    </Col>
                </Form.Row>
            </Form><br />
            <TableEvent />
            <Pagination style={{margin: '0 auto', width: 'fit-content'}}>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
            </Pagination>
        </Container>
    );
}

export default Dashboard;