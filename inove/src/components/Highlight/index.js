import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'

import { Container, Expire } from './styles.js';

export const Highlight = ({ title, expire }) => {
  return(
    <Container>
      <div>
        <button>
          <AiOutlineDelete color="#005B58" size={20}/>
        </button>
      </div>
      <div>
        <h4>{title}</h4>
        <Expire>Destaque acaba em {expire}</Expire>
      </div>
    </Container>
  )
}
