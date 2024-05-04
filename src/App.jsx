import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Details from './pages/Details'
import Cart from './pages/Cart'

function App() {
  const [search,setSearch]=useState("")//search
  const [cnt,setCnt]=useState(0)
  // console.log(search);
  return (
    <>
     <BrowserRouter>
     <Nav setSearch={setSearch} cnt={cnt}/>{/*value passing */}
     <Routes>
      <Route path = '/' element = {<Home search={search}/>}/>
      <Route path = '/details/:id' element = {<Details setCnt={setCnt} cnt={cnt}/>}/>
      <Route path = '/cart' element = {<Cart setCnt={setCnt} cnt={cnt}/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
