
function loadingHome(form) {

    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    form.addEventListener("submit",(e) => {
        e.preventDefault();
        checkInputs();
    })

    function checkInputs() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        if(emailValue === "") {
            setErrorFor(email, "E-mail cannot be blank");
        } else if(!isEmail(email.value)){
            setErrorFor(email, "Email is not valid");
        } else {
            setSuccessFor(email);
        }
        if(passwordValue === "") {
            setErrorFor(password, "Password cannot be blank");
        }  else {
            setSuccessFor(password);
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement; // form-div1
        const small = formControl.querySelector("small");

        small.innerText = message;
        form.Control.className = "form-div1 error";
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        form.Control.className = "form-div1 sucess";
    }

    function isEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ .test(email);
    }
}

/*        if(email == "admin@gmail.com" && password == 123) {
            window.location.assign("home.html");
            return true;
        } else {
            alert("You have not entered valitaded password and email address!");
        } */