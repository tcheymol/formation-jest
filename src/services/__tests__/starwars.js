import { getStarwarsCharacter } from '../starwars';
import { makeGetRequest } from '../networking';

jest.mock('../networking', () => ({
  makeGetRequest: jest.fn(() => ({ name: 'Jabba the Hutt' })),
}));

describe('starwars service', () => {
  describe('getStarwarsCharacter function', () => {
    it('should call starwars api with the given id', async () => {
      const luke = await getStarwarsCharacter(1);
      expect(luke.name).toBe('Jabba the Hutt');
    });
  });
});
