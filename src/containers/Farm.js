import React, { useEffect } from 'react';
import Barn from '../components/Barn/Barn.js';
import Graveyard from '../components/Graveyard/Graveyard.js';
import Controls from '../components/Controls/Controls.js';
import { useSelector } from 'react-redux';
import { selectBarns, selectBarnsLoading } from '../selectors/barnSelectors.js';
import styles from '../components/Barn/Barn.css';

export default function Farm() {
  const barns = useSelector(selectBarns);
  const loading = useSelector(selectBarnsLoading);

  if(barns.length === 0) {
    return (
      <>
        <p>Build a barn!</p>
        <Controls />
      </>
    );
  }
  else if(loading) {
    return <h3>Loading barns</h3>;
  }

  let barnElements = [];
  barnElements = barns.map(barn => (
    <section key={barn._id} className={styles.barn}>
      <Barn />
    </section>
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
