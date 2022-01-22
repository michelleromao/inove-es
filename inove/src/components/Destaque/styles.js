import styled from 'styled-components'
import background from "../../assets/destaque-background.png"

export const Container = styled.div`
  width: 18%;
  height: 83px;
  border-radius: 11px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content:center;
  text-align: center;
  padding: 0px 12px;
  margin-right: 2%;
  cursor: pointer;
  div{
    font-size: 24px;
    color: #021A19;
    font-weight: 700;
    white-space: nowrap;
  	overflow: hidden;
  	text-overflow: ellipsis;
`;