import React, { useState, useCallback, useEffect } from "react";

import Modal from '@mui/material/Modal';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import api from '../../services/api';

import Emphasis from '../../components/Emphasis';
import Project from '../../components/Project';
import Button from '../../components/Button';

import { Container, Content, Title, List1, List2, ProjectContent, Description, Details, Tag, TitleModal } from './styles';

const Home = () => {
    const [open, setOpen] = useState(false);
    const [emphasis, setEmphasis] = useState([]);
    const [highlight, setHighlight] = useState({});
    const [projects, setProjects] = useState([]);

    
    const getHighlight = useCallback(async (uuid) => {
        const { data } = await api.get(`/rota/${uuid}`);
        setEmphasis({})
    }, []);
    const getEmphasis = useCallback(async () => {
        const { data } = await api.get(`/rota/`);
        setEmphasis([])
    }, []);
    const getProjects = useCallback(async () => {
        const { data } = await api.get(`/rota/`);
        setProjects([])
    }, []);

    const handleOpen = useCallback((uuid) => {
        getHighlight(uuid);
        setOpen(true)
    },[]);

    const handleClose = useCallback(() => {
        setOpen(false)
        setHighlight({});
    }, []);
    
    useEffect(() => {
        getEmphasis()
        getProjects()
    }, [getEmphasis, getProjects])

    return (
        <>
            <Container>
                <Content>
                    {emphasis.length > 0 && 
                        <section>
                            <Title>Destaques</Title>
                            <List1>
                                {emphasis.map(object => (
                                    <Emphasis onClick={() => handleOpen(object.uuid_project)}/>
                                ))}
                            </List1>
                        </section>
                    }
                        <section>
                            <Title>Projetos</Title>
                            <List2>
                                {projects.length > 0 ? projects.map(project => (
                                    <Project area={project.area} 
                                            dateEnd={project.dateEnd && project.dateEnd} 
                                            dateInit={project.dateInit} 
                                            description={project.description} 
                                            researcher={project.researcher} 
                                            title={project.title} />
                                )): "Não temos projetos listados ainda. Caso desejar entrar em contato projetos@quixada.ufc.br."}
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
                        <TitleModal> {highlight.title} </TitleModal>
                        <button onClick={handleClose}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <Tag>{highlight.area}</Tag>
                    <Description>
                        <p>{highlight.description}</p>
                    </Description>
                    <Details>
                        <b>Feito por</b> {highlight.researchher}
                    </Details>
                    <Details>
                        <b>Iniciou em</b> {highlight.dateInit}
                    </Details>
                    {highlight.dateEnd && 
                        <Details>
                            <b>Terminou em</b> {highlight.dateEnd}
                        </Details>
                    }
                    <Button action={"Solicitar parceria"} />
                </ProjectContent>
            </Modal>
        </> 
    )
}

export default Home;