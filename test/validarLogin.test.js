const validarLogin = require('../src/validarLogin');

test('deve retornar true para dados válidos', () => {
    expect(validarLogin('teste@email.com', '123456')).toBe(true);
});

test('deve retornar false para email inválido', () => {
    expect(validarLogin('testeemail.com', '123456')).toBe(false);
});

test('deve retornar false para senha curta', () => {
    expect(validarLogin('teste@email.com', '123')).toBe(false);
});

test('deve retornar false para campos vazios', () => {
    expect(validarLogin('', '')).toBe(false);
});