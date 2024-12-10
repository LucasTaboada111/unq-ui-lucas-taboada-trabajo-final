import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 200px;
  margin: 0 auto;
`;

export const VictoryMessage = styled.div`
background-color: rgba(0, 128, 0, 0.8);
padding: 20px;
color: white;
font-size: 24px;
border-radius: 10px;
text-align: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;


export const Button = styled.button`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
