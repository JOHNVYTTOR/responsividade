  import './App.css'
  import NumberSelector from './components/NumberSelector'
  import Result from './components/Result'
  import type { NumberArray } from './types/types'
  import { useState } from 'react';

  function App() {
    const [userNumbers, setUserNumbers] = useState<NumberArray>([]);
    const [drawnNumbers, setDrawnNumbers] = useState<NumberArray>([]);
    const [hasDrawn, setHasDrawn] = useState(false);

    const drawNumbers = () => {
      const numbers: NumberArray = [];
      while (drawnNumbers.length < 6) {
        const n = Math.floor(Math.random() * 60) + 1;
        if (!drawnNumbers.includes(n)) drawnNumbers.push(n);
      }

      setDrawnNumbers(numbers);
      setHasDrawn(true);
    }

    const resetGame = () => {
      setUserNumbers([]);
      setDrawnNumbers([]);
      setHasDrawn(false);
    }
    
    return (
      <div className='main-container'>
        <h1 className='title'>Bolão Premiado</h1>
        {!hasDrawn && (
          <NumberSelector userNumbers={userNumbers} setUserNumbers={setUserNumbers} onDraw={drawNumbers} />
        )}

        {hasDrawn  && (
          <Result userNumbers={userNumbers} drawnNumbers={drawnNumbers} onReset={resetGame} />
        )}
      </div>
      
    )
  }

  export default App
