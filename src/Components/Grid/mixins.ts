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
margin-bottom: 20px;
`;
