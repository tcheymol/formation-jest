import { add } from '../maths';

describe('maths service', () => {
  describe('add function', () => {
    it('should return 6 if given 2 and 4', () => {
      expect(add(2, 4)).toBe(6);
    });
  });
});
