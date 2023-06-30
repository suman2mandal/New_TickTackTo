import React from 'react'

function Box({index,setNumber}) {
  return (
    <button className="btn btn-primary col-4" onClick={setNumber(index)} >
        <div key={{index}} style={{marginTop:"50%",marginBottom:"50%",height:"5px",textAlign:"center",verticalAlign:"center"}}>
        {index}
        </div>
    </button>
  )
}

export default Box
