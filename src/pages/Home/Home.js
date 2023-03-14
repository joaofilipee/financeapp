import styles from "./Home.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"

// icons
import { FiLogOut } from "react-icons/fi"

const Home = () => {

  return (
    <div>

      <header className={styles.header}>
        <div className={styles.header_content}>
          <h1 className={styles.home_title} >Hello, {auth.currentUser.displayName}!</h1>

          <div className={styles.signout_btn} onClick={() => signOut(auth)}><FiLogOut /></div>
        </div>
      </header>


    </div>
  )
}

export default Home