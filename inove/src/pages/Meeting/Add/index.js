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
const empresa = [
  {value: '1', label: 'empresa 1'},
  {value: '2', label: 'empresa 2'},
  {value: '3', label: 'empresa 2'},
]
const pesquisador = [
  {value: '1', label: 'pesquisador 1'},
  {value: '2', label: 'pesquisador 2'},
  {value: '3', label: 'pesquisador 2'},
]
const status = [
  {value: '1', label: 'Realizada'},
  {value: '2', label: 'Pendente'},
  {value: '3', label: 'Cancelada'},
]

const AdicionarReuniao = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((data) => {
    console.log(data)
    navigate('/reunioes');
  }, []);

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
        <Input name="titulo" type="text" label={"Título *"} />
        <Select name="parceiro" label={"Parceiro"} options={parceiros}/>
        <Select name="pesquisador" label={"Pesquisador *"} options={pesquisador}/>
        <Input name="data" type="date" label={"Data *"} />
        <Input name="link" type="text" label={"Link reunião"} />
        <Select name="status" label={"Status *"} options={status}/>

        <Button type="submit" action={"Adicionar reunião"} />
      </Form>
    </Container>
  )
}

export default AdicionarReuniao;