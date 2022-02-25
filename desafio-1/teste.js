const a = document.querySelector("#email").value;
const b = document.querySelector("#password").value;

function direcionamento () {
    if (a == "admin@admin.com" && b == "123") {
        window.location.href = "./home.html";
    }
    return     
}
