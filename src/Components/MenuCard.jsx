import React from 'react'
import './Resturant.css'
import { Link } from 'react-router-dom';

const MenuCard = ({ handle ,menuData, dark }) => {
    console.log(menuData);


    return (

        <>
            <section className="     sectionss  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {menuData.map((curElm) => {
                    const { id, image, name, category, description } = curElm;

                    return (
                        <>

                            <div className="  border  border-purple-500   p-2  m-3 text-white " key={id}>
                                <Link to={'/ourfood'}>
                                    <div className={`cardbox ${dark ? "bg-gray-800 text-black " : " bg-black"}  `}>
                                        <div className="card-bodyss">
                                            <span className="card-number card-circle subtle " >{id}</span>
                                            <span className="card-author subtle">{name}</span>
                                            <h2 className="card-title text-3xl font-bold underline text-purple-700">{name}</h2>
                                            <span className="card-description subtle">
                                                {description}
                                            </span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        <img src={image} />

                                        <span className="card-tag  subtle" onClick={handle}> Add To Cart</span>
                                    </div>
                                </Link>
                            </div>

                        </>
                    );

                })}
            </section >

            {/* <section className='main-card--cointainer'>
        {menuData.map((curElm, key) => {
        const { id,image, name, category, description } = curElm;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle" >{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title text-3xl font-bold underline text-purple-700">{name}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} />
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          )
        })}

      </section> */}
        </>



    );


};

export default MenuCard