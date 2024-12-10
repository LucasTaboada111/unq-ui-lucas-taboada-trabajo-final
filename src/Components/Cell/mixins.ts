import styled from "styled-components";

export const CellContainer = styled.div<{ visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${({ visible }) => (visible ? "#2ecc71" : "#3498db")};
  color: ${({ visible }) => (visible ? "white" : "transparent")};
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  ${({ visible }) => !visible && "cursor: pointer"};

  &:hover {
    background-color: ${({ visible }) => (visible ? "#27ae60" : "#2980b9")};
  }
`;
