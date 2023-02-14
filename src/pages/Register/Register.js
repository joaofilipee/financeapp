import styles from "./Register.module.css"

// firebase
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase"

// Hooks
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { useValidateNewUser } from "../../hooks/useValidateNewUser"

const Register = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()


    const HandleSubmit = async(e) => {
        e.preventDefault()

       try {
        useValidateNewUser(userName, email, password, confirmPassword)
        await createUserWithEmailAndPassword(auth, email, password)
                .then(newUser => newUser.user.displayName = userName)

        navigate("/login")

       } catch (error) {
        console.log(error)
       }
    }

    const handleLogin = () => {
        navigate("/login")
    }

  return (
    <div id={styles.register}>

        <div className={styles.register}>
            <section className={styles.content}>
                
                <h1>Sign-Up</h1>

                <p>Create your new account.</p>

                <form onSubmit={HandleSubmit} className={styles.my_form}>
                    <label className={styles.label}>
                        <span>Name<span className={styles.app_color}>*</span> </span>
                        <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
                    </label>
                    
                    <label className={styles.label}>
                        <span>E-Mail<span className={styles.app_color}>*</span></span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </label>

                    <label className={styles.label}>
                        <span>Password<span className={styles.app_color}>*</span></span>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                    </label>

                    <label className={styles.label}>
                        <span>Confirm Password<span className={styles.app_color}>*</span></span>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"/>
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

                <button onClick={handleLogin} className={styles.login_btn} type="submit">
                    Log In
                </button>
            </aside>
        </div>

    </div>
  )
}

export default Register