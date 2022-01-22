import React, { useCallback } from "react";
import { Form } from '@unform/web'
import { useNavigate  } from "react-router-dom";

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from "../../assets/logo-2x.svg";
import Profile from "../../assets/profile.svg";

import { Container, Content } from "./styles.js";
const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = useCallback((data) =>{
        console.log(data)
        localStorage.setItem("@userlogged", "adm");
        navigate('/reunioes');
        window.location.reload();
    }, []);

   return(
       <Container>
           <img src={Logo} alt="" />
           <Content>
                <img src={Profile} alt="" />

                <Form onSubmit={handleSubmit} style={{width: "60%"}}>
                    <Input name="email" type="email" label={"Email"}/>
                    <Input name="password" type="password" label={"Senha"} />
                    <Button type="submit" action={"Entrar"}/>
                </Form>
           </Content>
       </Container>
   )
}

export default Login;