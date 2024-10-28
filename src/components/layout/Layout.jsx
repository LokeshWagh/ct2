import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
// kuth pann layout used kela t nav bar same rahin footer same rahin an madattla part children prop through changed hoin
function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout