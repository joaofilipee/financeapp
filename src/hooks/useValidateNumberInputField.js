
export const useValidateNumberInputField = (value) => {
    if(value.includes("e")){
        value = value.replace("e", "")
    }

    if(value.length > 15) {
        alert("Maximum of 15 characters in number field.")
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

