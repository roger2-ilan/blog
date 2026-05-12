const form = document.getElementById("formContato");
const status = document.getElementById("status");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {

        status.innerHTML = `
            <p>E-mail enviado com sucesso!</p>

            <button id="okBotao">
                OK
            </button>
        `;

        form.reset();

        document.getElementById("okBotao")
            .addEventListener("click", function() {

                status.innerHTML = "";

            });

    } else {

        status.innerHTML = `
            <p>
                Você não preencheu todos os campos!
            </p>
        `;
    }
});
