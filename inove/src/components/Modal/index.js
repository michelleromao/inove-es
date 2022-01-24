import React, { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container, Description, Details, ProjectContainer, ProjectContent, Tag, Title } from './styles';
import Button from "../Button";

const Modal = ({ active }) => {
  const [modal, setModal] = useState(active);

  return (
    <Container modal={modal}>
      <ProjectContainer>
        <ProjectContent>
          <div>
            <Title> Título do projeto </Title>
            <button onClick={() => setModal(false)}><AiOutlineCloseCircle /></button>
          </div>
          <Tag>Tecnologia da informação</Tag>
          <Description>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla laborum repellendus rem officia aliquid pariatur iure earum quidem culpa beatae tenetur, nisi tempora quisquam magni inventore quae quod modi quas?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla qui assumenda saepe, quibusdam quo aspernatur necessitatibus perferendis itaque aperiam fugiat quisquam temporibus eos debitis deleniti, reiciendis soluta at accusamus magni!
          </Description>
          <Details>
            <b>Feito por</b> Pesquisador
          </Details>
          <Details>
            <b>Iniciou em</b> 00/00/00
          </Details>
          <Details>
            <b>Terminou em</b> 00/00/00
          </Details>
          <Button action={"Solicitar parceria"} />
        </ProjectContent>
      </ProjectContainer>
    </Container>
  )
}

export default Modal;