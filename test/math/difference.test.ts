import { difference } from '../../src';

describe('Difference', () => {
  it('Difference', () => {
    expect(difference(120, 200, -40)).toEqual(-40);
  });
});
