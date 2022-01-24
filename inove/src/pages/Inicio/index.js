import React, { useState } from "react";
import { Container, Content, Title, List } from './styles';
import Destaque from '../../components/Destaque';
import Projeto from '../../components/Projeto';
import Modal from "../../components/Modal";

const Inicio = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <Modal active={active} />

            <Container>
                <Content>
                    <section>
                        <Title>Destaques</Title>
                        <List>
                            <Destaque onClick={() => setActive(true)} />
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


        </>
    )
}

export default Inicio;