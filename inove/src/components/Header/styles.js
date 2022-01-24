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

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  div{
    img:nth-of-type(1){
      transform: ${props => props.active ? "rotate(180deg)" : "rotate(0deg)"};
    }
  }
`;

export const Dropdown = styled.div`
  opacity: ${props => props.active ? 1 : 0};
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 10% 0 10% 10%;
  z-index: 1;
  margin-top: 65%;
  transition: 0.3s;
`;
