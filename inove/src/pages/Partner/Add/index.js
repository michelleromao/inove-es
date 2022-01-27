import React, { useCallback, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom";

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const empresa = [
  {value: '1', label: 'empresa 1'},
  {value: '2', label: 'empresa 2'},
  {value: '3', label: 'empresa 2'},
]

const AdicionarParceiro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split("/")[2])

  const handleSubmit = useCallback((data) => {
    console.log(data)
    navigate('/parceiros');
  }, []);

  return (
    <Container>
      <Content>
        <SubHeader>
          <Link to="/parceiros">
            <HiArrowNarrowLeft />
            <h2>Parceiros </h2>
          </Link>
        </SubHeader>
      </Content>

      <Form onSubmit={handleSubmit} style={{ width: "30%" }}>
        {
          path === "parceiro" &&
          <>
            <Input name="nomep" type="text" label={"Nome do parceiro *"} />
            <Select name="empresa" label={"Empresa *"} options={empresa}/>
            <Input name="email" type="text" label={"Email do parceiro *"} />
            <Button type="submit" action={"Adicionar parceiro"} />
          </>
        }
        {
          path === "empresa" &&
          <>
            <Input name="nome" type="text" label={"Nome da empresa *"} />
            <Input name="email" type="email" label={"Email da empresa *"} />
            <Input name="telefone" type="text" label={"Telefone da empresa"} />
            <Input name="endereco" type="text" label={"Endereço da empresa *"} />
            <Button type="submit" action={"Adicionar empresa"} />
          </>
        }
        {
          path === "aluno" &&
          <>
            <Input name="nome" type="text" label={"Nome do aluno *"} />
            <Input name="email" type="email" label={"Email do aluno *"} />
            <Input name="telefone" type="text" label={"Telefone do aluno *"} />
            <Button type="submit" action={"Adicionar aluno"} />
          </>
        }

      </Form>
    </Container>
  )
}

export default AdicionarParceiro;