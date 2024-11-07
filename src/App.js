import { useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  const[count,setCount]=useState(Array(9).fill(null));
  const[isX, setIsx]=useState(true);

  const checkWinner=()=>{
    const winnerLogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    
for(let logic of winnerLogic){
  const [a,b,c]=logic;
  if(count[a] !== null && count[a]===count[b] && count[a]===count[c]){
    return count[a];
  }
}
return false;
  }

  const winner=checkWinner();

  const handleClick=(i)=>{
    if(count[i]) return;
    const copyCount=[...count]
    copyCount[i]=isX ? "X" : "0"
    setCount(copyCount)
    setIsx(!isX)
      }

      const showBox=()=>{
      setCount(Array(9).fill(null));
      setIsx(!isX);
      }

  return (
    <> 
    {winner ? (
      <div>
      {winner} won the game
      <button
      onClick={showBox}
      >Play again</button>
       </div>) 
       :
        (
        <div>
    <div className=" w-60 h-60 my-20 mx-auto right-0 left-0">
      <div className='boxes flex'>
      <Square value={count[0]} onClick={()=>handleClick(0)}/>
      <Square value={count[1]} onClick={()=>handleClick(1)}/>
      <Square value={count[2]} onClick={()=>handleClick(2)}/>
      </div>

      <div className='boxes flex'>
      <Square value={count[3]} onClick={()=>handleClick(3)}/>
      <Square value={count[4]} onClick={()=>handleClick(4)}/>
      <Square value={count[5]} onClick={()=>handleClick(5)} />
      </div>

      <div className='boxes flex'>
      <Square value={count[6]} onClick={()=>handleClick(6)}/>
      <Square value={count[7]} onClick={()=>handleClick(7)}/>
      <Square value={count[8]}onClick={()=>handleClick(8)}/>
      </div>
    </div>
    </div>
      )}
    </>
  )
}

export default App;
