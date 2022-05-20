import React from 'react';

export default function PokemonItem(props) {
  //const [pogeyman] = useState([]);
  //console.log(pogeyman); //eslint-disable-line
  return (
    <div>
      <header className="App-header">
        {props.pogeyman.map((p, i) => <div key={i}>
          <h2>{p.pokemon}</h2>
          <p>weight: {p.weight}</p>
        </div>)}
      </header>
    </div>
  );
}
