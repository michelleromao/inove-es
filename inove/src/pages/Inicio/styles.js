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
  margin-top: 2%;
  section {
    width: 100%;
    margin-bottom: 5%;
    display: flex;
    flex-flow: row wrap;
  }
`;

export const List1 = styled.div`
  display: flex;
  width: 100%;
`;

export const List2 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  color: #021A19;
  font-size: 24px;
`;  

export const ProjectContainer = styled.div`
  width: 500px;
`;

export const ProjectContent = styled.div`
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
    button {
      background-color: #FAFAFA;
      border: none;
    }
  }
`;

export const TitleModal = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #021A19;
`;

export const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #000000;
  margin: 8% 0;
`;

export const Details = styled.div`
  font-style: normal;
  font-size: 13px;
  color: #000000;
  margin-bottom: 4%;
`;

export const Tag = styled.div`
  background: #FAFAFA;
  border: 2px solid #021A19;
  box-sizing: border-box;
  border-radius: 9px;
  padding: 2%;
  width: 40%;
  font-size: 12px;
  color: #000000;
  text-align: center;
`;