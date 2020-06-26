import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";
import AuthService from "../services/auth.service";
import Reg_log from "./Res_log";
import Nav_prof from "./Nav_prof";

function NavigationBar(){
    return(<div style={{padding:"0px"}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Rexzed</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/Contact">Contact</Nav.Link>
      </Nav>
      <Nav>
      {AuthService.getCurrentUser()?(<Nav_prof />):(<Reg_log />)
      }
      
    </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>);
}
export default NavigationBar;