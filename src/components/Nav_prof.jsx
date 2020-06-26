import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Nav, Navbar } from "react-bootstrap";

function logout() {
    AuthService.logout();
    window.location = "/";
}

export default class Nav_prof extends Component {
    render() {
        return (<div>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link href="/Dashboard">Profile</Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Navbar.Collapse>
        </div>);
    }
}
