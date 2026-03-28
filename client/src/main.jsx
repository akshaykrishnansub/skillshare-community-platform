import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router=createBrowserRouter([
  {
    path:"/",element:<App />,
    children:[
      {path:"/",element:<Home />},
      {path:"/register",element:<Register />},
      {path:"/login",element:<Login />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
