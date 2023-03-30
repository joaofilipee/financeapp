import styles from "./Recipe.module.css"

// icons
import { BsFillTrashFill } from "react-icons/bs"
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi"

// hooks
import { useContext } from "react"

// context
import { ValuesContext } from "../../context/ValuesContext"

const Recipe = ({id, description, amount, type}) => {

  const { setRecipes, recipes } = useContext(ValuesContext)
  
  const deleteRecipe = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id)
    setRecipes(updatedRecipes)
  }

  return (
    <div className={styles.recipe}>
      <p>{description}</p>
      <p>$ {amount.toFixed(2)}</p>
      <p className={styles.type}>{type === "income" ? <FiArrowUpCircle style={{color: "green"}} /> : <FiArrowDownCircle style={{color: "#E61c3b"}} />}</p>
      <p><BsFillTrashFill className={styles.trash} onClick={() => deleteRecipe(id)}/></p>
    </div>
  )
}

export default Recipe