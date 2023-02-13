import styles from "./Register.module.css"

// components
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div id={styles.register}>

        <div className={styles.register}>
            <section className={styles.content}>
                
                <h1>Sign-Up</h1>

                <p>Create your new account.</p>

                <form className={styles.my_form}>
                    <label className={styles.label}>
                        <span>Name<span className={styles.app_color}>*</span> </span>
                        <input type="text" />
                    </label>
                    
                    <label className={styles.label}>
                        <span>E-Mail<span className={styles.app_color}>*</span></span>
                        <input type="email" />
                    </label>

                    <label className={styles.label}>
                        <span>Password<span className={styles.app_color}>*</span></span>
                        <input type="password"/>
                    </label>

                    <label className={styles.label}>
                        <span>Confirm Password<span className={styles.app_color}>*</span></span>
                        <input type="password"/>
                    </label>

                    <button className={styles.submit} type="submit">Sign Up</button>
                </form>
                
            </section>
            <aside className={styles.aside_content}>
                <div>
                    <h1>Hello, Friend!</h1>
                    <div></div>
                </div>
                <p>Do you already have an account? </p>

                

                <button className={styles.login} type="submit">
                    <Link to="/login">Log in</Link>
                </button>
            </aside>
        </div>

    </div>
  )
}

export default Register