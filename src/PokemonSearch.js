import { useState } from 'react';
import { getPokemonData } from './services/fetch-utils';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pogeyman, setPogeyman] = useState([]);
  const [pogeymanQuery, setPogeymanQuery] = useState('');

  async function handlePokemonSubmit(e) {
    e.preventDefault();
        // set the loading state to true
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const response = await getPokemonData(pogeymanQuery);
    console.log(response, 2); //eslint-disable-line
    setPogeyman(response);
        // put the jsonified data in state and set the loading state to false
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search for Pokemon
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <input onChange={e => setPogeymanQuery(e.target.value)} />
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <header className="App-header">
        {pogeyman.map((p, i) => <div key={i}>
          <h2>{p.pokemon}</h2>
          <p>weight: {p.weight}</p>
        </div>)}
      </header>
    </section>
  );

}
