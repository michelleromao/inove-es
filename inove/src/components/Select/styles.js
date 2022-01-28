import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 4%;

  select{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #021A19;
    box-sizing: border-box;
    border-radius: 9px;
    height: 40px;
    padding-left: 3%;
    padding-right: 2%;
    option {
      font-size: 16px;
      color: #021A19;
      }
    }
  }
`;
export const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #666666;
  margin-bottom: 1%;
`;
export const Error = styled.p`
  color: red;
  margin: 4px 0 4px 0;
  font-size: 12px
`;
