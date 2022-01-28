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

const EditProject = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [uuid, setUuid] = useState(location.pathname.split("/")[3])

  const [project, setProject] = useState({});

  const [partnersList, setPartnersList] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [state, setState] = useState(false);

  const getPartners = useCallback(async () => {
    const { data } = await api.get(`/partners/`);
    let list = [];
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

  const getData = useCallback(async () => {
    const { data } = await api.get(`/projects/${uuid}`);
    console.log(data)
    let yearsD = new Date(data.start_date).getFullYear();
    let monthsD = 0;
    if(new Date(data.start_date).getMonth() < 9){
      monthsD = `0`+(new Date(data.start_date).getMonth()+1)
    }else{
      monthsD = (new Date(data.start_date).getMonth()+1)
    }
    let daysD = new Date(data.start_date).getDate();

    let end_date = ""
    let yeareD = ""
    let montheD =  0;
    let dayeD = ""

    if(data.end_date !== null){
       end_date = new Date(data.end_date);
       yeareD = new Date(data.end_date).getFullYear();
      if(new Date(data.end_date).getMonth() < 9){
        montheD = `0`+(new Date(data.end_date).getMonth()+1)
      }else{
        montheD = (new Date(data.end_date).getMonth()+1)
      }
       dayeD = new Date(data.end_date).getDate();
    }
    
    let projectData = {
      id: data.id,
      name: data.name,
      student_id: data.student_id,
      partner: data.partner_id,
      description: data.description,
      field: data.field,
      end_date: data.end_date ? `${yeareD}-${montheD}-${dayeD}` : "",
      start_date: `${yearsD}-${monthsD}-${daysD}`,
    }

    setProject(projectData);

  }, [uuid])

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
            const request = await api.put(`/projects/${uuid}`, project)
            navigate('/projetos');
          }catch (err) {
            console.log(err.response)
          }
        }
  }, []);

  useEffect(() => {
    getPartners()
    getStudents()
    getData()
  }, [getPartners,getStudents, getData])

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
        <Input name="name" type="text" label={"Título *"} defaultValue={project.name}/>
        <Select name="student_id" label={"Pesquisador *"} isError={state} message={"Você precisa adicionar um aluno antes."}>
              {studentsList.map(item => (
                <option key={item.value} value={`${item.value}`}
                  selected={project.company && project.student.id === item.value && item.value}
                >{item.label}</option>
              ))}
          </Select>
          <Select name="partner_id" label={"Parceiro"}>
              {partnersList.map(item => (
                <option key={item.value} value={`${item.value}`}
                 selected={project.company && project.partner.id === item.value && item.value}
                >{item.label}</option>
              ))}
          </Select>
        <Input name="field" type="text" label={"Área"} defaultValue={project.field}/>
        <Input name="start_date" type="date" label={"Início do projeto *"} defaultValue={project.start_date}/>
        <Input name="end_date" type="date" label={"Fim do projeto"} defaultValue={project.end_date}/>
        <Input name="description" typeText="textarea" type="textarea" label={"Descrição *"} defaultValue={project.description}/>

        <Button type="submit" action={"Editar projeto"} disabled={state}/>
      </Form>
    </Container>
  )
}

export default EditProject;