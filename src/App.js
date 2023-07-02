import Box from './Components/Box';
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';
import './assets/Extra.css';

function App() {
  const setNumber = (index) => {
    console.log(index);
  } 
  return (
  <React.Fragment>
      <div className="Wrapper">
        <Box setNumber={setNumber} index={1}/> 
        <Box setNumber={setNumber} index={2}/> 
        <Box setNumber={setNumber} index={3}/> 
      </div>
      <div className="Wrapper">
        <Box setNumber={setNumber} index={4}/> 
        <Box setNumber={setNumber} index={5}/> 
        <Box setNumber={setNumber} index={6}/> 
      </div>
      <div className="Wrapper">
        <Box setNumber={setNumber} index={7}/> 
        <Box setNumber={setNumber} index={8}/> 
        <Box setNumber={setNumber} index={9}/> 
      </div>
  </React.Fragment>

  );
}

export default App;
