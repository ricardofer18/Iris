import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
