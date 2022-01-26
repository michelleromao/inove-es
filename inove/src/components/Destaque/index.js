import React, { useState } from "react";
import { Container } from './styles';

const Destaque = ({ onClick }) => {

   return (
      <>
         <Container onClick={onClick}>
            <div>Destaque</div>
         </Container>
      </>
   )
}

export default Destaque;