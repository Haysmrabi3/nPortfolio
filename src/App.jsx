import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import CanvasBackground from './Components/CanvasBackground/CanvasBackground'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Courses from './Components/Courses/Courses'
import Contacts from './Components/Contacts/Contacts'
import Tabs from './Components/Tabs/Tabs'

function App() {
  return (
    <>
      <CanvasBackground /> 
      <NavBar />
      <Header />
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Tabs/>
      <Courses/>
      <Contacts/>
      </>
  )
}

export default App
