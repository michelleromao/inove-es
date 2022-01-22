import React from "react";
import { Container, Content, Title, Description, Bold, Details, Tag } from './styles';

const Projeto = () => {
   return(
       <Container>
            <Content>
            <Title> Título do projeto </Title>
            <Tag>Tecnologia da informação</Tag>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla laborum repellendus rem officia aliquid pariatur iure earum quidem culpa beatae tenetur, nisi tempora quisquam magni inventore quae quod modi quas?
            </Description>
            <Details>
                <Bold>Feito por</Bold> Pesquisador
            </Details>
            <Details>
                <Bold>Iniciou em</Bold> 00/00/00
            </Details>
            <Details>
                <Bold>Terminou em</Bold> 00/00/00
            </Details>
            </Content>
        </Container>
   )
}

export default Projeto;