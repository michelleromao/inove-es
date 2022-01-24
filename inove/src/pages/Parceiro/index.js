import React, { useState } from "react";
import { Container, Content, SubHeader, Tab, ButtonTab } from './styles';
import Add from "../../assets/add.svg";
import { Link } from "react-router-dom";

const Parceiros = () => {
    const [view, setView] = useState(1);

    return (
        <Container>
            <Content>
                <SubHeader>
                    <h2> Parceiros </h2>
                    {view === 4 ? <></> :
                        <button>
                            <Link to={`/adicionar/${view === 1 ? "parceiro" :
                                view === 2 ? "empresa" :
                                    view === 3 && "aluno"}`}>
                                Adicionar
                                {view === 1 ? " parceiro" :
                                    view === 2 ? " empresa" :
                                        view === 3 && " aluno"}
                                <img src={Add} alt="Adicionar reunião" />
                            </Link>
                        </button>
                    }
                </SubHeader>
            </Content>
            <Tab>
                <div>
                    <ButtonTab active={view === 1 ? true : false} onClick={() => { setView(1) }}>
                        Meus parceiros
                    </ButtonTab>
                    <ButtonTab active={view === 2 ? true : false} onClick={() => { setView(2) }}>
                        Empresas
                    </ButtonTab>
                    <ButtonTab active={view === 3 ? true : false} onClick={() => { setView(3) }}>
                        Alunos
                    </ButtonTab>
                </div>
                <div>
                    <ButtonTab active={view === 4 ? true : false} onClick={() => { setView(4) }}>
                        Solicitações
                    </ButtonTab>
                </div>
            </Tab>
        </Container>
    )
}

export default Parceiros;