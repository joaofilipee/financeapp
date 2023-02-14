import styles from "./Login.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


// Hooks
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"

// context
import { UserContext } from "../../context/UserContext"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const navigate = useNavigate()


    const handleSignUp = () => {
        navigate("/register")
    }

    const handleLogin = async(e) => {
        e.preventDefault()

        try {
            
            await signInWithEmailAndPassword(auth, email, password)
                .then(res => setUser(res.user))

            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div id={styles.login}>

    <div className={styles.login}>
        <section className={styles.content}>
            
            <h1>Sign-In</h1>

            <p>Log In to your account.</p>

            <form onSubmit={handleLogin} className={styles.my_form}>
               
                <label className={styles.label}>
                    <span>E-Mail<span className={styles.app_color}>*</span></span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                </label>

                <label className={styles.label}>
                    <span>Password<span className={styles.app_color}>*</span></span>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                </label>

                <button className={styles.submit} type="submit">Sign In</button>
            </form>
            
        </section>
        <aside className={styles.aside_content}>
            <div>
                <h1>Hello, Friend!</h1>
                <div></div>
            </div>
            <p>Don't have an account? </p>

            

            <button onClick={handleSignUp} className={styles.login_btn} type="submit">
                Sign Up
            </button>
        </aside>
    </div>

</div>
  )
}

export default Login