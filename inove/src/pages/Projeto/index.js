import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";
import { Link } from "react-router-dom";

const Projeto = () => {
    return (
        <Container>
            <Content>
                <SubHeader>
                    <h2> Projetos </h2>
                    <button>
                        <Link to="/adicionar/projeto">
                            Adicionar projeto
                            <img src={Add} alt="Adicionar projeto" />
                        </Link>
                    </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Projeto;