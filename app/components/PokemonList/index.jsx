/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
import React from 'react';
import { mockData } from './mock';

const PokemonList = () => {
  return <div>
    {mockData.map(x => {
      return <div>
        <span>{x.id}</span>
        <span>.</span>
        <span>{x.name}</span>
      </div>
    })}
  </div>
}

export default PokemonList;