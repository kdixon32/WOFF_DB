import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import Signup from './Signup';
import Members from '../Members';
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
} from 'react-router-dom';
export default function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleSubmit = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);


        } catch (error) {
            console.log(error.message);
        }
        Navigate("/go");
    };


    return (
        <div >
            <Container className="d-flex align-items-center justify-content-center" >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Log In</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                }} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }} required />
                            </Form.Group>
                            <Button className="w-100" onClick="{handlesubmit}" type="submit">
                                Log In!
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
            <div className="w-100 text-center mt-2" style={{ maxWidth: "400px" }}>
                    <Routes>
                        <Route path="/go" element={<Navigate to="Members" />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Routes>
            </div>
        </div >
    )

}