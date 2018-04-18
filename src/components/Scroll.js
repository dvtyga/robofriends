import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '500px'}} className='shadow'>
      {props.children} 
    </div>
  );
}


export default Scroll;