import styles from "./Form.module.css"

// hooks
import { useContext, useState, useRef } from "react"
import { useValidateTextInputField } from "../../hooks/useValidateTextInputField"
import { useValidateNumberInputField } from "../../hooks/useValidateNumberInputField"
import { useValidateRadioInputField } from "../../hooks/useValidateRadioInputField"

// context
import { ValuesContext } from "../../context/ValuesContext"

const Form = () => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [recipeId, setRecipeId] = useState(1)

    const incomeRef = useRef(null)
    const expenseRef = useRef(null)

    const { setRecipes } = useContext(ValuesContext)

    const HandleSubmit = (e) => {
        e.preventDefault()

        const numberResult = useValidateNumberInputField(amount)
        const textResult = useValidateTextInputField(description)
        const radioResult = useValidateRadioInputField(incomeRef.current, expenseRef.current)

        if(!textResult) return
        if(!numberResult) return
        if(!radioResult) return
        
        setRecipes(actualState => {
            return [...actualState, {id: recipeId, description, amount, type: radioResult}]
        })

        setRecipeId(actualId => actualId+1)
        setDescription("")
        setAmount("")

        incomeRef.current.checked = false
        expenseRef.current.checked = false
    }


  return (
    <form onSubmit={HandleSubmit} className={styles.my_form}>
        <label>
            <p>Description</p>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
            <p>Amount</p>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>

        <div className={styles.type}>
            <label>
                <input type="radio" name="type" ref={incomeRef}/>
                <p>Income</p>
            </label>

            <label>
                <input type="radio" name="type" ref={expenseRef}/>
                <p>Expense</p>
            </label>
        </div>

        <button className={styles.addBtn}>Add</button>
    </form>
  )
}

export default Form