import React from 'react';
import './dashboard.css';
import { Container, Form, Col, Table, Pagination } from 'react-bootstrap';

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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Participant</th>
                        <th>Note</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Meeting With CEO</td>
                        <td>PASANGAN TIMUR, JAKARTA</td>
                        <td>17 Agustus 2020</td>
                        <td>
                            <ul>
                                <li>Rio Jandi</li>
                                <li>Rio Jandi</li>
                                <li>Rio Jandi</li>
                            </ul>
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Meeting With CEO</td>
                        <td>PASANGAN TIMUR, JAKARTA</td>
                        <td>17 Agustus 2020</td>
                        <td>
                            <ul>
                                <li>Rio Jandi</li>
                                <li>Rio Jandi</li>
                                <li>Rio Jandi</li>
                            </ul>
                        </td>
                        <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </td>
                    </tr>
                </tbody>
            </Table>
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