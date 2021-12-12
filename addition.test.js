const { addition } = require('./utilities');

test("Adds 3 + 7 to equal 10", () => {
    expect(addition(3, 7)).toBe(10);
});

test("Adds 2 + 'eight' to be of type 'string", () => {
    expect(typeof addition(2, 'eight')).toBe('string');
});