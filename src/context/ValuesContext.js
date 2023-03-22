import { useState } from "react";
import { createContext } from "react";

export const ValuesContext = createContext()

export const ValuesContextProvider = ({children}) => {
    const [incoming, setIncoming] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [total, setTotal] = useState(0)
    const [recipes, setRecipes] = useState([])

    return (
        <ValuesContext.Provider 
        value={{incoming, setIncoming, expenses, setExpenses, total, setTotal, recipes, setRecipes}}>
            
            {children}
        </ValuesContext.Provider>
    )
}
