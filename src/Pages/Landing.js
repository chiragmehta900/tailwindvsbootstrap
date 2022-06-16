import React from 'react'
import Banner from '../Components/Banner'
import Conclusion from '../Components/Conclusion'
import Information from '../Components/Information'
import Install from '../Components/Install'

const Landing = () => {
    return (
        <>
            <section className='w-4/5 mx-auto md:mr-auto px-4'>
                <div className='text-white'>
                    <Banner />
                    <Information />
                    <Install />
                    <Conclusion />
                </div>
            </section>
        </>
    )
}

export default Landing