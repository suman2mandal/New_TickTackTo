import Box from './Components/Box';
import './App.css';
import React from 'react';
import { useState } from 'react';

// const boxes = () => {
//   let boxArray = [];
//   var counter = 1;
//   for (let i = 0; i < 3; i++) {
//     boxArray.push(<div className='row d-flex justify-content-center'>
//                 ([...Array(3)].map((e, i) =>{ <Box index={counter}/>,counter+=1}))
//                   </div>);
//     // for (let j = 1; j < 4; j++) {
//     //   boxArray.push(<Box index={counter}/>);
//       // counter+=1;
//     }
//   return boxArray;
// }

const [player, setPlayer] = useState(true);

const setNumber = (index) => {
  setPlayer(!player);
  console.log(index);
}

const boxes = () => {
  let boxArray = [];
  var counter = 1;
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(<Box key={counter} setNumber={(data="1")=>setNumber(data)} index={counter}/>);
      counter+=1;
    }
    boxArray.push(<div key={counter} className='row d-flex justify-content-center'>{row}</div>);
  }
  return boxArray;
}

function App() {

  return (
    <div className="App d-flex justify-content-center">
      <div>player</div>
      <div className='Container col-6' style={{backgroundColor:"red"}}>
        {/* <div className='row d-flex justify-content-center'>
          <Box index='0'/>
          <div className='col-4'>B2</div>
          <div className='col-4'>B3</div>
        </div>

        <div className='row d-flex justify-content-center'>
          <div className='col-4'>B4</div>
          <div className='col-4'>B5</div>
          <div className='col-4'>B6</div>
        </div>
      
        <div className='row d-flex justify-content-center'>
          <div className='col-4'>B7</div>
          <div className='col-4'>B8</div>
          <div className='col-4'>B9</div>
        </div> */}
        {boxes()}
      </div>
    </div>
  );
}

export default App;
