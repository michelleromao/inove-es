import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";

const Reuniao = () => {
   return(
       <Container>
           <Content>
               <SubHeader>
                   <h2> Reuniões </h2>
                   <button>
                       Adicionar reunião
                       <img src={Add} alt="Adicionar reunião" />
                    </button>
               </SubHeader>
           </Content>
       </Container>
   )
}

export default Reuniao;