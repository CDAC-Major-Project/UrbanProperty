import { Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'

function App() {
  

  return (
    <div  className="w-full min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
