import { getStarwarsCharacter } from '../starwars';

global.fetch = jest.fn(() => {
  return new Promise((resolve, reject) => {
    resolve({
      json: () => ({ name: 'Qui Gon Jinn' }),
    });
  });
});

describe('starwars service', () => {
  describe('getStarwarsCharacter function', () => {
    it('should call starwars api with the given id', async () => {
      const luke = await getStarwarsCharacter(1);
      expect(luke.name).toBe('Qui Gon Jinn');
    });
  });
});
