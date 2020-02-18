import React from 'react';
import Barn from '../components/Barn/Barn.js';
import Graveyard from '../components/Graveyard/Graveyard.js';
import Controls from '../components/Controls/Controls.js';
import { useSelector } from 'react-redux';
import { selectBarns, selectBarnsLoading } from '../selectors/barnSelectors.js';

export default function Farm() {
  const barns = useSelector(selectBarns);
  const loading = useSelector(selectBarnsLoading);

  // if(loading) {
  //   return <h3>Loading barns</h3>;
  // }
  // else if(!loading && !barns) {
  //   return <p>Build a barn!</p>;
  // }

  let barnElements = [];
  barnElements = barns.map(barn => (
    <Barn key={barn._id}/>
  ));
  if(barns.length === 0) barnElements = <p>Build a barn!</p>;

  return (
    <>
      {barnElements}
      <Graveyard />
      <Controls />
    </>
  );
}
