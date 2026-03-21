import { createContext, useState , useEffect} from "react";
import { getme } from "./services/auth.api";




export const Authcontext = createContext()


export const Authprovider = ({ children })=>{

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    useEffect(() => {
     
        const getAndSetuser = async()=>{
            try {
                const data = await getme()
                setuser(data.user)
            } catch (error) {
                setuser(null)
            } finally {
                setloading(false)
            }
        }

        getAndSetuser()
    }, [])
    

    return (
       <Authcontext.Provider value={{user,setuser,loading,setloading}} >
        {children}
       </Authcontext.Provider>
    )
}