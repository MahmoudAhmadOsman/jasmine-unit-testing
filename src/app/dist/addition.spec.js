"use strict";
exports.__esModule = true;
var addition_1 = require("./addition");
//Testing the addition.ts function
describe('Addition Function Testing', function () {
    it('Testing the addition function', function () {
        expect(addition_1.addition(25, 25)).toBe(50);
    });
});
