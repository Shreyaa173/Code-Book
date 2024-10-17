import './App.css'
import {Home,Courses,Slideshow,Contact,Footer} from './components/index'
import Books from './components/Books'
function App() {
  return (
    <div>
        <Home />
        <Courses />
        <Books />
        <Slideshow />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
