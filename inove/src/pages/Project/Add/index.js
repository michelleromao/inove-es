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

const AdicionarProjeto = () => {
  const navigate = useNavigate();
  const [partnersList, setPartnersList] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [state, setState] = useState(false);

  const getPartners = useCallback(async () => {
    const { data } = await api.get(`/partners/`);
    let list = [];
    list.push({
      value: "",
      label: "Nenhum", 
    })
    data.partners.map(partner => {
      list.push({
        value: partner.id,
        label: partner.name, 
      })
    })
    setPartnersList(list)
  }, [])

  const getStudents = useCallback(async () => {
    const { data } = await api.get(`/students/`);
    let list = [];
    if(data.students.length > 0){
      data.students.map(student => {
        list.push({
          value: student.id,
          label: student.name, 
        })
      })
      setStudentsList(list)
    }else{
      setState(true)
    }

  }, [])

  const handleSubmit = useCallback(async (data) => {
    if(data.name !== "" &&
        data.description !== "" &&
        data.start_date !== "" &&
        data.field !== "" &&
        data.student_id !== ""){
          let project = {
            name: data.name,
            description: data.description,
            start_date: new Date(data.start_date),
            end_date: new Date(data.end_date),
            field: data.field,
            administrator_id: localStorage.getItem("@useruuid"),
            student_id: data.student_id,
            partner_id: data.partner_id,
          }
          try{
            const request = await api.post(`/projects/`, project)
            navigate('/projetos');
          }catch (err) {
            console.log(err.response)
          }
        }
  }, []);

  useEffect(() => {
    getPartners()
    getStudents()
  }, [getPartners,getStudents])
  return (
    <Container>
      <Content>
        <SubHeader>
          <Link to="/projetos">
            <HiArrowNarrowLeft />
            <h2> Projetos </h2>
          </Link>
        </SubHeader>
      </Content>

      <Form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <Input name="name" type="text" label={"Título *"} />
        <Select name="student_id" label={"Pesquisador *"} isError={state} message={"Você precisa adicionar um aluno antes."}>
              {studentsList.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
          </Select>
          <Select name="partner_id" label={"Parceiro"}>
              {partnersList.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
          </Select>
        <Input name="field" type="text" label={"Área"} />
        <Input name="start_date" type="date" label={"Início do projeto *"} />
        <Input name="end_date" type="date" label={"Fim do projeto"} />
        <Input name="description" typeText="textarea" type="textarea" label={"Descrição *"} />

        <Button type="submit" action={"Adicionar projeto"} disabled={state}/>
      </Form>
    </Container>
  )
}

export default AdicionarProjeto;