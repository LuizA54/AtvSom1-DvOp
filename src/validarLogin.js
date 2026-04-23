function validarLogin(email, senha) {
    if (!email || !senha) return false;

    const emailValido = email.includes("@") && email.includes(".");
    const senhaValida = senha.length >= 6;

    return emailValido && senhaValida;
}

// para testes (Node)
if (typeof module !== "undefined") {
    module.exports = validarLogin;
}

// para navegador
if (typeof window !== "undefined") {
    window.validarLogin = validarLogin;
}