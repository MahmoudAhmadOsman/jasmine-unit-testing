import { addition } from './addition';

//Testing the addition.ts function
describe('Addition Function Testing', () => {
  it('Testing the addition function', () => {
    expect(addition(25, 25)).toBe(50);
  });
});
