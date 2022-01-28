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
import { Link } from "react-router-dom";

const Meeting = () => {
    const [appointments, setAppointments] = useState([]);
    
    const getMeetings = useCallback(async() => {
        const { data } = await api.get(`/appointments`);
        setAppointments(data.appointments)
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
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Título</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Parceiro</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Empresa</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Data</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Link</TableCell>
                                <TableCell align="left" style={{fontWeight: "bold", color: "#021A19"}}>Status</TableCell>
                                <TableCell align="left" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointments.length > 0 && appointments.map(appointment => (
                                <TableRow  key={appointment.id}>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{appointment.meeting.title}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{appointment.meeting.partner.name}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{appointment.meeting.partner.company.name}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{new Date(appointment.date).getDate()}/{new Date(appointment.date).getMonth()+1}/{new Date(appointment.date).getFullYear()}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{appointment.meeting.link}</TableCell>
                                    <TableCell align="left" style={{color: "#3A4040"}}>{appointment.meeting.status}</TableCell>
                                    <TableCell align="right"> 
                                            <Link to={`/editar/reuniao/${appointment.id}`}>
                                                <FiEdit color="#005B58" size={20}/>
                                            </Link>
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