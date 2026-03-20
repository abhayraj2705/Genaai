import { useContext } from "react";
import { Authcontext } from "../auth.context.jsx";
import { login,register,logout } from "../services/auth.api";


export const useAuth = ()=>{

    const context = useContext(Authcontext)

    if (!context) {
        throw new Error("useAuth must be used within Authprovider")
    }

    const{user,setuser,loading,setloading}=context

    const handelLogin =async({email, password})=>{

        setloading(true)

       const data = await login({email,password})

       setuser(data.user)
       setloading(false)
    }

    const handelRegister =async ({username, email, password})=>{

        setloading(true)

        const data = await register({username,email,password})

        setuser(data.user)

        setloading(false)
    }


    const handelLogout = async ()=>{
        setloading(true)
        const data = await logout()
        setuser(null)
        setloading(false)

    }

    return {user,loading,handelRegister,handelLogin,handelLogout}
}

