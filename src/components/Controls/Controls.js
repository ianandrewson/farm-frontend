import React from 'react';
import { newBarn, newChicken } from '../../services/farmApi';
import { useDispatch, useSelector } from 'react-redux';
import { setBarnLoading, addBarnToState } from '../../actions/barnActions';
import { selectBarns } from '../../selectors/barnSelectors';

export default function Controls() {
  const barns = useSelector(selectBarns);
  const dispatch = useDispatch();

  const handleBuildBarn = ({ target }) => {
    dispatch(setBarnLoading());
    return newBarn(target.value)
      .then(barn => dispatch(addBarnToState(barn)));
  };

  const handleBuyChicken = ({ target }) => {
    const barnToFill = barns.find(barn => barn.barnType === target.value + 's');
    return newChicken(barnToFill._id)
      .then(chicken => dispatch(addChickenToState(chicken)));
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
      <button onClick={handleBuyChicken} value='chicken'>Buy Chicken</button>
      <button onClick={handleBuyCow}>Buy Cow</button>
      <button onClick={handleBuyPig}>Buy Pig</button>
      <button onClick={handleSlaughterChicken}>Slaughter Chicken</button>
      <button onClick={handleSlaughterCow}>Slaughter Cow</button>
      <button onClick={handleSlaughterPig}>Slaughter Pig</button>
    </>
  );
}
