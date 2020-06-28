import React from 'react';
import UserService from "../services/user.service"
import axios from 'axios';
import AuthService from "../services/auth.service";


export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
 

  render() {

    return (<div>
    <h3>Users</h3>
      <ul>
      {this.state.content.map(person => <li >{person.username} <button key={person.id} onClick={()=>window.location="/profile/"+person.id}>details</button></li> )}
 
      </ul></div>
    )
  }
}