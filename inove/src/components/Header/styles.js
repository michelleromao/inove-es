import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: rgba(134, 154, 153, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:first-of-type {
    width: 70%;
    display: flex;
    align-items: center;
    a{
      margin-right: 10%
    }
  }
  div:nth-of-type(2){
    justify-self: end;
    width: 10%;
    div{
      width: 100%;
      color: #021A19;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
    a{
      font-weight: bold
    }
  }
`;

