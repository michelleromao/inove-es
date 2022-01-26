import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%

`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const SubHeader = styled.div`
  margin-top: 2%;
  width: 10%;
  a{
    display: flex;
    align-items: center;
  }
  h2{
    font-weight: bold;
    font-size: 24px;
    color: #021A19;
    margin-left: 3%
  }
`;