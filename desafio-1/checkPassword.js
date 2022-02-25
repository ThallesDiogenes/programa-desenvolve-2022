function CheckPassword(input) { 

    let password=  /^[A-Za-z]\w{7,14}$/;

    if(input.value.match(password)) { 
        alert('Correct, try another...')
    return true;
    } else { 
    alert('Wrong...!')
    return false;
    }
}
