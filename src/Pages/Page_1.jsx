import React from 'react'
import Header from '../Components/Header'
import Home from '../Components/Home'
import FoodItmes from '../Components/FoodItmes'
 
import OurFoods from '../Components/OurFoods'
import Footer from '../Components/Footer'
import Delivery from '../Components/Delivery'

const Page_1 = ({handle ,  dark , toggle }) => {
  return (
    <>
     
    <Home/>
    <FoodItmes handle={handle}/>
    <Delivery/>
    
    <OurFoods  handle={handle} dark={dark} toggle={toggle}/>

    <Footer/>
    
    </>
  )
}

export default Page_1