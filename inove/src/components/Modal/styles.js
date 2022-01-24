import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index:1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => props.modal ? "show" : "none"};
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 500px;
  margin-right: 3%;
  flex-direction: column;
`;

export const ProjectContent = styled.div`
  width: 500px;
  background: #FAFAFA;
  border: 1px solid rgba(134, 154, 153, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  padding: 4%;
  margin-bottom: 8%;
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h3`
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #021A19;
text-align: center;
`;

export const Description = styled.div`
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
color: #000000;
height: 153px;
margin-top: 10%;
margin-bottom: 5%;
p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;

export const Details = styled.div`
font-style: normal;
font-size: 13px;
color: #000000;
margin-bottom: 4%;
`;

export const Tag = styled.div`
align-self: center;
background: #FAFAFA;
border: 1px solid #021A19;
box-sizing: border-box;
border-radius: 9px;
padding: 2%;
width: 80%;
text-align: center;
font-style: normal;
font-weight: 300;
font-size: 12px;
color: #000000;

`;