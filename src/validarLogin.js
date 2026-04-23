function validarLogin(email, senha) {
    if (!email || !senha) return false;

    const emailValido = email.includes("@") && email.includes(".");
    const senhaValida = senha.length >= 6;

    return emailValido && senhaValida;
}

if (typeof module !== "undefined") {
    module.exports = validarLogin;
}

if (typeof window !== "undefined") {
    window.validarLogin = validarLogin;
}