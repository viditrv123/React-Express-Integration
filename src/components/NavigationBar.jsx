import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";

function NavigationBar(){
    return(<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Rexzed</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="/Register">Register</Nav.Link>
      <Nav.Link href="/Login">Login</Nav.Link>
      
    </Nav>
    </Navbar.Collapse>
  </Navbar>);
}
export default NavigationBar;