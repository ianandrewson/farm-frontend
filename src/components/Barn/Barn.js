import React, { useEffect } from 'react';

export default function Barn({ animals }) {

  

  return (
    <>
      {/* <p>A list of animals will go here</p> */}
      {animals.map(animal => animal.display)}
    </>
  );
}
