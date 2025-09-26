import React from 'react'
import Wlcm from './Wlcm'
import Selection from './Selection'
import Gallery from './Gallery'
import Footer from './Footer'
const Home = () => {
  return (
    <div className='overflow-hidden'>
          <Wlcm/>
  <Selection/>
  <Gallery/>
  <Footer/>
    </div>
  )
}

export default Home