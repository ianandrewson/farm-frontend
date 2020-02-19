import React from 'react';
import { newBarn, newChicken, newCow, newPig } from '../../services/farmApi';
import { useDispatch, useSelector } from 'react-redux';
import { setBarnLoading, addBarnToState, addAnimalToBarn } from '../../actions/barnActions';
import { selectBarns } from '../../selectors/barnSelectors';

export default function Controls() {
  const barns = useSelector(selectBarns);
  const dispatch = useDispatch();

  const handleBuildBarn = ({ target }) => {
    dispatch(setBarnLoading());
    return newBarn(target.value)
      .then(barn => dispatch(addBarnToState(barn)));
  };

  const findBarnIndex = (barnType, barns) => {
    const barnIndex = barns.findIndex(barn => (
      barn.barnType === barnType &&
      barn.animals.length < barn.maxSize
    ));
    return barnIndex;
  };

  const buyFactory = {
    chicken: newChicken,
    cow: newCow,
    pig: newPig
  };

  const handleBuyAnimal = ({ target }) => {
    const targetBarnIndex = findBarnIndex(target.value, barns);
    return buyFactory[target.value](barns[targetBarnIndex]._id)
      .then(animal => dispatch(addAnimalToBarn(animal, targetBarnIndex)));
  };

  const handleSlaughterChicken = () => {

  };

  const handleSlaughterCow = () => {

  };

  const handleSlaughterPig = () => {

  };

  return (
    <>
      <button value='chicken' onClick={handleBuildBarn}>Build a barn for chickens!</button>
      <button value='cow' onClick={handleBuildBarn}>Build a barn for cows!</button>
      <button value='pig' onClick={handleBuildBarn}>Build a barn for pigs!</button>
      <button onClick={handleBuyAnimal} value='chicken'>Buy Chicken</button>
      <button onClick={handleBuyAnimal} value='cow'>Buy Cow</button>
      <button onClick={handleBuyAnimal} value='pig'>Buy Pig</button>
      <button onClick={handleSlaughterChicken}>Slaughter Chicken</button>
      <button onClick={handleSlaughterCow}>Slaughter Cow</button>
      <button onClick={handleSlaughterPig}>Slaughter Pig</button>
    </>
  );
}
