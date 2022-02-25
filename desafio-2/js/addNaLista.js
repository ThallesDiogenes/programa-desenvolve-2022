function addNaLista() {

    const item1 = document.querySelector("#usuario").value;
    const item2 = document.querySelector("#telefone").value;

    if(item1 != "" && item2 != "") {
            
        lista.push("Nome: " + item1 + " - " + " Telefone: " + "<a href='tel:item2'>" + item2 + "</a>");

        document.querySelector("#usuario").value = "";
        document.querySelector("#telefone").value = "";

        listaSemRepeticao();
        // mensagem();
        render();

    }else if(item1 == "" && item2 == "") {
        alert("Por favor, forneça as informações solicitadas!");
    }else if(item1 == "") { 
        alert("Por favor, forneça seu nome completo!");
    }else {
        alert("Por favor, forneça seu telefone!");
    }
}