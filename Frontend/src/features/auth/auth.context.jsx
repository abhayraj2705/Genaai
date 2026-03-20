import { createContext, useState , useEffect} from "react";
import { getme } from "./services/auth.api";




export const Authcontext = createContext()


export const Authprovider = ({ children })=>{

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
     
        const getAndSetuser = async()=>{
            const data = await getme()
            setuser(data.user)
            setloading(false)
        }

        getAndSetuser()
    }, [])
    

    return (
       <Authcontext.Provider value={{user,setuser,loading,setloading}} >
        {children}
       </Authcontext.Provider>
    )
}