import React from 'react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'



const Login = () => { 

   const {loading ,handelLogin}=useAuth()
    const [email, setemail] = useState("")
    const [password,setpasswrod]=useState("")

    const navigate = useNavigate()

    const handelsubmit = async(e)=>{

        e.preventDefault()

      // try {
      //   const response = await axios.post("http://localhost:3000/api/auth/login",{email,password},{withCredentials:true})

      //   if(response?.data?.user){
      //     console.log("the login is  successfull")
      //   }

      //   else{
      //     console.log("the login is not  successfull")
      //   }


      // } catch (error) {
      //  console.log(error?.response?.data?.message || "login failed")
      // }

  await handelLogin({email,password})

    navigate("/home")
    }

    if(loading){
        return(
          <main className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center px-4">
            <h1 className="text-xl font-semibold">Loading....</h1>
          </main>
        )
      }


   
    
   
    


  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 px-4 py-8 grid place-items-center">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      <section className="relative w-full max-w-md rounded-2xl border border-slate-200/20 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Welcome back</p>
        <h1 className="mt-2 mb-1 text-3xl sm:text-4xl font-bold tracking-tight">Sign In</h1>
        <p className="m-0 mb-6 text-sm text-slate-300">Access your account and continue your workflow.</p>

        <form className="grid gap-4" onSubmit={handelsubmit} action="">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="email">Email</label>
            <input className="w-full rounded-xl border border-slate-300/20 bg-slate-950/70 px-3 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/20" type="email" value={email} required onChange={(e)=>setemail(e.target.value)} id='email' name='email' placeholder='Enter your email address' />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="Password">Password</label>
            <input className="w-full rounded-xl border border-slate-300/20 bg-slate-950/70 px-3 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/20" type="Password" value={password} required onChange={(e)=>setpasswrod(e.target.value)} id='Password' name='Password' placeholder='Enter your password' />
          </div>

          <button className="mt-2 rounded-xl bg-emerald-300 px-4 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-200 active:scale-[0.99]" type="submit">Sign In</button>

          <p className="text-center text-sm text-slate-300">
            Don&apos;t have an account?{' '}
            <Link className="font-semibold text-emerald-300 hover:text-emerald-200" to="/register">
              Register
            </Link>
          </p>
        </form>
      </section>
    </main>
  )
}

export default Login