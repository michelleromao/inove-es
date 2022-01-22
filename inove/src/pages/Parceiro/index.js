import React from "react";
import { Container, Content, SubHeader } from './styles';
import Add from "../../assets/add.svg";

const Parceiros = () => {
    return(
        <Container>
            <Content>
                <SubHeader>
                    <h2> Parceiros </h2>
                    <button>
                        Adicionar parceiro
                        <img src={Add} alt="Adicionar reunião" />
                     </button>
                </SubHeader>
            </Content>
        </Container>
    )
}

export default Parceiros;