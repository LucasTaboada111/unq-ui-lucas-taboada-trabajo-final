import { CellContainer } from "./mixins";

interface CellProps {
    emoji: string;
    visible: boolean;
    onClick: () => void;
  }
  

const Cell = ({
  emoji,
  visible,
  onClick,
}: CellProps) => {
  return (
    <CellContainer visible={visible} onClick={onClick}>
      {visible ? emoji : '❓'}
    </CellContainer>
  );
};

export default Cell;
