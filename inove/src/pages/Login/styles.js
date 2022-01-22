import styled from 'styled-components';
import background from '../../assets/login-background.png';

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  img{
    margin: 2% 0 ;
  }
`;

export const Content = styled.div`
  width: 453px;
  height: 80%;

  background: #FFFFFF;
  border-radius: 42px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    margin-top: 12%;
  }
`;


