import React from "react";

import Subheader from "../../components/Subheader";
import Destacar from "../../components/Destacar";

import { Container, Content, Destaques } from './styles';

const ly = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus voluptatum vero fuga, corrupti quam, ipsa quibusdam vel quod ex est commodi consectetur vitae numquam repellat itaque distinctio quasi harum?"

const Destaque = () => {
    return (
        <Container>
            <Content>
                <Subheader link={"/adicionar/destaque"} show title={"Destaques"} type={"destaque"}/>
            <Destaques>
                <Destacar titulo={"Titulo do projeto"} descricao={ly} expiracao={"00/00/00"}/>
                <Destacar titulo={"Titulo do projeto"} descricao={ly} expiracao={"00/00/00"}/>
                <Destacar titulo={"Titulo do projeto"} descricao={ly} expiracao={"00/00/00"}/>
                <Destacar titulo={"Titulo do projeto"} descricao={ly} expiracao={"00/00/00"}/>
                <Destacar titulo={"Titulo do projeto"} descricao={ly} expiracao={"00/00/00"}/>
                
            </Destaques>
               

            </Content>
        </Container>
    )
}

export default Destaque;