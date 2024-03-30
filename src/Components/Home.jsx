import React, { useState, useEffect } from 'react'
import { FcNext } from "react-icons/fc";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrNext } from "react-icons/gr";


const images = [

    {
        url: "https://img.freepik.com/free-photo/fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai_188544-13382.jpg?t=st=1709722020~exp=1709725620~hmac=e274d3c1f80c488cf73567458df2acf098892d5c5f2d8f0350594279ae27a877&w=1060"
    },
    {
        url: "https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg?w=1060"
    },


    {
        url: "https://img.freepik.com/free-photo/grilled-meat-veggies-wooden-plate-generated-by-ai_188544-10123.jpg?t=st=1709722205~exp=1709725805~hmac=09548acf6adf2517a0e4efdab22b9f786dc64340bfdc07cffaed590e73f7ecf8&w=1060"
    },
    {
        url: "https://img.freepik.com/free-photo/young-waitress-setting-table_23-2147830607.jpg?t=st=1711448281~exp=1711451881~hmac=d92b22779878ba9d9408c322087590fd3ecf8cb5f0e3a2ea7a8bd86fefe1ca74&w=1060"
    },
    {
        url: "https://img.freepik.com/free-photo/man-having-glass-wine_107420-65895.jpg?t=st=1711449300~exp=1711452900~hmac=1092f72ec93b525b633c8f3b77d964641c37d1747f669ccec2a8d3b8def730e5&w=1060"
    },
    {
        url: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?t=st=1711448416~exp=1711452016~hmac=2ed50fcb786c23b3255d3f9151e627e77f0c93cc3c947951d322a1e323a1e3d8&w=1060"
    },  
    {
        url: "https://img.freepik.com/free-photo/sitting-table-with-chairs-yellow-sofa-restaurant-with-panoramic-view_114579-1523.jpg?t=st=1711449332~exp=1711452932~hmac=7208e20ac9326795357e6ec682619fd537abe2d6dd0c0825c9c22d05da91b615&w=996"
    }



]


const Home = () => {
    const [slider, setslider] = useState(0)
    const next = () => {

        setslider(slider === images.length - 1 ? 0 : slider + 1)
         

    }
    const prev = () => {

        setslider(slider === 0 ? images.length - 1 : slider - 1)
    }

    useEffect(() => {
        let interval = setTimeout(() => {
            next()
        }, 2000)
        return () => clearInterval(interval)


    }, [slider])

    return (
        <div>

            <div className=' w-[90vw] mx-auto h-[80vh] my-5   relative  '>

                {
                    images.map((img, index) => (
                        <div className={` ${slider === index ? "block" : "hidden"}    $  `} key={index}>
                            <img src={img.url} alt="" key={index} className=' w-full h-[80vh]  rounded-2xl  object-cover' />
                            <div className='flex items-center justify-center   '>
                                <p className='    mx-3  absolute top-[52%]   text-center  font-extrabold text-white text-[3vw]'>Welcome to the world testy food and fresh food</p>

                            </div>
                        </div>
                    ))
                }
                <div className=' w-full mx-auto h-[80vh] bg-black opacity-30 absolute top-0 right-0  rounded-2xl'></div>
                <div className=' flex  justify-between w-full  px-5 absolute top-[50%]   text-white'>
                    <MdArrowBackIosNew size={38} onClick={next} className='   ' />
                    <  GrNext size={35} onClick={prev} className=' text-white ' />





                </div>
            </div>
        </div>

    )






}

export default Home
