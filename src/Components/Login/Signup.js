import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import Login from './Login';
import Members from '../Members';
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
export default function Signup() {

    const [signupEmail, setRegisterEmail] = useState("");
    const [signupPassword, setRegisterPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    const handleSubmit = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                signupEmail,
                signupPassword
            );
            console.log(user);
            const ProtectedRoute = () => {
                return <Navigate to="/members" />
            }
        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div >
            <Container className="d-flex align-items-center justify-content-center" >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={(event) => {
                                    signupEmail(event.target.value);
                                }} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={(event) => {
                                    signupPassword(event.target.value);
                                }} required />
                            </Form.Group>
                            <Button className="w-100" type="submit">
                                Sign Up!
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <div className="w-100 text-center mt-2" style={{ maxWidth: "400px" }}>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </div>
        </div>
    )

}