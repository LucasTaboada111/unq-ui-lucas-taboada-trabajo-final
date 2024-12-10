import { GridContainer } from "./mixins";
import Cell from "../Cell";

const Grid = () => {
    const cells = Array.from({ length: 16 }, (_, index) => index + 1);
  
    return (
      <GridContainer>
        {cells.map((number) => (
          <Cell key={number} number={number} />
        ))}
      </GridContainer>
    );
  };
  
  export default Grid;