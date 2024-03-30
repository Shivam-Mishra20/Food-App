import React, { useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";

import { CiLight } from "react-icons/ci";




const Header = ({ cartNo, dark, toggle }) => {
    const [openMenu, setMenu] = useState(false)

    return (
        <div className={` ${dark ? 'bg-gray-900 text-white' : "bg-gray-300 bg-opacity-90"}  flex items-center justify-between text-l px-4 py-2 h-[ 70px] bg-gray-200   relative`}>
            <div className=' w-10 h-10  flex items-center gap-2'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?t=st=1709715559~exp=1709719159~hmac=1eb66eb1cf6c3f201cf327246fc35a6b17f60191cf73496e21f232af3cfc8706&w=740" alt="Logo" className=' rounded-full' />
                <p className=' text-l'>Yumi<span className='  text-yellow-400'>food</span></p>
            </div>
            <div className='  '>


                <ul className=' sm:flex  hidden    gap-4 transition-all' >
                    <li className=' hover:text-yellow-300'> <Link to={'/'} >Home  </Link></li>
                    <li className=' hover:text-yellow-300'><Link to={'/about'} > About </Link></li>
                    <li className=' hover:text-yellow-300'><Link to={'/contact'} >contact  </Link></li>
                    <li className=' hover:text-yellow-300'><Link to={'/details'} >details  </Link></li>
                </ul>
            </div>

            {openMenu ? (
                <div className={` ${dark ? " bg-[#111127]  text-white" : "bg-[#E3E1D9]"}   w-[300px]  min-h-[100vh] h-[100%] absolute  top-0 right-0  text-center flex items-center justify-center z-20 `}>
                    <RxCross2 size={25} className=' absolute top-2 right-2 cursor-pointer ' onClick={() => setMenu(!openMenu)} />

                    <ul className=' flex   flex-col gap-10 transition-all' >
                        <li className=' hover:text-[#F5DD61]'>Home</li>
                        <li className=' hover:text-[#F5DD61]'>About</li>
                        <li className=' hover:text-[#F5DD61]'>Contact</li>
                        <li className=' hover:text-[#F5DD61]'>Details</li>
                    </ul>
                </div>

            ) : ""}
            <div className=' flex items-center justify-center gap-4'>
                <GiHamburgerMenu size={20} className='   cursor-pointer   block sm:hidden' onClick={() => setMenu(!openMenu)} />
                <div className=' flex items-center gap-2 justify-center text-xl'>
                    <div className=' flex items-center '>
                        <IoMdCart size={20} className=' cursor-pointer' />
                        <p > {cartNo} </p>

                    </div>

                    <div onClick={toggle} className=' text-2xl'  >



                        {dark ? <MdDarkMode className=' text-xl' /> : <CiLight />
                        }

                    </div>


                </div>





            </div>

        </div>
    )
}

export default Header


