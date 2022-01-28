import React, { useCallback, useEffect, useState } from "react";

import api from '../../services/api';

import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Container, Content, ModalContent, TitleModal } from './styles';
import Subheader from "../../components/Subheader";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Project = () => {
    const [open, setOpen] = useState(false);
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState({});

    const getProjects = useCallback(async() => {
        const { data } = await api.get(`/projects/`);
        setProjects(data.projects)
    }, [])

    const getProject = useCallback(async(uuid) => {
        const { data } = await api.get(`/projects/${uuid}`);
        console.log(data)
        setProject({id: data.id,
            name: data.name})
    }, [])

    const deleteProject = useCallback(async(uuid) => {
        const request = await api.delete(`/projects/${uuid}`);
        setOpen(false);
        getProjects()
    },[getProjects])

    const handleOpen = useCallback((uuid) => {
        getProject(uuid);
        setOpen(true)
    },[getProject]);

    const handleClose = useCallback(() => {
        setOpen(false)
        setProject({})
    }, []);

    useEffect(() => {
        getProjects()
    }, [getProjects])

    return (
        <>
            <Container>
                <Content>
                    <Subheader link={"/adicionar/projeto"} show title={"Projetos"} type={"projeto"}/>

                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Título</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Pesquisador</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Parceiro</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Área</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Início</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Fim</TableCell>
                                    <TableCell align="left" />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {projects.length > 0 && projects.map(project => (
                                    <TableRow  key={project.id}>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{project.name}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{project.student.name}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{project.partner?.name}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{project.field}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{new Date(project.start_date).getDate()}/{new Date(project.start_date).getMonth()+1}/{new Date(project.start_date).getFullYear()}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>
                                            {project.end_date && `${new Date(project.end_date).getDate()}/${new Date(project.end_date).getMonth()+1}/${new Date(project.end_date).getFullYear()}`}
                                        </TableCell>
                                        <TableCell align="right"> 
                                            <Link to={`/editar/projeto/${project.id}`}>
                                                <FiEdit color="#005B58" size={20}/>
                                            </Link>
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}
                                                    onClick={() => handleOpen(project.id)}>
                                                <AiOutlineDelete color="#005B58" size={20}/>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table >
                    </TableContainer> 
                </Content>
            </Container>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalContent>
                    <div>
                        <TitleModal> Excluir projeto</TitleModal>
                        <button onClick={handleClose} style={{backgroundColor: "#fafafa", border: "none"}}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <p>Deseja excluiro projeto {project.name}?</p>
                    <div>
                       <div>
                           <Button action={"Cancelar"} onClick={handleClose} styled={"secondary"}/>
                        </div> 
                       <div>
                           <Button action={"Sim, excluir"} 
                                    onClick={() => {deleteProject(project.id)}}
                            />
                       </div>
                    </div>
                    
                </ModalContent>
            </Modal>
        </>
    )
}

export default Project;