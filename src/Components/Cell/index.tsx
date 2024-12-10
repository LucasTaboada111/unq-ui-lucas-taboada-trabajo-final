import { CellContainer } from "./mixins";

const Cell = ({
  number,
  visible,
  onClick,
}: {
  number: number;
  visible: boolean;
  onClick: () => void;
}) => {
  return (
    <CellContainer visible={visible} onClick={onClick}>
      {number}
    </CellContainer>
  );
};

export default Cell;
