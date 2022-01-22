import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";

const Destaque = () => {
    return(
        <Container>
            <Content>
                <SubHeader>
                    <h2> Destaques </h2>
                    <button>
                        Adicionar destaque
                        <img src={Add} alt="Adicionar reunião" />
                     </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Destaque;