//Testing String in Jasmine

describe('Match numbers in an Array', () => {
  //Testing Array
  it('Testing Array using toEqual to check if numbers are the same or NOT', () => {
    let arrayToEqual = [2, 5, 6, 8];
    expect(arrayToEqual).toEqual([2, 5, 6, 7]); //This will fail because 6 should be 8
  });

  // Check if Array has a certain value
  it('Testing Array to see if Arrays  has a certain value using toContain Function ', () => {
    let checkArrayValue = ['Osman', 'Mahmoud', 'I love Jasmine Unit testing!'];
    expect(checkArrayValue).toContain('Osman');
  });
});
