
export const useValidateRadioInputField = (incomeRef, expenseRef) => {
    let type = ""

    if(incomeRef.checked){
        type = "income"
    }
    else if(expenseRef.checked) {
        type = "expense"
    }
    else {
        alert("expense or income field not filled.")
        return false
    }

    return type
}