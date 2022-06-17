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

const CodeDisplayLayout = () => {
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
                <div className=''>
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex font-sans bg-white rounded-md mr-5">`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex-none w-44 relative">`} <br />
                    {`<`}<span className='text-[#E164A0]'>img </span>{`src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md" loading="lazy" />`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>form </span>{`className="flex-auto p-6">`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex flex-wrap">`} <br />
                    {`<`}<span className='text-[#E164A0]'>h1 </span>{`className="flex-auto text-lg font-semibold text-slate-900">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{`Classic Utility Jacket`} <br />
                    {`</`}<span className='text-[#E164A0]'>h1 </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="text-lg font-semibold text-slate-500">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{`$110.00`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-full flex-none text-sm font-medium text-slate-700 mt-2">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{`In stock`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="space-x-2 flex text-sm">`} <br />
                    {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`input className="sr-only peer" name="size" type="radio" value="xs" checked />`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                    {``}<span className='text-[#E164A0]'> </span>{`XS`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'></span>{`input className="sr-only peer" name="size" type="radio" value="s" />`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{` className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{`S`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'></span>{`input className="sr-only peer" name="size" type="radio" value="m" />`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{`M`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{` className="flex space-x-4 mb-6 text-sm font-medium">`} <br />
                    {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex-auto flex space-x-4">`} <br />
                    {`<`}<span className='text-[#E164A0]'>button </span>{` className="h-10 px-4 font-semibold rounded-md bg-black text-white" type="submit">`} <br />
                    {``}<span className='text-[#E164A0]'> </span>{`Buy now`} <br />
                    {`</`}<span className='text-[#E164A0]'>button </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>button </span>{`className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">`} <br />
                    {`<`}<span className='text-[#E164A0]'>svg </span>{`width="20" height="20" fill="currentColor" aria-hidden="true">`} <br />
                    {`<`}<span className='text-[#E164A0]'>path </span>{`fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />`} <br />
                    {`</`}<span className='text-[#E164A0]'>svg </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>button </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                    {`<`}<span className='text-[#E164A0]'>p </span>{`className="text-sm text-slate-700">`} <br />
                    {``}<span className='text-[#E164A0]'></span>{` Free shipping on all continental US orders.`} <br />
                    {`</`}<span className='text-[#E164A0]'>p </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>form </span>{`>`} <br />
                    {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                </div>
            </div>
        </div>
    )
}

export default CodeDisplayLayout
