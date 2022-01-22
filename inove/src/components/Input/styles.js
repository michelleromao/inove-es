import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 16%;
`;

export const Field = styled.input`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #021A19;
  box-sizing: border-box;
  border-radius: 9px;
  height: 40px;
  padding-left: 5%;
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;

  color: #666666;
  margin-bottom: 3%;
`;