const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;
    const account = getAccount(email)

    if(!account){
        alert("Oops Verifique o usuário ou a senha");
        return
    }

    if(account){
        if(account.senha!==password){
        alert("Oops! Verifique o usuário ou a senha");
        return}
        saveSession(email, checkSession);
        window.location.href="home.html";
    }
});

//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if(email.length < 5){
        alert("Preencha o campo com um email válido")
        return;
    }
    if(password.length < 4){
        alert("Preencha a senha com no mínimo 4 dígitos")
        return;
    }
    saveAccount({
        login: email,
        senha: password,
        transactions: []
    })
    alert("Conta criada com sucesso!");
    myModal.hide()
})

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getAccount(key){
    const account=localStorage.getItem(key)
    if(account){
        return JSON.parse(account);
    }
    return "";
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function checkLogged(){
    console.log("check logged")
    if(session){
        sessionStorage.setItem("logged", session)
        logged = session;
    }
    if(logged){
        saveSession(logged, session);
        window.location.href="home.html"
    }
}