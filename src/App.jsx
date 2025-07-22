import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'


function App() {
  

  return (
    <div  className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
