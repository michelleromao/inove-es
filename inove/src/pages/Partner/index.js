import React, { useCallback, useEffect, useState } from "react";

import api from '../../services/api';

import { FiEdit, FiMap } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { CgCheckR } from 'react-icons/cg'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Subheader from "../../components/Subheader";

import { Container, Content, Tab, ButtonTab } from './styles';

const parceiros = [
    {
        id: 1,
        nome: "parceiro 1",
        emailp: "parceiro@email.com",
        empresa: "empresa 1",
        emaile: " empresa@email.com",
        telefonee: "43434343",
    },
]
const empresas = [
    {
        id: 1,
        nome: "parceiro 1",
        email: "parceiro@email.com",
        telefone: "43434343",
        endereco: "rua 404 jangurussu",
    },
]
const alunos = [
    {
        id: 1,
        nome: "aluno 1",
        email: "aluno@email.com",
        telefone: "434354343",
    },
]
const solicitacoes = [
    {
        id: 1,
        nome: "parceiro",
        email: "parceiro@email.com",
        telefone: "445354334",
        projeto: "processos e metodologias: novas formas de uso",
    },
]

const Partner = () => {
    const [view, setView] = useState(1);

    const [partners, setPartners] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [researchers, setResearchers] = useState([]);

    const getPartners = useCallback(async() => {
        const { data } = await api.get(`/rota/`);
        setPartners([])
    }, [])

    const getCompanies = useCallback(async() => {
        const { data } = await api.get(`/rota/`);
        setCompanies([])
    }, [])

    const getResearchers = useCallback(async() => {
        const { data } = await api.get(`/rota/`);
        setResearchers([])
    }, [])
    
    useEffect(() => {
        getPartners()
        getCompanies()
        getResearchers()
    }, [getPartners, getCompanies, getResearchers])

    return (
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
                    {/*<div>
                        <ButtonTab active={view === 4 ? true : false} onClick={() => { setView(4) }}>
                            Solicitações
                        </ButtonTab>
                    </div>*/}
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
                                {partners.map(partner => (
                                    <TableRow  key={partner.id}>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{partner.nome}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{partner.emailp}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{partner.empresa}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{partner.emaile}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{partner.telefonee}</TableCell>
                                        <TableCell align="right"> 
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
                                                <FiEdit color="#005B58" size={20}/>
                                            </button>
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
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
                                {companies.map(company => (
                                    <TableRow  key={company.id}>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{company.nome}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{company.email}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{company.telefone}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>
                                            <a href={`http://maps.google.com/?q=${company.endereco}`}
                                                style={{ cursor: "pointer"}}
                                                target= "_blank" rel="noreferrer noopener">
                                                <FiMap color="#005B58" size={20}/>
                                            </a>
                                        </TableCell>
                                        <TableCell align="right"> 
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
                                                <FiEdit color="#005B58" size={20}/>
                                            </button>
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
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
                                {researchers.map(researcher => (
                                    <TableRow  key={researcher.id}>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{researcher.nome}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{researcher.email}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{researcher.telefone}</TableCell>
                                        <TableCell align="right"> 
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
                                                <FiEdit color="#005B58" size={20}/>
                                            </button>
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
                                                <AiOutlineDelete color="#005B58" size={20}/>
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table >
                    </TableContainer> 
                }
                {view === 4 && 
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Nome</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Email parceiro</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Telefone</TableCell>
                                    <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Projeto</TableCell>
                                    <TableCell align="left" />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {solicitacoes.map(row => (
                                    <TableRow  key={row.id}>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{row.nome}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{row.email}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{row.telefone}</TableCell>
                                        <TableCell align="left" style={{color: "#3A4040"}}>{row.projeto}</TableCell>
                                        <TableCell align="right"> 
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
                                                <CgCheckR color="#005B58" size={20}/>
                                            </button>
                                            <button style={{border: "none", 
                                                            backgroundColor: "white", 
                                                            cursor: "pointer"}}>
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
    )
}

export default Partner;