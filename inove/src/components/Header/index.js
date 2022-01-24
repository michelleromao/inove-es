import React, { useCallback, useEffect, useState } from "react";

import { Container, Content, Wrapper, Dropdown } from './styles';
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Chevron from "../../assets/chevron.svg";
import User from "../../assets/user.svg";


const Header = ({ isLogged }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState("");

  const handleLogout = useCallback(() => {
    localStorage.removeItem("@userlogged");
    navigate('/');
    window.location.reload();
  }, [])

  useEffect(() => {
    setPath(location.pathname.split("/")[1])
  }, [location])

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo INOVE Portfólio" />
        <div>
          {isLogged === true ?
            <>
              <NavLink to="/reunioes" style={{ fontWeight: `${path === 'reunioes' ? "bold" : "normal"}` }}>Reuniões</NavLink>
              <NavLink to="/projetos" style={{ fontWeight: `${path === 'projetos' ? "bold" : "normal"}` }}>Projetos</NavLink>
              <NavLink to="/destaques" style={{ fontWeight: `${path === 'destaques' ? "bold" : "normal"}` }}>Destaques</NavLink>
              <NavLink to="/parceiros" style={{ fontWeight: `${path === 'parceiros' ? "bold" : "normal"}` }}>Parceiros</NavLink>
            </>
            : false}
        </div>
        <div>
          {isLogged === true ?
            <Wrapper onClick={() => setActive(!active)} active={active}>
              <div>
                <img src={Chevron} alt="Abrir menu" />
                Inove ADM
                <img src={User} alt="Usuário" />
              </div>
              <Dropdown active={active} onClick={handleLogout}>
                Sair
              </Dropdown>
            </Wrapper>
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