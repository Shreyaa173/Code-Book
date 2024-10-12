import '../App.css'
import Home from '../components/Home'
import Courses from '../components/Courses'
import Slideshow from '../components/Slideshow'
import Footer from '../components/Footer'
function home() {
  return (
    <div>
        <Home></Home>
        <Courses></Courses>
        <Slideshow></Slideshow>
        <Footer></Footer>
    </div>
  )
}

export default home;
