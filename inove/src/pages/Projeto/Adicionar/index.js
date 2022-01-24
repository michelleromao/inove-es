import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

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
        <Input name="pesquisador" type="text" label={"Pesquisador *"} />
        <Input name="parceiro" type="text" label={"Parceiro"} />
        <Input name="area" type="text" label={"Área"} />
        <Input name="inicio" type="date" label={"Início do projeto*"} />
        <Input name="fim" type="date" label={"Fim do projeto"} />
        <Input name="descricao" typeText="textarea" type="textarea" label={"Descrição *"} />

        <Button type="submit" action={"Adicionar projeto"} />
      </Form>
    </Container>
  )
}

export default AdicionarProjeto;