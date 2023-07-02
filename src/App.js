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
      return true;
    }
    else if(board[3]===board[4] && board[4]===board[5] && board[3]!==null){
      return true;
    }
    else if(board[6]===board[7] && board[7]===board[8] && board[6]!==null){
      return true;
    }
    else if(board[0]===board[3] && board[3]===board[6] && board[0]!==null){
      return true;
    }
    else if(board[1]===board[4] && board[4]===board[7] && board[1]!==null){
      return true;
    }
    else if(board[2]===board[5] && board[5]===board[8] && board[2]!==null){
      return true;
    }
    else if(board[0]===board[4] && board[4]===board[8] && board[0]!==null){
      return true;
    }
    else if(board[2]===board[4] && board[4]===board[6] && board[2]!==null){
      return true;
    }else{
      return false;
    }
  }

  const placeMark = () => {
    setTurn(!turn);
    return turn?"X":"O";
  }
  
  const setNumber = (index) => {
      // setBoard(board[index]=index);i
      if(board[index]!==null || checkIfWon()){
        return;
      }
      setBoard(board.map((item,i)=>i===index?placeMark():item));
      // console.log(board[index]+" "+index);
  } 
const boardChecker = () => {
  if(checkIfWon()===false){
    return <h1 style={{display:'flex',justifyContent:'center'}}>Player {turn?"X":"O"}'s Turn</h1>
  }else{
    return board.reduce((acc,curr)=>acc+curr)===9?
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}>Game Over</h1>
    </div>
    :
    <div>
      <h1 style={{display:'flex',justifyContent:'center'}}>{turn?"O":"X"} Wins</h1>
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
      <div className="Wrapper" style={{marginTop:"20px"}}>
        <button className="btn btn-info col-4" style={{fontWeight:'bold', fontSize:'20px'}} onClick={()=>setBoard([...Array(9)].fill(null))}>Reset</button>
      </div>
  </React.Fragment>

  );
}

export default App;
