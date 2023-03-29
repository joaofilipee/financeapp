import styles from "./Form.module.css"


// context
import { ValuesContext } from "../../context/ValuesContext"

// hooks
import { useContext, useState, useRef } from "react"

const Form = () => {
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState("")
    const [check, setCheck] = useState(null)
    const [recipeId, setRecipeId] = useState(1)

    const incomeRef = useRef(null)
    const expenseRef = useRef(null)

    const { setRecipes } = useContext(ValuesContext)

    const handleSubmit = (e) => {
        e.preventDefault()


        if(!validatingTextInputField()) {
            return
        }


        if(incomeRef.current.checked){
            setCheck(true)
        }
        else if(expenseRef.current.checked) {
            setCheck(false)
        }
        else {
            console.log("campo nn preenchido")
            return
        }


        setRecipes(actualState => {
            console.log("adicionado")
            return [...actualState, {id: recipeId, description, amount, type: check}]
        })

        setRecipeId(actualId => actualId+1)
        setDescription("")
        setAmount("")
        setCheck(null)
    }

    const validatingNumberInputField = (value) => {
        if(value.includes("e")){
            value = value.replace("e", "")
        }

        if(value.length > 17) {
            return
        }

        setAmount(value)
    }

    const validatingTextInputField = () => {

        if(description.length < 2){
            alert("Min de 2 caracteres na descrição.")
            return false
        }
        else if(description.length > 20){
            alert("Max de 20 caracteres na descrição.")
            return false
        }

    }

  return (
    <form onSubmit={handleSubmit} className={styles.my_form}>
        <label>
            <p>Description</p>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label>
            <p>Amount</p>
            <input type="number" value={amount} onChange={(e) => validatingNumberInputField(e.target.value)}/>
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