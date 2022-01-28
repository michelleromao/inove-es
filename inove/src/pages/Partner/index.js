import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api';

import { FiEdit, FiMap } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgCheckR } from 'react-icons/cg'
import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Subheader from "../../components/Subheader";
import Button from "../../components/Button";

import { Container, Content, Tab, ButtonTab, ModalContent, TitleModal} from './styles';


const Partner = () => {
    const [view, setView] = useState(1);
    const [open, setOpen] = useState(false);

    const [student, setStudent] = useState({});
    const [company, setCompany] = useState({});
    const [partner, setPartner] = useState({});

    const [partners, setPartners] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [researchers, setResearchers] = useState([]);

    const getPartners = useCallback(async() => {
        const { data } = await api.get(`/partners/`);
        console.log(data);
        setPartners(data.partners)
    }, [])

    const getCompanies = useCallback(async() => {
        const { data } = await api.get(`/companies/`);
        setCompanies(data.companies);
    }, [])

    const getResearchers = useCallback(async() => {
        const { data } = await api.get(`/students/`);
        setResearchers(data.students)
    }, [])

    const deletePartner = useCallback(async(uuid) => {
        const request = await api.delete(`/partners/${uuid}`);
        setOpen(false);
        getPartners()
    },[getPartners])
    const deleteCompany = useCallback(async(uuid) => {
        const request = await api.delete(`/companies/${uuid}`);
        setOpen(false);
        getCompanies()
    },[getCompanies])
    const deleteResearcher = useCallback(async(uuid) => {
        const request = await api.delete(`/students/${uuid}`);
        setOpen(false);
        getResearchers()
    },[getResearchers])

    const getPartner = useCallback(async(uuid) => {
        const { data } = await api.get(`/partners/${uuid}`);
        setPartner({id: data.id,
                    name: data.name})
    }, [])

    const getCompany = useCallback(async(uuid) => {
        const { data } = await api.get(`/companies/${uuid}`);
        setCompany({id: data.id,
            name: data.name})
    }, [])

    const getResearcher = useCallback(async(uuid) => {
        const { data } = await api.get(`/students/${uuid}`);
        setStudent({id: data.id,
            name: data.name})
    }, [])

    const handleOpen = useCallback((uuid) => {
        if(view === 1){
            getPartner(uuid);
        }
        if (view === 2){
            getCompany(uuid);
        }
        if (view === 3){
            getResearcher(uuid);
        }
        setOpen(true)
    },[getPartner, getCompany, getResearcher, view]);

    const handleClose = useCallback(() => {
        setOpen(false)
        setPartner({})
        setCompany({})
        setStudent({})
    }, []);
    
    useEffect(() => {
        getPartners()
        getCompanies()
        getResearchers()
    }, [getPartners, getCompanies, getResearchers])

    return (
        <>
            <Container>
                <Content>
                    <Subheader 
                    title={"Parceiros"} 
                    show={view === 4 ? false : true}
                    link={`/adicionar/${view === 1 ? "parceiro" :
                                        view === 2 ? "empresa" :
                                        view === 3 && "aluno"}`} 
                    type={view === 1 ? " parceiro" :
                            view === 2 ? " empresa" :
                            view === 3 && " aluno"}/>

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
                    </Tab>

                    {view === 1 && 
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Nome</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Email parceiro</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Empresa</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Email empresa</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Telefone empresa</TableCell>
                                        <TableCell align="left" />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {partners.length > 0 && partners.map(partner => (
                                        <TableRow  key={partner.id}>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{partner.name}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{partner.email}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{partner.company.name}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{partner.company.email}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{partner.company.phone_number}</TableCell>
                                            <TableCell align="right"> 
                                                <Link to={`/editar/parceiro/${partner.id}`}>
                                                    <FiEdit color="#005B58" size={20}/>
                                                </Link>
                                                <button style={{border: "none", 
                                                                backgroundColor: "white", 
                                                                cursor: "pointer"}}
                                                        onClick={() => handleOpen(partner.id)}>
                                                    <AiOutlineDelete color="#005B58" size={20}/>
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table >
                        </TableContainer> 
                    }
                    {view === 2 && 
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Nome</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Email</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Telefone</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Endereço</TableCell>
                                        <TableCell align="left" />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {companies.length > 0 && companies.map(company => (
                                        <TableRow  key={company.id}>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{company.name}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{company.email}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{company.phone_number}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>
                                                <a href={`http://maps.google.com/?q=${company.address}`}
                                                    style={{ cursor: "pointer"}}
                                                    target= "_blank" rel="noreferrer noopener">
                                                    <FiMap color="#005B58" size={20}/>
                                                </a>
                                            </TableCell>
                                            <TableCell align="right"> 
                                                <Link to={`/editar/empresa/${company.id}`}>
                                                    <FiEdit color="#005B58" size={20}/>
                                                </Link>
                                                <button style={{border: "none", 
                                                                backgroundColor: "white", 
                                                                cursor: "pointer"}}
                                                        onClick={() => handleOpen(company.id)}>
                                                    <AiOutlineDelete color="#005B58" size={20}/>
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table >
                        </TableContainer> 
                    }
                    {view === 3 && 
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Nome</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Email</TableCell>
                                        <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Telefone</TableCell>
                                        <TableCell align="left" />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {researchers.length > 0 && researchers.map(researcher => (
                                        <TableRow  key={researcher.id}>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{researcher.name}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{researcher.email}</TableCell>
                                            <TableCell align="left" style={{color: "#3A4040"}}>{researcher.phone_number}</TableCell>
                                            <TableCell align="right"> 
                                                <Link to={`/editar/aluno/${researcher.id}`}>
                                                    <FiEdit color="#005B58" size={20}/>
                                                </Link>
                                                <button style={{border: "none", 
                                                                backgroundColor: "white", 
                                                                cursor: "pointer"}}
                                                        onClick={() => handleOpen(researcher.id)}>
                                                    <AiOutlineDelete color="#005B58" size={20}/>
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table >
                        </TableContainer> 
                    }
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
                        <TitleModal> Excluir {view === 1 ? `parceiro` :
                                        view === 2 ? `empresa` :
                                        view === 3 && `aluno`}</TitleModal>
                        <button onClick={handleClose} style={{backgroundColor: "#fafafa", border: "none"}}><AiOutlineCloseCircle size={20}/></button>
                    </div>
                    <p>Deseja excluir {view === 1 ? `o parceiro ${partner.name}` :
                                        view === 2 ? `a empresa ${company.name}` :
                                        view === 3 && `o aluno ${student.name}`}?</p>
                    <div>
                       <div>
                           <Button action={"Cancelar"} onClick={handleClose} styled={"secondary"}/>
                        </div> 
                       <div>
                           <Button action={"Sim, excluir"} 
                                    onClick={() => {view === 1 ? deletePartner(partner.id) :
                                                    view === 2 ? deleteCompany(company.id) :
                                                    view === 3 && deleteResearcher(student.id)}}
                            />
                       </div>
                    </div>
                    
                </ModalContent>
            </Modal>
        </>
    )
}

export default Partner;