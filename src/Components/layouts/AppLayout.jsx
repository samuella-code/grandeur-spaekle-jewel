import React from 'react'
import Navbar from '../general/Navbar'
import Footer from '../general/Footer'

const AppLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>
      {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout