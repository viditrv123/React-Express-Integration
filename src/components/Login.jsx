import React, {Component} from "react";
import Layout from "./Layout";
import Input from "./Input";

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

        // window.location="/";
        
    }


    render(){
        return(
            <Layout>
                
                <form onSubmit={this.onSubmit}>
                <h1>Login</h1>
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email" value={this.state.username} onChange={this.onChangeUsername}/> 
                    <label>Password</label>
                    <input type="Password" className="form-control" placeholder="Enter Password" value={this.state.password} onChange={this.onChangePassword}/>
                    <button type="submit">Submit</button>
                </form>
            </Layout>
        )
    }
}