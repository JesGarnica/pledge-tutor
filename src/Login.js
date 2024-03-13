import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, setToken } from './redux/authSlice';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useValidateAccessCode from './hooks/useValidateAccessCode'
import { setAuthCred } from './redux/authCredSlice';


export default function Login() {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, error] = useValidateAccessCode();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login action here. For example:
        dispatch(setAuthCred({
            username: username,
            password: password
         }));
        // Reset form fields
        setUsername("");
        setPassword("");


        // You can add additional logic here for the API call and handling response
    };

    const handleLogout = (e) => {
        dispatch(logout());
        dispatch(setToken(null));
        // Reset any state if necessary
    };

    return (
        <>
            {loggedIn ? (
                <Button onClick={handleLogout}>Logout</Button>
            ) : (
                <Form inline="true" onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                className="mb-2 mr-sm-2"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className="mb-2 mr-sm-2"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" className="mb-2">Login</Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </>
    );
}
