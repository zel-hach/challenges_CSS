
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LondingPage from './LondingPage'
import Home from './Components/Home/Home'
import Login from './Components/Login/login'
import Register from './Components/Login/Register'

function App() {


  return (
   <>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<LondingPage></LondingPage>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
          </Routes>
        </HashRouter>
   </>
  )
}

export default App
