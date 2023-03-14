import styles from "./Register.module.css"

// firebase
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/firebase"

// Hooks
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"

import { useValidateNewUser } from "../../hooks/useValidateNewUser"

const Register = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()

    const errorRef = useRef(null)
    const [error, setError] = useState(null)

    const setErrorInvisible = () => {

        setTimeout(() => {
            errorRef.current.style.display = "none"
        }, 2000)
    }

    const HandleSubmit = async(e) => {
        e.preventDefault()

       try {
        useValidateNewUser(userName, email, password, confirmPassword)
        await createUserWithEmailAndPassword(auth, email, password)
                .then(newUser => {
                    updateProfile(newUser.user, {
                        ...newUser,
                        displayName: userName
                    })
                })

        navigate("/login")

       } catch (error) {
            if(error.message.includes("/")){
                const errorMessage = error.message.split("/")[1].replace(')', "").split("-").join(" ")
                setError(errorMessage)
            }
            else {
                setError(error.message)
            }

            errorRef.current.style.display = "flex"
            setErrorInvisible()
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

                <div ref={errorRef} className={styles.error}>{error}</div>
                
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