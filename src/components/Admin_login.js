import React, {Component} from "react";
import Layout from "./Layout";
import Input from "./Input";
import axios from "axios";
import styled from "styled-components";
// import auth from "../auth"

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username:'',
            password:''
        }
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username:this.state.username,
            password:this.state.password
        }

        console.log(user);
        var result="";
        axios.post('http://localhost:5000/admin',user)
            .then(res=>{console.log(res.data);
            result=res.data;
            console.log(result);
            })
            .catch(e=>console.log("Error:"+e)
            )   
            
            window.location="/admin/dashboard";
            

    }


    render(){
        return(
            <div>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <form onSubmit={this.onSubmit}>
                
                
                <h1>Login As Admin</h1>
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" value={this.state.username} onChange={this.onChangeUsername}/> 
                    <br></br>
                    <label>Password</label>
                    <input type="Password" className="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.onChangePassword}/>
                    <Button type="submit">Submit</Button>
                </form>
                </div>
                <div className="col-md-2"></div>
                </div>
        )
    }
}