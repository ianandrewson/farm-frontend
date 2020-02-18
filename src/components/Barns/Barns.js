import React from 'react';
import { useSelector } from 'react-redux';
import { selectBarns, selectBarnsLoading } from '../../selectors/barnSelectors';
import styles from './Barns.css';
import Barn from '../Barn/Barn';

export default function Barns() {
  const barns = useSelector(selectBarns);
  const loading = useSelector(selectBarnsLoading);

  if(barns.length === 0) {
    return (
      <>
        <p>Build a barn!</p>
      </>
    );
  } else if(loading) {
    return <h3>Loading barns</h3>;
  }

  const barnElements = barns.map(barn => (
    <section key={barn._id} className={styles.barns}>
      <Barn />
    </section>
  ));

  console.log(barnElements);
  // if(barns.length === 0) barnElements = <p>Build a barn!</p>;

  return (
    <>
      {barnElements}
    </>
  );
}
