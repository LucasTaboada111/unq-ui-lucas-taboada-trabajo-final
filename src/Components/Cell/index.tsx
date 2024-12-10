import { CellContainer } from "./mixins";

const Cell = ({ number }: { number: number }) => {
  return <CellContainer>{number}</CellContainer>;
};

export default Cell;
