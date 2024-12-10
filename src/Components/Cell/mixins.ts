import styled from "styled-components";

export const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #3498db;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
