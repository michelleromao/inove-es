import React, { useCallback, useEffect, useState } from "react";

import api from '../../services/api';

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

const Meeting = () => {
    const [meetings, setMeetings] = useState([]);
    
    const getMeetings = useCallback(async() => {
        const { data } = await api.get(`/rota/`);
        setMeetings([])
    }, [])

    useEffect(() => {
        getMeetings()
    }, [getMeetings])

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
                            {meetings.map(meeting => (
                                <TableRow  key={meeting.id}>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.parceiro}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.empresa}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.data}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.titulo}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.link}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{meeting.status}</TableCell>
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

export default Meeting;