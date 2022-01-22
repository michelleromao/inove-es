import React from "react";
import styled from 'styled-components';

import { Container, Content } from './styles';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Chevron from "../../assets/chevron.svg";
import User from "../../assets/user.svg";


const Header = ({ isLogged }) => {
   return(
       <Container>
         <Content>
           <img src={ Logo } alt="Logo INOVE Portfólio" />
           <div>
           {isLogged === true? 
            <>
              <Link to="/reunioes">Reuniões</Link>
              <Link to="/projetos">Projetos</Link>
              <Link to="/destaques">Destaques</Link>
              <Link to="/parceiros">Parceiros</Link>
            </>
           : false}
           </div>
           <div>
            {isLogged === true? 
              <>
                <div>
                  <img src={ Chevron } alt="Abrir menu" />
                    Inove ADM
                  <img src={ User } alt="Usuário" />
                </div>
              </> 
            : 
              <>
                <Link to="/login">Entrar</Link>
              </>}
           </div>
         </Content>
       </Container>
   )
}



export default Header;