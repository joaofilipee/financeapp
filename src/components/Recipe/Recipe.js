import styles from "./Recipe.module.css"

// icons
import { BsFillTrashFill } from "react-icons/bs"
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi"

const Recipe = () => {
  return (
    <div className={styles.recipe}>
      <p>Salário</p>
      <p>10000000000000000</p>
      <p className={styles.type}><FiArrowUpCircle /></p>
      <p className={styles.trash}><BsFillTrashFill /></p>
    </div>
  )
}

export default Recipe