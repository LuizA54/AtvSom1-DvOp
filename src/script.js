function validarLogin(email, senha) {
    if (!email || !senha) return false;

    const emailValido = email.includes("@") && email.includes(".");
    const senhaValida = senha.length >= 6;

    return emailValido && senhaValida;
}

module.exports = validarLogin;