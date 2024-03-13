import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import styled from '@emotion/styled/macro'
import { Global, css } from '@emotion/react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Login';
import Landing from './pages/Landing';
import { useSelector } from 'react-redux';
import Pledge from './pages/Pledge';


const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    html {
        font-family: 'Lato', sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
    }
`

function App() {
    const loggedIn = useSelector((state) => state.auth.loggedIn)
    const [theme, setTheme] = useState('light');
    // Effect hook to apply the theme to the HTML element
    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };
    return (
        <Container fluid>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home" className="">
                        <i className="bi bi-shield-shaded"></i>
                        <h1>Knight Tutor</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Button variant="outline-link" onClick={() => toggleTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')}>🌓</Button>
                    </Navbar.Collapse>
                    <Login/>
                </Container>
            </Navbar>
            {loggedIn ? <Pledge/> : <Landing/>}
            
            <h5 className="m-4">Designed by Daniel Garnica</h5>
        </Container>
    )
}

export default App;
