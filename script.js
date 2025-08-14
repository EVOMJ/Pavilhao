function login() {
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (email.includes("@gmail.com") && usuario.length > 2 && senha.length >= 4) {
        window.location.href = "home";
        return false;
    } else {
        alert("Dados inválidos. Verifique seu Gmail, usuário e senha.");
        return false;
    }
}
function login() {
    const email = document.getElementById('email').value;
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (email.includes("@gmail.com") && usuario.length > 2 && senha.length >= 4) {
        window.location.href = "home";
        return false;
    } else {
        alert("Dados inválidos. Verifique seu Gmail, usuário e senha.");
        return false;
    }
}
