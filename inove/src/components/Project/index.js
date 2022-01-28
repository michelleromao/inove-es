import React from "react";
import Button from "../Button";
import { Container, Content, Title, Description, Bold, Details, Tag } from './styles';

const Project = ( { title, area, description, dateInit, dateEnd, researcher } ) => {
   return(
       <Container>
            <Content>
            <Title> {title} </Title>
            <Tag>{area}</Tag>
            <Description>
                {description}
            </Description>
            <Details>
                <b>Feito por</b> {researcher}
            </Details>
            <Details>
                <b>Iniciou em</b> {new Date(dateInit).getDate()}/{new Date(dateInit).getMonth()+1}/{new Date(dateInit).getFullYear()}
            </Details>
            {dateEnd && 
                <Details>
                    <b>Terminou em</b> {new Date(dateEnd).getDate()}-{new Date(dateEnd).getMonth()+1}-{new Date(dateEnd).getFullYear()}
                </Details>
            }
            </Content>
            {/*<Button action={"Solicitar parceria"}/>*/}
        </Container>
   )
}

export default Project;