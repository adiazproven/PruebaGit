/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import PokemonList from '../../components/PokemonList';

export default function HomePage() {
  return (
    // <h1>
    //   <FormattedMessage {...messages.header} />
    // </h1>
    <PokemonList />
  );
}
