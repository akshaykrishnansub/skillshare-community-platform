import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

const router=createBrowserRouter([
  {
    path:"/",element:<App />,
    children:[
      {path:"/",element:<Home />},
      {path:"/register",element:<Register />},
      {path:"/login",element:<Login />},
      {path:"/dashboard",element:(
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      )}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
