import { sum } from '../../src';

describe('Sum', () => {
  it('Sum', () => {
    expect(sum(12, 200, 120)).toEqual(332);
  });
});
