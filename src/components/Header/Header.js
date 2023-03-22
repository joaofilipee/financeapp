import styles from "./Header.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"

// icons
import { FiLogOut } from "react-icons/fi"

// context
import { useContext } from "react"
import { UserContext } from "../../context/UserContext" 

const Header = () => {

    const { user } = useContext(UserContext)

    return (
        <header className={styles.header}>

            <div className={styles.header_content}>

            <h1 className={styles.home_title} >Hello, {auth.currentUser.displayName ? `${auth.currentUser.displayName}!` : `${user}!`}</h1>

            <div className={styles.signout_btn} onClick={() => signOut(auth)}><FiLogOut /></div>
            </div>

            <div className={styles.control_finances}>
            <h2>Control your finances</h2>
            </div>

        </header>
    )
}

export default Header