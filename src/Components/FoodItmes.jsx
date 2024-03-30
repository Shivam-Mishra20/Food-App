import React from 'react'
import foodData from './FoodList'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiStar } from "react-icons/hi";
import '../App.css'


const FoodItmes = ({handle}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className=' w-[90%]    my-10  flex  flex-col  gap-3 text-center justify-center ' >


            <Slider {...settings}>

                {foodData.map((item, id) => (
                    <div className='    ' key={id}>
                        <div><img src={item.url} alt="" className=' max-w-[150px] w-[100%]   h-[100px]  rounded-full mx-auto ' /></div>

                        <div className=' flex gap-1 m-4  justify-center text-l  shadow-2xl  shadow-yellow-400'>
                            <HiStar className=' text-yellow-500' />
                            <HiStar className=' text-yellow-500' />
                            <HiStar className=' text-yellow-500' />
                            <HiStar className=' text-yellow-500' />
                            <HiStar />


                        </div>

                        <h2 className=' text-black  font-extrabold  '>{item.title}</h2>

                        <button className=' my-2 px-4 py-2 rounded-sm bg-black text-white' onClick={handle}>Add Cart</button>



                    </div>


                ))}

            </Slider>
        </div>











    )
}

export default FoodItmes
