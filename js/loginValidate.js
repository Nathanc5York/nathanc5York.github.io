let userLogin = document.querySelector("#userLogin");
let emailError = document.querySelector("#emailError");
let passStrength = document.querySelector("#passStrength");
let userPassword = document.querySelector("#userPassword");

userLogin.userEmail.addEventListener("focus", function(){
    userLogin.userEmail.style.border = "2px solid green";
    emailError.innerHTML = "";
})
userLogin.userEmail.addEventListener("blur", function(){
    let at = /@/;
    this.style.border = "2px solid yellow";
    if (userLogin.userEmail.value.length == 0){
        emailError.innerHTML = "Email field is empty";
    }
    else if (!at.test(userLogin.userEmail.value)){
        emailError.innerHTML = "missing @ value";
    }
    else {
        this.style.border = "2px solid green";
    }
})

userPassword.addEventListener("blur", function(){
    let passwordStrength = 0;
    passStrength.innerHTML = "Password Strength: Horrible";
    passStrength.style.color = "Red";
    if (this.value.length > 8){
        passwordStrength++;
    }
    if (userPassword.value.toLowerCase() != userPassword.value && userPassword.value.toUpperCase() != userPassword.value && isNaN(userPassword.value)){
        passwordStrength++;
    }
    let specialChars = /[`~!@#$%^&*()-_=+{}:;'",<>.?/]/;
    if (specialChars.test(userPassword.value)){
        passwordStrength++;
    }
    let numerical = /[0-9]/;
    if (numerical.test(userPassword.value)){
        passwordStrength++;
    }

    if (passwordStrength == 0){
        window.alert("Password should atleast be 8 characters long, contain a special character, an uppercase, and a numerical value.");
    }
    if (passwordStrength == 1){
        passStrength.innerHTML = "Password Strength: Weak";
        passStrength.style.color = "Black";
    }
    else if (passwordStrength == 2 || passwordStrength == 3){
        passStrength.innerHTML = "Password Strength: Moderate";
        passStrength.style.color = "Gold";
        userPassword.style.border = "2px solid Gold";
    }
    else if (passwordStrength == 4){
        passStrength.innerHTML = "Password Strength: Strong";
        passStrength.style.color = "Green";
        userPassword.style.border = "2px solid Green";
    }
})