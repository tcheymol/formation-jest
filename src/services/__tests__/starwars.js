import { getStarwarsCharacter } from '../starwars';
import { makeGetRequest } from '../networking';

jest.mock('../networking', () => ({
  makeGetRequest: jest.fn(() => ({ name: 'Jabba the Hutt' })),
}));

describe('starwars service', () => {
  describe('getStarwarsCharacter function', () => {
    it('should call starwars api to get the first person if we pas 1', async () => {
      const luke = await getStarwarsCharacter(1);
      expect(luke.name).toBe('Jabba the Hutt');
      expect(makeGetRequest).toHaveBeenCalledTimes(1);
      expect(makeGetRequest).toHaveBeenCalledWith(
        'https://swapi.co/api/people/1',
      );
    });
  });

  it('should call starwars api to get the second person if we pas 2', async () => {
    const luke = await getStarwarsCharacter(2);
    expect(luke.name).toBe('Jabba the Hutt');
    expect(makeGetRequest).toHaveBeenCalledTimes(1);
    expect(makeGetRequest).toHaveBeenCalledWith(
      'https://swapi.co/api/people/2',
    );
  });
});
