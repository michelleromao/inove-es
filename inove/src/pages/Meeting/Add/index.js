import React, { useCallback, useEffect, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

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
  const [partners, setPartners] = useState([]);
  const [students, setStudents] = useState([]);
  const [state, setState] = useState(false);

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
        administrator_id: localStorage.getItem("@useruuid"), 
        student_id: data.student_id, 
        partner_id: data.partner_id 
      }
      try{
        const request = await api.post(`/meetings/`, meeting)
        let appointment = {
          date: new Date(data.date), 
          administrator_id: localStorage.getItem("@useruuid"), 
          meeting_id: request.data.id
        }
        const req = api.post(`/appointments/`, appointment)
        navigate('/reunioes');
        window.location.reload();
      }catch (err) {
        console.log(err.response.data)
      }
    }
  }, [navigate]);

  useEffect(() => {
    getPartners();
    getStudents();
  }, [getPartners, getStudents])

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
        <Input name="title" type="text" label={"Título *"} />
        <Select name="partner_id" label={"Parceiro *"} isError={state} message={"Você precisa adicionar um parceiro antes."}>
              {partners.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
        </Select>
        <Select name="student_id" label={"Pesquisador "}>
              {students.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
        </Select>
        <Input name="date" type="date" label={"Data *"} />
        <Input name="link" type="text" label={"Link reunião"} />
        <Select name="status" label={"Status * "}>
              {status.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
        </Select>

        <Button type="submit" action={"Adicionar reunião"} disabled={state}/>
      </Form>
    </Container>
  )
}

export default AdicionarReuniao;