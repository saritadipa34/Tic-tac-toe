import { useState } from "react"
import Box from "./Box"

const Gamebox=()=>{
    const[isXTurn,setIaXturn]=useState(true)
    const [board,setBoard]=useState(Array(9).fill(null))
console.log(board[1])

    const handleClick=(i)=>{
        if(board[i]) return;
        const newBoard=[...board]
newBoard[i]=isXTurn ? "x" : "y"
        setBoard(newBoard)
        setIaXturn(!isXTurn)
    }

    return(
        <div className="flex flex-wrap">
        {board.map((box,i)=>{
 return <Box   
 value={box}
  key={i} 
  onClick={()=>handleClick(i)}
  />
        }
        )}
        </div>
    )
}
export default Gamebox