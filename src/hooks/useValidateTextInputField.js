
export const useValidateTextInputField = (text) => {
    if(text.length < 2){
        alert("Minimum of 2 characters in description field.")
        return false
    }
    else if(text.length > 20){
        alert("Maximum of 20 characters in description field.")
        return false
    }
    
    return true
}