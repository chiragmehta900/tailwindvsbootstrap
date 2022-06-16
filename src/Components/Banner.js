import React from 'react'
import arrow_1 from '../Images/Banner/1.png'
import arrow_2 from '../Images/Banner/2.png'
import arrow_3 from '../Images/Banner/3.png'

const Banner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='relative'>
                <div className='flex'>
                    <div className='absolute flex items-start -left-28 -top-24'>
                        <h2>Awsome <br /> Feature</h2>
                        <img className='mt-10' src={arrow_1} alt="arrow_1" />
                    </div>
                    <div className='absolute -right-36 -top-20 flex items-start'>
                        <img className='mt-5' src={arrow_2} alt="arrow_2" />
                        <h2>Awsome <br /> Feature</h2>
                    </div>
                </div>
                <div>
                    <h2 className='text-5xl font-bold text-center capitalize mb-5'>Tailwindcss V/S <br /> bootstrap</h2>
                </div>
                <div className='flex items-end absolute -right-44'>
                    <img src={arrow_3} alt="arrow_3" />
                    <h2 className=''>Awsome Product <br /> Feature</h2>
                </div>
            </div>
        </div>
    )
}

export default Banner