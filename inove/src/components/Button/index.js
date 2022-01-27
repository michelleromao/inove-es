import React from "react";
import { Container } from './styles.js';

const Button = ({ action, onClick, ...rest }) => {
   return(
       <Container {...rest }>{action}</Container>
   )
}

export default Button;