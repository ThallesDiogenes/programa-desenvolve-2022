var lista = [];

function render() {
  const minhaResposta = document.querySelector("#minha-resposta");
  minhaResposta.innerHTML = "";
  // percorrer a lista passando o conteudo e o numero da posicao do array
  lista.forEach((email, pos) => {
    //cria as tags
    const linha = document.createElement("div");
    const check = document.createElement("input");
    const div = document.createElement("div");
    const label = document.createElement("label");
    const btnExcluir = document.createElement("button");

    linha.setAttribute("class", "linha");
    linha.setAttribute("id", "linha" + check.id);
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", pos);
    div.setAttribute("class", "label");
    label.setAttribute("for", check.id);

    label.innerHTML = email;

    btnExcluir.innerHTML = "<ion-icon name='close-outline'></ion-icon>";

    btnExcluir.setAttribute("class", "btnExcluir");

    btnExcluir.addEventListener("click", () => {
      apagar(check.id);
    });

    linha.appendChild(check);
    div.appendChild(label);
    linha.appendChild(div);
    linha.appendChild(btnExcluir);
    minhaResposta.appendChild(linha);
  });
}
