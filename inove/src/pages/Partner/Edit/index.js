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

const EditPartner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split("/")[2])
  const [uuid, setUuid] = useState(location.pathname.split("/")[3])
  const [student, setStudent] = useState({});
  const [company, setCompany] = useState({});
  const [partner, setPartner] = useState({});
  const [companyList, setCompanyList] = useState([]);
  const [state, setState] = useState(false);


  const getCompanies = useCallback(async () => {
    const { data } = await api.get(`/companies/`);
    let list = [];
    data.companies.map(company => {
      list.push({
        value: company.id,
        label: company.name, 
      })
    })
    setCompanyList(list)
  },[])

  const getData = useCallback(async (data) => {
    if(path === 'aluno'){
      const { data } = await api.get(`/students/${uuid}`);
      setStudent(data);
    }
    if(path === 'empresa'){
      const { data } = await api.get(`/companies/${uuid}`);
      setCompany(data);
    }
    if(path === 'parceiro'){
      const { data } = await api.get(`/partners/${uuid}`);
      console.log(data)
      setPartner(data);
    }
  }, [path, uuid])


  const handleSubmit = useCallback(async (data) => {
    if(path === 'aluno'){
      if(data.name !== "" &&
        data.email !== "" &&
        data.phone_number !== ""){
          let student = {
            name:data.name  ,
            email: data.email,
            phone_number: data.phone_number,
          }
          const response = await api.put(`/students/${uuid}`, student);
          navigate('/parceiros');
        }
    }
    if(path === 'empresa'){
      if(data.name !== "" &&
        data.email !== "" &&
        data.phone_number !== "" && 
        data.address !== ""){
          let company = {
            name:data.name  ,
            email: data.email,
            phone_number: data.phone_number,
            address: data.address,
          }
          const response = await api.put(`/companies/${uuid}`, company);
          navigate('/parceiros');
        }
    }
    if(path === 'parceiro'){
      if(data.name !== "" &&
        data.email !== "" &&
        data.id_company !== ""){
          let partner = {
            name:data.name  ,
            email: data.email,
            company_id: data.company_id,
          }
          try{
            const response = await api.put(`/partners/${uuid}`, partner);
            navigate('/parceiros');
          }catch(err){
            console.log(err.response)
          }
        }
    }
  }, [navigate, path]);

  useEffect(() => {
    getData()
    getCompanies()
  }, [getData, getCompanies])

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
            <Input name="name" type="text" label={"Nome do parceiro *"} defaultValue={partner.name}/>
            <Input name="email" type="text" label={"Email do parceiro *"} defaultValue={partner.email} />
            <Select name="company_id" label={"Empresa *"} >
              {companyList.map(item => (
                <option key={item.value} 
                        value={`${item.value}`} 
                        selected={partner.company && partner.company.id === item.value && item.value}
                >
                  {item.label}
                </option>
              ))}
            </Select>
            <Button type="submit" action={"Editar parceiro"} />
          </>
        }
        {
          path === "empresa" &&
          <>
            <Input name="name" type="text" label={"Nome da empresa *"} defaultValue={company.name}/>
            <Input name="email" type="email" label={"Email da empresa *"} defaultValue={company.email}/>
            <Input name="phone_number" type="text" label={"Telefone da empresa"} defaultValue={company.phone_number}/>
            <Input name="address" type="text" label={"Endereço da empresa *"} defaultValue={company.address}/>
            <Button type="submit" action={"Editar empresa"} />
          </>
        }
        {
          path === "aluno" &&
          <>
            <Input name="name" type="text" label={"Nome do aluno *"} defaultValue={student.name}/>
            <Input name="email" type="email" label={"Email do aluno *"} defaultValue={student.email}/>
            <Input name="phone_number" type="text" label={"Telefone do aluno *"} defaultValue={student.phone_number}/>
            <Button type="submit" action={"Editar aluno"} />
          </>
        }

      </Form>
    </Container>
  )
}

export default EditPartner;