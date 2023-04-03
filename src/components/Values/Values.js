import styles from "./Values.module.css"

// icons
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi"
import { BsCurrencyDollar } from "react-icons/bs"

// hooks
import { useContext } from "react"

// context
import { ValuesContext } from "../../context/ValuesContext"

const Values = () => {
    
  const { incoming, expenses, total } = useContext(ValuesContext)

  return (
    <section className={styles.amounts}>

          <div className={styles.amount}>
            <div>
              <p className={styles.type}>Incoming</p>
              <p className={styles.icon}><FiArrowUpCircle /></p>
            </div>

            <div>
              <p className={styles.value}>
                <strong>$ {incoming.toFixed(2)}</strong>
              </p>
            </div>

          </div>

          <div className={`${styles.amount} ${styles.total}`}>
              <div>
                  <p className={styles.type}>Expenses</p>
                  <p className={styles.icon}><FiArrowDownCircle /></p>
              </div>

              <div>
                <p className={styles.value}>
                  <strong>$ {expenses.toFixed(2)}</strong>
                </p>
              </div>
          </div>

          <div className={styles.amount}>

              <div>
                <p className={styles.type}>Total</p>
                <p className={styles.icon}><BsCurrencyDollar /></p>
              </div>

              <div>
                <p className={styles.value}>
                  <strong>$ {total.toFixed(2)}</strong>
                </p>
              </div>

          </div>

        </section>
  )
}

export default Values