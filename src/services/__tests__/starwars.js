import nock from 'nock';
import { getStarwarsCharacter } from '../starwars';

nock('https://swapi.co/api')
  .get('/people/1')
  .reply(
    200,
    {
      name: 'Jango Fett',
    },
    { 'Access-Control-Allow-Origin': '*' },
  );

describe('starwars service', () => {
  describe('getStarwarsCharacter function', () => {
    it('should call starwars api with the given id', async () => {
      const luke = await getStarwarsCharacter(1);
      expect(luke.name).toBe('Jango Fett');
    });
  });
});
