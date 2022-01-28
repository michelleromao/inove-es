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
    const [highlights, setHighlights] = useState([]);
    const [highlight, setHighlight] = useState({});
    const [projects, setProjects] = useState([]);
    
    const getHighlight = useCallback(async (uuid) => {
        const { data } = await api.get(`/projects/${uuid}`);
        setHighlight(data)
    }, []);
    const getHighlights = useCallback(async () => {
        const { data } = await api.get(`/highlights/`);
        setHighlights(data.highlights)
    }, []);
    const getProjects = useCallback(async () => {
        const { data } = await api.get(`/projects/`);
        setProjects(data.projects)
    }, []);

    const handleOpen = useCallback((uuid) => {
        getHighlight(uuid);
        setOpen(true)
    },[getHighlight]);

    const handleClose = useCallback(() => {
        setOpen(false)
        setHighlight({});
    }, []);
    
    useEffect(() => {
        getHighlights()
        getProjects()
    }, [getHighlights, getProjects])

    return (
        <>
            <Container>
                <Content>
                    {highlights.length > 0 && 
                        <section>
                            <Title>Destaques</Title>
                            <List1>
                                {highlights.map(object => (
                                    <Emphasis key={object.id} onClick={() => handleOpen(object.project.id)} title={object.project.name}/>
                                ))}
                            </List1>
                        </section>
                    }
                        <section>
                            <Title>Projetos</Title>
                            <List2>
                                {projects.length > 0 ? projects.map(project => (
                                    <Project key={project.id} 
                                            area={project.field} 
                                            dateEnd={project.end_date && project.end_date} 
                                            dateInit={project.start_date} 
                                            description={project.description} 
                                            researcher={project.student.name} 
                                            title={project.name} />
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
                        <TitleModal>{highlight.name} </TitleModal>
                        <button onClick={handleClose}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <Tag>{`${highlight.field}`}</Tag>
                    <Description>
                        <p>{`${highlight.description}`}</p>
                    </Description>
                    <Details>
                        <b>Feito por</b> {`${highlight.student?.name}`}
                    </Details>
                    <Details>
                        <b>Iniciou em</b> {new Date(highlight.start_date).getDate()}/{new Date(highlight.start_date).getMonth()+1}/{new Date(highlight.start_date).getFullYear()}
                    </Details>
                    {highlight.end_date && 
                        <Details>
                            <b>Terminou em</b> {new Date(highlight.end_date).getDate()}/{new Date(highlight.end_date).getMonth()+1}/{new Date(highlight.end_date).getFullYear()}
                        </Details>
                    }
                </ProjectContent>
            </Modal>
        </> 
    )
}

export default Home;