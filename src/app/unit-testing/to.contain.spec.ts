//Testing String in Jasmine

describe('Match string', () => {
  // toContain
  it('toContain, Using toContain function', () => {
    let toContainStr = 'My name is Mahmoud Osman!';
    expect(toContainStr).toContain('Mahmoud ');
  });
});
