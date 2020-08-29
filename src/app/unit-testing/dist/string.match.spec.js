//Testing String in Jasmine
describe('Match string', function () {
    //toBe function
    it('Testing String', function () {
        var testStr = 'Hello World';
        expect(testStr).toBe('Hello World');
    });
    //toEqual
    it('Using toEqual to', function () {
        var toEqualStr = 'Mahmoud Osman!';
        expect(toEqualStr).toEqual('Mahmoud Osman!');
    });
});
