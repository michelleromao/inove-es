import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";
import { Link } from "react-router-dom";

const Reuniao = () => {
    return (
        <Container>
            <Content>
                <SubHeader>
                    <h2> Reuniões </h2>
                    <button>
                        <Link to="/adicionar/reuniao">
                            Adicionar reunião
                            <img src={Add} alt="Adicionar reunião" />
                        </Link>
                    </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Reuniao;