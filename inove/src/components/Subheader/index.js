import React from 'react';
import { Link } from "react-router-dom";
import Add from "../../assets/add.svg";
import { Container } from "./styles";

const Subheader = ({ title, link, type, show }) => {
  return(
    <Container>
        <h2> {title} </h2>
        {show && 
        <button>
            <Link to={link}>
                Adicionar {type} 
                <img src={Add} alt="Adicionar reunião" />
            </Link>
        </button>
        }
    </Container>
  )
}

export default Subheader;