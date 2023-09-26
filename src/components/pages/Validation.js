function Validation(values) {
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.email === ""){
        error.email = "Enter a email"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email Didn't Match"
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Enter password"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password Didn't Match"
    }else{
        error.password = ""
    }
    return error;
}

export default Validation;
