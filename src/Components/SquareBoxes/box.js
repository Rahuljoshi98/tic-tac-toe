import React, { useState } from 'react';
import '../Board/main.css';

function Box(props) {
  return (
    <>
        <button className='box' onClick={()=>props.setHandle(props.index)}>{props.value}</button>
    </>
  )
}

export default Box;
