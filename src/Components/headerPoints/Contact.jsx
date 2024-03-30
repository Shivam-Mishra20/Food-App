import React from 'react'

const Contact = ({ dark }) => {
  return (
    <>
      <div className=' flex   items-center justify-center   h-[100vh] w-full      '>

        <div className='   px-[40px] flex-col  sm:flex-row  md:flex-row    w-[100%] flex items-center gap-5  justify-around   text-gray-300 text-xl'>

          <p className={` ${dark ? " text-yellow-300 shadow-sm" : "text-black"} max-w-[500px] w-[100%] text-justify   font-sans text-black font-extralight  text-sm  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}>In conclusion, food quality is a multifaceted concept that encompasses safety, nutrition, freshness, taste, and appearance. Ensuring high food quality is essential for our health, well-being, and enjoyment of food. By choosing fresh, .</p>

          <img src="https://img.freepik.com/free-photo/gourmet-italian-bolognese-pasta-with-fresh-parmesan-generated-by-ai_188544-9453.jpg?w=1060" alt="" className=' w-[300px]   rounded-full' />

        </div>



      </div>
    </>
  )
}

export default Contact