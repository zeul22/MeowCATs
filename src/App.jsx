import { Button } from '@chakra-ui/react'
import Header from './components/Header'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Portfolio from './components/Portfolio'
import Achievements from './components/Achievements'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/workexp" element={<Portfolio />}/>
        <Route path="/achieve" element={<Achievements />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </ Routes>
      <Footer />
    </ Router>
    </>
  )
}

export default App
