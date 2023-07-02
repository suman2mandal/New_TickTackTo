import Box from './Components/Box';
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import './assets/Extra.css';

function App() {
  const [board,setBoard] = useState([...Array(9)].fill(null));
  const [turn,setTurn] = useState(1);

  const checkIfWon = () => {
    if(board[0]===board[1] && board[1]===board[2] && board[0]!==null){
      alert(board[0]+" won");
    }
    else if(board[3]===board[4] && board[4]===board[5] && board[3]!==null){
      alert(board[3]+" won");
    }
    else if(board[6]===board[7] && board[7]===board[8] && board[6]!==null){
      alert(board[6]+" won");
    }
    else if(board[0]===board[3] && board[3]===board[6] && board[0]!==null){
      alert(board[0]+" won");
    }
    else if(board[1]===board[4] && board[4]===board[7] && board[1]!==null){
      alert(board[1]+" won");
    }
    else if(board[2]===board[5] && board[5]===board[8] && board[2]!==null){
      alert(board[2]+" won");
    }
    else if(board[0]===board[4] && board[4]===board[8] && board[0]!==null){
      alert(board[0]+" won");
    }
    else if(board[2]===board[4] && board[4]===board[6] && board[2]!==null){
      alert(board[2]+" won");
    }else{
      return true;
    }
  }

  const placeMark = () => {
    setTurn(!turn);
    return turn?"X":"O";
  }
  
  const setNumber = (index) => {
      // setBoard(board[index]=index);i
      if(checkIfWon()===true){
        setBoard(board.map((item,i)=>i===index?placeMark():item));
        console.log(board[index]+" "+index);
      } 
  } 
const boardChecker = () => {
  if(checkIfWon()===true){
    return <h1 style={{display:'flex',justifyContent:'center'}}>Player {turn?"X":"O"}'s Turn</h1>
  }else{
    board.reduce((acc,curr)=>acc+curr,0)===9?
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}>Game Over</h1>
      alert("Game Over")
    </div>
    :
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}>Game Over</h1>
      alert("Game Over");
    </div>
  }
}
  return (
  <React.Fragment>

      {boardChecker()}
      <div className="Wrapper">
        <Box setNumber={()=>setNumber(0)} index={board[0]}/> 
        <Box setNumber={()=>setNumber(1)} index={board[1]}/> 
        <Box setNumber={()=>setNumber(2)} index={board[2]}/> 
      </div>
      <div className="Wrapper">
        <Box setNumber={()=>setNumber(3)} index={board[3]}/> 
        <Box setNumber={()=>setNumber(4)} index={board[4]}/> 
        <Box setNumber={()=>setNumber(5)} index={board[5]}/> 
      </div>
      <div className="Wrapper">
        <Box setNumber={()=>setNumber(6)} index={board[6]}/> 
        <Box setNumber={()=>setNumber(7)} index={board[7]}/> 
        <Box setNumber={()=>setNumber(8)} index={board[8]}/> 
      </div>
  </React.Fragment>

  );
}

export default App;
