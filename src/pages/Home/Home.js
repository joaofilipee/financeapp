import styles from "./Home.module.css"

// components
import Header from "../../components/Header/Header"
import Values from "../../components/Values/Values"
import Form from "../../components/Form/Form"

// context provider
import { ValuesContextProvider } from "../../context/ValuesContext"

const Home = () => {

  return (
    <div className={styles.main}>

      <Header />

      <main className={styles.datas}>
          <ValuesContextProvider>
            <div className={styles.components}>
              <Values />

              <Form />
            </div>
          </ValuesContextProvider>
        
      </main>

    </div>
  )
}

export default Home