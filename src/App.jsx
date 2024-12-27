import { useState } from 'react'
import { Home } from './pages/Home'
import { Navbar} from './components/Navbar'
import { Register } from './pages/Register'
import {Login} from './pages/Login'
import {Logout} from './pages/Logout'
import { Search } from './components/Search'
import {Silder} from './components/Silder'
import {Footer} from './components/Footer'
import { Upload } from './components/upload'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Slides = [
        {
            src: "/images/carousel1.jpg",
            alt: "slider image"
        },
        {
            src: "/images/carousel2.jpg",
            alt: "slider image"
        },
        {
            src: "/images/carousel3.jpg",
            alt: "slider image"
        }
    ]

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Navbar />
    <Silder data={Slides}/>
    <Home />
    <Search />
    <Footer />
    </>
  },
  {
    path: '/upload',
    element: <>
    <Navbar />
    <Silder data={Slides}/>
    <Upload />
    <Footer />
    </>
  },
  {
    path: '/register',
    element: <>
    <Navbar />
    <Register />
    </>
  },
  {
    path: '/login',
    element: <>
    <Navbar />
    <Login />
    </>
  },
  {
    path: '/logout',
    element: <>
    <Logout />
    </>
  },
]);

function App() {
const [count, setCount] = useState(0)

return (
  <>
    <RouterProvider router={router}/>
  </>
  )
}

export default App