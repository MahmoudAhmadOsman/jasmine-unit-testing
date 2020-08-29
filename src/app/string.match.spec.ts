//Testing String in Jasmine

describe('Match string', () => {
  it('Testing String', () => {
    let testStr = 'Hello World';
    expect(testStr).toBe('Hello World');
  });

  //toEqual
  it('Using toEqual to', () => {
    let toEqualStr = 'Mahmoud Osman!';
    expect(toEqualStr).toEqual('Mahmoud Osman!');
  });

  // toContain
  it('Using toContain', () => {
    let toContainStr = 'My name is Mahmoud Osman!';
    expect(toContainStr).toContain('Mahmoud ');
  });

  //Testing Array
  it('Testing Array using toEqual to check if numbers are the same or NOT', () => {
    let arrayToEqual = [2, 5, 6, 8];
    expect(arrayToEqual).toEqual([2, 5, 6, 7]); //This will fail because 6 should be 8
  });

  // Check if Array has certain values
  it('Testing Array to see if it has certain value usin toContain ', () => {
    let checkArrayValue = ['Osman', 'Mahmoud', 'I love Jasmine Unit testing!'];
    expect(checkArrayValue).toContain('Osman');
  });
});
