export async function getPokemonData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const pokeData = await rawResponse.json();
  
  //console.log(pokeData, 2); //eslint-disable-line
  return pokeData.data.results;
}
  
  
export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const yelpData = await rawResponse.json();
  
  console.log(yelpData, 2); //eslint-disable-line
  return yelpData.data.businesses;
}
  
  
  
export async function getWeatherData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/weather?searchFilter=${searchFilter}`);
  const weatherData = await rawResponse.json();
  
  return weatherData.data.blank;
}