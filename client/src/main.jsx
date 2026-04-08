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
import Profile from './pages/Profile.jsx'
import CreateCourse from './pages/CreateCourse.jsx'
import AllCourses from './pages/AllCourses.jsx'
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
      )},
      {path:"/profile",element:(
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      )},
      {path:"/create-course",element:(
        <ProtectedRoute>
          <CreateCourse />
        </ProtectedRoute>
      )},
      {path:"/all-courses",element:(
        <AllCourses />
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
