import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom'
import NavigationBar from "./NavigationBar";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }
  users_name() {
    window.location="/profile";
  }

  render() {
    const { currentUser } = this.state;
    const isAuthenticated = localStorage.getItem("user");
    console.log(isAuthenticated);
    

    return (isAuthenticated ? (
      <div>
      <div className="container">
      <NavigationBar />
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.user.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Token:</strong>{" "}
          {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.user.id}
        </p>
        
        <strong>Authorities:</strong>
        <ul>
          
           <li> {currentUser.user.username}</li>
        </ul>
        <button onClick={this.users_name}>Users</button>
      </div>
      </div>) : (
        <Redirect to={{ pathname: '/login' }} />
        
    )
    );
  }
}