import { useState } from "react"
import MyContext from "./MyContext"


const MyContextProvider = ({children}) =>{

    const [user,setUser] = useState("");
    return(
        <MyContext.Provider value={{}}>
        {children}
        
        </MyContext.Provider>
    )
}

export default MyContextProvider;