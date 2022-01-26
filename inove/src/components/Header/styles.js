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
    width: 11%;
    div{
      width: 100%;
      color: #021A19;
      display: flex;
      justify-content: end;
      align-items: center;
      cursor: pointer;
      a{
        font-weight: bold;
        margin-right: 0;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  div{
    img:nth-of-type(1){
      transform: ${props => props.active ? "rotate(180deg)" : "rotate(0deg)"};
      margin-right: 2%;
    }
    img:nth-of-type(2){
      margin-left: 2%;
    }
  }
`;

export const Dropdown = styled.div`
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 80%;
  transition: 0.3s;
  p{
   margin-right: 10%;
  }
`;
