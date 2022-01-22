import React from "react";
import { Container, Content, Title, List } from './styles';
import Destaque from '../../components/Destaque';
import Projeto from '../../components/Projeto';

const Inicio = () => {
   return(
    <Container>
        <Content> 
            <section>
                <Title>Destaques</Title>
                <List>
                    <Destaque />
                    <Destaque />
                    <Destaque />
                </List>
            </section>
            <section>
                <Title>Projetos</Title>
                <List>
                    <Projeto />
                    <Projeto />
                    <Projeto />
                </List>
            </section>
        </Content>
    </Container>
   )
}

export default Inicio;