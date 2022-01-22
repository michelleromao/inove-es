import React from "react";
import styled from 'styled-components';

import { Container, Content } from './styles';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = ({ isLogged }) => {
   return(
       <Container>
         <Content>
           <img src={ Logo } alt="Logo INOVE Portfólio" />
           <div>
           {isLogged === true? 
            <>
              <NavLink to="/reunioes">Reuniões</NavLink >
              <NavLink to="/projetos">Projetos</NavLink >
              <NavLink to="/destaques">Destaques</NavLink >
              <NavLink to="/parceiros">Parceiros</NavLink >
            </>
           : false}
           </div>
           <div>
            <NavLink to="/login">Entrar</NavLink >
           </div>
         </Content>
       </Container>
   )
}

const NavLink  = styled(Link)`
  color: purple
  text-decoration: none;
`

export default Header;