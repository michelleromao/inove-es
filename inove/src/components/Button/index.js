import React from "react";
import { Container } from './styles.js';

const Button = ({ action, onClick, ...rest }) => {
   return(
       <Container onClick={() => onClick}>{action}</Container>
   )
}

export default Button;