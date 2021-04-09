import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
     <header>
        <Navbar  expand="lg">
        <Navbar.Brand href="/" className="brand">Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-4">
            <Link to="'/" className="navLink">Home</Link>
            <Link to="/login" className="navLink">Login</Link>
            <Link to="/dashboard" className="navLink">Dashboard</Link>
            </Nav>
         </Navbar.Collapse>
        </Navbar>
        </header>
    );
};

export default Header;