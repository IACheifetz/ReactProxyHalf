import React from 'react';

export default function BusinessesList(props) {
  return (
    <div>
      <header className="App-header">
        {props.yelper.map(({ name, price, }, i) => <div key={i}>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>)}
      </header> 
    </div>
  );
}
