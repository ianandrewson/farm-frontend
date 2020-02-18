import React from 'react';
import Graveyard from '../components/Graveyard/Graveyard.js';
import Controls from '../components/Controls/Controls.js';
import Barns from '../components/Barns/Barns.js';

export default function Farm() {

  return (
    <>
      <Barns />
      <Graveyard />
      <Controls />
    </>
  );
}
