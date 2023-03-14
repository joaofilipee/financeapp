import styles from "./Home.module.css"

// firebase
import { auth } from "../../firebase/firebase"
import { signOut } from "firebase/auth"

// context
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"


const Home = () => {

  // Current user
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1 onClick={() => signOut(auth)}>Olá {user.displayName}</h1>
    </div>
  )
}

export default Home