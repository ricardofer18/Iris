import { Route, Routes } from "react-router-dom"
import Lagunas from "./components/Lagunas"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/lagunas' element={<Lagunas />}></Route>
        <Route path="/asdfa" elem></Route>
      </Routes>
    </div>
  )
}

export default App
