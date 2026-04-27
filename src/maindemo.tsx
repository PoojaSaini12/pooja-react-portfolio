import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Appdemo from './Appdemo.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Experience from './pages/Experience.tsx'
import Projects from './pages/Projects.tsx'
import Services from './pages/Services.tsx'
import Error404 from './pages/Error404.tsx'
import Blog from './layout/Blog.tsx'
import './Main.css'



let allRoutes=createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },

    {
      path: 'about-me',
      element: <About/>
    },

    {
      path: 'experience',
      element: <Experience/>
    },

    {
      path: 'projects',
      element: <Projects/>
    },

    {
      path:'services',
      element:<Services/>
    }

    ,
    {
      path:'appdemo',
      element:<Appdemo/>
    },

    {
      path:'*',
      element:<Error404/>
    },

    {
      path:'blog',
      element:<Blog/>
    }
  ]
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={allRoutes}/>
  </StrictMode>,
)
