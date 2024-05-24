
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LondingPage from './LondingPage'

function App() {


  return (
   <>
   <LondingPage></LondingPage>
   <BrowserRouter>
   <Routes>
    <Route path='/home'></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
