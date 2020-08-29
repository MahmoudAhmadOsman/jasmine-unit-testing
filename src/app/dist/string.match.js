//Testing String in Jasmine
describe('Match string', function () {
    it('Testing String', function () {
        var testStr = 'Hello World';
        expect(testStr).toBe('Hello Worlds');
    });
    //toEqual
    it('Using toEqual to', function () {
        var toEqualStr = 'Mahmoud Osman!';
        expect(toEqualStr).toEqual('Mahmoud Osman!');
    });
    // toContain
    it('Using toContain', function () {
        var toContainStr = 'My name is Mahmoud Osman!';
        expect(toContainStr).toContain('Mahmoud ');
    });
});
