import React from 'react';
import { newBarn } from '../../services/farmApi';
import { useDispatch } from 'react-redux';
import { 
  FETCH_BARNS_LOADING, 
  setBarnLoading, 
  addBarnToState 
} from '../../actions/barnActions';

export default function Controls() {

  const dispatch = useDispatch();

  const handleBuildBarn = ({ target }) => {
    //post new barn
    dispatch(setBarnLoading());
    console.log(target.value);
    return newBarn(target.value)
      .then(barn => {
        console.log(barn);
        dispatch(addBarnToState(barn));
      });
  };

  const handleBuyChicken = () => {
    //post new chicken to barn
    return 
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
      <button value='chickens' onClick={handleBuildBarn}>Build a barn for chickens!</button>
      <button value='cows' onClick={handleBuildBarn}>Build a barn for cows!</button>
      <button value='pigs' onClick={handleBuildBarn}>Build a barn for pigs!</button>
      <button onClick={handleBuyChicken}>Buy Chicken</button>
      <button onClick={handleBuyCow}>Buy Cow</button>
      <button onClick={handleBuyPig}>Buy Pig</button>
      <button onClick={handleSlaughterChicken}>Slaughter Chicken</button>
      <button onClick={handleSlaughterCow}>Slaughter Cow</button>
      <button onClick={handleSlaughterPig}>Slaughter Pig</button>
    </>
  );
}
