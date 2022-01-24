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
    width: 12%;
  }
`;