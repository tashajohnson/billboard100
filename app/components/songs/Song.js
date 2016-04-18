import React from 'react';

const Song = ({ text }) => (
  <div>
    <p>{text}</p>
    <button className='btn'>Like</button>0
    <button className='btn'>Dislike</button>0
  </div>
 
);

export default Song;
