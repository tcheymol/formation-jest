// starwars.test.js
import { getStarwarsCharacter } from '../starwars';

describe('starwars service', () => {
  describe('getStarwarsCharacter function', () => {
    it('should call starwars api with the given id', async () => {
      const luke = await getStarwarsCharacter(1);
      expect(luke.name).toBe('Luke Skywalker');
    });
  });
});
