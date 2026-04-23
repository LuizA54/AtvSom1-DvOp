const validarLogin = require('../src/validarLogin');

test('dados válidos', () => {
    expect(validarLogin('teste@email.com', '123456')).toBe(true);
});

test('email inválido', () => {
    expect(validarLogin('testeemail.com', '123456')).toBe(false);
});

test('senha curta', () => {
    expect(validarLogin('teste@email.com', '123')).toBe(false);
});

test('campos vazios', () => {
    expect(validarLogin('', '')).toBe(false);
});