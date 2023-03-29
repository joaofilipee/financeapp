import styles from "./Recipes.module.css"

// recipe component
import Recipe from "../Recipe/Recipe"

// context
import { useContext } from "react"
import { ValuesContext } from "../../context/ValuesContext"

const Recipes = () => {

  const { recipes } = useContext(ValuesContext)


  return (
    <div className={styles.recipes}>
        
      <div className={styles.header}>
        <p>
          <strong>Description</strong>
        </p>
        <p>
          <strong>Amount</strong>
        </p>
        <p className={styles.type}>
          <strong>Type</strong>
        </p>
      </div>
      
      {recipes.map(recipe => <Recipe key={recipe.id} description={recipe.description} id={recipe.id} type={recipe.type} amount={recipe.amount} />)}
          
    </div>
  )
}

export default Recipes