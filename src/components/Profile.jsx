import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom'
import NavigationBar from "./NavigationBar";
import UserService from "../services/user.service";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUser: UserService.getPublicContent()
            
      
    };
  }
  users_name() {
    console.log(allUser);
    
  }
  

  render() {
    
    const isAuthenticated = localStorage.getItem("user");
    console.log(isAuthenticated);
    

    return (isAuthenticated ? (
      <div>
      <div className="container">
      <NavigationBar />
        <header className="jumbotron">
          <h3>
            <strong>{}</strong> Profile
          </h3>
        </header>
        {/* <p>
          <strong>Token:</strong>{" "}
          {currentUser.token.substring(0, 20)} ...{" "}
          {currentUser.token.substr(currentUser.token.length - 20)}
        </p> */}
        {/* <p>
          <strong>Id:</strong>{" "}
          {currentUser.user.id}
        </p>
        
        <strong>Authorities:</strong>
        <ul>
          
           <li> {currentUser.user.username}</li>
        </ul> */}
        <button onClick={this.users_name}>Users</button>
      </div>
      </div>) : (
        <Redirect to={{ pathname: '/login' }} />
        
    )
    );
  }
}