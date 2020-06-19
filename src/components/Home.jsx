import React from "react";
import Footer from "./Footer";
import Image from "./Image";
import NavigationBar from "./NavigationBar";

function Home(){
    return(
        <div>
        <NavigationBar />
        <Image src="https://c0.wallpaperflare.com/preview/936/202/464/blog-business-copywriter-couch.jpg" alt="freelancer"/>        
            <Footer />
            </div>
    );
}

export default Home;