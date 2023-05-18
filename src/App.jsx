import './index.css'
import { useState, useEffect } from 'react'
import Cell from './components/Cell'


function App() {
  {/*creates an array of 9 'cells' the gameboard */}
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  {/*sets who go it is in this case 'circle' and can change it using setplayerGo */}
  const [playerGo, setPlayerGo] = useState("circle")
  const [winMessage, setWinMessage] = useState(null)
  
  const resetBoard = ["", "", "", "", "", "", "", "", ""];
  const message = "It's " + playerGo + "'s turn to go now!"

  const checkWinningCombos = () => {
    const winningCombos = [
      [0,2,3], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6] 
    ]

    winningCombos.forEach(array => {
      {/*loops thru the winning combos array then checks every array inside to see if the cell in the cells(the gameboard) array all contain circle*/}
      let circleWins = array.every(cell => cells[cell] === "circle")
      if (circleWins === true){
        setWinMessage("Circle Wins!")
        return;
      }
    })

    winningCombos.forEach(array => {
      {/*
      loops thru the winning combos array then checks every array inside to see if the cell in the cells(the gameboard) array all contain cross
      [
      [cross,cross,cross], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]
      ]
    */}
      let crossWins = array.every(cell => cells[cell] === "cross")
      if (crossWins === true){
        setWinMessage("Cross Wins!")
        return;
      }
    })
  }

  useEffect(()=> {
    checkWinningCombos()
  }, [cells])
  {/* ***useEffect*** everytime the dependency[cells] value changes then i want to run the checkWinningCombos function */}

  const resetGame = () => {
    setCells(resetBoard);
    setPlayerGo("circle");
    setWinMessage(null);
  };

  return (
    <div className='app'>
    <div className='gameboard'>
    {/* maps over the cells creates 9 Cell components and gives it an id of there index in the array*/}
        {cells.map((cell, index) => 
        <Cell 
          key={index} 
          id={index} 
          setCells={setCells}
          playerGo={playerGo}
          setPlayerGo={setPlayerGo}
          cells={cells}
          winMessage={winMessage}
          cell={cell}>
        </Cell>)}
 
    </div>
    <p className='msg'>{winMessage || message}</p>
      <button className='reset-button' onClick={resetGame}>Reset</button>
    </div>
  )
}

export default App
