import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from './Home';
import Demo from './Demo';
import WOFF_DB from './WOFF_DB';
import { Navbar, Nav, Container } from "react-bootstrap";

export default class Navigate extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to="/woff_db">
                                <img
                                    src="https://res.cloudinary.com/lmn/image/upload/v1/gameskinnyc/w/o/f/woff-cactuar-d7478.png"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top"
                                    alt="https://static.fandomspot.com/images/08/2191/19-zapt-magic-mirage.jpg"
                                />
                                The Mirage DB
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/Demo">Demo</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<WOFF_DB />} />
                        <Route path="/demo" element={<Demo />} />]
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            </Router >
        )
    }
}