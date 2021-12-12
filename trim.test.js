const { userTrim } = require('./utilities');

test("Receive '           Cristi     ' to return 'Cristi'", () => {
    expect(userTrim('           Cristi     ')).toBe('Cristi');
});
