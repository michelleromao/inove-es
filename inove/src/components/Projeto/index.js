import React from "react";
import Button from "../Button";
import { Container, Content, Title, Description, Bold, Details, Tag } from './styles';

const Projeto = () => {
   return(
       <Container>
            <Content>
            <Title> Título do projeto </Title>
            <Tag>Tecnologia da informação</Tag>
            <Description>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla laborum repellendus rem officia aliquid pariatur iure earum quidem culpa beatae tenetur, nisi tempora quisquam magni inventore quae quod modi quas?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla qui assumenda saepe, quibusdam quo aspernatur necessitatibus perferendis itaque aperiam fugiat quisquam temporibus eos debitis deleniti, reiciendis soluta at accusamus magni!
            </Description>
            <Details>
                <b>Feito por</b> Pesquisador
            </Details>
            <Details>
                <b>Iniciou em</b> 00/00/00
            </Details>
            <Details>
                <b>Terminou em</b> 00/00/00
            </Details>
            </Content>
            <Button action={"Solicitar parceria"}/>
        </Container>
   )
}

export default Projeto;