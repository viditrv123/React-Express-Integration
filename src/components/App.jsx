import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import NoMatch from "./NoMatch";
import Layout from "./Layout";
import NavigationBar from "./NavigationBar";
import Register from "./Register";


function App(){
    return <div>
    <Layout>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/Login" component={Login}/>
                <Route  path="/Register" component={Register}/>
                <Route  component={NoMatch}/>
            </Switch>
        </Router>
    </Layout>
    </div>
}

export default App;