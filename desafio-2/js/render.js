var lista = [];

function render() {
    const minhaLista = document.querySelector("#minhaLista");
    minhaLista.innerHTML="";
    // percorrer a lista passando o conteudo e o numero da posicao do array
    lista.forEach((usuario, pos) => {

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

        label.innerHTML = usuario; 

        btnExcluir.innerHTML = "<ion-icon name='close-outline'></ion-icon>"; 

        btnExcluir.setAttribute("class", "btnExcluir");

        // disparador de evento, quando o usuario clicar, ele apagar o item
        btnExcluir.addEventListener("click", () => {apagar(check.id)}); 

        // organiza as tags filhas dentro de suas respectivas tags maes
        linha.appendChild(check);      // coloca o checkbox dentro da linha
        div.appendChild(label);        
        linha.appendChild(div);        
        linha.appendChild(btnExcluir); 
        minhaLista.appendChild(linha); // coloca a linha com seus elementos dentro da secao
    });
}