import React from 'react';
import { Container } from 'react-bootstrap';
import './home.css';
import CardEvent from '../cardEvent/cardEvent.js';

function Home() {
    return (
        <Container style={{ display: 'flex', flexWrap: 'wrap', width: 'wrap-content' }}>
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
        </Container>
    );
}

export default Home;