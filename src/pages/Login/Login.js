import styles from "./Login.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"


// Hooks
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(null)
    const errorRef = useRef(null)


    const navigate = useNavigate()

    const setErrorInvisible = () => {

        setTimeout(() => {
            errorRef.current.style.display = "none"
        }, 2000)
    }


    const handleSignUp = () => {
        navigate("/register")
    }

    const handleLogin = async(e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)

            navigate("/")

        } catch (error) {

            const errorMessage = error.message.split("/")[1].replace(')', "").split("-").join(" ")

            setError(errorMessage)
            errorRef.current.style.display = "flex"
            setErrorInvisible()
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

            <div ref={errorRef} className={styles.error}>{error}</div>
            
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