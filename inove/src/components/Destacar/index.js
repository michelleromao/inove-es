import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'

import { Container, Description, Expire } from './styles.js';

const Destacar = ({titulo, descricao, expiracao}) => {
  return(
    <Container>
      <div>
        <button>
          <AiOutlineDelete color="#005B58" size={20}/>
        </button>
      </div>
      <div>
        <h4>{titulo}</h4>
        <Description>
          {descricao}
        </Description>
        <Expire>Destaque acaba em {expiracao}</Expire>
      </div>
    </Container>
  )
}

export default Destacar;