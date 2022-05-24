//Validação de Campos

let nome = document.querySelector("#nome")
nome.addEventListener("Blur", validarNome)

function validarNome(){
    if(nome.value == ""){
        nome.classList.remove("border-success")
        nome.classList.add("border", "border-danger")
    }
    else{
        nome.classList.renove("border-danger")
        nome.classList.add("border", "border-success")
    }
}

let sobrenome = document.querySelector("#sobrenome")
sobrenome.addEventListener("Blur", validarSobreNome)

function validarSobreNome(){
    if(sobrenome.value == ""){
        sobrenome.classList.remove("border-success")
        sobrenome.classList.add("border", "border-danger")
    }
    else{
        sobrenome.classList.renove("border-danger")
        sobrenome.classList.add("border", "border-success")
    }
}

let usuario = document.querySelector("#usuario")
usuario.addEventListener("Keyup", validarUsuario)

function validarUsuario(){
    if(usuario.value == ""){
        usuario.classList.remove("border-success")
        usuario.classList.add("border", "border-danger")
    }
    else{
        usuario.classList.renove("border-danger")
        usuario.classList.add("border", "border-success")
    }
}

/* VALIDAR EMAIL */
let email = document.querySelector("#email")
let msgEmail = document.querySelector("#validaEmail")

// Estou trabalhando com arrow function
email.addEventListener('keyup',()=>{
    let minusculo = email.value.toLowerCase()// Convertendo o texto em minúsculo

    if(minusculo.indexOf('@') == -1 || minusculo.indexOf(".com")==-1 ){
        //console.log("Email Inválido")
        msgEmail.textContent = "Este email é inválido"
        msgEmail.classList.remove("text-success")
        msgEmail.classList.add("text-danger")
    }
    else{
        //console.log("Email Válido")
        msgEmail.textContent = "Email válido"
        msgEmail.classList.remove("text-danger")
        msgEmail.classList.add("text-success")
    }
})

/* INSERIR ENDEREÇO */
let endereco = document.querySelector("#endereco")
let leitura = document.querySelector("input[readonly]")

endereco.addEventListener("keyup",function(){
    leitura.value = endereco.value
})