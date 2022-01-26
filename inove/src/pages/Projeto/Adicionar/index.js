import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const parceiros = [
  {value: '1', label: 'parceiro 1'},
  {value: '2', label: 'parceiro 2'},
  {value: '3', label: 'parceiro 2'},
]
const pesquisador = [
  {value: '1', label: 'pesquisador 1'},
  {value: '2', label: 'pesquisador 2'},
  {value: '3', label: 'pesquisador 2'},
]

const AdicionarProjeto = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((data) => {
    console.log(data)
    navigate('/projetos');
  }, []);

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
        <Input name="titulo" type="text" label={"Título *"} />
        <Select name="pesquisador" label={"Pesquisador *"} options={pesquisador}/>
        <Select name="parceiro" label={"Parceiro"} options={parceiros}/>
        <Input name="area" type="text" label={"Área"} />
        <Input name="inicio" type="date" label={"Início do projeto *"} />
        <Input name="fim" type="date" label={"Fim do projeto"} />
        <Input name="descricao" typeText="textarea" type="textarea" label={"Descrição *"} />

        <Button type="submit" action={"Adicionar projeto"} />
      </Form>
    </Container>
  )
}

export default AdicionarProjeto;