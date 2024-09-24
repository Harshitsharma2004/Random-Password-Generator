const passBox = document.getElementById("pass");
const len = prompt("Enter the desired length for Random Password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special = "!@#$%^&*()_-=+/*.?>,<{[}]|\;:";
const all = upperCase + lowerCase + number + special;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special[Math.floor(Math.random() * special.length)];

    while (len > password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }
    passBox.value = password;
}

function copyClick() {
    passBox.select();
    document.execCommand("copy");
}