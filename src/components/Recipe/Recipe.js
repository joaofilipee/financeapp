import styles from "./Recipe.module.css"

// icons
import { BsFillTrashFill } from "react-icons/bs"
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi"

const Recipe = ({id, description, amount, type}) => {
  return (
    <div className={styles.recipe}>
      <p>{description}</p>
      <p>$ {amount}</p>
      <p className={styles.type}><FiArrowUpCircle /></p>
      <p><BsFillTrashFill className={styles.trash} /></p>
    </div>
  )
}

export default Recipe