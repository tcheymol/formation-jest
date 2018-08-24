export const getStarwarsCharacter = async id => {
  const response = await fetch(`https://swapi.co/api/people/${id}`);
  const body = await response.json();

  return body;
};
