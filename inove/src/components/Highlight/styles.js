import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  background: #FAFAFA;
  border: 1px solid rgba(134, 154, 153, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  div:nth-of-type(1){
    display: flex;
    justify-content: end;
  }
  h4{
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #021A19;
  }
  button{
    border: none;
    background-color: #FAFAFA; 
    cursor: pointer;
    display: flex;
    justify-content: end;
  }
`;

export const Description = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  height: 153px;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const Expire = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #3A4040;
`;