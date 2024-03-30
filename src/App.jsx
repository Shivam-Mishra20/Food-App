import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css'
import Delivery from './Components/Delivery'
import FoodItmes from './Components/FoodItmes'
import OurFoods from './Components/OurFoods'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Page_1 from './Pages/Page_1'
import About from './Components/headerPoints/About'
import Contact from './Components/headerPoints/Contact'
const App = () => {
   const [count, setCount] = useState(0)
   const [dark, setdark] = useState(false)
   const handleAdd = () => {
      setCount(count + 1)
   }
   const toggleDarkMode = () => {
      setdark(!dark);
   };
   return (

      <>
         <div className={` min-h-[100vh] h-[100%] ${dark ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <Header cartNo={count} setCartno={setCount} dark={dark} toggle={toggleDarkMode} />
             

            <Routes>

               <Route path='/' element={<Page_1 handle={handleAdd} dark={dark} toggle={toggleDarkMode} />} />
               <Route path='/details' element={<Delivery />} />
               <Route path='/fooditems' element={<FoodItmes handle={handleAdd} />} />
               <Route path='/ourfood' element={<OurFoods dark={dark} handle={handleAdd} />} />
               <Route path='/about' element={< About dark={dark} />} />
               <Route path='/contact' element={< Contact dark={dark} />} />


            </Routes>
         </div>
      </>
   )
}

export default App