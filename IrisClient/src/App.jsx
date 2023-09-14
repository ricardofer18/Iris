import { Route, Routes } from "react-router-dom"
import Lagunas from "./components/Lagunas"
import Navbar from "./components/Navbar"
import Realtime from "./components/Realtime"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/lagunas' element={<Lagunas />}></Route>
        <Route path="/firebase-test" element={<Realtime />}></Route>
      </Routes>
    </div>
  )
}

export default App
