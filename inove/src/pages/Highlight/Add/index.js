import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const projetos = [
  {value: '1', label: 'projeto 1'},
  {value: '2', label: 'projeto 2'},
  {value: '3', label: 'projeto 3'},
]

const AdicionarDestaque = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((data) => {
    console.log(data)
    navigate('/destaques');
  }, []);

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
        <Select name="projeto" label={"Projeto *"} options={projetos} />
        <Input name="data" type="date" label={"Destacar até dia: *"} />

        <Button type="submit" action={"Adicionar destaque"} />
      </Form>
    </Container>
  )
}

export default AdicionarDestaque;