import React from 'react'
import { Link } from 'react-router-dom'

const Delivery = () => {
    return (
        <div>
            <div className=' w-[80%] mx-auto my-20'>
                <h2 className=' text-center  text-[#5AE4A8]  font-semibold'>GET THE APP ON</h2>
                <div className=' flex flex-col md:flex-row items-center justify-evenly  '>
                    <div>
                        <img src="https://img.freepik.com/free-vector/order-food-concept-illustration_114360-6890.jpg?t=st=1709974517~exp=1709978117~hmac=34dec2736769b3943eb4337f12629e4e8f0fee2273245cf88837855dc80953ad&w=740" alt="" className=' w-[50%] ' />

                    </div>
                    <div  >
                        <h2 className=' text-4xl font-extrabold'>
                            YummiTummi
                        </h2>
                        <p className=' text-xl  text-yellow-400 my-2  '>
                            Get the app on i store and play store
                        </p>


                        <Link to="https://www.apple.com/app-store/" target="_blank">
                            <button className=' py-4 px-6 bg-black border border-white text-white rounded-xl'>


                                Get the app
                            </button>

                            </Link >


                    </div>
                

                </div>
            </div>

        </div>
    )
}

export default Delivery
