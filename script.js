const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.login_button')


const handeFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active')    
}

const handeFocusOut = ({ target }) => {
    if ( target.value === '') {
        const span = target.previousElementSibling;
        span.classList.remove('span-active')
    }    
}

const handleChange = () => {
    const [email, password] = inputs;

    if(email.value && password.value.length >= 8){       
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled','');
    }
}

inputs.forEach((input) => input.addEventListener('focus', handeFocus));
inputs.forEach((input) => input.addEventListener('focusout', handeFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));


function login(){

    let email1 = document.getElementById('blye').value
    let senha1 = document.getElementById('bley').value
    console.log(email1, senha1)
    location.reload()
}

function aparece_login(){
    let botPreto = document.getElementById('btReg')
    let botAzul = document.getElementById('btLog')
    let logPessoa = document.getElementById('login')
    let offReg = document.getElementById('registro')
    botAzul.style.color= "rgb(8, 137, 243)";
    botAzul.style.textDecoration="underline";
    botPreto.style.color="rgb(0,0,0)";
    botPreto.style.textDecoration="none";
    offReg.style.display = "none" ;
    logPessoa.style.display = "flex";

}

function aparece_registro(){
    let botPreto = document.getElementById('btLog')
    let botAzul = document.getElementById('btReg')
    let regPessoa = document.getElementById('registro')
    let offLog = document.getElementById('login')
    botAzul.style.color= "rgb(8, 137, 243)";
    botAzul.style.textDecoration="underline";
    botPreto.style.color="rgb(0,0,0)";
    botPreto.style.textDecoration="none";
    offLog.style.display = "none" ;
    regPessoa.style.display = "flex";
    
}

