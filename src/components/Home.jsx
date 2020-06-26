import React from "react";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel'
import NavigationBar from "./NavigationBar";
import Caro from "./Caro";
import  Carding from "./Carding";

function Home(){
    return(
        <div>
        <NavigationBar />
        <Caro />

        <h1 style={{textAlign:"center", color:"white", backgroundColor:"black", padding:"0px", marginBottom:"0px"}}>Login As</h1>
        
        <div className="flex-container" style={{alignContent:"center"}}>
        
        <div><Carding name="Login As Admin" img="../assets/pic1.jpg" href="/Admin_login"/></div>
        <div><Carding name="Login As Developer" img="../assets/pic2.jpg" href="/Login"/></div>
        <div><Carding name="Login As Freelancer" img="../assets/pic3.jpg" href="/Login"/></div>
        
        </div>
            <Footer />
            </div>
    );
}

export default Home;