import React from "react";

import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Container, Content } from './styles';
import Subheader from "../../components/Subheader";

const rows = [
    {
        id: 1,
        titulo: 'conhecendo a estrutura de dados',
        pesquisador: 'p1',
        parceiro: 'p1',
        area: 'tecnologia da informação',
        inicio: '00/00/00',
        fim: '',
    },
    {
        id: 1,
        titulo: 'processos e metodologias: novas formas de uso',
        pesquisador: 'p2',
        parceiro: 'p1',
        area: 'design',
        inicio: '00/00/00',
        fim: '00/00/00',
    },
  ];

const Projeto = () => {
    return (
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
                            {rows.map(row => (
                                <TableRow  key={row.id}>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.titulo}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.pesquisador}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.parceiro}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.area}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.inicio}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.fim}</TableCell>
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
            </Content>
        </Container>
    )
}

export default Projeto;