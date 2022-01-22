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
  }
`;

export const List = styled.div`
  display: flex;
  width: 100%;
`;

export const Title = styled.h2`
  color: #021A19;
  font-size: 24px
`;  