function listaSemRepeticao() {

    lista.forEach((usuario, pos) => {

        var novaLista = lista.filter(function(usuario, pos) {
        return lista.indexOf(usuario) === pos;
        });

        lista = novaLista;
    });
}  