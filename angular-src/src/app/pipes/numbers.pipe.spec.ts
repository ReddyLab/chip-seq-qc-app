import { NumbersPipe } from './numbers.pipe';

describe('NumbersPipe', () => {
  it('create an instance', () => {
    const pipe = new NumbersPipe();
    expect(pipe).toBeTruthy();
  });
});
