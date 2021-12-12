const { upper } = require('./utilities');

test("Receive 'js' to return 'JS'", () => {
    expect(upper('js')).toBe('JS');
});

test("Receive 'Cristi' to return 'CRISTI'", () => {
    expect(upper('Cristi')).toBe('CRISTI');
});