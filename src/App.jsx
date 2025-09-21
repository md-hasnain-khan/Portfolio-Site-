import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'
import Articles from './Pages/Articles'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"; 
import Project from './Pages/Project'
import Footer from './components/Footer'
function App() {

  return (
    <>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
  <Route path='/articles' element={<Articles/>}/>
  <Route path='/course' element={<Course/>}/>
    <Route path='/about' element={<About/>}/>

  </Routes>

<Footer/>


    </>
  )
}

export default App
