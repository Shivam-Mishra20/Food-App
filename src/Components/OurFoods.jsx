import React, { useState } from 'react'
import foodData from './FoodList'
import { Link } from 'react-router-dom';
import Menu from './Menuapi';
import MenuCard from './MenuCard';


const uniqueList = [
      ...new Set(Menu.map((curelm) => {
            return curelm.category
      })
      ),
      "All"
]

console.log(uniqueList)

const OurFoods = ({ handle, dark }) => {

      const [Menudata, setMenu] = useState(Menu)

      const [MenuList, setMenuList] = useState(uniqueList)


      const filterItem = (category) => {
            if (category === "All") {
                  setMenu(Menu)
                  return

            }
            const updatedlist = Menu.filter((curElem) => {
                  return curElem.category === category
            });
            setMenu(updatedlist);
      };

      return (
            <div>

                  <div className='  flex items-center justify-center flex-col '>

                        <h2 className=' text-center text-3xl text-gray-500  mb-10'>Our foods 🍕</h2>

                        <div>

                              {MenuList.map((elm, i) => {
                                    return <>

                                          <span className='  block my-3  text-center
                                           sm:inline-flex  px-6 rounded-3xl  mx-4   py-4   text-orange-500 bg-black      '>

                                                <a onClick={() => filterItem(elm)} >{elm}</a>

                                          </span>




                                    </>



                              })}
                        </div>
                  </div>





                  <div className='    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[90%] mx-auto my-4'>

                        {/* {
                              foodData.map((item, i) => (
                                    <div key={i}>
                                          <Link to={'/ourfood'}>
                                                <div className={` flex flex-col justify-center  items-center mx-4 my-3 ${dark ? ' bg-[#D6F6E7] text-black' : ' bg-gray-400'}   shadow-xl min-h-[250px]  rounded-xl h-[100]`}>
                                                      <img src={item.url} alt="" className=' max-w-[90px] w-[100%] rounded-xl' />
                                                      <h4>{item.title}</h4>
                                                      <p className=' p-2 my-1  text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis earum modi   Earum.</p>
                                                      <button className={`${dark ? "bg-[#5AE4A8] text-white" : "bg-black"}  px-6 py-2 rounded-[5px] font-extralight text-white m-2 `} onClick={handle}> Add Cart </button>
                                                </div>
                                          </Link>


                                    </div>




                              ))
                        } */}

                        <MenuCard menuData={Menudata}  dark={dark} handle={handle}/>


                  </div>



            </div >
      )
}

export default OurFoods
