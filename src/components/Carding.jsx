import React from "react";
import {Card,Button} from "react-bootstrap"

function Carding(props){
    return(<Card style={{ width: '18rem',height:'18rem' }}>
    <Card.Img style={{ width: '18rem',height:'10rem' }} variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      {/* <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text> */}
      
      <Button variant="primary" href={props.href}>LogIn</Button>
    </Card.Body>
  </Card>);
}
export default Carding;