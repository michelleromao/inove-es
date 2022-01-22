import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";

const Projeto = () => {
    return(
        <Container>
            <Content>
                <SubHeader>
                    <h2> Projetos </h2>
                    <button>
                        Adicionar projeto
                        <img src={Add} alt="Adicionar reunião" />
                     </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Projeto;