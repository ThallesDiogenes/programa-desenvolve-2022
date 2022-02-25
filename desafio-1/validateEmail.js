
//Verificando o formato do e-mail fornecido pelo usuário

function validateEmail(input) {
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(input.value.match(mailformat)){
        document.form.email.focus();
    return true;
    } else {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
    return false;
    }
}