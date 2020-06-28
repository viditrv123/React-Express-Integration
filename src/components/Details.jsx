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
        const { match: { params } } = this.props;

        UserService.getModeratorBoard()
      }
    render() {

        return (
            <h3>Details</h3>
        )
    }
}