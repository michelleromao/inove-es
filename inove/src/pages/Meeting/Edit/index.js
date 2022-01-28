import React, { useCallback, useEffect, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom";

import api from '../../../services/api';

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';


const status = [
  {value: 'Pendente', label: 'Pendente'},
  {value: 'Realizada', label: 'Realizada'},
  {value: 'Cancelada', label: 'Cancelada'},
]

const AdicionarReuniao = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [uuid, setUuid] = useState(location.pathname.split("/")[3])

  const [appointment, setAppointment] = useState({});

  const [partners, setPartners] = useState([]);
  const [students, setStudents] = useState([]);
  const [state, setState] = useState(false);

  const getData = useCallback(async () => {
    const { data } = await api.get(`/appointments/${uuid}`);
    let years = new Date(data.date).getFullYear();
    let months = 0;
    let days = "";
    if(new Date(data.date).getMonth() < 9){
      months = `0`+(new Date(data.date).getMonth()+1)
    }else{
      months = (new Date(data.date).getMonth()+1)
    }
    if(new Date(data.date).getDate() < 9){
      days = `0`+(new Date(data.date).getDate())
    }else{
      days = (new Date(data.date).getDate())
    }
    
    let appointmentData = {
      id: data.id,
      title: data.meeting.title,
      student_id: data.meeting.student?.id,
      partner_id: data.meeting.partner.id,
      link: data.meeting.link,
      status: data.meeting.status,
      date: `${years}-${months}-${days}`,
      meeting_id: data.meeting.id
    }

    setAppointment(appointmentData);

  }, [uuid])

  const getPartners = useCallback(async() =>{
    const { data } = await api.get(`/partners`);
    let list = [];
    if(data.partners.length > 0){
      data.partners.map(partner => {
        list.push({
          value: partner.id,
          label: partner.name, 
        })
      })
      setPartners(list)
    }else{
      setState(true)
    }
  }, []);

  const getStudents = useCallback(async() =>{
    const { data } = await api.get(`/students`);
    let list = [];
    list.push({
      value: "",
      label: "Nenhum"
    })
    data.students.map(student => {
      list.push({
        value: student.id,
        label: student.name, 
      })
    })
    setStudents(list)
  }, [])

  const handleSubmit = useCallback(async (data) => {
    console.log(data)
    if(
      data.date !== "" &&
      data.title !== "" &&
      data.status !== "" &&
      data.partner_id !== ""
    ){
      let meeting = {
        title: data.title , 
        link: data.link ,
        status: data.status , 
        student_id: data.student_id, 
        partner_id: data.partner_id 
      }
      try{
        const request = await api.put(`/meetings/${appointment.meeting_id}`, meeting)
        let app = {
          date: new Date(data.date), 
          meeting_id: appointment.meeting_id
        }
        const req = api.put(`/appointments/${appointment.id}`, app)
        navigate('/reunioes');
        window.location.reload();
      }catch (err) {
        console.log(err.data)
      }
    }
  }, [navigate, appointment]);

  useEffect(() => {
    getData();
    getPartners();
    getStudents();
  }, [getPartners, getStudents, getData])

  return (
    <Container>
      <Content>
        <SubHeader>
          <Link to="/reunioes">
            <HiArrowNarrowLeft />
            <h2> Reuniões </h2>
          </Link>
        </SubHeader>
      </Content>

      <Form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <Input name="title" type="text" label={"Título *"} defaultValue={appointment.title}/>
        <Select name="partner_id" label={"Parceiro *"} isError={state} message={"Você precisa adicionar um parceiro antes."}>
              {partners.map(item => (
                <option key={item.value} value={`${item.value}`}
                    selected={appointment.partner_id === item.value && item.value}
                >{item.label}</option>
              ))}
        </Select>
        <Select name="student_id" label={"Pesquisador "}>
              {students.map(item => (
                <option key={item.value} value={`${item.value}`}
                  selected={appointment.student_id && appointment.student_id === item.value && item.value}
                >{item.label}</option>
              ))}
        </Select>
        <Input name="date" type="date" label={"Data *"} defaultValue={appointment.date}/>
        <Input name="link" type="text" label={"Link reunião"} defaultValue={appointment.link} />
        <Select name="status" label={"Status * "}>
              {status.map(item => (
                <option key={item.value} value={`${item.value}`}
                selected={appointment.status === item.value && item.value}
                >{item.label}</option>
              ))}
        </Select>

        <Button type="submit" action={"Editar reunião"} disabled={state}/>
      </Form>
    </Container>
  )
}

export default AdicionarReuniao;