const formlog = document.getElementById("login");
const Btnlog = document.getElementById("login_button");
const Errormessage = document.getElementById("error_message");

Btnlog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;

    if(username === "Roben" && password === "mzudubh9") {
        window.open('Projectj.html')
    } else {
        Errormessage.style.opacity = 1;
    }
})