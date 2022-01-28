import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 40px;
  background: ${props => props.disabled ? "rgba(0, 91, 88, 0.42)" : props.styled === "primary" ? "#005B58" : "#FFFFFF"};
  border-radius: 9px;

  font-weight: bold;
  font-size: 18px;
  color: ${props => props.styled === "primary" ? "#FFFFFF" : "#005B58"};
  border: ${props => props.styled === "primary" ? "none": "2px solid #005B58"};

  cursor: ${props => props.disabled ? "default" : "pointer"};
`;