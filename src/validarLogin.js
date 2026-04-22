document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (!validarLogin(email, senha)) {
            event.preventDefault();
            alert("Email ou senha inválidos!");
        }
    });
});