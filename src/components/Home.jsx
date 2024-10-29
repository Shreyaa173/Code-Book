import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import { Courses, Slideshow, Contact, Footer } from "./index";
function Home() {
  return (
    <div>
        <Navbar />
        <Introduction />
        <Courses />
        <Slideshow />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home