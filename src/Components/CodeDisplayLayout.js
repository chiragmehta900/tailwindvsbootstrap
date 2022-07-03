import React from 'react'
import Desktop from '../Images/CodeDisplayLayout/Desktop.svg'
import Left from '../Images/CodeDisplayLayout/Left.svg'
import Right from '../Images/CodeDisplayLayout/Right.svg'
import Secure from '../Images/CodeDisplayLayout/Secure.svg'
import Search from '../Images/CodeDisplayLayout/Search.svg'
import Refresh from '../Images/CodeDisplayLayout/Refresh.svg'
import Upload from '../Images/CodeDisplayLayout/Upload.svg'
import Add from '../Images/CodeDisplayLayout/Add.svg'
import Cards from '../Images/CodeDisplayLayout/Cards.svg'

const CodeDisplayLayout = ({children}) => {
    return (
        <div className='w-full'>
            <div className='bg-[#030012] p-2 flex justify-between select-none rounded-tr-md rounded-tl-md'>
                <div className='flex items-center'>
                    <div className='bg-[#F96057] h-3 w-3 rounded-full mr-3'></div>
                    <div className='bg-[#F8CE52] h-3 w-3 rounded-full mr-3'></div>
                    <div className='bg-[#5FCF65] h-3 w-3 rounded-full mr-3'></div>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 w-4 mr-4' src={Desktop} alt="Desktop" />
                    <img className='h-4 w-4 mr-3' src={Left} alt="Left" />
                    <img className='h-4 w-4' src={Right} alt="Right" />
                </div>
                <div className='flex items-center w-3/6'>
                    <img className='h-4 w-4 mr-5' src={Secure} alt="Secure" />
                    <div className='relative flex justify-center items-center p-1 bg-[#1C2533] rounded-md w-full'>
                        <div className='flex items-center opacity-70	'>
                            <img className='h-4 w-4 mr-2' src={Search} alt="Search" />
                            <p className='text-sm text-[#797979]'>https://tailwindcss.com/</p>
                        </div>
                        <div className='absolute right-1'>
                            <img className='h-4 w-4' src={Refresh} alt="Refresh" />
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 w-4 mr-3' src={Upload} alt="Upload" />
                    <img className='h-4 w-4 mr-3' src={Add} alt="Add" />
                    <img className='h-4 w-4' src={Cards} alt="Cards" />
                </div>
            </div>
            <div className='bg-[#1C2533] p-6 rounded-br-md rounded-bl-md overflow-hidden h-96 overflow-y-auto scrollbar-hide transition-all transform space-y-6'>
                {children}
            </div>
        </div>
    )
}

export default CodeDisplayLayout
