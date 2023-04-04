import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Board from './Board.js';

function App() {

  const [board, setBoard] = useState([
    [1, 2],
    [3, 4]
  ])

  useEffect(() => {
    const newBoard = [];
    let counter = 1;

    for (let row = 0; row < 10; row++) {
      let row = [];

      for (let col = 0; col < 10; col++) {
        row.push(counter);
        counter++;
      }

      newBoard.push(row);
    }
  }, [])

  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
