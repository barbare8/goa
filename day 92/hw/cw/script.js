let form = document.getElementById("form")
let usernameError = document.getElementById("username-error")
let emailError = document.getElementById("email-error")
let passwordError = document.getElementById("password-error")


form.addEventListener("submit", function(e){
    e.preventDefault()
    let username = document.getElementById("username")
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    if (username.value === ''){
        username.style.border = "1px solid red"
        usernameError.style.display = "block"
    }else {
        username.style.border = "1px solid black"
        usernameError.style.display = "none"
    }

    if (email.value === ''){
        email.style.border = "1px solid red"
        emailError.style.display = "block"
    }else {
        email.style.border = "1px solid black"
        emailError.style.display = "none"
    }

    if (password.value === ''){
        password.style.border = "1px solid red"
        passwordError.style.display = "block"
    }else {
        password.style.border = "1px solid black"
        passwordError.style.display = "none"
    }


    if (username.value !==  '' && email.value !== '' && password.value !== '') {
        username.value = ''
        email.value = ''
        password.value = ''
    }
})