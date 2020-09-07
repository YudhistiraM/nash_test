import React from 'react';
import './tableEvent.css';
import { Table } from 'react-bootstrap';

function TableEvent() {
    return (
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
    );
}

export default TableEvent;