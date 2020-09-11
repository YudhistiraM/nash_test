import React, { Component } from 'react';
import './tableEvent.css';
import { Table } from 'react-bootstrap';
import ParticipantsTable from '../participantsTable/participantsTable.js';

export default class TableEvent extends Component {

    render() {
        const { data, currentPage } = this.props
        let filterData = data
        let dataNodes = filterData.map((data, index) => {
            return (
                <tr key={index}>
                    <td>{(index + 1) + ((currentPage - 1) * 5)}</td>
                    <td>{data.title}</td>
                    <td>{data.location}</td>
                    <td>{data.date}</td>
                    <td><ParticipantsTable data={data.participants} /></td>
                    <td>{data.note}</td>
                </tr>
            )
        })
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
                    {dataNodes}
                </tbody>
            </Table>
        );
    }
}