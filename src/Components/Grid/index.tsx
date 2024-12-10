import { GridContainer } from "./mixins";
import { useState, useEffect } from "react";
import Cell from "../Cell";

const emojis = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
];

const Grid = () => {
  const [visibleCells, setVisibleCells] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<
    { emoji: string; index: number }[]
  >([]);
  const [shuffledCells, setShuffledCells] = useState<string[]>([]);

  useEffect(() => {
    const shuffledEmojis = [...emojis];
    const shuffle = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffle(shuffledEmojis);
    setShuffledCells(shuffledEmojis);
  }, []);

  const handleCellClick = (emoji: string, index: number) => {
    if (visibleCells.includes(emoji) || selectedCells.length === 2) return;

    const newSelectedCells = [...selectedCells, { emoji, index }];
    setSelectedCells(newSelectedCells);

    if (newSelectedCells.length === 2) {
      if (newSelectedCells[0].emoji === newSelectedCells[1].emoji) {
        setVisibleCells((prev) => [...prev, newSelectedCells[0].emoji]);
      }

      setTimeout(() => setSelectedCells([]), 700);
    }
  };

  return (
    <GridContainer>
      {shuffledCells.map((emoji, index) => (
        <Cell
          key={index}
          emoji={emoji}
          visible={
            visibleCells.includes(emoji) ||
            selectedCells.some((cell) => cell.index === index)
          }
          onClick={() => handleCellClick(emoji, index)}
        />
      ))}
    </GridContainer>
  );
};

export default Grid;
