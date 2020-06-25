import { mean } from '../../src';

describe('Mean', () => {
  it('Mean', () => {
    expect(mean(2, 4, 6)).toEqual(4);
  });
});
