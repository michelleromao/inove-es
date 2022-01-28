import React, { useCallback, useEffect, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';
import api from "../../../services/api";

const AdicionarDestaque = () => {
  const navigate = useNavigate();
  const [projects, getProjetcs] = useState([]);
  const [state, setState] = useState(false);

  const getPartners = useCallback(async() =>{
    const { data } = await api.get(`/projects`);
    let list = [];
    if(data.projects.length > 0){
      data.projects.map(partner => {
        list.push({
          value: partner.id,
          label: partner.name, 
        })
      })
      getProjetcs(list)
    }else{
      setState(true)
    }
  }, []);

  const handleSubmit = useCallback(async (data) => {
    if(data.project_id !== "" && data.date !== ""){
      let highlight = {
        project_id: data.project_id,
        end_date: new Date(data.end_date),
        administrator_id: localStorage.getItem("@useruuid"), 
      }
      try{
        const request = await api.post(`/highlights/`, highlight)
        navigate('/destaques');
      }catch (err) {
        console.log(err.response.data)
      }
    }
  }, []);

  useEffect(() => {
    getPartners()
  }, [getPartners])

  return (
    <Container>
      <Content>
        <SubHeader>
          <Link to="/destaques">
            <HiArrowNarrowLeft />
            <h2> Destaques </h2>
          </Link>
        </SubHeader>
      </Content>

      <Form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <Select name="project_id" label={"Projeto *"} isError={state} message={"Você precisa adicionar um projeto antes."}>
              {projects.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
        </Select>
        <Input name="end_date" type="date" label={"Destacar até dia: *"}/>

        <Button type="submit" action={"Adicionar destaque"} disabled={state} />
      </Form>
    </Container>
  )
}

export default AdicionarDestaque;