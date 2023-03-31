import styles from "./Recipe.module.css"

// icons
import { BsFillTrashFill } from "react-icons/bs"
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi"

// hooks / functions
import { useContext } from "react"
import { updateValues } from "../../hooks/updateValues"

// context
import { ValuesContext } from "../../context/ValuesContext"

const Recipe = ({id, description, amount, type}) => {

  const { setRecipes, recipes, setIncoming, setExpenses } = useContext(ValuesContext)
  
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id)
    setRecipes(updatedRecipes)

    updateValues(setIncoming, setExpenses, updatedRecipes)
  }


  return (
    <div className={styles.recipe}>
      <p className={styles.description}>{description}</p>
      <p>$ {amount.toFixed(2)}</p>
      <p className={styles.type}>{type === "income" ? <FiArrowUpCircle className={styles.income} /> : <FiArrowDownCircle className={styles.expense} />}</p>
      <p><BsFillTrashFill className={styles.trash} onClick={() => deleteRecipe(id)}/></p>
    </div>
  )
}

export default Recipe