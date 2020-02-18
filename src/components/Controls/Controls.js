import React from 'react';
import { newBarn } from '../../services/farmApi';
import { useDispatch } from 'react-redux';
import { FETCH_BARNS_LOADING, setBarnLoading } from '../../actions/barnActions';

export default function Controls() {

  const dispatch = useDispatch();

  const handleBuildChikenBarn = () => {
    //post new barn
    dispatch(setBarnLoading());
    newBarn('chicken');
  };

  const handleBuyChicken = () => {
    //post new chicken to barn
  };

  const handleBuyCow = () => {
    //post new cow to barn
  };

  const handleBuyPig = () => {
    //post new pig to barn
  };

  const handleSlaughterChicken = () => {

  };

  const handleSlaughterCow = () => {

  };

  const handleSlaughterPig = () => {

  };

  return (
    <>
      <button onClick={handleBuildBarn}>Build a barn!</button>
      <button onClick={handleBuyChicken}>Buy Chicken</button>
      <button onClick={handleBuyCow}>Buy Cow</button>
      <button onClick={handleBuyPig}>Buy Pig</button>
      <button onClick={handleSlaughterChicken}>Slaughter Chicken</button>
      <button onClick={handleSlaughterCow}>Slaughter Cow</button>
      <button onClick={handleSlaughterPig}>Slaughter Pig</button>
    </>
  );
}
