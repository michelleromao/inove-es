import React from "react";
import { Container } from './styles.js';

const Button = ({ action, styled,disabled, ...rest }) => {
   return(
       <Container {...rest } styled={styled ?? "primary"} disabled={disabled ? true : false}>{action}</Container>
   )
}

export default Button;