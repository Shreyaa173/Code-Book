import React from 'react'
import Navbar from './Navbar'
import Introduction from './Introduction'
import Projects from "./Projects";
import { Courses, Slideshow, Contact, Footer } from "./index";
function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Courses />
      <Projects />
      <Slideshow />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home