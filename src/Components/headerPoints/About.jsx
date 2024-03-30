import React from 'react'

const About = ({dark}) => {
  return (
    <>
    <div className=' flex items-center justify-center  h-[100vh] w-full    '> 
 
        <div className='     w-[100%] flex flex-col justify-evenly  sm:flex-row md:flex-row items-center gap-5     mx-auto px-[40px]  text-black  '>

        <p className={ ` ${dark?" text-yellow-300 shadow-lg":"text-black"} max-w-[500px] w-[100%] text-justify   font-sans text-black font-extralight  text-[10px]  sm:text-lg md:text-xl lg:text-2xl xl:text-1xl`}>Introduction:
Food is an essential part of our daily lives, providing us with the nutrients and energy we need to thrive. However, not all food is created equal. The quality of our food plays a crucial role in our health, well-being, and overall satisfaction. In this article, we will explore the importance of food quality, including its impact on safety, nutrition, and enjoyment.
  </p>

        <img src="https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg?w=1060" alt=""  className=' max-w-[400px] max-h-[500px] h-[100%]  w-[100%] rounded-xl shadow-2xl'/ >

        </div>



    </div>
    </>
  )
}

export default About