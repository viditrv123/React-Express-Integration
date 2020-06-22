import React from "react";
import Footer from "./Footer";
import axios from "axios";

var users=[];
axios.get('http://localhost:5000/admin/dashboard')
            .then(res=>console.log(res.data))
            .catch(e=>console.log("Error:"+e))

function Dashboard(){
    return(
        <div>
        <h1>Dashboard</h1>
            <Footer />
        </div>
    )
}

export default Dashboard;