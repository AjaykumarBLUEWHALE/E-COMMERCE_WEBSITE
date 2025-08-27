import React from 'react'
import './App.css'
import IconBar from './components/IconBar'
import Logo from './components/Logo'
import Wlcm from './components/Wlcm'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Selection from './components/Selection'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import HoveringIcons from './components/HoveringIcons'  
import Home from './components/Home'
import Polo from './components/Polo'
import TShirts from './components/TShirts'
import Sweat from './components/Sweat'
import Jackets from './components/Jackets'
import Pants from './components/Pants'
import Para from './components/Para'
import Accessories from './components/Accessories'
import TopIcon from './components/TopIcon'
import Account from './components/Account'
import Save from './components/Save'
import Cart from './components/Cart'
const App = () => {
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar /><Home/> </>
    },{

      path:"/tshirts",
      element:<><Navbar 
/> <TShirts/></>
    },{
      path:"/polo",
      element:<><Navbar 
/>  <Polo/></>
    },{
      path:"/sweat",
      element:<><Navbar 
/>  <Sweat/></>
    },{
      path:"/pants",
      element:<><Navbar 
/>  <Pants/></>
    },{
      path:"/jacket",
      element:<><Navbar 
/>  <Jackets/></>
    },{
      path:"accessories",
      element:<><Navbar 
/>  <Accessories/></>
    },{path:"paradise",
      element:<><Navbar 
/>  <Para/></>
    },  {path:"/account",
      element:<><Account/></>
    },{
      path:"/wishlist",
      element:<><Save/></>
    },
    {
      path:"/cart",
      element:<><Cart/></>
    }
  ])

  return (
    <div className=''>

      <IconBar/>
      <HoveringIcons/>
      <Logo/>
<RouterProvider router={router} />
    
    </div>
  )
}

export default App