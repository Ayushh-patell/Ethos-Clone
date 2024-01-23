import { createContext, useState } from "react";



const DarkModeContext =  createContext()
const DarkModeProvider = (props) => {
    const [Darkmode, setDarkmode] = useState(false)
    const toggleDarkmode = () => {
        setDarkmode(!Darkmode)
    }
    return (
        <DarkModeContext.Provider value={{Darkmode, toggleDarkmode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeContext, DarkModeProvider };
