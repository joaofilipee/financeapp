
// validator
import validator from "validator"

export const useValidateNewUser = (userName, email, password, confirmPassword) => {
    if(userName.length < 2){
        throw new Error("The user name must have at least 2 characters.")
    }

    if(!validator.isEmail(email)){
        throw new Error("Invalid E-mail format.")
    }

    if(password === confirmPassword){
        if(password.length < 6){
            throw new Error("The password must have at least 6 characters.")
        }
    }
    else {
        throw new Error("The password and confirm password are different.")
    }

    return true

}