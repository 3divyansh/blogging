

import Footer from '@/components/pages/Footer'
import HomePage from "@/components/pages/homePage"
import Nav from '@/components/pages/Nav'


import React from 'react'

export default  function Home() {
  
  return (
    <>
    <div>
    <Nav/>
      <HomePage/>
      <Footer />
    </div>
    
    </>
  )
}
