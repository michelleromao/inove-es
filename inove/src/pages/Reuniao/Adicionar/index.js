import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

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
        <Input name="parceiro" type="text" label={"Parceiro"} />
        <Input name="empresa" type="text" label={"Empresa"} />
        <Input name="pesquisador" type="text" label={"Pesquisador *"} />
        <Input name="data" type="date" label={"Data *"} />
        <Input name="link" type="text" label={"Link reunião"} />
        <Input name="status" type="text" label={"Status *"} />

        <Button type="submit" action={"Adicionar reunião"} />
      </Form>
    </Container>
  )
}

export default AdicionarReuniao;