//Testing String in Jasmine
describe('Match string', function () {
    // toContain
    it('toContain, Using toContain function', function () {
        var toContainStr = 'My name is Mahmoud Osman!';
        expect(toContainStr).toContain('Mahmoud ');
    });
});
