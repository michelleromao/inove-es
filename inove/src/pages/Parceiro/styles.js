import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const SubHeader = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    font-weight: bold;
    font-size: 24px;
    color: #021A19;
  }
  a{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
  }
  button{
    color: #021A19;
    background-color: white;
    border: none;
    cursor: pointer;
    width: 11%;

  }
`;

export const Tab = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  div:nth-of-type(1){
    width: 40%;
    display: flex;
    align-items: center;
    justify-content:space-between;
  }
  div:nth-of-type(2){
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
`;

export const ButtonTab = styled.button`
  font-size: 18px;
  color: #021A19;
  opacity: ${props => props.active ? 1 : 0.5};
  background-color: white;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #021A19;
  cursor: pointer;
  width: 200px;
`;