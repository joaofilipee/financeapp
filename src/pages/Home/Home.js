import styles from "./Home.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"

const Home = () => {
  return (
    <div>
      <h1 onClick={() => signOut(auth)}>Olá</h1>
    </div>
  )
}

export default Home