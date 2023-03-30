
export const useValidateNumberInputField = (value) => {
    if(value.includes("e")){
        value = value.replace("e", "")
    }

    if(value.length > 17) {
        alert("Maximum of 17 characters in number field.")
        return false
    }
    else if(value.length < 1) {
        alert("Minimum of 1 character in number field.")
        return false
    }
    else if(parseFloat(value) < 0){
        alert("The value must be 0 or above.")
        return false
    }

    return true
}

