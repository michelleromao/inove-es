import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

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
        <Input name="projeto" type="text" label={"Projeto *"} />
        <Input name="data" type="date" label={"Destacar até dia: *"} />

        <Button type="submit" action={"Adicionar destaque"} />
      </Form>
    </Container>
  )
}

export default AdicionarDestaque;