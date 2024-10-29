import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import { Courses, Slideshow, Contact, Footer } from "./index";
import Faq from "./Faq";

function Home() {
  return (
    <div>
        <Navbar />
        <Introduction />
        <Courses />
        <Slideshow />
        <Contact />
        <Faq />
        <Footer />
    </div>
  )
}

export default Home