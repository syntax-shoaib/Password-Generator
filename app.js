let input = document.querySelector("#input");
let icon = document.querySelector("i");
let btn = document.querySelector("button");
let alertMsg = document.querySelector(".alert");

const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?";
const passwordLength = 12;

btn.addEventListener("click", () => {
    passwordGenerator();
});

const passwordGenerator = () => {
    let password = "";
    for(let i = 0; i < passwordLength; i++){
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
    }
    input.value = password;
}

icon.addEventListener("click", () => {
    copyPassword();
    alertMsg.style.opacity = 1;
    alertMsg.innerHTML = input.value + " copied!";
});

const copyPassword = () => {
    input.select();
    input.setSelectionRange(0, 9999);
    try{
    navigator.clipboard.writeText(input.value);
    }catch(err){
        input.select();
        document.execCommand("copy");
    }
    setTimeout(() => {
        alertMsg.style.opacity = 0;
    },2000);
}