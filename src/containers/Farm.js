import React from 'react';
import Barn from '../components/Barn/Barn.js';
import Graveyard from '../components/Graveyard/Graveyard.js';
import Controls from '../components/Controls/Controls.js';

export default function Farm() {
  

  const barnElements = barns.map(barn => (
    <Barn key={barn._id}/>
  )); 
  
  return (
    <>
      {barnElements}
      <Graveyard />
      <Controls />
    </>
  );
}
