export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/pokemon?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  
  return data.data.results;
}
  
  
export async function getYelpData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/yelp?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  
  return data.data.results;
}
  
  
  
export async function getWeatherData(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/weather?searchFilter=${searchFilter}`);
  const data = await rawResponse.json();
  
  return data.data.results;
}