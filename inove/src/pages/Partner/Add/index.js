import React, { useCallback, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom";

import api from '../../../services/api';

import { Container, Content, SubHeader } from './styles';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

const AdicionarParceiro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split("/")[2])
  const [errEmail, setErrEmail] = useState(false)
  const [companyList, setCompanyList] = useState([]);
  const [state, setState] = useState(false);


  const getCompanies = useCallback(async () => {
    const { data } = await api.get(`/companies/`);
    let list = [];
    if(data.companies.length > 0){
      data.companies.map(company => {
        list.push({
          value: company.id,
          label: company.name, 
        })
      })
      setCompanyList(list)
    }else{
      setState(true)
    }
  },[])

  const handleSubmit = useCallback(async (data) => {
    if(path === 'aluno'){
      if(data.name !== "" &&
        data.email !== "" &&
        data.phone_number !== ""){
          let student = {
            name:data.name  ,
            email: data.email,
            phone_number: data.phone_number,
            administrator_id: localStorage.getItem("@useruuid")
          }
          try{
            const response = await api.post(`/students/`, student)
            navigate('/parceiros');
          }catch(err){
            if(err.response.data === "Email already in use!"){
              setErrEmail(true)
            }
          }
        }
    }
    if(path === 'empresa'){
      if(data.name !== "" &&
        data.email !== "" &&
        data.phone_number !== "" &&
        data.address !== ""){
          let company = {
            name: data.name,
            email: data.email,
            phone_number: data.phone_number,
            address: data.address,
            administrator_id: localStorage.getItem("@useruuid")
          }
          try{
            const request = await api.post(`/companies/`, company)
            navigate('/parceiros');

          }catch (err) {
            if(err.response.data === "Email already in use!"){
              setErrEmail(true)
            }
          }
        }
    }
    if(path === 'parceiro'){
      if(data.name !== "" &&
        data.email !== ""){
          let partner = {
            name: data.name,
            email: data.email,
            company_id: data.company_id,
            administrator_id: localStorage.getItem("@useruuid")
          }
          try{
            const request = await api.post(`/partners/`, partner)
            navigate('/parceiros');
          }catch (err) {
            if(err.response.data === "Email already in use!"){
              setErrEmail(true)
            }
          }
        }
    }
  }, [navigate, path]);

  useState(() => {
    getCompanies()
  }, [getCompanies])

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
            <Input name="name" type="text" label={"Nome do parceiro *"} />
            <Input name="email" type="text" label={"Email do parceiro *"} isError={errEmail} message={"Email já está sendo usado"}/>
            <Select name="company_id" label={"Empresa *"} isError={state} message={"Você precisa adicionar uma empresa antes."}>
              {companyList.map(item => (
                <option key={item.value} value={`${item.value}`}>{item.label}</option>
              ))}
            </Select>
            <Button type="submit" action={"Adicionar parceiro"} disabled={state} />
          </>
        }
        {
          path === "empresa" &&
          <>
            <Input name="name" type="text" label={"Nome da empresa *"} />
            <Input name="email" type="email" label={"Email da empresa *"} isError={errEmail} message={"Email já está sendo usado"}/>
            <Input name="phone_number" type="text" label={"Telefone da empresa *"} />
            <Input name="address" type="text" label={"Endereço da empresa *"} />
            <Button type="submit" action={"Adicionar empresa"} />
          </>
        }
        {
          path === "aluno" &&
          <>
            <Input name="name" type="text" label={"Nome do aluno *"} />
            <Input name="email" type="email" label={"Email do aluno *"} isError={errEmail} message={"Email já está sendo usado"}/>
            <Input name="phone_number" type="text" label={"Telefone do aluno *"} />
            <Button type="submit" action={"Adicionar aluno"} />
          </>
        }

      </Form>
    </Container>
  )
}

export default AdicionarParceiro;