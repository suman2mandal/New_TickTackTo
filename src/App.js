import Box from './Components/Box';
import './App.css';
import React from 'react';
import { useState,useEffect } from 'react';

function App() {
  const setNumber = (index) => {
    console.log(index);
  } 
  return (
  <React.Fragment>
      <div className="container d-flex justify-content-center">
        <Box setNumber={setNumber} index={1}/> 
        <Box setNumber={setNumber} index={2}/> 
        <Box setNumber={setNumber} index={3}/> 
      </div>
  </React.Fragment>

  );
}

export default App;
