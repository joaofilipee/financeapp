import styles from "./Form.module.css"

const Form = () => {
  return (
    <form className={styles.my_form}>
        <label>
            <p>Description</p>
            <input type="text" />
        </label>

        <label>
            <p>Amount</p>
            <input type="text" />
        </label>

        <div className={styles.type}>
            <label>
                <input type="radio" name="type" />
                <p>Income</p>
            </label>

            <label>
                <input type="radio" name="type" />
                <p>Expense</p>
            </label>
        </div>

        <button className={styles.addBtn}>Add</button>
    </form>
  )
}

export default Form