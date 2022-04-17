import { Form, Button, Card, Container } from 'react-bootstrap';
import React, { Component } from 'react';


export default class Signup extends Component {
    render() {
   
    return (
        <div >
            <Container className="d-flex align-items-center justify-content-center" >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" required />
                            </Form.Group>
                            <Button className="w-100" type="submit">
                                Sign Up!
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <div className="w-100 text-center mt-2" style={{ maxWidth: "400px" }}>
            </div>
        </div>
    )
    }
}