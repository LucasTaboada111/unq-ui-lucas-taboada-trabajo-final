import { GridContainer } from "./mixins";
import { useState, useEffect } from "react";
import Cell from "../Cell";

const Grid = () => {
  const [visibleCells, setVisibleCells] = useState<number[]>([]);
  const [selectedCells, setSelectedCells] = useState<
    { number: number; index: number }[]
  >([]);
  const [shuffledCells, setShuffledCells] = useState<number[]>([]);

  useEffect(() => {
    const numbers = Array.from({ length: 8 }, (_, index) => index + 1);
    const pairs = [...numbers, ...numbers];

    const shuffle = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffle(pairs);
    setShuffledCells(pairs);
  }, []);

  const handleCellClick = (number: number, index: number) => {
    if (visibleCells.includes(number) || selectedCells.length === 2) return;

    const newSelectedCells = [...selectedCells, { number, index }];
    setSelectedCells(newSelectedCells);

    if (newSelectedCells.length === 2) {
      if (newSelectedCells[0].number === newSelectedCells[1].number) {
        setVisibleCells((prev) => [...prev, newSelectedCells[0].number]);
      }

      setTimeout(() => setSelectedCells([]), 700);
    }
  };

  return (
    <GridContainer>
      {shuffledCells.map((number, index) => (
        <Cell
          key={index}
          number={number}
          visible={
            visibleCells.includes(number) ||
            selectedCells.some((cell) => cell.index === index)
          }
          onClick={() => handleCellClick(number, index)}
        />
      ))}
    </GridContainer>
  );
};

export default Grid;
