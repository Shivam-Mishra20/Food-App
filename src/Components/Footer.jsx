import React from 'react'
import { IoFastFood } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <div className=' '>
                <div className='  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  bg-black text-white py-10 px-20   '>
                    <div className=' flex flex-col'>
                        <div className=' flex gap-1'>
                            <span><IoFastFood />
                            </span>
                            <p>yumiTumy</p>
                        </div>
                        <div>
                            <p>© 2023 Bundl Technologies</p>
                            <p>Pvt. Ltd</p>
                        </div>


                    </div>
                    <div className=' flex flex-col gap-3'>
                        <h3>Company</h3>
                        <hr  className=' mr-3'/>
                        <p>About</p>
                        <p>VCareers</p>
                        <p>Team</p>
                        <p>one</p>
                        <p>Instamart</p>
                    </div>
                    <div>
                        <div className=' mb-4'>
                            <h3>Contact Us</h3>
                            <p>Help & Support</p>
                            <p>Partner with us</p>
                            <p>Ride with Us</p>


                        </div>
                        <div>
                            <h3>Legal Us</h3>
                            <p>Terms & conditions</p>
                            <p> Cookie policies</p>
                            <p>Ride with Us</p>

                        </div>
                    </div>
                    <div >

                        <h3>We deliver to:
                        </h3>
                        <p>banglore</p>
                        <p>  gurgaon</p>
                        <p> DElhi</p>
                        <p> Mumbai</p>

                        <div className=' mt-10    text-center'>
                            <span className='      py-4 px-10 rounded-lg border-white border'>589 City</span>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
