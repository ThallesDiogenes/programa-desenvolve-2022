function apagar(id) {
    let auxLista = [];
    
    lista.forEach((usuario, pos) => {
        if(pos != id && usuario != "") {
            auxLista.push(usuario);
        }
    });
    
    lista = auxLista;
    render();
}