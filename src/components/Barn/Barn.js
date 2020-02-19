import React from 'react';
import PropTypes from 'prop-types';

export default function Barn({ animals }) {

  

  return (
    <>
      {animals.map(animal => animal.display)}
    </>
  );
}

Barn.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({
    barnId: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    maxAge: PropTypes.number.isRequired,
    display: PropTypes.string.isRequired
  })).isRequired
};
