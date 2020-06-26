import React from "react";

import {Nav, Navbar} from "react-bootstrap";


function Reg_log(){
    return( <div>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav.Link href="/Register">Register</Nav.Link>
    <Nav.Link href="/Login">Login</Nav.Link>
    </Navbar.Collapse>
    </div>);
}

export default Reg_log;