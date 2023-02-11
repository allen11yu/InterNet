import React from 'react';

import { Link } from 'react-router-dom';
import { faHeart as filledHeart, faUser as user} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, Container } from 'react-bootstrap';

export function Navigation({isLogin, setIsLoginCallback, setProfileEdit, currentProfile}) {
    /**
     * Handle the logout feature.
     */
    const handleLogout = () => {
        setIsLoginCallback(false);
        setProfileEdit(false);
        currentProfile.img = "";
    }

    let loginOrlogout = null;
    if(isLogin) {
        loginOrlogout = (
            <Link onClick={handleLogout} to="/about">Logout</Link>
        );
    } else {
        loginOrlogout = (
            <Link to="/login">Login</Link>
        );
    }

    return (
        <Navbar expand="lg">
        <Container fluid>
            <div className="menu-left">
               <Link to="/"><img src="img/logo-white-full.png" alt="InterNet logo" /></Link>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="ml-auto"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to="/match">Match</Link>
                <Link to="/about">About</Link>
                <Link to="/favorite"><FontAwesomeIcon icon={filledHeart} /></Link>
                <Link to="/profile"><FontAwesomeIcon icon={user} /></Link>
                {loginOrlogout}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}