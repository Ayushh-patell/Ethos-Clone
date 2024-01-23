import { createContext, useState } from "react";

const NavMenuContext =  createContext()
const NavMenuProvider = (props) => {
 const [activeNav, setactiveNav] = useState(1);
     const toggleactiveNav = (num) => {
        setactiveNav(num)
    }
    return (
        <NavMenuContext.Provider value={{activeNav, toggleactiveNav}}>
            {props.children}
        </NavMenuContext.Provider>
    )
}

export { NavMenuContext, NavMenuProvider };
