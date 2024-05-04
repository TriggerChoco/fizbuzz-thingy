const fiz_buzz = require("./fiz_buzz");

describe("FizBuzz", () => {
    test('[3] should be fiz', () => {
        expect(fiz_buzz([3])).toBe('fiz');
    })

    test('[5] should be buzz', () => {
        expect(fiz_buzz([5])).toBe('buzz');
    })

    test('[15] should be fizbuzz', () => {
        expect(fiz_buzz([15])).toBe('fizbuzz');
    })

    test('[2] should be 2', () => {
        expect(fiz_buzz([2])).toBe('2');
    })

    test('[0] should be 0', () => {
        expect(fiz_buzz([0])).toBe('0');
    })
});