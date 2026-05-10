document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    let status = document.getElementById("status");

    if (nome && email && mensagem) {
        status.textContent = "Mensagem enviada com sucesso (simulação), sô!";
    } else {
        status.textContent = "Preencha todos os campos!";
    }
});
