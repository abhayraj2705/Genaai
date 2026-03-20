import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './features/auth/pages/Login.jsx'
import Register from './features/auth/pages/Register.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router'
import { Authprovider } from './features/auth/auth.context.jsx'
import { Homepage } from './features/auth/pages/Homepage.jsx'
import Protected from './features/auth/components/Protected.jsx'


const router = createBrowserRouter(createRoutesFromElements(

   <Route>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  
  <Route  path='/home' element={<Protected><Homepage/></Protected>}/>
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
    <RouterProvider router={router}/>
   </Authprovider>
  </StrictMode>,
)
