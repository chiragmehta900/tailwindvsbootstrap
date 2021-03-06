import React from 'react'
import TerminalDesign from './TerminalDesign'

const Install = () => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <h2 className='font-bold text-5xl capitalize pb-24'>Install package manager</h2>
            </div>
            <div>
                <h2 className='font-medium text-2xl capitalize mb-6'>Get started with Tailwind CSS</h2>
                <h2 className='font-medium text-lg capitalize mb-6'>Install Tailwind CSS</h2>
                <TerminalDesign>
                    <h2 className='mb-2'>npm install -D tailwindcss</h2>
                    <h2>npx tailwindcss init</h2>
                </TerminalDesign>
            </div>
            <div className='my-7'>
                <h2 className='font-medium text-lg capitalize py-10'>Install Tailwind CSS</h2>
                <TerminalDesign>
                    <h2>module.exports = {`{`}</h2>
                    <h2>content: ["./src/**/*.{`{html,js}`}"],</h2>
                    <h2>theme: {`{`}</h2>
                    <h2>extend: {`{}`}</h2>
                    <h2>&nbsp;&nbsp;{`}`}</h2>
                    <h2>&nbsp;plugins: [ ],</h2>
                    <h2>{`}`}</h2>
                </TerminalDesign>
            </div>
            <div className='my-7'>
                <h2 className='font-medium text-xl capitalize py-10'>Get started with get bootstrap</h2>
                <TerminalDesign>
                    <h2 className='mb-2'>npm install bootstrap@5.2.0-beta1</h2>
                    <h2>gem install bootstrap -v 5.2.0-beta1</h2>
                </TerminalDesign>
            </div>
        </div>
    )
}

export default Install