document.querySelector("#botao_form").addEventListener("click", verSituacao);

function verSituacao() {
  const item1 = document.getElementById("email").value;
  const item2 = document.getElementById("mensagem").value;
  var isEmpty = document.getElementById("minha-resposta").innerHTML === "";
  const [user, domain] = item1.split("@");
  const [firstPart, secondPart] = domain.split(".com");
  const validCharacters = "abcdefghijklmnopqrstuvwxyz0123456789.";

  if (item1 != "" && item2 == "" && isEmpty) {
    if (!item1.includes("@")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (user.length > 32) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (!domain.includes(".com")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (secondPart) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (firstPart.length > 16) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (firstPart.includes(".")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else {
      lista.push("Erro no envio: Insira uma mensagem");
      render();
    }
  } else if (item1 != "" && item2 != "" && isEmpty) {
    if (!item1.includes("@")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (user.length > 32) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (!domain.includes(".com")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (secondPart) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (firstPart.length > 16) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else if (firstPart.includes(".")) {
      lista.push("Erro no envio: E-mail inválido");
      render();
    } else {
      lista.push(`Obrigado pelo contato, ${user}!`);
      render();
    }
  }
}

for (let char of firstPart) {
  if (!validCharacters.includes(char.toLowerCase())) {
    lista.push("Erro no envio: E-mail inválido");
    render();
  }
}

function apagar(id) {
  let auxLista = [];

  lista.forEach((email, pos) => {
    if (pos != id && email != "") {
      auxLista.push(email);
    }
  });

  lista = auxLista;
  render();
}
