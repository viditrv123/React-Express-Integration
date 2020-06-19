import React from "react";
import styled from "styled-components"

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
function Header(){
    return( <div id="head">
    
    <header>
        <h1>Keeper</h1>
    </header>
    <Button>Normal</Button>
    </div>);
}

export default Header;