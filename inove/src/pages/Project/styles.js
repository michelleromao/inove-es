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

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 450px;
  background: #FAFAFA;
  border: 1px solid rgba(134, 154, 153, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  padding: 2%;

  div:nth-of-type(1){
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  div:nth-of-type(2){
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    div{
      width: 45%;
    }
  }

`;

export const TitleModal = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #021A19;
`;
