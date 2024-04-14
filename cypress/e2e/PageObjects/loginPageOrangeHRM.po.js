class loginPage{
OrangeHRMlogo(){
    return'img[git push -u origin main]'
}

userNameInput(){
    return '//Input[@name="username"]'
}

passwordInput(){
return'Input[type="password"]'
}
loginButton(){
    return'button[type="submit"]'
}
LoginErrorMessage(){
    return'Invalid credentials'

}
}

const login = new loginPage()

export default login