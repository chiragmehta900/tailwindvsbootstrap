import React from 'react'
import tailwind_logo from '../Images/FrameworkExample/1.png'
import bootstrap_logo from '../Images/FrameworkExample/2.png'
import CodeDisplayLayout from './CodeDisplayLayout'
import DesignComponent1 from './DesignComponent1'

const FrameworkExample = () => {
    const [isTailwindComponemtView, setIsTailwindComponemtView] = React.useState(true)
    return (
        <div className='py-10'>
            <div className='my-10'>
                <h2 className='font-bold text-5xl capitalize mb-7'>An API for your design system.</h2>
                <p className='w-4/5 text-[#8493A8]'>Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</p>
            </div>
            <div className='flex mb-10'>
                <img className='mr-7 object-cover select-none cursor-pointer' src={tailwind_logo} alt="tailwind_logo" onClick={() => setIsTailwindComponemtView(true)} />
                <img className='object-cover select-none cursor-pointer' src={bootstrap_logo} alt="bootstrap_logo" onClick={() => setIsTailwindComponemtView(false)} />
            </div>
            {isTailwindComponemtView ? (
                <div className='flex'>
                    <DesignComponent1 />
                    <CodeDisplayLayout />
                </div>
            ) : (
                <div className='flex'>
                    bootstrap
                </div>
            )}
        </div>
    )
}

export default FrameworkExample