import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function NavBar(props){
    const {expand,children} = props;

    return(
        <Navbar collapseOnSelect expand={expand} bg="dark" variant="dark">
            <Navbar.Brand href="/america">HOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavBar.defaultProps = {
    bg: 'dark',
    variant: 'dark',
    expand: 'lg',
}