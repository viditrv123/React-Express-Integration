import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Caro(){
    return(
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/936/202/464/blog-business-copywriter-couch.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/936/202/464/blog-business-copywriter-couch.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c0.wallpaperflare.com/preview/936/202/464/blog-business-copywriter-couch.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Caro;