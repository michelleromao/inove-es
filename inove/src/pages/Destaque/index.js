import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";
import { Link } from "react-router-dom";

const Destaque = () => {
    return (
        <Container>
            <Content>
                <SubHeader>
                    <h2> Destaques </h2>
                    <button>
                        <Link to="/adicionar/destaque">
                            Adicionar destaque
                            <img src={Add} alt="Adicionar reunião" />
                        </Link>
                    </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Destaque;