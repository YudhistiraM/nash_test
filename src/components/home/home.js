import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './home.css';
import Navbar from '../navbar/navbar.js';
import CardEvent from '../cardEvent/cardEvent.js';

function Home() {
    return (
        <div>
            <Navbar /><br />
            <Container style={{ display: 'flex', flexWrap: 'wrap', width: 'wrap-content' }}>
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
                <CardEvent />
            </Container>
        </div>
    );
}

export default Home;