import React from 'react'
import Banner from '../Components/Banner'
import Comparison from '../Components/Comparison'
import Conclusion from '../Components/Conclusion'
import FrameworkExample from '../Components/FrameworkExample'
import Information from '../Components/Information'
import Install from '../Components/Install'

const Landing = () => {
    return (
        <>
            <section>
                <div className='text-white'>
                    <Banner />
                    <div className='w-4/5 mx-auto md:mr-auto px-4'>
                        <Information />
                        <Install />
                        <FrameworkExample />
                        <Comparison />
                        <Conclusion />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing
