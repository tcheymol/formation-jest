// starwars.js
import request from 'superagent';

export const getStarwarsCharacter = async id => {
  const response = await request.get(`https://swapi.co/api/people/${id}`);

  return response.body;
};
