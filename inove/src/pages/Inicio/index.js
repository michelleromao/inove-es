import React, { useState, useCallback } from "react";

import Modal from '@mui/material/Modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Destaque from '../../components/Destaque';
import Projeto from '../../components/Projeto';
import Button from '../../components/Button';

import { Container, Content, Title, List1, List2, ProjectContent, Description, Details, Tag, TitleModal } from './styles';

const Inicio = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => setOpen(true);
    const handleClose = (id) => setOpen(false);

    return (
        <>
            <Container>
                <Content>
                    <section>
                        <Title>Destaques</Title>
                        <List1>
                            <Destaque onClick={() => handleOpen(1)}/>
                            <Destaque onClick={() => handleOpen(2)}/>
                            <Destaque onClick={() => handleOpen(3)}/>
                            <Destaque onClick={() => handleOpen(4)}/>
                            <Destaque onClick={() => handleOpen(4)}/>
                        </List1>
                    </section>
                    <section>
                        <Title>Projetos</Title>
                        <List2>
                            <Projeto />
                            <Projeto />
                            <Projeto />
                            <Projeto />
                            <Projeto />
                        </List2>
                    </section>
                </Content>
            </Container>
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ProjectContent>
                    <div>
                        <TitleModal> Título do projeto </TitleModal>
                        <button onClick={handleClose}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <Tag>Tecnologia da informação</Tag>
                    <Description>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla laborum repellendus rem officia aliquid pariatur iure earum quidem culpa beatae tenetur, nisi tempora quisquam magni inventore quae quod modi quas?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla qui assumenda saepe, quibusdam quo aspernatur necessitatibus perferendis itaque aperiam fugiat quisquam temporibus eos debitis deleniti, reiciendis soluta at accusamus magni!
                        </p>
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
                    <Button action={"Solicitar parceria"} />
                </ProjectContent>
            </Modal>
        </> 
    )
}

export default Inicio;