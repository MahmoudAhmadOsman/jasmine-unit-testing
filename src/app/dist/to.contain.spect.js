//Testing String in Jasmine
describe('Match string', function () {
    it('Testing String', function () {
        var testStr = 'Hello World';
        expect(testStr).toBe('Hello World');
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
    //Testing Array
    it('Testing Array using toEqual to check if numbers are the same or NOT', function () {
        var arrayToEqual = [2, 5, 6, 8];
        expect(arrayToEqual).toEqual([2, 5, 6, 7]); //This will fail because 6 should be 8
    });
    // Check if Array has certain values
    it('Testing Array to see if it has certain value usin toContain ', function () {
        var checkArrayValue = ['Osman', 'Mahmoud', 'I love Jasmine Unit testing!'];
        expect(checkArrayValue).toContain('Osman');
    });
});
