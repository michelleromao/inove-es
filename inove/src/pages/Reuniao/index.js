import React from "react";

import { FiEdit } from 'react-icons/fi'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Subheader from "../../components/Subheader";
import { Container, Content } from './styles';

const rows = [
    {
        id: 1,
        parceiro: 'p1',
        empresa: 'e1',
        data: '00/00/00',
        titulo: 'reuniao de alinhamento',
        link: 'https//meet.com.br/oio-oio',
        status: 'pendente',
    },
    {
        id: 2,
        parceiro: 'p1',
        empresa: 'e1',
        data: '00/00/00',
        titulo: 'reuniao de alinhamento',
        link: 'https//meet.com.br/oio-oio',
        status: 'pendente',
    }
  ];

const Reuniao = () => {
    return (
        <Container>
            <Content>
                <Subheader link={"/adicionar/reuniao"} show title={"Reuniões"} type={"reunião"}/>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Parceiro</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Empresa</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Data</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Título</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Link</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Status</TableCell>
                                <TableCell align="left" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow  key={row.id}>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.parceiro}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.empresa}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.data}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.titulo}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.link}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{row.status}</TableCell>
                                    <TableCell align="right"> 
                                        <button style={{border: "none", 
                                                        backgroundColor: "white", 
                                                        cursor: "pointer"}}>
                                            <FiEdit color="#005B58" size={20}/>
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

export default Reuniao;