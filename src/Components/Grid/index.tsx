import { GridContainer, VictoryMessage, Button } from "./mixins";
import { useState, useEffect } from "react";
import Cell from "../Cell";
import { emojis } from "../../Constants/emojis";

const Grid = () => {
  const [visibleCells, setVisibleCells] = useState<string[]>([]);
  const [selectedCells, setSelectedCells] = useState<
    { emoji: string; index: number }[]
  >([]);
  const [shuffledCells, setShuffledCells] = useState<string[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const generateShuffledCells = () => {
    const shuffledEmojis = [...emojis];
    const shuffle = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    shuffle(shuffledEmojis);
    setShuffledCells(shuffledEmojis);
  };

  useEffect(() => {
    generateShuffledCells();
  }, []);

  const handleCellClick = (emoji: string, index: number) => {
    if (visibleCells.includes(emoji) || selectedCells.length === 2) return;

    const newSelectedCells = [...selectedCells, { emoji, index }];
    setSelectedCells(newSelectedCells);

    if (newSelectedCells.length === 2) {
      if (newSelectedCells[0].emoji === newSelectedCells[1].emoji) {
        setVisibleCells((prev) => [...prev, newSelectedCells[0].emoji]);
      }

      setTimeout(() => setSelectedCells([]), 650);
    }
  };

  useEffect(() => {
    if (visibleCells.length * 2 === emojis.length) {
      setGameWon(true);
    }
  }, [visibleCells]);

  const resetGame = () => {
    setVisibleCells([]);
    setSelectedCells([]);
    setGameWon(false);
    generateShuffledCells();
    setGameStarted(false);
  };

  if (!gameStarted && !gameWon) {
    return <Button onClick={() => setGameStarted(true)}>Iniciar Memotest</Button>;
  }

  if (gameWon) {
    return (
      <>
        <VictoryMessage>¡Felicidades, ganaste!</VictoryMessage>
        <Button onClick={resetGame}>Reiniciar Memotest</Button>
      </>
    );
  }

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
