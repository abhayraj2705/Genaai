import React from 'react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from "react-router";

const Register = () => {
  const {loading,handelRegister}=useAuth()
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")



  const handelSubmit = async (e)=>{
    e.preventDefault()


    await handelRegister({username,email,password})
    


  }

  if(loading){

    return (
      <main className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center px-4">
        <h1 className="text-xl font-semibold">loading for the register</h1>
      </main>
    )
  }
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 px-4 py-8 grid place-items-center">
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />

      <section className="relative w-full max-w-md rounded-2xl border border-slate-200/20 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Create account</p>
        <h1 className="mt-2 mb-1 text-3xl sm:text-4xl font-bold tracking-tight">Register</h1>
        <p className="m-0 mb-6 text-sm text-slate-300">Set up your profile to get started in seconds.</p>

        <form className="grid gap-4" action="" onSubmit={handelSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="username">Username</label>
            <input className="w-full rounded-xl border border-slate-300/20 bg-slate-950/70 px-3 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/20" type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Enter your username' id='username' required name='username' />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="email">Email</label>
            <input className="w-full rounded-xl border border-slate-300/20 bg-slate-950/70 px-3 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/20" type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter your email' id='email' required name='email' />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="password">Password</label>
            <input className="w-full rounded-xl border border-slate-300/20 bg-slate-950/70 px-3 py-3 text-slate-100 placeholder:text-slate-400 outline-none transition focus:border-emerald-300/70 focus:ring-4 focus:ring-emerald-300/20" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Enter your password' id='password' required name='password' />
          </div>

          <button className="mt-2 rounded-xl bg-emerald-300 px-4 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-200 active:scale-[0.99]" type="submit">Create Account</button>

          <p className="text-center text-sm text-slate-300">
            Already have an account?{' '}
            <Link className="font-semibold text-emerald-300 hover:text-emerald-200" to="/login">
              Login
            </Link>
          </p>
        </form>
      </section>
    </main>
       
       
  
  )
}

export default Register