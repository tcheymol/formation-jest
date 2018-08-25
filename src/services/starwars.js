// starwars.js
import { makeGetRequest } from './networking';

export const getStarwarsCharacter = async id => {
  return await makeGetRequest(`https://swapi.co/api/people/${id}`);
};
