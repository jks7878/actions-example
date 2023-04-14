const { factorial } = require('./example');

describe('example test', () => {
    test('factorial test', () => {
        expect(factorial(1, 5)).toBe(120);
    });
});
