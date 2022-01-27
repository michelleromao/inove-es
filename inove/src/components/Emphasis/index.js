import React from "react";
import { Container } from './styles';

const Emphasis = ({ title, onClick }) => {

   return (
      <>
         <Container onClick={onClick}>
            <div>{title}</div>
         </Container>
      </>
   )
}

export default Emphasis;