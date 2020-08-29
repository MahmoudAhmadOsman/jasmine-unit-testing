//Testing String in Jasmine

describe('Match string', () => {
  //toBe function
  it('Testing String', () => {
    let testStr = 'Hello World';
    expect(testStr).toBe('Hello World');
  });

  //toEqual
  it('Using toEqual to', () => {
    let toEqualStr = 'Mahmoud Osman!';
    expect(toEqualStr).toEqual('Mahmoud Osman!');
  });
});
