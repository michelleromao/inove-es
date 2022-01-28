import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'

import { Container, Expire } from './styles.js';

export const Highlight = ({ title, expire, children }) => {
  return(
    <Container>
      <div>
        {children}
      </div>
      <div>
        <h4>{title}</h4>
        <Expire>Destaque acaba em {expire}</Expire>
      </div>
    </Container>
  )
}
