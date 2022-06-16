import React from 'react'

const TerminalDesign = ({ children }) => {
    return (
        <div className='my-5'>
            <div className='bg-[#151D29] h-7 w-full p-2 flex items-center rounded-tr-md rounded-tl-md'>
                <div className='flex'>
                    <div className='bg-[#F96057] h-3 w-3 rounded-full mr-3'></div>
                    <div className='bg-[#F8CE52] h-3 w-3 rounded-full mr-3'></div>
                    <div className='bg-[#5FCF65] h-3 w-3 rounded-full mr-3'></div>
                </div>
                <div className='w-full text-center'>
                    <p className='text-sm'>Command Prompt.exe</p>
                </div>
            </div>
            <div className='bg-[#1C2533] p-6 rounded-br-md rounded-bl-md'>
                {children}
            </div>
        </div>
    )
}

export default TerminalDesign