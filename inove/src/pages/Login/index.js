import React, { useCallback, useState } from "react";
import { Form } from '@unform/web'
import { useNavigate } from "react-router-dom";

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from "../../assets/logo-2x.svg";
import Profile from "../../assets/profile.svg";

import { Container, Content } from "./styles.js";
const Login = () => {
    const navigate = useNavigate();
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPwd, setErrorPwd] = useState(false);

    const handleSubmit = useCallback(async (data) => {
        if(data.email !== ""){
            setErrorEmail(false)
        }
        if(data.password !== ""){
            setErrorPwd(false)
        }
        if(data.email !== "" && data.password !== "" ){
            setErrorEmail(false)
            setErrorPwd(false)

            const request = await api.post(`/rota/`, data);
            
            localStorage.setItem("@userlogged", "adm");
            localStorage.setItem("@username", "Inove ADM");

            navigate('/reunioes');
            window.location.reload();
        }else{
            if(data.email === "" ){
                setErrorEmail(true)
            }
            if(data.password === "" ){
                setErrorPwd(true)
            }
        }
    }, []);

    return (
        <Container>
            <img src={Logo} alt="" />
            <Content>
                <img src={Profile} alt="" />

                <Form onSubmit={handleSubmit} style={{ width: "60%" }}>
                    <div style={{ marginBottom: "12%" }}>
                        <Input name="email" 
                            type="email" 
                            label={"Email"} 
                            isError={errorEmail} 
                            message={"Você precisa digitar seu e-mail."} />
                    </div>
                    <div style={{ marginBottom: "12%" }}>
                        <Input name="password" 
                            type="password" 
                            label={"Senha"} 
                            isError={errorPwd} 
                            message={"Você precisa digitar sua senha."} />
                    </div>
                    <Button type="submit" action={"Entrar"} />
                </Form>
            </Content>
        </Container>
    )
}

export default Login;